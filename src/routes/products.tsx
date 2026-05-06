import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import productsImg from "@/assets/products-collection.jpg";
import { useState } from "react";
import { Filter, Sparkles } from "lucide-react";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title: "Products — SoftGlow 3D Showcase" },
      { name: "description", content: "Explore our luxury skincare collection in immersive 3D. Serums, creams, mists and more." },
    ],
  }),
});

const categories = ["All", "Serums", "Moisturizers", "Cleansers", "Masks", "Sunscreen"];

const products = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: ["Saffron Bright Mask", "Honey Lip Balm", "Gold Radiance Serum", "Silk Sunscreen", "Aurora Eye Cream", "Velvet Hydra Cream", "Pearl Cleanse Foam", "Night Repair Elixir", "Rose Glow Mist"][i],
  price: ["Rs 5,775", "Rs 2,150", "Rs 7,920", "Rs 4,920", "Rs 6,930", "Rs 6,240", "Rs 3,270", "Rs 10,560", "Rs 3,795"][i],
  category: ["Masks", "Lip", "Serums", "Sunscreen", "Eye Care", "Moisturizers", "Cleansers", "Serums", "Mists"][i],
  rating: 4.5 + (i % 5) * 0.1,
}));

function Products() {
  const [selected, setSelected] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  return (
    <Layout>
      <section className="bg-hero-gradient py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">3D Collection</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Touch beauty, virtually.</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Drag, rotate and explore each product in stunning detail before it touches your skin.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center gap-2 mb-10 justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelected(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  selected === c ? "bg-foreground text-background border-foreground" : "border-border hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm">
            <Filter className="size-4" /> Filters
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={p.id}
              onClick={() => setActive(p.id)}
              className="group cursor-pointer relative bg-card rounded-3xl overflow-hidden border border-border hover:shadow-luxe transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/5] bg-hero-gradient relative overflow-hidden">
                <img src={productsImg} alt={p.name} loading="lazy" width={1536} height={1024} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" style={{ objectPosition: `${(i*20) % 100}% 50%` }} />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="size-3 text-gold" /> 3D
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{p.category}</p>
                <h3 className="font-display text-xl mb-2">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg text-gold-gradient">{p.price}</span>
                  <button className="text-xs px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90">Quick Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm grid place-items-end" onClick={() => setActive(null)}>
          <div className="bg-card w-full max-w-md h-full p-8 overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} className="text-sm text-muted-foreground mb-6">← Close</button>
            <img src={productsImg} alt="" className="w-full aspect-square object-cover rounded-2xl mb-6" />
            <h2 className="font-display text-3xl mb-2">{products[active].name}</h2>
            <p className="text-2xl text-gold-gradient font-semibold mb-4">{products[active].price}</p>
            <p className="text-muted-foreground mb-6">A luxurious formula crafted with botanical extracts and clinically-proven actives for visibly radiant skin.</p>
            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-xl bg-muted">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Key Ingredients</p>
                <p className="text-sm">Vitamin C · Niacinamide · Hyaluronic Acid · Squalane</p>
              </div>
            </div>
            <button className="w-full py-4 rounded-full bg-foreground text-background font-medium">Add to Routine</button>
          </div>
        </div>
      )}
    </Layout>
  );
}
