import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type MiniGameLoaderProps = {
  open: boolean;
  onComplete: () => void;
};

export function MiniGameLoader({ open, onComplete }: MiniGameLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open) {
      setProgress(0);
      return;
    }

    let current = 0;
    const interval = window.setInterval(() => {
      current = Math.min(100, current + 12 + Math.random() * 10);
      setProgress(current);
      if (current >= 100) {
        window.clearInterval(interval);
        window.setTimeout(onComplete, 350);
      }
    }, 120);

    return () => window.clearInterval(interval);
  }, [open, onComplete]);

  if (!open) return null;

  return (
    <div className="loading-overlay fixed inset-0 z-[100] grid place-items-center bg-foreground/95 backdrop-blur-sm text-background px-4">
      <div className="max-w-md w-full rounded-[2rem] border border-white/10 bg-background/95 p-8 text-center shadow-luxe">
        <div className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">
          Loading Bonus Experience
        </div>
        <div className="mb-6 text-3xl font-display font-bold">Mini-Game Booting...</div>
        <div className="relative h-4 rounded-full bg-muted overflow-hidden mb-4">
          <div
            style={{ width: `${progress}%` }}
            className="h-full rounded-full bg-gold transition-all duration-300"
          />
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Your preview is almost ready — keep your glow zone engaged.
        </p>
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              className={cn("loader-dot", progress > index * 20 ? "loader-dot-active" : "")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
