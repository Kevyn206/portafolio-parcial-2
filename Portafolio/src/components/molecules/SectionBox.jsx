import { Box, Heading, Text } from "@chakra-ui/react";

export default function SectionBox({
    bg = "gray.900",
    title,
    subtitle,
    text1,
    text2,
    boldText,
}) {
    
    return(
        <Box 
        bg={bg}
        p={"4"} 
        minW={"250px"}
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

            <Text fontSize={"sm"} mt={"3"}>
                {text1}
            </Text>

            <Text fontSize={"sm"}>
                {text2}
            </Text>
            
            <Text fontSize={"sm"} fontWeight={"bold"} mt={"2"}>
                {boldText}
            </Text>
            
        </Box>
    )
}