import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter  } from "react-router-dom";
import App from "./App";
import '@testing-library/jest-dom';

test("renders homepage when the path is '/'", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText("ISPTT")).toBeInTheDocument();
});

    test("renders Characteristic component when the path is '/Characteristic'", () => {
        render(
            <MemoryRouter initialEntries={["/Characteristic"]}>
                <App />
            </MemoryRouter>
        );

        
        expect(screen.getByText("ISPTT")).toBeInTheDocument();
    });

    test("renders GenerateTestcase component when the path is '/GenerateTestcase'", () => {
        render(
            <BrowserRouter initialEntries={["/GenerateTestcase"]}>
                <App />
            </BrowserRouter>
        );

        expect(screen.getByText("ISPTT")).toBeInTheDocument();
    });

    test("renders Defination component when the path is '/Defination'", () => {
        render(
            <BrowserRouter initialEntries={["/Defination"]}>
                <App />
            </BrowserRouter>
        );

        expect(screen.getByText("ISPTT")).toBeInTheDocument();
    });

    test("renders Introduction component when the path is '/Introduction'", () => {
        render(
            <BrowserRouter initialEntries={["/Introduction"]}>
                <App />
            </BrowserRouter>
        );

        expect(screen.getByText("ISPTT")).toBeInTheDocument();
    });

