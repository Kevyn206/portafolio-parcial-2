import { Box, Flex, Skeleton } from "@chakra-ui/react";
import SectionTitle from "../atoms/SectionTitle";
import SectionBox from "../molecules/SectionBox";
import { useEffect, useState } from "react";

const estudios = [
    {
        id: 1,
        titulo: "Colegio Bicentenario Técnico Profesional “República Argentina”",
        subtitulo: "Santiago, Región Metropolitana",
        texto1: "Escolaridad: 1ro Medio",
    },
    {
        id: 2,
        titulo: "Liceo “Alberto Hurtado Cruchaga”",
        subtitulo: "Padre Hurtado, Región Metropolitana",
        texto1: "Escolaridad: de 2do a 4to Medio",
        texto2: "Título obtenido: Licencia de Enseñanza Media",
        negrita: "Fecha obtención: Diciembre 2024"
    },
    {
        id: 3,
        titulo: "Instituto Profesional “Duoc UC”",
        subtitulo: "Maipú, Región Metropolitana",
        texto1: "Título obtenido: Analista Programador",
        negrita: "Fecha obtención: Agosto 2027"
    }
]

export default function Studies() {

    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setCargando(false);
        }, 2000);
    }, []);

    return (
        <Box as={"section"} data-testid={"studies"}>
            <SectionTitle 
            text="Formación Académica"
            />

            {cargando ? (
                <Flex direction={{base: "column", lg: "row"}} wrap={"wrap"}>
                    {estudios.map((caja) => (
                        <Box
                        flex={"1"}
                        minW={"250px"}
                        key={caja.id}
                        borderWidth={"1px"}
                        borderRadius={"md"}
                        mx={"2"} 
                        my={"4"}
                        >
                            <Skeleton height={"100px"}/>
                        </Box>
                    ))}
                </Flex>
            ) : (
                <Flex direction={{base: "column", lg: "row"}} wrap={"wrap"}>
                    {estudios.map((caja) => (
                        <SectionBox 
                        key={caja.id}
                        title={caja.titulo}
                        subtitle={caja.subtitulo}
                        text1={caja.texto1}
                        text2={caja.texto2}
                        boldText={caja.negrita}
                        />
                    ))}
                </Flex>
            )}
        </Box>
    )
}