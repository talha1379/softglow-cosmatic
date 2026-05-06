import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact SoftGlow" },
      { name: "description", content: "Get in touch with the SoftGlow team — support, partnerships, wholesale inquiries." },
    ],
  }),
});

const faqs = [
  { q: "How fast do you reply?", a: "We respond to every message within 24 hours, Monday through Saturday." },
  { q: "Do you ship internationally?", a: "Yes, we ship to 40+ countries with carbon-neutral shipping." },
  { q: "Are products vegan?", a: "All SoftGlow products are 100% vegan and cruelty-free." },
  { q: "Can I return products?", a: "30-day no-questions-asked returns on all unopened items." },
  { q: "Do you offer wholesale?", a: "Yes — email partners@glowai.com for our wholesale catalog." },
];

function Contact() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Layout>
      <section className="bg-hero-gradient py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Say hello ✨</h1>
          <p className="text-muted-foreground">We reply within 24 hours.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-12">
        <form className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft space-y-5">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
            <input className="w-full px-4 py-3 rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Subject</label>
            <select className="w-full px-4 py-3 rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-ring">
              <option>General Question</option>
              <option>Order Support</option>
              <option>Wholesale</option>
              <option>Press</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
            <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          </div>
          <button className="w-full py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90">Send Message</button>
        </form>

        <div className="space-y-6">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { icon: Mail, label: "hello@glowai.com" },
              { icon: Phone, label: "+91 98765 43210" },
              { icon: MapPin, label: "Mumbai, India" },
            ].map((c) => (
              <div key={c.label} className="p-5 rounded-2xl bg-card border border-border text-center">
                <c.icon className="size-5 mx-auto text-gold mb-2" />
                <p className="text-sm">{c.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-display text-2xl mb-4">Quick answers</h2>
            <div className="space-y-2">
              {faqs.map((f, i) => (
                <div key={f.q} className="bg-card border border-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-sm">{f.q}</span>
                    <ChevronDown className={`size-4 transition ${open === i ? "rotate-180" : ""}`} />
                  </button>
                  {open === i && <div className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
