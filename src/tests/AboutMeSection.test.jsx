import { screen } from "@testing-library/react";
import { renderWithChakra } from "../components/utils/test-utils";
import AboutMeSection from "../components/organisms/AboutMeSection"

test("Debe renderizar la sección Sobre Mí correctamente en el Home", () => {
    renderWithChakra(<AboutMeSection/>);

    // Agregamos un data-testid={} a TODOS los componentes de Chakra UI para testear de mejor manera
    expect(screen.getByTestId("about-me")).toBeInTheDocument();
})