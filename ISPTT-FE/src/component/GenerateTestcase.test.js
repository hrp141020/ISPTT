
const { JSDOM } = require('jsdom');
const dom = new JSDOM();
global.MutationObserver = dom.window.MutationObserver;

import { render } from "@testing-library/react";
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Router } from "react-router-dom";
import GenerateTestcase from "./GenerateTestcase";
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { waitFor } from '@testing-library/react';


let container = null;

beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // Clean up on exiting
    unmountComponentAtNode(container);
    container.remove();
});

it("renders without crashing", () => {
    // Mock the location state with sample data
    const history = createMemoryHistory();
    history.push("/GenerateTestcase", []);
    render(
        <Router history={history}>
            <GenerateTestcase />
        </Router>
    );

});


// Test case: "loads data correctly from API"
it("loads data correctly from API", async () => {
    // Mock the API call
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve({ data: "mocked data" }),
        })
    );

    // Render the component
    const history = createMemoryHistory();
    history.push("/GenerateTestcase", []);
    await act(async () => {
        render(
            <Router history={history}>
                <GenerateTestcase />
            </Router>,
            container
        );
    });

   await waitFor(() => {
  expect(container.textContent).toContain("mocked data");
});

    // Clean up
    global.fetch.mockRestore();
});

// Test case: "updates state based on user input"
it("updates state based on user input", () => {
    // Render the component
    const history = createMemoryHistory();
    history.push("/GenerateTestcase", []);
    act(() => {
        render(
            <Router history={history}>
                <GenerateTestcase />
            </Router>,
            container
        );
    });

    // Simulate user input
    const input = container.querySelector("input");
    fireEvent.change(input, { target: { value: 'test input' } });

    // Check if the state is updated correctly
    expect(input.value).toBe('test input');
});