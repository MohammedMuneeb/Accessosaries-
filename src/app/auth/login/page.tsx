"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Mail, ShieldCheck, User, Store } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"BUYER" | "SELLER">("BUYER");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"EMAIL" | "OTP">("EMAIL");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });

      if (!res.ok) throw new Error("Failed to send OTP");
      setStep("OTP");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Verification failed");

      // Redirect based on role
      if (data.user.role === "SELLER") {
        router.push("/seller/dashboard");
      } else {
        router.push("/shop");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />

      <div className="max-w-md w-full glass p-8 rounded-3xl space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">
            {step === "EMAIL" 
              ? "Sign in to your account with OTP" 
              : `Enter the code sent to ${email}`}
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        {step === "EMAIL" ? (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 bg-secondary/50 border border-border/50 rounded-2xl pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">I want to join as</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole("BUYER")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                    role === "BUYER"
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-secondary/50 border-border/50 text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <User className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-wider">Buyer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("SELLER")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                    role === "SELLER"
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-secondary/50 border-border/50 text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <Store className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-wider">Seller</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary text-primary-foreground rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Verification Code</label>
              <div className="relative">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full h-12 bg-secondary/50 border border-border/50 rounded-2xl pl-12 pr-4 focus:ring-2 ring-primary/20 outline-none transition-all tracking-[0.5em] font-mono text-lg"
                  placeholder="000000"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary text-primary-foreground rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify & Sign In"}
            </button>
            
            <button
              type="button"
              onClick={() => setStep("EMAIL")}
              className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Change Email
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
