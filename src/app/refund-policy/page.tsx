import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="space-y-6">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl font-black tracking-tight">Refund Policy</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At Stellar Market, we prioritize your satisfaction. If you are not completely satisfied with your purchase, we're here to help.
          </p>
        </div>

        <div className="glass p-10 rounded-[3rem] space-y-8 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Returns</h2>
            <p className="text-muted-foreground">
              You have 30 calendar days to return an item from the date you received it. 
              To be eligible for a return, your item must be unused and in the same condition that you received it. 
              Your item must be in the original packaging.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Refunds</h2>
            <p className="text-muted-foreground">
              Once we receive your item, we will inspect it and notify you that we have received your returned item. 
              We will immediately notify you on the status of your refund after inspecting the item. 
              If your return is approved, we will initiate a refund to your original method of payment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. Shipping</h2>
            <p className="text-muted-foreground">
              You will be responsible for paying for your own shipping costs for returning your item. 
              Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-border/20">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions on how to return your item to us, contact our support team at support@stellar.market
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
