// import './App.css'
import { 
  Box, 
  Button, 
  Container,
  Flex, 
  Heading, 
  HStack, 
  Separator, 
  SimpleGrid, 
  Text, 
  VStack
} from "@chakra-ui/react";

import { Provider } from "./components/ui/provider";
import PETs from "./assets/PETs.png";
import GAMEZONE from "./assets/GAMEZONE.png";
import TecnoFit from "./assets/TecnoFit.png";
import Portfolio from "./assets/PortafolioInteractivo.png";
import LogoChakra from "./assets/LogoChakra.png";
import ProfilePhoto from "./components/atoms/ProfilePhoto";
import Header from "./components/molecules/Header";
import AboutMeText from "./components/molecules/AboutMeText";
import SectionTitle from "./components/atoms/SectionTitle";
import SectionBox from "./components/molecules/SectionBox";
import ProjectBox from "./components/organisms/ProjectBox";
import FooterBox from "./components/molecules/FooterBox";
import ContactForm from "./components/organisms/ContactForm";

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

  return (
    /* Provider es necesario para que funcione Chakra */
    <Provider>

      {/* HEADER */}
      <Header text={"Portafolio Interactivo"}/>

      {/* Container centra toda la página */}
      <Container maxW={{base: "sm", md: "xl", lg: "3xl", xl: "7xl"}} mx={"auto"} p={"5"} color="gray.200">
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

            <SectionTitle 
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

            <SectionTitle 
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
            <SectionTitle 
            text="Desarrollos y Proyectos"
            />

            <SimpleGrid columns={{base: 1, md: 2}} gap={"6"} p={"2"}>
              {proyectos.map((proyecto) => (
                // Cajita de cada proyecto
                <ProjectBox
                key={proyecto.id} // En la lista se agregan las IDs de cada proyecto para recorrer la lista del componente padre con .map()
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
            </VStack>

            {/* FORMULARIO CON BOTÓN Y ANIMACIÓN INCLUIDA */}
            <ContactForm/>

          </Box>

        </VStack>
      </Container>

      <FooterBox
      leftText1={`© ${añoActual} Kevyn Vizcaya. Todos los derechos reservados.`}
      leftText2={"Contáctame: ke.vizcaya@duocuc.cl"}
      rightText={"Hecho con:"}
      image={LogoChakra}
      alt={"Chakra UI"}
      />

    </Provider>
  )
}

export default App;