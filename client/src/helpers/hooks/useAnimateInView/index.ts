import { useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

const useAnimateInView = (
    callback: Function,
    { threshold = 0.5, ...options }: IntersectionOptions = {}
) => {
    const { ref, inView, entry } = useInView({ threshold, ...options });

    useEffect(() => {
        if (inView && entry?.isIntersecting) callback(entry);
    }, [inView, entry, callback]);

    return { ref };
};

export default useAnimateInView;
