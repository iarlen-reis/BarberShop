import React, { useState } from "react";

// Browser, Theme and Provider
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";

// Components
import Pagination from "./Pagination";

//Context
import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";

// Vitest And React Library
import { render, renderHook } from "@testing-library/react";
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
  const { result } = renderHook(() => useState(0));

  // Desestruturação do resultado
  const [, setCurrentPage] = result.current;

  return render(
    <BrowserRouter>
      <AuthContext.Provider value={mockAuthContextValue}>
        <ModalContext.Provider value={mockModalContextValue}>
          <ThemeProvider theme={Theme}>
            <Pagination
              currentPage={0}
              docs={20}
              setCurrentPage={setCurrentPage}
              docsPerPage={5}
            />
          </ThemeProvider>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>,
  );
};

describe("Pagination Component", () => {
  it("should render Pagination", () => {
    renderWithRouterThemeAndAuthentication();
  });

  it("should render page 1, 2, 3, 4", () => {
    const { getByText } = renderWithRouterThemeAndAuthentication();

    const page1 = getByText("1");
    const page2 = getByText("2");
    const page3 = getByText("3");
    const page4 = getByText("4");

    expect(page1).toBeInTheDocument();
    expect(page2).toBeInTheDocument();
    expect(page3).toBeInTheDocument();
    expect(page4).toBeInTheDocument();
  });
});
