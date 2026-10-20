import { Box, Carousel, HStack, IconButton, Spinner, Text, VStack } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight, LuMouse, LuMoveHorizontal, LuPause, LuPlay } from "react-icons/lu";

import SectionTitle from "../atoms/SectionTitle";
import PETs from "../../assets/PETs.png";
import GAMEZONE from "../../assets/GAMEZONE.png";
import TecnoFit from "../../assets/TecnoFit.png";
import Portfolio from "../../assets/PortafolioInteractivo.png";
import { useEffect, useState } from "react";

import ProjectBox from "../molecules/ProjectBox";

const proyectos = [
  {
    imagen: PETs,
    id: 1,
    titulo: "PETs.com",
    descripcion: "Sitio Web construido con carrito de compras para una tienda de mascotas y más servicios",
    repo: "https://github.com/Kevyn206/Proyecto-Pets",
    tecnologia: "HTML, CSS y JS"
  },
  {
    imagen: GAMEZONE,
    id: 2,
    titulo: "GAMEZONE",
    descripcion: "(Participación activa) Inicio de sesión con diseño responsivo para la empresa GAMEZONE con temática Neon",
    repo: "https://github.com/sebahenry17-arch/Henry-Vizcaya-Caso-3",
    tecnologia: "HTML, CSS y JS"
  },
  {
    imagen: TecnoFit,
    id: 3,
    titulo: "TecnoFit",
    descripcion: "(Participación activa) Registro con validación en JS para ingresar datos personales y componentes deportivos",
    repo: "https://github.com/sebahenry17-arch/TecnoFit-Store",
    tecnologia: "HTML, CSS y JS"
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


export default function Projects() {

  const [misProyectos, setMisProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMisProyectos(proyectos);
      setCargando(false);
    }, 4000);
  }, []);

  return (
    <Box as={"section"} data-testid={"projects"}>
      <SectionTitle 
      text="Desarrollos y Proyectos"
      />

      {cargando ? (
        <VStack>
          <Spinner size={"lg"} color={"blue.600"}/>
          <Text color={"blue.600"}>Cargando proyectos...</Text>
        </VStack>
      ) : (

        <Carousel.Root
        className="aparecer"
        autoplay={{ delay: 3000 }}
        slideCount={proyectos.length}
        mx="auto"
        maxW="xl"
        allowMouseDrag
        >
          <HStack textStyle={{base: "xs", md: "sm"}} mb="4">
            <LuMouse/> <LuMoveHorizontal /> Desliza la pantalla o presiona los botones
          </HStack>

          {/* Loop de proyectos */}
          <Carousel.ItemGroup>
            {misProyectos.map((proyecto) => (
              <Carousel.Item key={proyecto.id} index={proyecto.id}>
                <Box w="100%" h="100%">
                  <ProjectBox
                  key={proyecto.id} // En la lista, se agregan las IDs de cada proyecto, para recorrer la lista de ProjectBox (componente padre) con .map()
                  imageSrc={proyecto.imagen}
                  imageAlt={`Captura de ${proyecto.titulo}`}
                  projectTitle={proyecto.titulo}
                  projectTextPill={proyecto.tecnologia}
                  projectDescription={proyecto.descripcion}
                  buttonText="Ver Repositorio en GitHub"
                  buttonColor={"blue"}
                  hrefRepository={proyecto.repo}
                  />
                </Box>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          
          <Carousel.Control justifyContent="center" gap="4">

            <Carousel.PrevTrigger asChild>
              <IconButton size="xs" variant="ghost">
                <LuChevronLeft />
              </IconButton>
            </Carousel.PrevTrigger>

            <Carousel.AutoplayTrigger asChild>
              <IconButton aria-label="Toggle autoplay" size="sm" variant="ghost">
                <Carousel.AutoplayIndicator
                  paused={<LuPause />}
                  play={<LuPlay />}
                />
              </IconButton>
            </Carousel.AutoplayTrigger>

            <Carousel.NextTrigger asChild>
              <IconButton size="xs" variant="ghost">
                <LuChevronRight />
              </IconButton>
            </Carousel.NextTrigger>
          </Carousel.Control>

        </Carousel.Root>
      )}
    </Box>
  )
}