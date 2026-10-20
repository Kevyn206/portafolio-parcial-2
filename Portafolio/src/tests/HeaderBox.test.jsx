import { screen } from "@testing-library/react";
import { renderWithChakra } from "../components/utils/test-utils"
import HeaderBox from "../components/organisms/HeaderBox"

test("Debe renderizar el Header correctamente", () => {
    renderWithChakra(<HeaderBox/>);

    expect(screen.getByRole("heading")).toBeInTheDocument();
})