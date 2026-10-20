import { useState } from "react"

// Hook de validación completa del formulario

export function useContactForm() {

    // Actualizar los datos de contacto dinamicamente 
    // (mientras uno se llena, no se borra el siguiente al validar)
    const [formData, setFormData] = useState({nombre: "", email: "", mensaje: ""});

    // Setea los errores dinámicamente en cada apartado al subir el formulario
    const [errores, setErrores] = useState({});

    // Abre un Modal personalizado de Chakra UI para más coherencia entre los componentes
    const [mostrarDialog, setMostrarDialog] = useState(false);

    const handleChange = (event) => {

        // ...formData => Los cambios que hay actualmente
        // event => Parámetro que almacena el map que devuelve el navegador cuando se actualiza el textfield
        // .target => Buscando las propiedades que se validarán
        // .name / .value => El valor de esas propiedades (nombre: Juanito, email: juan@correo.com)
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const nuevosErrores = {};

        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜñÑ\s]+$/;
        const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validaciones
        if (
            !formData.nombre.trim() ||
            formData.nombre.trim().length < 3 ||
            !regexNombre.test(formData.nombre)
        ) nuevosErrores.nombre = "El nombre no es válido o debe tener más de 3 caracteres";

        if (
            !formData.email.trim() ||
            !regexCorreo.test(formData.email)
        ) nuevosErrores.email = "Ingrese un correo válido";

        if (
            !formData.mensaje.trim()
        ) nuevosErrores.mensaje = "El mensaje es obligatorio";

        // Setea los errores para que se pinte de rojo si hay algún error dentro del map
        setErrores(nuevosErrores);

        // Usamos Object para buscar las keys del diccionario y convertirlo en array
        if (Object.keys(nuevosErrores).length === 0) {
            setMostrarDialog(true);
            setFormData({nombre: "", email: "", mensaje: ""});
        }
    };

    return {
        formData,
        errores,
        handleChange,
        handleSubmit,
        mostrarDialog,
        setMostrarDialog
    };
}