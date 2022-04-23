import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "./providers";
import Header from "./components/Header";
import Info from "./components/Info";
import HighlightBar from "./components/HighlightBar";

const App = () => {
    const infoRef = useRef<HTMLDivElement>(null);

    return (
        <ChakraProvider>
            <Box className="App">
                <Box px={{ base: 5, sm: 45, lg: "5%" }}>
                    <Header infoRef={infoRef} />
                    <Info ref={infoRef} />
                </Box>
                <HighlightBar />
            </Box>
        </ChakraProvider>
    );
};

export default App;
