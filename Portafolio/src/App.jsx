// import './App.css'
import { Badge, Box, Button, Container, Flex, Heading, HStack, Image, Separator, SimpleGrid, Text, VStack, } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider"
import PETs from "./assets/PETs.png"
import GAMEZONE from "./assets/GAMEZONE.png"
import TecnoFit from "./assets/TecnoFit.png"
import Portfolio from "./assets/PortafolioInteractivo.png"

const proyectos = [
  {
    imagen: PETs,
    id: 1,
    titulo: "PETs.com",
    descripcion: "Sitio Web construido con carrito de compras para una tienda de mascotas y más servicios",
    repo: "https://github.com/Kevyn206/Proyecto-Pets",
    tecnologia: "HTML, CSS y JavaScript"
  },
  {
    imagen: GAMEZONE,
    titulo: "GAMEZONE",
    descripcion: "Inicio de sesión con diseño responsivo para la empresa GAMEZONE",
    repo: "https://github.com/sebahenry17-arch/Henry-Vizcaya-Caso-3",
    tecnologia: "HTML, CSS y JavaScript"
  },
  {
    imagen: TecnoFit,
    titulo: "TecnoFit",
    descripcion: "Registro con validación en JS para ingresar datos personales y componentes deportivos",
    repo: "https://github.com/sebahenry17-arch/TecnoFit-Store",
    tecnologia: "HTML, CSS y JavaScript"
  },
  {
    imagen: Portfolio,
    titulo: "Portafolio Interactivo",
    descripcion: "Información profesional y académica sobre mí, proyectos y formulario de contacto usando Chakra UI",
    repo: "https://github.com/Kevyn206/portafolio-parcial-2",
    tecnologia: "React con Vite"
  }
]


function App() {

  return (
    /* Provider es necesario para que funcione Chakra */
    <Provider>
      {/* HEADER */}
      <Box 
      bg="blue.solid" 
      p="5" 
      pt={"10"} 
      color="white" 
      borderBottomWidth={"2px"} 
      borderColor={"blue.border"}
      >
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

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} mx={"2"} my={"4"}>
              <Heading size={"md"}>Desarrollador Junior Mobile - Empresa X</Heading>
              <Text fontSize={"sm"} color="gray.500">Diciembre 2027 - Enero 2029</Text>
              <Text fontSize={"sm"} my={"2"}>Diseño de pantallas nativas en Jetpack Compose</Text>
            </Box>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} mx={"2"} my={"4"}>
              <Heading size={"md"}>Desarrollador Junior - Freelance</Heading>
              <Text fontSize={"sm"} color="gray.500">Marzo 2029 - Presente</Text>
              <Text fontSize={"sm"} my={"2"}>Desarrollo de aplicaciones Web y Android a pequeñas y medianas empresas</Text>
            </Box>
          </Box>

          <Separator/>

          {/* ESTUDIOS */}
          <Box as={"section"}>
            <Heading size={"xl"} mb={"4"}>Formación Académica</Heading>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} mx={"2"} my={"4"}>
              <Heading size={"md"}>Colegio Bicentenario Técnico Profesional “República Argentina”</Heading>
              <Text fontSize={"sm"} color="gray.500">Santiago, Región Metropolitana</Text>
              <Text fontSize={"sm"} my={"2"} fontWeight={"bold"}>1ro Medio</Text>
            </Box>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} mx={"2"} my={"4"}>
              <Heading size={"md"}>Liceo “Alberto Hurtado Cruchaga”</Heading>
              <Text fontSize={"sm"} color="gray.500">Padre Hurtado, Región Metropolitana</Text>
              <Text fontSize={"sm"} my={"2"} fontWeight={"bold"}>De 2do a 4to Medio</Text>
              <Text fontSize={"sm"} fontWeight={"bold"}>Título obtenido: Licencia de Enseñanza Media. Diciembre 2024</Text>
            </Box>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} mx={"2"} my={"4"}>
              <Heading size={"md"}>Instituto Profesional "Duoc UC"</Heading>
              <Text fontSize={"sm"} color="gray.500">Maipú, Región Metropolitana</Text>
              <Text fontSize={"sm"} my={"2"} fontWeight={"bold"}>Título obtenido: Analista Programador. Agosto 2027</Text>
            </Box>
          </Box>

          <Separator/>

          {/* PROYECTOS */}
          <Box as={"section"}>
            <Heading size={"xl"} mb={"4"}>Desarrollos y Proyectos</Heading>

            <SimpleGrid columns={{base: 1, md: 2}} gap={"6"} p={"2"}>
              {proyectos.map((proyecto) => (
                <Box 
                key={proyecto.id}
                borderRadius={"lg"}
                borderWidth={"1px"}
                borderColor={"gray.400"}
                overflow={"hidden"}   // <= Redondea todo lo que se pegue al borde de la tarjeta 
                bg={"aliceblue"}
                transition={"all 0.2s ease-in-out"}
                _hover={{transform: "scale(1.01)", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"}}
                >
                  {/* Imagen */}
                  <Image
                  src={proyecto.imagen}
                  alt={`Captura de ${proyecto.titulo}`}
                  width={"100%"}
                  height={"180px"}
                  objectFit={"cover"}
                  />

                  {/* Contenido */}
                  <Box p={"4"} borderTopWidth={"1px"} borderColor={"gray.300"}>

                    <HStack justify={"space-between"} align={"center"} mb={"2"}>
                      <Heading size={"md"}>{proyecto.titulo}</Heading>
                      <Badge 
                      colorPalette={"blue"} 
                      variant={"subtle"} 
                      borderRadius={"full"} 
                      px={"2.5"} 
                      py={"0.5"}
                      >
                        {proyecto.tecnologia}
                      </Badge>
                    </HStack>

                    <Text fontSize={"sm"} color={"gray.600"} mb={"4"}>{proyecto.descripcion}</Text>

                    <Button
                    as={"a"}
                    href={proyecto.repo}
                    target={"_blank"}     // <= Crear otra página y redirigir al sitio
                    rel="noopener noreferrer"   // <= Seguridad para que no modifiquen la página desde el sitio redirigido
                    colorPalette={"blue"}
                    size={"sm"}
                    width={"100%"}
                    >
                      Ver Repositorio en GitHub
                    </Button>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>

          </Box>

          

        </VStack>
      </Container>

    </Provider>
  )
}

export default App;