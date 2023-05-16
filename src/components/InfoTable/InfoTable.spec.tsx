import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";

import { AuthContext } from "../../context/AuthContext";
import { mockAuthContextValue } from "../../__mocks__/UserMock";

import InfoTable from "./InfoTable";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { expect, vi } from "vitest";
import { deleteDocument } from "../../hooks/useDeleteDocument";

vi.mock("../../hooks/useFetchDocuments", () => ({
  getUserDocuments: vi.fn(() => ({
    schedules: [
      {
        id: 1,
        service: "Serviço 1",
        createdAt: "2023-05-15",
        scheduledDate: "2023-05-20",
        status: "pendente",
      },
      {
        id: 2,
        service: "Serviço 2",
        createdAt: "2023-05-16",
        scheduledDate: "2023-05-21",
        status: "cancelado",
      },
    ],
    loading: false,
  })),
}));

const mockDeleteDocument = vi.fn();
vi.mock("../../hooks/useDeleteDocument", () => ({
  deleteDocument: mockDeleteDocument,
}));

describe("Render InfoTable component", () => {
  it("should render InfoTable component", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContextValue}>
          <ThemeProvider theme={Theme}>
            <InfoTable />
          </ThemeProvider>
        </AuthContext.Provider>
      </BrowserRouter>,
    );
  });

  it("should display a pending service", () => {
    const { getByText } = render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContextValue}>
          <ThemeProvider theme={Theme}>
            <InfoTable />
          </ThemeProvider>
        </AuthContext.Provider>
      </BrowserRouter>,
    );

    const servicePending = getByText("pendente");

    expect(servicePending).toBeInTheDocument();
  });

  it("should display a canceled service", () => {
    const { getByText } = render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContextValue}>
          <ThemeProvider theme={Theme}>
            <InfoTable />
          </ThemeProvider>
        </AuthContext.Provider>
      </BrowserRouter>,
    );

    const serviceCanceled = getByText("cancelado");

    expect(serviceCanceled).toBeInTheDocument();
  });

  it("should delete a service pedding", () => {
    vi.mock("../../hooks/useDeleteDocument", () => ({
      deleteDocument: vi.fn(),
    }));

    const { getAllByTestId } = render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContextValue}>
          <ThemeProvider theme={Theme}>
            <InfoTable />
          </ThemeProvider>
        </AuthContext.Provider>
      </BrowserRouter>,
    );
    const deleteButton = getAllByTestId("buttonDelete");

    fireEvent.click(deleteButton[0]);

    expect(deleteDocument).toHaveBeenCalledWith(1);
  });
});
