import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import ReactPlayer from "react-player";
import { Tutorial as TutorialShape } from "src/types";

const Tutorial: React.FC<TutorialShape> = ({ title, url, createdAt }) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    const sinceCreatedAt = moment(createdAt).fromNow();

    return (
        <Box display={{ md: "flex" }} gap={4}>
            <Box width={{ base: "100%", md: 150 }} height={{ md: 150 }}>
                <ReactPlayer
                    url={url}
                    width="100%"
                    {...(isLargerThan768 ? { height: "100%" } : {})}
                    controls
                    config={{
                        youtube: {
                            playerVars: {
                                controls: 1,
                                enablejsapi: 1,
                            },
                        },
                    }}
                />
            </Box>
            <Box textAlign={{ base: "center", md: "start" }} pt={{ base: 4 }}>
                <Heading as="h5" fontSize="lg" textTransform="capitalize">
                    {title}
                </Heading>
                <Heading as="h6" fontSize="xs" color="gray.400" mt={2}>
                    Uploaded {sinceCreatedAt}
                </Heading>
            </Box>
        </Box>
    );
};

export default Tutorial;
