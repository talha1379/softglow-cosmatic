import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Leaf, Shield, Zap, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About NoorAI — Clean Beauty Powered by AI" },
      { name: "description", content: "Our mission: blend dermatologist science with AI to make beauty radically personal, clean, and inclusive." },
    ],
  }),
});

function About() {
  return (
    <Layout>
      <section className="bg-hero-gradient py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Beauty, <span className="italic text-gold-gradient">reimagined</span>.</h1>
          <p className="text-lg text-muted-foreground">We started NoorAI with one belief: every skin deserves a routine as unique as its owner. By blending dermatology with AI, we make personalized beauty effortless.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Leaf, title: "Clean Ingredients", desc: "1,200+ banned ingredients. Always." },
            { icon: Shield, title: "Cruelty Free", desc: "Never tested on animals. Ever." },
            { icon: Zap, title: "Science Backed", desc: "Formulated by dermatologists." },
            { icon: Heart, title: "Inclusive", desc: "Made for every skin tone & type." },
          ].map((v) => (
            <div key={v.title} className="p-8 rounded-3xl bg-card border border-border text-center">
              <div className="size-14 mx-auto rounded-2xl bg-gold-gradient grid place-items-center mb-4">
                <v.icon className="size-6 text-white" />
              </div>
              <h3 className="font-display text-xl mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            { n: "50+", l: "Products" },
            { n: "10K+", l: "Happy Customers" },
            { n: "4.8★", l: "Average Rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-6xl md:text-7xl font-bold text-gold-gradient mb-2">{s.n}</div>
              <p className="text-background/70 uppercase tracking-widest text-sm">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Meet The Team</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">The faces behind your glow</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Aisha Khan", role: "Founder & CEO" },
            { name: "Dr. Maya Rao", role: "Head Dermatologist" },
            { name: "Liam Chen", role: "AI Lead" },
            { name: "Priya Sharma", role: "Creative Director" },
          ].map((m) => (
            <div key={m.name} className="group rounded-3xl overflow-hidden bg-card border border-border">
              <div className="aspect-square bg-hero-gradient" />
              <div className="p-5">
                <h3 className="font-display text-lg">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
