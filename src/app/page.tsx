import { ArrowRight, Sparkles, Database, Layout, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass h-16 flex items-center px-8 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>

          <span className="font-bold text-xl tracking-tight">Stellar</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
          <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
            {/* <Github className="w-5 h-5" /> */}
          </Link >
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            Get Started

          </button >
        </div >
      </nav >
      {/* Hero Section */}
      <main className="flex-1 pt-32 px-8 ">
        <section className="max-w-5xl mx-auto text-center space-y-8 py-20 relative ">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none " />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold border border-primary/10 animate-fade-in ">

            <Sparkles className="w-3 h-3 " />
            <span>Next.js 16 + PostgreSQL + Prisma</span>
          </div >

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight animate-in slide-in-from-bottom-8 duration-700">
            Build the <span className="text-gradient">Future</span> <br />
            with Confidence.
          </h1 >
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-12 duration-1000 ">

            A premium starter kit designed for high-performance applications.
            Pre-configured with modern tools and a stunning design system.
          </p >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-in slide-in-from-bottom-16 duration-1000 ">
            <button className="h-14 px-8 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-primary/30">
              Start Building <ArrowRight className="w-5 h-5" />
            </button>
            <button className="h-14 px-8 glass rounded-2xl font-bold text-lg hover:bg-secondary/50 transition-all">
              View Documentation

            </button >
          </div >
        </section >

        {/* Features Grid */}
        <section className="max-w-6xl mx-auto py-32 grid md:grid-cols-3 gap-8 " id="features" >
          <div className="glass p-8 rounded-3xl space-y-4 hover:border-primary/30 transition-colors animate-float">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Database className="w-6 h-6 text-primary" />

            </div >
            <h3 className="text-xl font-bold">PostgreSQL Ready </h3 >
            <p className="text-muted-foreground leading-relaxed">
              Fully integrated Prisma ORM with PostgreSQL support. Type-safe database queries out of the box.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl space-y-4 hover:border-primary/30 transition-colors animate-float [animation-delay:1s]">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <Layout className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Modern Layouts</h3>
            <p className="text-muted-foreground leading-relaxed">
              Beautifully crafted components using Tailwind 4. Responsive, accessible, and high-performance.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl space-y-4 hover:border-primary/30 transition-colors animate-float [animation-delay:2s]">
            <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold">Secure by Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              Best practices for authentication and authorization. Built to scale with your growing user base.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold">Stellar</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Stellar App. Built with precision and passion.
        </p>
      </footer>
    </div>
  );
}
