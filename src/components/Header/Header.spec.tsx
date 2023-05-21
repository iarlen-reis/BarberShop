import React from "react";
import Header from "./Header";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// AuthContext and Mock of a user
import { AuthContext } from "../../context/AuthContext";
import { mockAuthContextValue } from "../../__mocks__/UserMock";

const renderWithRouterAndTheme = () => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Header />
      </ThemeProvider>
    </BrowserRouter>,
  );
};

const renderWithRouterThemeAndAuthetication = () => {
  return render(
    <AuthContext.Provider value={mockAuthContextValue}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>
    </AuthContext.Provider>,
  );
};

describe("Component Header", () => {
  it("should render component Header", () => {
    renderWithRouterAndTheme();
  });

  it("should display in the url /about when clicking on the about icon", () => {
    const { getByTestId } = renderWithRouterAndTheme();

    const aboutIcon = getByTestId("about");

    fireEvent.click(aboutIcon);

    expect(window.location.pathname).toBe("/about");
  });

  it("should display the /login url when clicking on the logo.", () => {
    const { getByTestId } = renderWithRouterAndTheme();

    const aboutIcon = getByTestId("about");

    fireEvent.click(aboutIcon);

    const LogoIcon = getByTestId("logo");

    fireEvent.click(LogoIcon);

    expect(window.location.pathname).toBe("/login");
  });

  it("should not display the logout button.", () => {
    const { queryByTestId } = renderWithRouterAndTheme();

    const buttonLogout = queryByTestId("buttonLogout");

    expect(buttonLogout).not.toBeInTheDocument();
  });

  it("should not display the profile button.", () => {
    const { queryByTestId } = renderWithRouterAndTheme();

    const buttonProfile = queryByTestId("buttonProfile");

    expect(buttonProfile).not.toBeInTheDocument();
  });

  it("should render profile button", () => {
    const { getByTestId } = renderWithRouterThemeAndAuthetication();

    const buttonProfile = getByTestId("buttonProfile");

    expect(buttonProfile).toBeInTheDocument();
  });

  it("should render logout button", () => {
    const { getByTestId } = renderWithRouterThemeAndAuthetication();

    const logoutButton = getByTestId("buttonLogout");

    expect(logoutButton).toBeInTheDocument();
  });
});
