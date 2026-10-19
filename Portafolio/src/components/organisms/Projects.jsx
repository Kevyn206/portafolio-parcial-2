import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionTitle from "../atoms/SectionTitle";
import ProjectGrid from "./ProjectGrid";

import PETs from "../../assets/PETs.png";
import GAMEZONE from "../../assets/GAMEZONE.png";
import TecnoFit from "../../assets/TecnoFit.png";
import Portfolio from "../../assets/PortafolioInteractivo.png";

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
    descripcion: "Inicio de sesión con diseño responsivo para la empresa GAMEZONE",
    repo: "https://github.com/sebahenry17-arch/Henry-Vizcaya-Caso-3",
    tecnologia: "HTML, CSS y JS"
  },
  {
    imagen: TecnoFit,
    id: 3,
    titulo: "TecnoFit",
    descripcion: "Registro con validación en JS para ingresar datos personales y componentes deportivos",
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

    return (
        <Box as={"section"}>
            <SectionTitle 
            text="Desarrollos y Proyectos"
            />

            <SimpleGrid columns={{base: 1, md: 2}} gap={"6"} p={"2"}>
                {proyectos.map((proyecto) => (
                // Cajita de cada proyecto
                <ProjectGrid
                key={proyecto.id} // En la lista, se agregan las IDs de cada proyecto, para recorrer la lista de ProjectGrid (componente padre) con .map()
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
    )
}