import { Text, VStack } from "@chakra-ui/react";

export default function FooterText({
    text1,
    text2
}) {

    return (
        <VStack>
            <Text>{text1}</Text>
            <Text>{text2}</Text>
        </VStack>
    )
}