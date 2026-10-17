// import './App.css'
import { Box, Container, Flex, Heading, Separator, Text, VStack } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider"

function App() {

  return (
    /* Provider es necesario para que funcione Chakra */
    <Provider>
      {/* HEADER */}
      <Box bg="blue.solid" p="5" pt={"10"} color="white">
        <Heading as={"h1"} size={"4xl"}>Portafolio Interactivo</Heading>
      </Box>

      {/* Container mantiene toda la página en un solo lugar */}
      <Container maxW={{base: "sm", md: "xl", lg: "3xl", xl: "7xl"}} mx={"auto"} p={"5"} color="gray.600">
        {/* VStack agrupa las secciones de forma vertical */}
        <VStack align={"stretch"} gap={"6"}>

          {/* SOBRE MÍ */}
          <Flex direction={"column"} align={"center"}>
            {/* Debería ir la imagen aquí arriba del todo el texto y todo centrado*/}
            <Heading as={"h2"} size={"2xl"}>Hola, soy Kevyn Vizcaya</Heading>
            <Text fontSize={"lg"} mt={"2"} textAlign={"center"}>
              Soy Desarrollador de Software, y me especializo en el despliegue de aplicaciones Web y Móviles (Android).
            </Text> 
            {/* mt: márgen superior */}
          </Flex>

          <Separator/>

          {/* EXPERIENCIA LABORAL */}
          <Box as={"section"}>
            <Heading size={"xl"} mb={"4"}>Experiencia Laboral (FICTICIA)</Heading>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} m={"2"}>
              <Heading size={"md"}>Desarrollador Junior Mobile - Empresa X</Heading>
              <Text fontSize={"sm"} color="gray.500">Agosto 2021 - Enero 2023</Text>
              <Text fontSize={"sm"} my={"2"}>Diseño de pantallas nativas en Jetpack Compose</Text>
            </Box>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} m={"2"}>
              <Heading size={"md"}>Desarrollador Junior - Empresa Y</Heading>
              <Text fontSize={"sm"} color="gray.500">Marzo 2023 - Presente</Text>
              <Text fontSize={"sm"} my={"2"}>Desarrollo de módulos en React y mantenimiento de interfaces.</Text>
            </Box>
          </Box>

          <Separator/>

          {/* ESTUDIOS */}
          <Box as={"section"}>
            <Heading size={"xl"} mb={"4"}>Formación Académica</Heading>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} m={"2"}>
              <Heading size={"md"}>Colegio Bicentenario Técnico Profesional “República Argentina”</Heading>
              <Text fontSize={"sm"} color="gray.500">Santiago, Región Metropolitana</Text>
              <Text fontSize={"sm"} my={"2"} fontWeight={"bold"}>1ro Medio</Text>
            </Box>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} m={"2"}>
              <Heading size={"md"}>Liceo “Alberto Hurtado Cruchaga” Santiago, Región Metropolitana. </Heading>
              <Text fontSize={"sm"} color="gray.500">Santiago, Región Metropolitana</Text>
              <Text fontSize={"sm"} my={"2"} fontWeight={"bold"}>De 2do a 4to Medio</Text>
            </Box>
          </Box>
        </VStack>
      </Container>

    </Provider>
  )
}

export default App;