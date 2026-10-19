import { useState } from "react"

export function useContactForm() {

    // Actualizar los datos de contacto dinamicamente 
    // (mientras uno se llena, no se borra el siguiente al validar)
    const [formData, setFormData] = useState({nombre: "", email: "", mensaje: ""});

    // Actualiza los errores en cada apartado
    const [errores, setErrores] = useState({});

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

        // Validaciones
        if (!formData.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
        if (!formData.email.includes("@")) nuevosErrores.email = "Ingresa un correo válido";
        if (!formData.mensaje.trim()) nuevosErrores.mensaje = "El mensaje es obligatorio";

        // Setea los errores dinámicamente como un estado unificado
        setErrores(nuevosErrores);

        // Usamos Object para buscar las keys del diccionario y convertirlo en array
        if (Object.keys(nuevosErrores).length === 0) {
            alert("¡Mensaje enviado con éxito!");
            setFormData({nombre: "", email: "", mensaje: ""});
        }
    };

    return {
        formData,
        errores,
        handleChange,
        handleSubmit
    };
}