import { useEffect, useRef } from "react";

export function useScrollReveal(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("revealed");
                    observer.unobserve(el);
                }
            },
            {
                threshold: options.threshold || 0.15,
                rootMargin: options.rootMargin || "0px 0px -60px 0px",
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}

export function useStaggerReveal(containerSelector) {
    useEffect(() => {
        const containers = document.querySelectorAll(containerSelector);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const children = entry.target.querySelectorAll(".stagger-child");
                        children.forEach((child, i) => {
                            child.style.transitionDelay = `${i * 80}ms`;
                            child.classList.add("revealed");
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        containers.forEach((c) => observer.observe(c));
        return () => observer.disconnect();
    }, []);
}
