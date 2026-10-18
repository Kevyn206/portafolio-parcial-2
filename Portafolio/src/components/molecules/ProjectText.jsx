import { Heading, HStack, Text } from "@chakra-ui/react";
import ProjectPill from "../atoms/ProjectPill";

export default function ProjectText({
    title,
    pillText,
    description
}) {

    return (
        <>
            <HStack justify={"space-between"} align={"center"} mb={"2"}>
                <Heading size={"md"}>
                    {title}
                </Heading>
                <ProjectPill text={pillText}/>
            </HStack>
            
            <Text fontSize={"sm"} color={"gray.600"} mb={"4"}>
                {description}
            </Text>
        </>
    )
}