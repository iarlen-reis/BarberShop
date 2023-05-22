import React from "react";

// Browser, Theme and Provider
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";

// Components
import ErrorForm from "./ErrorForm";

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

const messageMock = "Error message.";

const renderWithRouterThemeAndAuthentication = () => {
  return render(
    <BrowserRouter>
      <AuthContext.Provider value={mockAuthContextValue}>
        <ModalContext.Provider value={mockModalContextValue}>
          <ThemeProvider theme={Theme}>
            <ErrorForm message={messageMock} />
          </ThemeProvider>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>,
  );
};

describe("ErrorForm component", () => {
  it("should display the form error component", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const errorMessage = getByText("Error message.");

    expect(errorMessage).toBeInTheDocument();
  });
});
