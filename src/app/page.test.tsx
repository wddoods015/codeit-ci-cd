import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("page", () => {
    it("renders the page", () => {
        render(<Home />);
        expect(screen.getByText("Get started by editing")).toBeInTheDocument();
    });
});
