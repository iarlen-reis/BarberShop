import React from "react";

// Browser, Theme and Provider
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";

// Components
import ServiceDetails from "./ServiceDetails";

//Context
import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";

// Vitest And React Library
import { render } from "@testing-library/react";
import { expect, vi } from "vitest";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Mocks
import { mockAuthContextValue } from "../../__mocks__/UserMock";

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

const documentMock = {
  service: "Service 1",
  description: "A Description",
  scheduledDate: "20/05/23, 11:00",
  createdAt: "20/05/23, 10:00",
  status: "Pendente",
  id: "1",
};

const renderWithRouterThemeAndAuthentication = () => {
  return render(
    <BrowserRouter>
      <AuthContext.Provider value={mockAuthContextValue}>
        <ModalContext.Provider value={mockModalContextValue}>
          <ThemeProvider theme={Theme}>
            <ServiceDetails document={documentMock} />
          </ThemeProvider>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>,
  );
};

describe("ServiceDetails Component", () => {
  it("should render the ServiceDetails component", () => {
    renderWithRouterThemeAndAuthentication();
  });

  it("should display the title of the service", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const titleService = getByText("Service 1");

    expect(titleService).toBeInTheDocument();
  });

  it("should display the description of the service", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const descriptionService = getByText("- A Description");

    expect(descriptionService).toBeInTheDocument();
  });

  it("should display the service scheduling date", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const schedulingService = getByText("- 20/05/23, 11:00");

    expect(schedulingService).toBeInTheDocument();
  });

  it("should display the creation date of the service", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const createAtService = getByText("- 20/05/23, 10:00");

    expect(createAtService).toBeInTheDocument();
  });

  it("should display the status of the service", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const statusService = getByText("- Pendente");

    expect(statusService).toBeInTheDocument();
  });

  it("should display delete service button", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const deleteButtonService = getByText("Deletar");

    expect(deleteButtonService).toBeInTheDocument();
  });
});
