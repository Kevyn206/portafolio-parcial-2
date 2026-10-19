import { Box, Heading, Text } from "@chakra-ui/react";

export default function SectionBox({
    bg = "gray.900",
    title,
    subtitle,
    text,
    boldText1,
    boldText2,
}) {
    
    return(
        <Box 
        bg={bg}
        p={"4"} 
        borderWidth={"1px"} 
        borderRadius={"md"}
        mx={"2"} 
        my={"4"}
        >
            <Heading size={"md"}>
                {title}
            </Heading>

            <Text fontSize={"sm"} color={"gray.500"}>
                {subtitle}
            </Text>

            <Text fontSize={"sm"} my={"2"}>
                {text}
            </Text>

            <Text fontSize={"sm"} fontWeight={"bold"}>
                {boldText1}
            </Text>
            
            <Text fontSize={"sm"} fontWeight={"bold"}>
                {boldText2}
            </Text>
            
        </Box>
    )
}