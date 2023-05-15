import React from "react";
import Header from "./Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// AuthContext and Mock of a user
import { AuthContext } from "../../context/AuthContext";
import { mockAuthContextValue } from "../../__mocks__/UserMock";

describe("Component Header", () => {
  it("should render component Header", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );
  });

  it("should display in the url /about when clicking on the about icon", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const aboutIcon = screen.getByTestId("about");

    fireEvent.click(aboutIcon);

    expect(window.location.pathname).toBe("/about");
  });

  it("should display the /login url when clicking on the logo.", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const aboutIcon = screen.getByTestId("about");

    fireEvent.click(aboutIcon);

    const LogoIcon = screen.getByTestId("logo");

    fireEvent.click(LogoIcon);

    expect(window.location.pathname).toBe("/login");
  });

  it("should not display the logout button.", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const buttonLogout = screen.queryByTestId("buttonLogout");

    expect(buttonLogout).not.toBeInTheDocument();
  });

  it("should not display the profile button.", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const buttonProfile = screen.queryByTestId("buttonProfile");

    expect(buttonProfile).not.toBeInTheDocument();
  });

  it("should render profile button", () => {
    render(
      <AuthContext.Provider value={mockAuthContextValue}>
        <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>
      </AuthContext.Provider>,
    );

    const buttonProfile = screen.getByTestId("buttonProfile");

    expect(buttonProfile).toBeInTheDocument();
  });
});
