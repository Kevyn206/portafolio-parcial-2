import { Button, CloseButton, Dialog, Portal, Text, VStack } from "@chakra-ui/react";
import { useContactForm } from "../../hooks/UseContactForm";
import TextField from "./TextField";

export default function FieldBox() {

    const {
        formData,
        errores,
        handleChange,
        handleSubmit,
        mostrarDialog,
        setMostrarDialog
    } = useContactForm(); // Desde aquí se enviarán los datos para validar

    return (
        <VStack 
        as={"form"} 
        gap={"4"} 
        // Al enviar hndleSubmit validará los campos
        onSubmit={handleSubmit} noValidate>

            {/* CAMPO NOMBRE */}
            <TextField
            label={"Nombre Completo"}
            name={"nombre"}
            value={formData.nombre}
            onChange={handleChange}
            placeholder={"Ej: Juan Perez"}
            error={errores.nombre} // <= Errores irá como {nombre: "mensaje de error"}
            />

            {/* CAMPO EMAIL */}
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

            {/* Alert personalizado si no hay errores */}
            <Dialog.Root 
            open={mostrarDialog}               // Primero, open será false (por el estado predeterminado de useContactForm)
            onOpenChange={(event) => setMostrarDialog(event.open)}  // Luego event cambia a true con setMostrarDialog
            placement={"top"}
            motionPreset={"scale"}
            size={{mdDown: "xs", sm: "md"}}
            >
                <Portal>
                    <Dialog.Backdrop/>
                    <Dialog.Positioner>
                        <Dialog.Content mt={"16"} px={"6"} py={"4"}>

                            <Dialog.Header>
                                <Dialog.Title py={"2"}>¡Mensaje enviado con éxito!</Dialog.Title>
                            </Dialog.Header>

                            <Dialog.Body>
                                <Text color={"gray.400"} pt={"4"} pb={"8"}>
                                    Gracias por contactarte. Me pondré en contacto contigo lo antes posible.
                                </Text>
                            </Dialog.Body>

                            <Dialog.Footer justifyContent="end">
                                <Button 
                                type="button"
                                colorPalette="blue" 
                                onClick={() => setMostrarDialog(false)}
                                size={"sm"}
                                p={"4"}
                                >
                                    Entendido
                                </Button>
                            </Dialog.Footer>

                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>

                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </VStack>
    )
}