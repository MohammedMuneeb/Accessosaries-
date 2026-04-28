"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Package, DollarSign, Tag, Image as ImageIcon, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Premium Cases",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create product");
      router.push("/seller/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-8 relative z-10">
        <Link href="/seller/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </Link>

        <div className="glass p-10 rounded-[3rem] space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">List New Accessory</h1>
            <p className="text-muted-foreground">Fill in the details to list your item in the marketplace.</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Product Name</label>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 bg-secondary/50 border border-border/50 rounded-2xl pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all"
                    placeholder="iPhone 15 Pro Max Silk Case"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Price (USD)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full h-12 bg-secondary/50 border border-border/50 rounded-2xl pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all"
                    placeholder="29.99"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Category</label>
              <div className="relative">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full h-12 bg-secondary/50 border border-border/50 rounded-2xl pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all appearance-none"
                >
                  <option>Premium Cases</option>
                  <option>Audio Gear</option>
                  <option>Power & Cables</option>
                  <option>Smart Wearables</option>
                  <option>Screen Protectors</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Description</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full h-32 bg-secondary/50 border border-border/50 rounded-3xl p-4 focus:ring-2 ring-primary/20 outline-none transition-all resize-none"
                placeholder="Describe the quality, material, and compatibility of your accessory..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Image URL</label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full h-12 bg-secondary/50 border border-border/50 rounded-2xl pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-primary text-primary-foreground rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-primary/30 disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Listing"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
