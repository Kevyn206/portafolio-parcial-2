import { screen } from "@testing-library/react";
import { renderWithChakra } from "../utils/test-utils";
import WorkExperienceSection from "./WorkExperienceSection"

test("Debe renderizar la sección de Experiencia Laboral correctamente en el Home", () => {
    renderWithChakra(<WorkExperienceSection/>);

    // Agregamos un data-testid={} a TODOS los componentes de Chakra UI para testear de mejor manera
    expect(screen.getByTestId("work-experience")).toBeInTheDocument();
})