import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-product.jpg";
import p8 from "@/assets/product-8-night.jpg";
import p9 from "@/assets/product-9-mist.jpg";
import p3 from "@/assets/product-3-serum.jpg";
import p6 from "@/assets/product-6-cream.jpg";
import { ArrowRight, Sparkles, Bot, Scan, Star, Leaf, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "SoftGlow — AI-Powered 3D Cosmetic Experience" },
      { name: "description", content: "Discover the future of beauty: immersive 3D products, AI skin analysis, and personalized routines crafted for your radiance." },
    ],
  }),
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute -top-40 -left-20 size-96 glow-orb" />
        <div className="absolute top-40 right-10 size-96 glow-orb" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur text-xs font-medium">
              <Sparkles className="size-3.5 text-gold" /> AI-powered beauty, redefined
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              Your skin,<br />
              <span className="text-gold-gradient italic">decoded</span> by AI.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Explore cosmetics in stunning 3D, analyze your skin in seconds, and unlock a routine engineered just for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-medium shadow-luxe hover:scale-[1.02] transition">
                Explore Products
                <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/analyzer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-foreground/20 backdrop-blur bg-card/40 font-medium hover:bg-card transition">
                Find Your Routine
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="size-10 rounded-full bg-gold-gradient border-2 border-background" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_,i) => <Star key={i} className="size-3.5 fill-current" />)}
                </div>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">10,000+</span> radiant customers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gold-gradient rounded-[3rem] blur-3xl opacity-30 animate-float" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-luxe">
              <img src={heroImg} alt="Featured cosmetic serum" width={1536} height={1536} className="w-full h-auto animate-float" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-soft flex items-center gap-3">
              <div className="size-10 rounded-full bg-gold-gradient grid place-items-center">
                <Sparkles className="size-5 text-white" />
              </div>
              <div className="text-xs">
                <p className="font-semibold">Analyzed by AI</p>
                <p className="text-muted-foreground">98% match for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Why SoftGlow</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">A new ritual of beauty</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Scan, title: "AI Skin Analyzer", desc: "Answer a few questions and get a personalized routine in seconds." },
            { icon: Bot, title: "24/7 AI Beauty Chat", desc: "Ask anything — ingredients, routines, or product matches." },
            { icon: Sparkles, title: "Immersive 3D Try-On", desc: "Rotate, zoom and inspect every product like it's in your hand." },
          ].map((f) => (
            <div key={f.title} className="group relative p-8 rounded-3xl bg-card border border-border hover:shadow-luxe transition-all hover:-translate-y-1">
              <div className="size-14 rounded-2xl bg-gold-gradient grid place-items-center mb-5 shadow-soft">
                <f.icon className="size-6 text-white" />
              </div>
              <h3 className="font-display text-2xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Trending now</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Loved by our community</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium hover:text-gold transition">
              View all <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Night Repair Elixir", price: "Rs 10,560", tag: "Award" },
              { name: "Rose Glow Mist", price: "Rs 3,795", tag: "Vegan" },
              { name: "Gold Radiance Serum", price: "Rs 7,920", tag: "Bestseller" },
              { name: "Velvet Hydra Cream", price: "Rs 6,240", tag: "New" },
            ].map((p, i) => (
              <div key={p.name} className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:shadow-luxe transition-all">
                <div className="aspect-square bg-hero-gradient relative overflow-hidden">
                  <img src={productsImg} alt={p.name} loading="lazy" width={1536} height={1024} className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" style={{ objectPosition: `${25 + i*15}% 50%` }} />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-semibold">{p.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg mb-1">{p.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gold-gradient">{p.price}</span>
                    <button className="text-xs px-3 py-1.5 rounded-full bg-foreground text-background hover:opacity-90">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Clean. Smart. Inclusive.</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Beauty that respects your skin <span className="italic text-gold-gradient">and</span> the planet.</h2>
            <p className="text-muted-foreground mb-8">We blend dermatologist-grade science with AI insight to craft formulas that perform — without compromise.</p>
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 hover:bg-muted">
              Our Story <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Leaf, label: "Clean Ingredients" },
              { icon: Shield, label: "Cruelty Free" },
              { icon: Zap, label: "Science Backed" },
              { icon: Sparkles, label: "Inclusive Tones" },
            ].map((v) => (
              <div key={v.label} className="p-6 rounded-2xl bg-card border border-border">
                <v.icon className="size-6 text-gold mb-3" />
                <p className="font-medium">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-foreground text-background p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gold-gradient opacity-20" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Ready to find your glow?</h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">Take the 2-minute AI skin quiz and meet your dream routine.</p>
            <Link to="/analyzer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-medium hover:scale-105 transition">
              Start Your Quiz <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
