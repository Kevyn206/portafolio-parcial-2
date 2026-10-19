import { Button, VStack } from "@chakra-ui/react";
import { useContactForm } from "../hooks/UseContactForm";
import TextField from "../molecules/TextField";

export default function FieldBox() {

    const {
        formData,
        errores,
        handleChange,
        handleSubmit
    } = useContactForm(); // Desde aquí se enviarán los datos para validar

    return (
        <VStack 
        as={"form"} 
        gap={"4"} 
        // Al enviar hndleSubmit validará los campos
        onSubmit={handleSubmit} noValidate>

            <TextField
            label={"Nombre Completo"}
            name={"nombre"}
            value={formData.nombre}
            onChange={handleChange}
            placeholder={"Ej: Juan Perez"}
            error={errores.nombre} // <= Errores irá como nombre: "mensaje de error"
            />

            <TextField
            label={"Correo Electrónico"}
            type={"email"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            placeholder={"Ej: juan.perez@correo.com"}
            error={errores.email}
            />

            {/* CAMPO MENSAJE */}
            <TextField
            label={"Mensaje"}
            name={"mensaje"}
            value={formData.mensaje}
            onChange={handleChange}
            placeholder={"Escribe tu consulta aquí..."}
            error={errores.mensaje}
            isTextarea // <= Devolverá true por sí misma
            rows={"4"}
            />

            {/* BOTÓN DE ENVIAR */}
            <Button type="submit" colorPalette={"blue"} width={"50%"} mt={"2"}>
            Enviar Mensaje
            </Button>
        </VStack>
    )
}