import { useEffect, useRef, useState } from "react";

export default function Reveal({
    children,
    delay = 0,
    y = 24,
    duration = 700,
    once = true,
    className = "",
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect reduced motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [once]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : `translateY(${y}px)`,
                transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1), transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`,
                transitionDelay: `${delay}ms`,
                willChange: "opacity, transform",
            }}>
            {children}
        </div>
    );
}
