import React from "react";

// Browser, Theme and Provider
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";

// Components
import Modal from "./Modal";

//Context
import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";

// Vitest And React Library
import { fireEvent, render } from "@testing-library/react";
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

const renderWithRouterThemeAndAuthentication = () => {
  return render(
    <BrowserRouter>
      <AuthContext.Provider value={mockAuthContextValue}>
        <ModalContext.Provider value={mockModalContextValue}>
          <ThemeProvider theme={Theme}>
            <Modal />
          </ThemeProvider>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>,
  );
};

describe("Modal Component", () => {
  it("should render Modal component", () => {
    renderWithRouterThemeAndAuthentication();
  });

  it("should render the service selector", () => {
    const { getByText, getByTestId, debug } =
      renderWithRouterThemeAndAuthentication();

    const labelSelectorService = getByText("Serviço:");
    const SelectorService = getByTestId("selector");

    expect(labelSelectorService).toBeInTheDocument();
    expect(SelectorService).toBeInTheDocument();
  });

  it("should display the options when clicking on the selector", () => {
    const { getByText, getByTestId } = renderWithRouterThemeAndAuthentication();

    const labelSelectorService = getByText("Serviço:");
    const SelectorService = getByTestId("selector");

    expect(labelSelectorService).toBeInTheDocument();
    expect(SelectorService).toBeInTheDocument();

    const corte = getByText("Corte");
    const barba = getByText("Barba");
    const corteBarba = getByText("Corte + Barba");
    const peCabelo = getByText("Pé do cabelo");

    fireEvent.click(SelectorService);

    expect(corte).toBeInTheDocument();
    expect(barba).toBeInTheDocument();
    expect(corteBarba).toBeInTheDocument();
    expect(peCabelo).toBeInTheDocument();
  });

  it("should display the description input", () => {
    const { getByText, getByTestId } = renderWithRouterThemeAndAuthentication();

    const labelDescription = getByText("Descrição:");
    const inputDescription = getByTestId("description");

    expect(labelDescription).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
  });

  it("should display the service schedule entry", () => {
    const { getByTestId } = renderWithRouterThemeAndAuthentication();

    const inputSchedule = getByTestId("scheduledDate");

    expect(inputSchedule).toBeInTheDocument();
  });

  it("should display the clear input button", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const clearInputButton = getByText("Limpar");

    expect(clearInputButton).toBeInTheDocument();
  });

  it("should display the schedule service button", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const scheduleButton = getByText("Agendar");

    expect(scheduleButton).toBeInTheDocument();
  });

  it("should display the close modal button", () => {
    const { getByTestId } = renderWithRouterThemeAndAuthentication();

    const closeButton = getByTestId("closeButton");

    expect(closeButton).toBeInTheDocument();
  });
});
