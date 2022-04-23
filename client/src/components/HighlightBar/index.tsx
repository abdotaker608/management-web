import { Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useAnimateInView } from "src/helpers/hooks";
import TutorialsModal from "../TutorialsModal";

const HighlightBar = () => {
    //tutorials modal discolsures
    const tutorialsModalDisclosures = useDisclosure();

    //animation
    const startAnimation = useCallback((entry: IntersectionObserverEntry) => {
        entry.target.classList.add("animate__animated", "animate__fadeIn");
    }, []);

    const { ref } = useAnimateInView(startAnimation, { threshold: 0.8 });

    return (
        <>
            <Box pt={48} ref={ref} opacity={0}>
                <Box
                    display="flex"
                    flexDir={{ base: "column", md: "row" }}
                    alignItems="center"
                    justifyContent={{ md: "space-between" }}
                    bg="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/splash.svg')"
                    bgSize='cover'
                    bgPos='bottom center'
                    py={12}
                    px={{ md: 12 }}
                >
                    <Heading as="h3" color="white">
                        Let's Get You Started!
                    </Heading>
                    <Button
                        variant="outline"
                        mt={{ base: 8, md: 0 }}
                        color="white"
                        size="lg"
                        _focus={{ color: "black", bgColor: "white" }}
                        _hover={{ color: "black", bgColor: "white" }}
                        onClick={tutorialsModalDisclosures.onOpen}
                    >
                        View All Tutorials
                    </Button>
                </Box>
            </Box>
            <TutorialsModal {...tutorialsModalDisclosures} />
        </>
    );
};

export default HighlightBar;
