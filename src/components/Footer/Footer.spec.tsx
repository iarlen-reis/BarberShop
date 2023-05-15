import React from "react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/theme/theme";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Footer Component", () => {
  it("should render component Footer", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>,
    );
  });

  it("should render github link in Footer", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const gitHubButton = getByText("GitHub");

    expect(gitHubButton).toBeInTheDocument();
  });

  it("should render the link to the /about page in Footer", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const aboutLink = getByText("Sobre");

    expect(aboutLink).toBeInTheDocument();
  });

  it("should render link to vexels in Footer", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const vexelsLink = getByText("br.vexels.com");

    expect(vexelsLink).toBeInTheDocument();
  });

  it("should render link to Firebase in Footer", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const firebaseLink = getByText("Firebase");

    expect(firebaseLink).toBeInTheDocument();
  });

  it("should render link to github of developer in Footer", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const githubDeveloperLink = getByText("By");

    expect(githubDeveloperLink).toBeInTheDocument();
  });

  it("should go to /about page when clicking about link", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const AboutLink = getByText("Sobre");

    fireEvent.click(AboutLink);

    expect(window.location.pathname).toBe("/about");
  });
});
