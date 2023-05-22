import React from "react";

// Browser, Theme and Provider
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";

// Components
import Filter from "./Filter";

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

const renderWithRouterThemeAndAuthentication = () => {
  return render(
    <BrowserRouter>
      <AuthContext.Provider value={mockAuthContextValue}>
        <ModalContext.Provider value={mockModalContextValue}>
          <ThemeProvider theme={Theme}>
            <Filter isVisible={true} />
          </ThemeProvider>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>,
  );
};

describe("Filter component", () => {
  it("should display the Filter component", () => {
    renderWithRouterThemeAndAuthentication();
  });

  it("should display the pending filter", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const peddingFilter = getByText("Pendentes");

    expect(peddingFilter).toBeInTheDocument();
  });

  it("should display cancel filter", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const cancelFilter = getByText("Cancelados");

    expect(cancelFilter).toBeInTheDocument();
  });

  it("should display finished filter", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const finishedFilter = getByText("Finalizados");

    expect(finishedFilter).toBeInTheDocument();
  });
});
