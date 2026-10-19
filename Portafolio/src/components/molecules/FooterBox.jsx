import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react";
import FooterText from "./FooterText";
import FooterImage from "./FooterImage";

export default function FooterBox({
    leftText1,
    leftText2,
    rightText,
    image,
    alt
}) {
    return (
        <Box
            as={"footer"}
            bg={"blue.800"} 
            p="5"
            pt={"8"} 
            color="white" 
            borderTopWidth={"2px"} 
            borderColor={"blue.600"}
            >
            {/* Container y Flex para ajustar el contenido a responsivo */}
            <Container maxW={{ base: "sm", md: "xl", lg: "3xl", xl: "7xl" }} mx="auto">
                <Flex 
                direction={{base: "column", md: "row"}} 
                justify={"space-between"} 
                align={"center"} 
                textAlign={{base: "center", md: "left"}}
                gap={"10"}
                py={"5"}
                >
                    <FooterText
                    text1={leftText1}
                    text2={leftText2}
                    />
                    
                    <FooterImage
                    text={rightText}
                    image={image}
                    alt={alt}
                    />
                    
                </Flex>
            </Container>
        </Box>
    )
}