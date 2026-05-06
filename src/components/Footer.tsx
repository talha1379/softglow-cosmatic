import { Link } from "@tanstack/react-router";
import { Sparkles, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-full bg-gold-gradient grid place-items-center">
              <Sparkles className="size-5 text-white" />
            </div>
            <span className="font-display text-2xl font-bold">
              Soft<span className="text-gold-gradient">Glow</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            The future of beauty. AI-powered skincare, immersive 3D product experiences, and personalized routines designed for your unique glow.
          </p>
          <div className="flex gap-3 pt-2">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="size-10 grid place-items-center rounded-full border border-border hover:bg-foreground hover:text-background transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/analyzer" className="hover:text-foreground">Skin Analyzer</Link></li>
            <li><Link to="/chatbot" className="hover:text-foreground">AI Chat</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Beauty rituals in your inbox.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="you@email.com" className="flex-1 px-4 py-2.5 rounded-full bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            <button className="px-4 py-2.5 rounded-full bg-foreground text-background text-sm font-medium">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 SoftGlow. Crafted with ✨ for radiant skin.
      </div>
    </footer>
  );
}
