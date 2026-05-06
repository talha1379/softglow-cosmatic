import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let gsap: any;
    let animation: any;

    const moveCursor = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        animation = gsap.to(ringRef.current, {
          x,
          y,
          duration: 0.22,
          ease: "power3.out",
        });
      }
    };

    const enterPointer = () => setActive(true);
    const leavePointer = () => setActive(false);

    const init = async () => {
      const gsapModule = await import("gsap");
      gsap = gsapModule.gsap;
      await import("gsap/ScrollTrigger");
      document.addEventListener("mousemove", moveCursor);
      document.addEventListener("mouseenter", enterPointer);
      document.addEventListener("mouseleave", leavePointer);
      setActive(true);
    };

    init();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", enterPointer);
      document.removeEventListener("mouseleave", leavePointer);
      if (animation) animation.kill?.();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={ringRef}
        className={cn(
          "custom-cursor-ring absolute top-0 left-0 h-14 w-14 rounded-full border border-white/30 bg-white/5 opacity-0 transition-opacity duration-300",
          active && "opacity-100",
        )}
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot absolute top-0 left-0 h-3.5 w-3.5 rounded-full bg-white shadow-soft"
      />
    </div>
  );
}
