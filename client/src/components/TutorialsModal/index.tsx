import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    UseDisclosureReturn,
    VStack,
    StackDivider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "src/constants";
import { Tutorial as TutorialShape } from "src/types";
import Tutorial from "../Tutorial";

const TutorialsModal: React.FC<UseDisclosureReturn> = ({ ...props }) => {
    const [tutorials, setTutorials] = useState<TutorialShape[]>([]);

    const fetchTutorials = async () => {
        try {
            const response = await fetch(`${BASE_API_URL}/tutorials`);
            const data = await response.json();
            if (Array.isArray(data)) setTutorials(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTutorials();
    }, []);

    return (
        <Modal
            {...props}
            isCentered
            preserveScrollBarGap
            scrollBehavior="inside"
        >
            <ModalOverlay />
            <ModalContent
                height="100%"
                maxW={{ base: "90%", md: "700px", lg: "800px" }}
            >
                <ModalHeader>
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody py={12}>
                    <VStack
                        spacing={8}
                        align="stretch"
                        divider={<StackDivider borderColor="gray.200" />}
                    >
                        {tutorials.map((tutorial) => (
                            <Tutorial key={tutorial._id} {...tutorial} />
                        ))}
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default TutorialsModal;
