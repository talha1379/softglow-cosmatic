import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { ArrowRight, Sparkles, Sun, Moon } from "lucide-react";

export const Route = createFileRoute("/analyzer")({
  component: Analyzer,
  head: () => ({
    meta: [
      { title: "Skin Analyzer — Personalized Routine | SoftGlow" },
      { name: "description", content: "AI-powered skin quiz: get a personalized morning and night routine in 2 minutes." },
    ],
  }),
});

const steps = [
  { q: "What's your skin type?", options: ["Oily", "Dry", "Combination", "Sensitive"] },
  { q: "What's your top concern?", options: ["Acne", "Dark spots", "Dullness", "Aging"] },
  { q: "How is your skin's hydration?", options: ["Very dry", "Balanced", "Tight after wash", "Shiny"] },
  { q: "How often do you use SPF?", options: ["Daily", "Sometimes", "Rarely", "Never"] },
  { q: "Your age range?", options: ["Under 20", "20–29", "30–39", "40+"] },
];

function Analyzer() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = step >= steps.length;

  const select = (opt: string) => {
    setAnswers([...answers, opt]);
    setStep(step + 1);
  };

  const reset = () => { setStep(0); setAnswers([]); };

  return (
    <Layout>
      <section className="bg-hero-gradient py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">AI Skin Analyzer</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Meet your perfect routine</h1>
          <p className="text-muted-foreground">5 questions. 60 seconds. A routine made for you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        {!done ? (
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-soft">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm text-muted-foreground">Step {step + 1} of {steps.length}</span>
              <div className="flex-1 mx-4 h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gold-gradient transition-all" style={{ width: `${((step) / steps.length) * 100}%` }} />
              </div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-8">{steps[step].q}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {steps[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => select(opt)}
                  className="group p-5 rounded-2xl border border-border text-left hover:border-foreground hover:bg-muted transition flex items-center justify-between"
                >
                  <span className="font-medium">{opt}</span>
                  <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <div className="size-20 mx-auto rounded-full bg-gold-gradient grid place-items-center mb-4 shadow-luxe">
                <Sparkles className="size-10 text-white" />
              </div>
              <h2 className="font-display text-4xl mb-2">Your Glow Profile</h2>
              <p className="text-muted-foreground">Based on your answers, here's a routine made for you.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Sun, title: "Morning Ritual", items: ["Gentle Pearl Cleanse", "Vitamin C Serum", "Hydra Veil Moisturizer", "Silk SPF 50"] },
                { icon: Moon, title: "Night Ritual", items: ["Velvet Oil Cleanser", "Niacinamide Serum", "Retinol Renewal", "Night Repair Elixir"] },
              ].map((r) => (
                <div key={r.title} className="bg-card rounded-3xl border border-border p-8 shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-12 rounded-2xl bg-gold-gradient grid place-items-center">
                      <r.icon className="size-6 text-white" />
                    </div>
                    <h3 className="font-display text-2xl">{r.title}</h3>
                  </div>
                  <ol className="space-y-3">
                    {r.items.map((item, i) => (
                      <li key={item} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                        <span className="size-7 rounded-full bg-foreground text-background grid place-items-center text-xs font-semibold">{i + 1}</span>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Link to="/products" className="px-7 py-4 rounded-full bg-foreground text-background font-medium shadow-luxe">Shop This Routine</Link>
              <Link to="/chatbot" className="px-7 py-4 rounded-full border border-border font-medium hover:bg-muted">Chat with AI</Link>
              <button onClick={reset} className="px-7 py-4 rounded-full border border-border font-medium hover:bg-muted">Retake Quiz</button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
