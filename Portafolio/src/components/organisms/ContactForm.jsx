import { Box, Button, Collapsible, VStack } from "@chakra-ui/react";
import FieldBox from "./FieldBox";

export default function ContactForm() {

    return (
        <Collapsible.Root unmountOnExit>
            <VStack my={"8"} gap={"4"} width={"100%"}>
                {/* asChild llevará las funcionalidades y estilos a Button (componente hijo) */}
                <Collapsible.Trigger asChild> 
                    {/* BOTÓN PARA ABRIR FORMULARIO */}
                    <Button 
                    colorPalette="blue" 
                    size="md" 
                    px={"2"}
                    >
                        Abrir / Ocultar Formulario
                    </Button>
                </Collapsible.Trigger>

                <Collapsible.Content width={"100%"} maxW={"lg"}>
                    <Box 
                    p="6"
                    borderWidth={"1px"} 
                    borderColor={"gray.700"}
                    borderRadius={"xl"}
                    bg={"gray.900"}
                    >
                        {/* FORMULARIO COMPLETO */}
                        <FieldBox/>
                    </Box>
                </Collapsible.Content>

            </VStack>
        </Collapsible.Root>
    )
}