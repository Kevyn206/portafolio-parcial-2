import { Box, Skeleton } from "@chakra-ui/react";
import SectionTitle from "../atoms/SectionTitle";
import SectionBox from "../molecules/SectionBox";
import { useEffect, useState } from "react";

const laboral = [
    {
        id: 1,
        titulo: "Desarrollador Junior Mobile - Empresa X",
        subtitulo: "Diciembre 2027 - Enero 2029",
        texto1: "Diseño de pantallas nativas en Jetpack Compose"
    },
    {
        id: 2,
        titulo: "Desarrollador Junior - Freelance",
        subtitulo: "Marzo 2029 - Presente",
        texto1: "Desarrollo de aplicaciones Web y Android a pequeñas y medianas empresas"
    }
]

export default function WorkExperience() {

    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCargando(false);
        }, 2000);
    }, []);
    
    return (
        <Box as={"section"} data-testid={"work-experience"}>
            <SectionTitle 
            text="Experiencia Laboral (FICTICIA)"
            />

            {cargando ? (
                <>
                    {laboral.map((esqueleto) => (
                        <Box
                        key={esqueleto.id}
                        borderWidth={"1px"}
                        borderRadius={"md"}
                        mx={"2"} 
                        my={"4"}
                        >
                            <Skeleton height={"100px"}/>
                        </Box>
                    ))}
                </>
            ) : (
                <>
                    {laboral.map((caja) => (
                        <SectionBox 
                        key={caja.id}
                        title={caja.titulo}
                        subtitle={caja.subtitulo}
                        text1={caja.texto1}
                        />
                    ))}
                </>
            )}
        </Box>
    )
}