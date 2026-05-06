import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";

export const Route = createFileRoute("/chatbot")({
  component: Chatbot,
  head: () => ({
    meta: [
      { title: "AI Beauty Chat — NoorAI" },
      { name: "description", content: "Your 24/7 AI beauty consultant. Ask about ingredients, routines, and product matches." },
    ],
  }),
});

type Msg = { role: "user" | "bot"; text: string };

const quickReplies = [
  "Suggest a morning routine",
  "Best serum under ₹2000",
  "Is Vitamin C safe for sensitive skin?",
  "How to layer products?",
];

function Chatbot() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi gorgeous ✨ I'm your NoorAI beauty consultant. Ask me anything — routines, ingredients, or product picks." },
  ]);
  const [input, setInput] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: `Great question! For "${text.slice(0, 40)}", I'd suggest starting with our Gold Radiance Serum paired with the Velvet Hydra Cream. Want a full routine?` }]);
    }, 700);
  };

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-center mb-8">
          <div className="size-16 mx-auto rounded-full bg-gold-gradient grid place-items-center mb-4 shadow-luxe">
            <Sparkles className="size-8 text-white" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">Your AI Beauty Bestie</h1>
          <p className="text-muted-foreground">Ask anything. Skincare. Makeup. Ingredients. We've got you.</p>
        </div>

        <div className="bg-card border border-border rounded-3xl shadow-luxe overflow-hidden flex flex-col h-[600px]">
          <div ref={ref} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                  m.role === "user"
                    ? "bg-foreground text-background rounded-br-sm"
                    : "bg-muted rounded-bl-sm"
                }`}>
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            {messages.length <= 1 && (
              <div className="pt-4">
                <p className="text-xs text-muted-foreground mb-3">Try one of these:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((q) => (
                    <button key={q} onClick={() => send(q)} className="px-4 py-2 rounded-full text-xs bg-card border border-border hover:bg-muted">
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="border-t border-border p-4 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about beauty..."
              className="flex-1 px-5 py-3 rounded-full bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button type="submit" className="size-12 grid place-items-center rounded-full bg-foreground text-background hover:opacity-90">
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
