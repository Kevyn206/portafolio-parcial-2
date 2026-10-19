import { Box, Button } from "@chakra-ui/react";
import ProjectImage from "../atoms/ProjectImage";
import ProjectText from "./ProjectText";


export default function ProjectBox({
    bg = "gray.900",
    imageSrc,
    imageAlt = "",
    projectTitle,
    projectTextPill,
    projectDescription,
    buttonText = "",
    buttonColor,
    hrefRepository
}) {

    return (
        <Box
        borderRadius={"xl"}
        borderWidth={"1px"}
        borderColor={"gray.700"}
        overflow={"hidden"}   // <= Redondea todo lo que se pegue al borde de la tarjeta 
        bg={bg}    // <= El mismo color del fondo
        transition={"all 0.2s ease-in-out"}
        _hover={{transform: "scale(1.01)"}}
        >
            <ProjectImage
            src={imageSrc}
            alt={imageAlt}
            />

            <Box p={"4"} borderTopWidth={"1px"} borderTopColor={"gray.300"}>

                <ProjectText 
                title={projectTitle}
                pillText={projectTextPill}
                description={projectDescription}
                />

                <Button
                as={"a"}
                href={hrefRepository}
                target={"_blank"}     // <= Crear otra página y redirigir al sitio
                rel="noopener noreferrer"   // <= Seguridad para que no modifiquen la página desde el sitio redirigido
                colorPalette={buttonColor}
                size={"sm"}
                width={"100%"}
                >
                    {buttonText}
                </Button>
            </Box>
        </Box>
    )
}