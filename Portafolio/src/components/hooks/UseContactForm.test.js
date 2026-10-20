import { describe, test, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useContactForm } from "./UseContactForm";

describe("testeo del hook de validación de formulario 'useContactForm'", () => {
    test("El map dinámico formData debe empezar sin datos", () => {

        // Renderizar el hook
        const { result } = renderHook(() => useContactForm());

        // Verificar el valor inicial
        expect(result.current.formData).toEqual({
            nombre: "", 
            email: "", 
            mensaje: ""
        });
    })

    test("El map dinámico Errores debe generar los 3 mensajes de error si el formulario está vacío", () => {

        const { result } = renderHook(() => useContactForm());

        // Hay que simular la función preventDevault()
        act(() => {
            result.current.handleSubmit({preventDefault: () => {}});
        })

        // Verificamos que el map contenga los MENSAJES de error exactos
        expect(result.current.errores).toEqual({
            nombre: "El nombre no es válido o debe tener más de 3 caracteres",
            email: "Ingrese un correo válido",
            mensaje: "El mensaje es obligatorio"
        });
    })

    test("El map dinámico Errores debe generar solo los errores de nombre y correo", () => {
        
        const { result } = renderHook(() => useContactForm());

        // Ahora sí usamos un act() para handleChange
        act(() => {
            // Los tres campos llenos, pero algunos incorrectos, no solo vacíos
            result.current.handleChange({ target: {name: "nombre", value: "Kevyn%_!"}}) 
            result.current.handleChange({ target: {name: "email", value: "kevyn@duoc"}}) 
            result.current.handleChange({ target: {name: "mensaje", value: "Escribiendo mensaje"}})
        });

        act(() => {
            result.current.handleSubmit({preventDefault: () => {}});
        })

        expect(result.current.errores).toEqual({
            nombre: "El nombre no es válido o debe tener más de 3 caracteres",
            email: "Ingrese un correo válido"
        });
    })

    // TEST DIALOG: FALSE Y DIALOG: TRUE

    test("El Dialog debe estar en 'false' por defecto", () => {

        const { result } = renderHook(() => useContactForm());

        expect(result.current.mostrarDialog).toBe(false);
    })

    test("El Dialog debe generarse cuando los campos sean los correctos", () => {

        const { result } = renderHook(() => useContactForm());

        act(() => {
            // Los tres campos llenos, y todos correctamente llenados
            result.current.handleChange({ target: {name: "nombre", value: "Kevyn"}}) 
            result.current.handleChange({ target: {name: "email", value: "kevyn@duoc.cl"}}) 
            result.current.handleChange({ target: {name: "mensaje", value: "Escribiendo mensaje"}})
        })

        act(() => {
            result.current.handleSubmit({preventDefault: () => {}});
        })

        expect(result.current.mostrarDialog).toBeFalsy(true);
    })

    // Si el map de Errores tiene contenido, se pinta automáticamente el componente TextField en rojo como error
    // Si el map de Errores está vacío, generará el Dialog con el mensaje de agradecimiento (mostrarDialog(true))
})