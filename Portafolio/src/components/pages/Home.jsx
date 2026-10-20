import { 
  Container,
  Flex,
  Separator, 
  VStack
} from "@chakra-ui/react";

import { Provider } from "../ui/provider";

import LogoChakra from "../../assets/LogoChakra.png";
import HeaderBox from "../organisms/HeaderBox";
import AboutMeSection from "../organisms/AboutMeSection";
import WorkExperienceSection from "../organisms/WorkExperienceSection";
import StudiesSection from "../organisms/StudiesSection";
import ProjectsSection from "../organisms/ProjectsSection";
import ContactSection from "../organisms/ContactSection";
import FooterBox from "../organisms/FooterBox";

const añoActual = new Date().getFullYear();

export default function Home() {
    
    return (
        /* Provider es necesario para que funcione Chakra */
        <Provider>
            <Flex minH={"100vh"} direction={"column"}> {/* minH hace que la página ocupe como mínimo el 100% de la pantalla */}
                
                {/* HEADER */}
                <HeaderBox/>

                {/* Container centra toda la página */}
                <Container
                flex={"1"}  // Estira el contenedor hacia abajo lo más que se pueda
                maxW={{base: "sm", md: "xl", lg: "3xl", xl: "7xl"}} 
                mx={"auto"} 
                p={"5"} 
                color="gray.200"
                >

                    {/* VStack agrupa las secciones de forma vertical. HStack de forma horizontal*/}
                    <VStack align={"stretch"} gap={"6"}>

                        {/* SOBRE MÍ */}
                        <AboutMeSection/>

                        <Separator/>

                        {/* EXPERIENCIA LABORAL */}
                        <WorkExperienceSection/>

                        <Separator/>

                        {/* ESTUDIOS */}
                        <StudiesSection/>

                        <Separator/>

                        {/* PROYECTOS */}
                        <ProjectsSection/>

                        <Separator/>

                        {/* CONTACTO */}
                        <ContactSection/>

                    </VStack>
                </Container>

                {/* FOOTER */}
                <FooterBox
                leftText1={`© ${añoActual} Kevyn Vizcaya. Todos los derechos reservados.`}
                leftText2={"Contáctame: ke.vizcaya@duocuc.cl"}
                rightText={"Hecho con:"}
                image={LogoChakra}
                alt={"Chakra UI"}
                />
            </Flex>

        </Provider>
    )
}