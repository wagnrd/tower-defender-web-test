import React, { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
    it("should render", async () => {
        window.matchMedia = (_: string): any => {
            return {
                matches: false,
            };
        };
        const { findByTestId } = render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>,
        );

        const element = waitFor(async () => findByTestId("app"));

        await expect(element).resolves.toBeInTheDocument();
    });
});