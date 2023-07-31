import Home from "../pages/home";
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Home page content", () => {
  // This test is run to make sure the home page component renders successfully
  test("Home page component loads successfully", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("THE FUTURE OF GAMING IS HERE!");
    expect(headingElement).toBeInTheDocument();

    const shopNowButton = screen.getByText("SHOP NOW!");
    expect(shopNowButton).toBeInTheDocument();
  });
});

// test("Shop now button goes to products page", async () => {
//     const { getByText } = render(<Home />);
//     const shopNowButton = getByText("SHOP NOW!");

//     expect(shopNowButton).toBeInTheDocument();

//     expect(window.location.pathname).toBe("/products");
//     fireEvent.click(shopNowButton);

//     await waitFor(() => {
//         expect(window.location.pathname).toBe("/products");
//     });

// });
