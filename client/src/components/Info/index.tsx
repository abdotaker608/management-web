import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useAnimateInView } from "src/helpers/hooks";
import React, { useCallback, useRef } from "react";

const Info = (_: {}, ref: React.ForwardedRef<HTMLDivElement>) => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    const startAnimation = useCallback(() => {
        headingRef.current?.classList.add(
            "animate__animated",
            "animate__fadeInUp"
        );
        textRef.current?.classList.add("animate__animated", "animate__fadeIn");
        imageRef.current?.classList.add(
            "animate__animated",
            "animate__fadeInRight"
        );
    }, []);

    const { ref: sectionRef } = useAnimateInView(startAnimation, {
        threshold: 0.5,
    });

    return (
        <Box ref={sectionRef}>
            <Box
                ref={ref}
                display="flex"
                flexDir={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "flex-start" }}
                gap={{ base: 12, lg: 32 }}
                overflowX="hidden"
            >
                <Box textAlign={{ base: "center", lg: "start" }}>
                    <Heading
                        ref={headingRef}
                        as="h1"
                        fontSize={{ base: "3xl", lg: "4xl" }}
                        opacity={0}
                    >
                        Your Kid's Comfort - <br /> Comes First
                    </Heading>
                    <Text
                        ref={textRef}
                        color="gray.400"
                        mt={4}
                        opacity={0}
                        style={{ animationDelay: ".3s" }}
                    >
                        Positive early learning environments start with you when
                        you create a positive social and emotional environment
                        that is built on caring and responsive relationships.
                        Children can't explore and learn, experience joy and
                        wonder, until they feel secure. Our teachers take all of
                        this into consideration even though it's all virtual!
                    </Text>
                </Box>
                <Box
                    ref={imageRef}
                    flexShrink={{ base: 0 }}
                    opacity={0}
                    style={{ animationDelay: ".5s" }}
                    overflow="hidden"
                    minW={100}
                    minH={100}
                >
                    <Image
                        src="/kids.jpg"
                        w="100%"
                        maxW={{ base: "350px", lg: "450px" }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default React.forwardRef(Info);
