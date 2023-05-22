import React from "react";

// Browser, Theme and Provider
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";

// Components
import InfoTable from "./InfoTable";

//Context
import { deleteDocument } from "../../hooks/useDeleteDocument";
import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";

// Vitest And React Library
import { fireEvent, render } from "@testing-library/react";
import { expect, vi } from "vitest";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Mocks
import { mockAuthContextValue } from "../../__mocks__/UserMock";

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
      {
        id: 3,
        service: "Serviço 3",
        createdAt: "2023-05-16",
        scheduledDate: "2023-05-21",
        status: "finalizado",
      },
    ],
    loading: false,
  })),
}));

export const mockUseFetchDocument = vi.fn();
vi.mock("../../hooks/useFetchDocument", () => ({
  useFetchDocument: () => ({
    document: {},
    getDocument: mockUseFetchDocument,
  }),
}));

const mockModalContextValue = {
  isModalOpen: false,
  setModal: vi.fn(),
  filtered: "",
  setFiltered: vi.fn(),
  filter: false,
  setFilter: vi.fn(),
  modalDetails: false,
  setModalDetails: vi.fn(),
};

const renderWithRouterThemeAndAuthentication = () => {
  return render(
    <BrowserRouter>
      <AuthContext.Provider value={mockAuthContextValue}>
        <ModalContext.Provider value={mockModalContextValue}>
          <ThemeProvider theme={Theme}>
            <InfoTable />
          </ThemeProvider>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>,
  );
};

//
describe("InfoTable component", () => {
  it("should render InfoTable component", () => {
    renderWithRouterThemeAndAuthentication();
  });

  it("should display a pending service", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const servicePending = getByText("pendente");

    expect(servicePending).toBeInTheDocument();
  });

  it("should display a finished service", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const serviceCanceled = getByText("finalizado");

    expect(serviceCanceled).toBeInTheDocument();
  });

  it("should display a canceled service", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const serviceCanceled = getByText("cancelado");

    expect(serviceCanceled).toBeInTheDocument();
  });

  it("should delete a service pedding", () => {
    vi.mock("../../hooks/useDeleteDocument", () => ({
      deleteDocument: vi.fn(),
    }));

    const { getAllByTestId } = renderWithRouterThemeAndAuthentication();

    const deleteButton = getAllByTestId("buttonDelete");

    fireEvent.click(deleteButton[0]);

    expect(deleteDocument).toHaveBeenCalledWith(1);
  });

  it("should open Modal with the correct document ID", () => {
    const { getAllByTestId } = renderWithRouterThemeAndAuthentication();

    const buttonModal = getAllByTestId("buttonModal");

    fireEvent.click(buttonModal[0]);

    expect(mockUseFetchDocument).toBeCalledWith(1);
  });
});
