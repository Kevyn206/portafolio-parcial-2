import { 
  Container,
  Separator, 
  VStack
} from "@chakra-ui/react";

import { Provider } from "../../components/ui/provider";

import LogoChakra from "../../assets/LogoChakra.png";
import HeaderBox from "../../components/molecules/HeaderBox";
import AboutMeSection from "../../components/organisms/AboutMeSection";
import WorkExperience from "../../components/organisms/WorkExperience";
import Studies from "../../components/organisms/Studies";
import Projects from "../../components/organisms/Projects";
import Contact from "../../components/organisms/Contact";
import FooterBox from "../../components/molecules/FooterBox";

const añoActual = new Date().getFullYear();

export default function Home() {
    
    return (
        /* Provider es necesario para que funcione Chakra */
        <Provider>

            {/* HEADER */}
            <HeaderBox/>

            {/* Container centra toda la página */}
            <Container maxW={{base: "sm", md: "xl", lg: "3xl", xl: "7xl"}} mx={"auto"} p={"5"} color="gray.200">

                {/* VStack agrupa las secciones de forma vertical. HStack de forma horizontal*/}
                <VStack align={"stretch"} gap={"6"}>

                    {/* SOBRE MÍ */}
                    <AboutMeSection/>

                    <Separator/>

                    {/* EXPERIENCIA LABORAL */}
                    <WorkExperience/>

                    <Separator/>

                    {/* ESTUDIOS */}
                    <Studies/>

                    <Separator/>

                    {/* PROYECTOS */}
                    <Projects/>

                    <Separator/>

                    {/* CONTACTO */}
                    <Contact/>

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

        </Provider>
    )
}