import { screen } from "@testing-library/react";
import { renderWithChakra } from "../components/utils/test-utils";
import StudiesSection from "../components/organisms/StudiesSection"

test("Debe renderizar la sección de Estudios correctamente en el Home", () => {
    renderWithChakra(<StudiesSection/>);

    // Agregamos un data-testid={} a TODOS los componentes de Chakra UI para testear de mejor manera
    expect(screen.getByTestId("studies")).toBeInTheDocument();
})