import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Props } from "./types";
import theme from "./theme";

const Provider: React.FC<Props> = ({ children }) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Provider;
