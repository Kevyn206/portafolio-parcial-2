import { screen } from "@testing-library/react";
import { renderWithChakra } from "../components/utils/test-utils";
import ProjectsSection from "../components/organisms/ProjectsSection"

test("Debe renderizar la sección de Proyectos correctamente en el Home", () => {
    renderWithChakra(<ProjectsSection/>);

    // Agregamos un data-testid={} a TODOS los componentes de Chakra UI para testear de mejor manera
    expect(screen.getByTestId("projects")).toBeInTheDocument();
})