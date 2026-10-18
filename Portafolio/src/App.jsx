// import './App.css'
import { 
  Box, 
  Button, 
  Container, 
  Field, 
  Flex, 
  Heading, 
  HStack, 
  Image, 
  Input, 
  Separator, 
  SimpleGrid, 
  Text, 
  Textarea, 
  VStack
} from "@chakra-ui/react";

import { Provider } from "./components/ui/provider";
import { useState } from "react";
import PETs from "./assets/PETs.png";
import GAMEZONE from "./assets/GAMEZONE.png";
import TecnoFit from "./assets/TecnoFit.png";
import Portfolio from "./assets/PortafolioInteractivo.png";
import LogoChakra from "./assets/LogoChakra.png";
import ProfilePhoto from "./components/atoms/ProfilePhoto";
import Header from "./components/molecules/Header";
import AboutMeText from "./components/molecules/AboutMeText";
import Sectiontitle from "./components/atoms/SectionTitle";
import SectionBox from "./components/molecules/SectionBox";
import ProjectBox from "./components/organisms/ProjectBox";

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
    id: 2,
    titulo: "GAMEZONE",
    descripcion: "Inicio de sesión con diseño responsivo para la empresa GAMEZONE",
    repo: "https://github.com/sebahenry17-arch/Henry-Vizcaya-Caso-3",
    tecnologia: "HTML, CSS y JavaScript"
  },
  {
    imagen: TecnoFit,
    id: 3,
    titulo: "TecnoFit",
    descripcion: "Registro con validación en JS para ingresar datos personales y componentes deportivos",
    repo: "https://github.com/sebahenry17-arch/TecnoFit-Store",
    tecnologia: "HTML, CSS y JavaScript"
  },
  {
    imagen: Portfolio,
    id: 4,
    titulo: "Portafolio Interactivo",
    descripcion: "Información profesional y académica sobre mí, proyectos y formulario de contacto usando Chakra UI",
    repo: "https://github.com/Kevyn206/portafolio-parcial-2",
    tecnologia: "React con Vite"
  }
]

const añoActual = new Date().getFullYear();

function App() {

  // Abrir y cerrar el formulario
  const [mostrandoFormulario, setMostrandoFormulario] = useState(false)

  return (
    /* Provider es necesario para que funcione Chakra */
    <Provider>

      {/* HEADER */}
      <Header/>

      {/* Container centra toda la página */}
      <Container maxW={{base: "sm", md: "xl", lg: "3xl", xl: "7xl"}} mx={"auto"} p={"5"} color="gray.600">
        {/* VStack agrupa las secciones de forma vertical. HStack de forma horizontal*/}
        <VStack align={"stretch"} gap={"6"}>

          {/* SOBRE MÍ */}
          {/* Flex ayuda a alinear el contenido para la presentación */}
          <Flex direction={"column"} align={"center"} textAlign={"center"}>

            <ProfilePhoto/>
            <AboutMeText/>

          </Flex>

          <Separator/>

          {/* EXPERIENCIA LABORAL */}
          <Box as={"section"}>

            <Sectiontitle 
            text="Experiencia Laboral (FICTICIA)"
            />

            <SectionBox 
            title="Desarrollador Junior Mobile - Empresa X"
            subtitle="Diciembre 2027 - Enero 2029"
            text="Diseño de pantallas nativas en Jetpack Compose"
            />

            <SectionBox 
            title="Desarrollador Junior - Freelance"
            subtitle="Marzo 2029 - Presente"
            text="Desarrollo de aplicaciones Web y Android a pequeñas y medianas empresas"
            />

          </Box>

          <Separator/>

          {/* ESTUDIOS */}
          <Box as={"section"}>

            <Sectiontitle 
            text="Formación Académica"
            />

            <SectionBox 
            title="Colegio Bicentenario Técnico Profesional “República Argentina”"
            subtitle="Santiago, Región Metropolitana"
            boldText1="1ro Medio"
            />

            <SectionBox 
            title="Liceo “Alberto Hurtado Cruchaga”"
            subtitle="Padre Hurtado, Región Metropolitana"
            boldText1="De 2do a 4to Medio"
            boldText2="Título obtenido: Licencia de Enseñanza Media. Diciembre 2024"
            />

            <SectionBox 
            title="Instituto Profesional “Duoc UC”"
            subtitle="Maipú, Región Metropolitana"
            boldText2="Título obtenido: Analista Programador. Agosto 2027"
            />

          </Box>

          <Separator/>

          {/* PROYECTOS */}
          <Box as={"section"}>
            <Sectiontitle 
            text="Desarrollos y Proyectos"
            />

            <SimpleGrid columns={{base: 1, md: 2}} gap={"6"} p={"2"}>
              {proyectos.map((proyecto) => (
                // Cajita de cada proyecto
                <ProjectBox
                key={proyecto.id} // En la lista se agregan las IDs de cada proyecto para recorrer la lista del componente padre con .map()
                bg="aliceblue"
                imageSrc={proyecto.imagen}
                imageAlt={`Captura de ${proyecto.titulo}`}
                projectTitle={proyecto.titulo}
                projectTextPill={proyecto.tecnologia}
                projectDescription={proyecto.descripcion}
                buttonText="Ver Repositorio en GitHub"
                buttonColor={"blue"}
                hrefRepository={proyecto.repo}
                />
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
              // Al clicar, cambiará el estado a verdadero (!false, que NO sea falso)
              onClick={() => setMostrandoFormulario(!mostrandoFormulario)}
              colorPalette={"blue"}
              variant={"solid"}
              size={"md"}
              mt="2"
              px={"2"}
              >
                {/* Condicionador ternario para cambiar el contenido del botón */}
                {mostrandoFormulario ? "Ocultar Formulario ▲" : "Abrir Formulario ▼"}
              </Button>
            </VStack>

            {/* CAJA DEL FORMULARIO */}
            <Box
            maxH={mostrandoFormulario ? "700px" : "0px"}  // Si es verdadero, la altura máxima será de 700px (se mostrará)
            opacity={mostrandoFormulario ? 1 : 0}   // Si es verdadero, opacidad al mmáxmo
            overflow={"hidden"}
            mb={"7"}
            transition={"all 0.4s"} // Selecciona todos los componentes que cambian (por el estado mostandoFormulario)
            transitionTimingFunction="ease-in-out" // Deslizamiento suave
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
        {/* Container y Flex para ajustar el contenido a responsivo */}
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