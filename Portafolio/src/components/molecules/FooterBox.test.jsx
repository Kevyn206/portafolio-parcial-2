import { screen } from "@testing-library/react";
import { renderWithChakra } from "../utils/test-utils";
import FooterBox from "./FooterBox";

test("Debe renderizar la molécula Footer correctamente", () => {
    renderWithChakra(<FooterBox/>);

    // Agregamos un data-testid={} al Box del FooterBox para testear por ID de test
    expect(screen.getByTestId("site-footer")).toBeInTheDocument();
})