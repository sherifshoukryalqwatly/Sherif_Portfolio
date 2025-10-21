import { useEffect, useRef } from "react";

export default function useScrollAnimation() {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            element.classList.add("show");
            } else {
            element.classList.remove("show");
            }
        },
        { threshold: 0.2 } // triggers when 20% of the element is visible
        );

        if (element) observer.observe(element);
        return () => element && observer.unobserve(element);
    }, []);

    return ref;
}
