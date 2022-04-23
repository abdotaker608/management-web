import { ChakraTheme, extendTheme } from "@chakra-ui/react";

export default extendTheme({
    fonts: {
        heading: '"Mystery Quest", cursive',
        body: '"Mystery Quest", cursive',
    },
    breakpoints: {
        base: "0em",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    },
} as Partial<ChakraTheme>);
