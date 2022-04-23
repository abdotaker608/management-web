import { Box, Button, Heading, useMediaQuery } from "@chakra-ui/react";
import React, { useCallback } from "react";
import ReactPlayer from "react-player";

interface Props {
    infoRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<Props> = ({ infoRef }) => {
    const [isLargerThan1024px] = useMediaQuery("(min-width: 1024px)");

    const scrollToInfo = useCallback(() => {
        if (infoRef.current) {
            window.scrollTo({
                top:
                    infoRef.current.offsetTop -
                    (window.innerHeight - infoRef.current.clientHeight) / 2,
                behavior: "smooth",
            });
        }
    }, [infoRef]);

    return (
        <Box
            position="relative"
            minHeight="100vh"
            display="flex"
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={{ base: "center", lg: "space-between" }}
            alignItems="center"
            gap={{ base: 12, lg: 24 }}
        >
            <Box textAlign={{ base: "center", lg: "start" }}>
                <Heading
                    as="h1"
                    fontSize={{ base: "4xl", lg: "5xl" }}
                    opacity={0}
                    className="animate__animated animate__fadeInUp"
                >
                    Kidmania Online <br /> Tutoring App
                </Heading>
                <Heading
                    as="h2"
                    fontSize={{ base: "lg" }}
                    color="gray.400"
                    mt={4}
                    opacity={0}
                    className="animate__animated animate__fadeInUp"
                    style={{ animationDelay: ".3s" }}
                >
                    Educate your child in a variety of different fields. <br />{" "}
                    We help him get from zero to hero!
                </Heading>
                <Button
                    colorScheme="telegram"
                    mt={5}
                    opacity={0}
                    className="animate__animated animate__fadeIn"
                    style={{ animationDelay: ".7s" }}
                    onClick={scrollToInfo}
                >
                    Get Started
                </Button>
            </Box>
            {isLargerThan1024px && (
                <Box boxShadow="md">
                    <ReactPlayer
                        url="https://vimeo.com/387994351"
                        playsinline
                        loop
                        muted
                        config={{
                            vimeo: {
                                playerOptions: {
                                    playsinline: 1,
                                    autoplay: 1,
                                    loop: 1,
                                    muted: 1,
                                },
                            },
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};

export default Header;
