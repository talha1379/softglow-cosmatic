import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type HorizontalScrollSectionProps = {
  title: string;
  subtitle: string;
  items: Array<{ title: string; description: string; image: string; tag: string }>;
};

export function HorizontalScrollSection({ title, subtitle, items }: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ctx: any;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current || !scrollerRef.current) return;
      const container = containerRef.current;
      const scroller = scrollerRef.current;
      const scrollWidth = scroller.scrollWidth;
      const viewportWidth = container.offsetWidth;
      const distance = scrollWidth - viewportWidth;
      if (distance <= 0) return;

      ctx = gsap.context(() => {
        gsap.to(scroller, {
          x: () => -(scrollWidth - viewportWidth),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, container);
    };

    init();

    return () => ctx?.revert?.();
  }, [items]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Experience</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Scroll through premium rituals
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl">
          A seamless horizontal gallery that brings beauty products and rituals to life with smooth
          movement and elegant layout.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft"
      >
        <div ref={scrollerRef} className="flex gap-6 px-6 py-8 touch-pan-x overflow-visible">
          {items.map((item) => (
            <div
              key={item.title}
              className={cn(
                "min-w-[280px] md:min-w-[340px] rounded-[2rem] border border-border bg-gradient-to-br from-background/95 to-background/70 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1",
              )}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-hero-gradient mb-6">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <span className="inline-flex items-center rounded-full bg-foreground/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted-foreground mb-3">
                {item.tag}
              </span>
              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
