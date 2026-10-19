import { render } from '@testing-library/react';
import { Provider } from "../../components/ui/provider";

// Se crea un mock para simular la función window.matchMedia
Object.defineProperty(window, 'matchMedia', {

  // Si algún test de Chakra (prácticamente todos) necesitaría usar la función, 
  // hacemos que la pueda sobreescribir con writable: true
  writable: true,
  value: (query) => ({
    matches: false, // Evita que Chakra aplique temas reales durante el test
    media: query, // Se le pasa el mismo string que Chakra quiere evaluar para que no este vacío
    onchange: null,
    addListener: () => {}, // Métodos obsoletos pero requeridos por compatibilidad
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

export const renderWithChakra = (ui) => {
  return render(
    <Provider>
      {ui}
    </Provider>
  );
};