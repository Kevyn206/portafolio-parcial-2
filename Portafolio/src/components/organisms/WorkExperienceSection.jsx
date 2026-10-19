import { Box } from "@chakra-ui/react";
import SectionTitle from "../atoms/SectionTitle";
import SectionBox from "../molecules/SectionBox";

export default function WorkExperience() {
    
    return (
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
    )
}