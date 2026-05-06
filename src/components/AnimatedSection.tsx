import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  threshold = 0.15,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === "undefined") return;

    let ctx: any;
    let mounted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold },
    );

    observer.observe(element);

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!mounted || !element) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }, element);
    };

    init();

    return () => {
      mounted = false;
      observer.disconnect();
      ctx?.revert?.();
    };
  }, [threshold]);

  return (
    <section
      ref={ref}
      data-visible={visible}
      className={cn(
        "scroll-reveal opacity-0 translate-y-10 transition-all duration-700 ease-out will-change-transform",
        visible && "opacity-100 translate-y-0",
        className,
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </section>
  );
}
