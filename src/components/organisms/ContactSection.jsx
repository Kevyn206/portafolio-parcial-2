import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ContactForm from "../molecules/ContactForm";

export default function Contact() {

  return (
    <Box as={"section"} data-testid={"contact"}>
      <VStack gap={"3"} textAlign={"center"}>
        <Heading size={"3xl"} mb={"4"}>¿Quieres hablar conmigo?</Heading>
        <Text fontSize={"md"} color={"gray.300"} mb={"3"}>¡Mándame un mensaje o contáctame directamente por mis redes sociales!</Text>
        
        {/* BOTONES REDES SOCIALES */}
        <HStack gap={"4"} justify={"center"}>
          <Button
          as={"a"}
          href="https://www.linkedin.com/in/kevyn-vizcaya-348038445/?isSelfProfile=true"
          target={"_blank"}
          rel="noopener noreferrer"
          colorPalette={"cyan"}
          variant={"solid"}
          size={"sm"}
          px={"2"}
          >
            LinkedIn
          </Button>

          <Button
          as={"a"}
          href="https://github.com/Kevyn206"
          target={"_blank"}
          rel="noopener noreferrer"
          colorPalette={"teal"}
          variant={"solid"}
          size={"sm"}
          px={"2"}
          >
            GitHub
          </Button>
        </HStack>
      </VStack>

      {/* FORMULARIO CON BOTÓN Y ANIMACIÓN INCLUIDA */}
      <ContactForm/>

    </Box>
  )
}