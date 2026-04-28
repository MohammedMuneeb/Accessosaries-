import { prisma } from "@/lib/db";
import { Sparkles, ShoppingCart, Filter, Search } from "lucide-react";
import Link from "next/link";

export default async function ShopPage() {
  const products = await prisma.product.findMany({
    include: { seller: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen pt-24 px-8 pb-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Marketplace</h1>
            <p className="text-muted-foreground">Premium mobile accessories from trusted sellers.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                placeholder="Search accessories..." 
                className="w-full bg-secondary/50 border border-border/50 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 ring-primary/20 outline-none"
              />
            </div>
            <button className="glass p-2 rounded-xl hover:text-primary transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="glass p-20 rounded-[3rem] text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <ShoppingCart className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">No items found</h3>
              <p className="text-muted-foreground">The marketplace is just starting up. Check back soon!</p>
            </div>
            <Link href="/" className="inline-flex h-12 px-8 items-center bg-primary text-primary-foreground rounded-2xl font-bold hover:scale-105 transition-transform">
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="glass rounded-[2.5rem] overflow-hidden group hover:border-primary/30 transition-all hover:scale-[1.02]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={product.imageUrl || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"} 
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black">${product.price.toFixed(2)}</span>
                    <button className="bg-primary text-primary-foreground p-3 rounded-2xl hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="pt-2 border-t border-border/20 flex items-center gap-2">
                    <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-[10px] font-bold">
                      {product.seller.email[0].toUpperCase()}
                    </div>
                    <span className="text-xs text-muted-foreground">Sold by {product.seller.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
