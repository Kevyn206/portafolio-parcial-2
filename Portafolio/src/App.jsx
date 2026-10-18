// import './App.css'
import { Badge, Box, Button, Center, Container, Field, Flex, Heading, HStack, Image, Input, Separator, SimpleGrid, Text, Textarea, VStack, } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
import { useState } from "react";
import PETs from "./assets/PETs.png";
import GAMEZONE from "./assets/GAMEZONE.png";
import TecnoFit from "./assets/TecnoFit.png";
import Portfolio from "./assets/PortafolioInteractivo.png";
import LogoChakra from "./assets/LogoChakra.png";
import ProfilePhoto from "./components/atoms/ProfilePhoto";

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

const añoActual = new Date().getFullYear();

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
    /* Provider es necesario para que funcione Chakra */
    <Provider>
      {/* HEADER */}
      <Box 
      bg={"blue.600"} 
      p={"5"} 
      pt={"10"} 
      color={"white"}
      borderBottomWidth={"2px"} 
      borderColor={"blue.border"}
      >
        <Heading as={"h1"} size={"4xl"}>Portafolio Interactivo</Heading>
      </Box>

      {/* Container mantiene toda la página en un solo lugar */}
      <Container maxW={{base: "sm", md: "xl", lg: "3xl", xl: "7xl"}} mx={"auto"} p={"5"} color="gray.600">
        {/* VStack agrupa las secciones de forma vertical. HStack de forma horizontal*/}
        <VStack align={"stretch"} gap={"6"}>

          {/* SOBRE MÍ */}
          <Flex direction={"column"} align={"center"}>
            
            <ProfilePhoto/>
            
            <Heading as={"h2"} size={"3xl"}>Hola, soy Kevyn Vizcaya</Heading>
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
              <Text fontSize={"sm"} color={"gray.500"}>Diciembre 2027 - Enero 2029</Text>
              <Text fontSize={"sm"} my={"2"}>Diseño de pantallas nativas en Jetpack Compose</Text>
            </Box>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} mx={"2"} my={"4"}>
              <Heading size={"md"}>Desarrollador Junior - Freelance</Heading>
              <Text fontSize={"sm"} color={"gray.500"}>Marzo 2029 - Presente</Text>
              <Text fontSize={"sm"} my={"2"}>Desarrollo de aplicaciones Web y Android a pequeñas y medianas empresas</Text>
            </Box>
          </Box>

          <Separator/>

          {/* ESTUDIOS */}
          <Box as={"section"}>
            <Heading size={"xl"} mb={"4"}>Formación Académica</Heading>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} mx={"2"} my={"4"}>
              <Heading size={"md"}>Colegio Bicentenario Técnico Profesional “República Argentina”</Heading>
              <Text fontSize={"sm"} color={"gray.500"}>Santiago, Región Metropolitana</Text>
              <Text fontSize={"sm"} my={"2"} fontWeight={"bold"}>1ro Medio</Text>
            </Box>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} mx={"2"} my={"4"}>
              <Heading size={"md"}>Liceo “Alberto Hurtado Cruchaga”</Heading>
              <Text fontSize={"sm"} color={"gray.500"}>Padre Hurtado, Región Metropolitana</Text>
              <Text fontSize={"sm"} my={"2"} fontWeight={"bold"}>De 2do a 4to Medio</Text>
              <Text fontSize={"sm"} fontWeight={"bold"}>Título obtenido: Licencia de Enseñanza Media. Diciembre 2024</Text>
            </Box>

            <Box p={"4"} borderWidth={"1px"} borderRadius={"md"} mx={"2"} my={"4"}>
              <Heading size={"md"}>Instituto Profesional "Duoc UC"</Heading>
              <Text fontSize={"sm"} color={"gray.500"}>Maipú, Región Metropolitana</Text>
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

          <Separator/>

          {/* CONTACTO */}
          <Box as={"section"}>
            <VStack gap={"3"} textAlign={"center"}>
              <Heading size={"3xl"} mb={"4"}>¿Quieres hablar conmigo?</Heading>
              <Text fontSize={"md"} color={"gray.600"} mb={"3"}>¡Mándame un mensaje o contáctame directamente por mis redes sociales!</Text>
              
              {/* BOTONES REDES SOCIALES */}
              <HStack gap={"4"} justify={"center"}>
                <Button
                as={"a"}
                href=""
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

              {/* BOTÓN PARA ABRIR FORMULARIO */}
              <Button
              onClick={() => setMostrarFormulario(!mostrarFormulario)}
              colorPalette={"blue"}
              variant={"solid"}
              size={"md"}
              mt="2"
              px={"2"}
              >
                {mostrarFormulario ? "Ocultar Formulario ▲" : "Abrir Formulario ▼"}
              </Button>
            </VStack>

            {/* CAJA DEL FORMULARIO */}
            <Box
            maxH={mostrarFormulario ? "700px" : "0px"}
            opacity={mostrarFormulario ? 1 : 0}
            overflow={"hidden"}
            mb={"7"}
            transition={"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"} // Deslizamiento suave
            >
              <Box
              p={{base: "4", md: "6"}}
              >
                <VStack as={"form"} gap={"4"} onSubmit={(e) => {
                  e.preventDefault;
                  alert("¡Mensaje enviado con éxito!");
                }}>
                  {/* NOMBRE */}
                  <Field.Root required>
                    <Field.Label>
                      Nombre Completo
                      <Field.RequiredIndicator/>
                    </Field.Label>
                    <Input placeholder="Ej: Juanito Perez" variant={"flushed"}/>
                    <Field.HelperText>Ingresa tu nombre o empresa</Field.HelperText>
                  </Field.Root>

                  {/* CORREO */}
                  <Field.Root required>
                    <Field.Label>
                      Correo electrónico
                      <Field.RequiredIndicator/>
                    </Field.Label>
                    <Input placeholder="Ej: juanito.perez@correo.com" variant={"flushed"}/>
                  </Field.Root>

                  {/* CAMPO MENSAJE */}
                  <Field.Root required>
                    <Field.Label>
                      Mensaje
                      <Field.RequiredIndicator/>
                    </Field.Label>
                    <Textarea 
                    placeholder="Escribe tu consulta aquí..."
                    rows={4}        // <= Muestra 4 filas vacías al mostrar por primera vez
                    colorPalette={"gray"}
                    variant={"outline"}
                    />
                  </Field.Root>

                  {/* BOTÓN DE ENVIAR */}
                  <Button type="submit" colorPalette={"blue"} width={"50%"}>
                    Enviar Mensaje
                  </Button>
                </VStack>
              </Box>
            </Box>

          </Box>

        </VStack>
      </Container>

      <Box
      as={"footer"}
      bg={"blue.800"} 
      p="5"
      pt={"8"} 
      color="white" 
      borderTopWidth={"2px"} 
      borderColor={"blue.600"}
      >
        <Container maxW={{ base: "sm", md: "xl", lg: "3xl", xl: "7xl" }} mx="auto">
          <Flex 
          direction={{base: "column", md: "row"}} 
          justify={"space-between"} 
          align={"center"} 
          textAlign={{base: "center", md: "left"}}
          gap={"10"}
          py={"5"}
          >
            <VStack>
              <Text>© {añoActual} Kevyn Vizcaya. Todos los derechos reservados.</Text>
              <Text>Contáctame: ke.vizcaya@duocuc.cl</Text>
            </VStack>
            
            <VStack justify={"center"}>
              <Text size={"md"} fontWeight={"bold"} letterSpacing={"wider"}>Hecho con:</Text>
              <Image src={LogoChakra} height={"30px"} alt="Chakra UI"/>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Provider>
  )
}

export default App;