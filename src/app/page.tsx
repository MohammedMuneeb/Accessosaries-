import { ArrowRight, Sparkles, Smartphone, Headset, Battery, Watch } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Premium Cases", icon: <Smartphone className="w-6 h-6" />, count: "120+ Items", color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Audio Gear", icon: <Headset className="w-6 h-6" />, count: "80+ Items", color: "text-purple-500", bg: "bg-purple-500/10" },
    { name: "Power & Cables", icon: <Battery className="w-6 h-6" />, count: "200+ Items", color: "text-green-500", bg: "bg-green-500/10" },
    { name: "Smart Wearables", icon: <Watch className="w-6 h-6" />, count: "50+ Items", color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  return (

    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-xs font-bold border border-primary/10 animate-fade-in">

              <Sparkles className="w-3 h-3" />
              <span>Premium Mobile Accessories Marketplace</span >
            </div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              Elevate Your <span className="text-gradient">Mobile</span> <br />
              Experience.
            </h1 >
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">

              Discover a curated collection of high-end cases, chargers, and audio gear.
              Buy from trusted sellers or start selling your own accessories today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link href="/shop" className="h-14 px-10 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-primary/30 w-full sm:w-auto justify-center">
                Explore Shop <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/auth/login" className="h-14 px-10 glass rounded-2xl font-bold text-lg hover:bg-secondary/50 transition-all w-full sm:w-auto justify-center flex items-center">
                Start Selling
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative glass p-4 rounded-[2.5rem] border-white/20">
              <img
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000"
                alt="Premium Accessories"
                className="rounded-[2rem] w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Verified Quality</p>
                    <p className="text-sm text-muted-foreground">Handpicked sellers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Browse Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find exactly what you need for your device. High-quality products across all categories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={`/shop?category=${cat.name.toLowerCase()}`}
                className="glass p-8 rounded-3xl group hover:border-primary/30 transition-all hover:scale-[1.02]"
              >
                <div className={`w-14 h-14 ${cat.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={cat.color}>{cat.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">{cat.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Why Choose Stellar?</h2>
          <p className="text-muted-foreground">The most trusted marketplace for mobile enthusiasts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Safe Transactions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every purchase is protected. Sellers are verified and payments are secured.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Fast Shipping</h3>
            <p className="text-muted-foreground leading-relaxed">
              Global shipping partners ensure your accessories reach you in record time.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
              <Battery className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold">Easy Returns</h3>
            <p className="text-muted-foreground leading-relaxed">
              Not happy with your purchase? Our refund policy has you covered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
