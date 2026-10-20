import { screen } from "@testing-library/react";
import { renderWithChakra } from "../components/utils/test-utils";
import ContactSection from "../components/organisms/ContactSection"

test("Debe renderizar la sección de Contacto correctamente en el Home", () => {
    renderWithChakra(<ContactSection/>);

    // Agregamos un data-testid={} a TODOS los componentes de Chakra UI para testear de mejor manera
    expect(screen.getByTestId("contact")).toBeInTheDocument();
})