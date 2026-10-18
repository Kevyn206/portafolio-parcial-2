import { Image } from "@chakra-ui/react"

export default function ProjectImage({
    src,
    alt,
    width = "100%",
    height = "180px"
}) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}