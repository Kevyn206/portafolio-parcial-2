import { Box } from "@chakra-ui/react";
import SectionTitle from "../atoms/SectionTitle";
import SectionBox from "../molecules/SectionBox";

export default function Studies() {

    return (
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
    )
}