import { screen } from "@testing-library/react";
import { renderWithChakra } from "../utils/test-utils"
import HeaderBox from "./HeaderBox"

test("Debe renderizar el Header correctamente", () => {
    renderWithChakra(<HeaderBox/>);

    expect(screen.getByRole("heading")).toBeInTheDocument();
})