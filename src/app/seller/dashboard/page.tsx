import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { Plus, Package, DollarSign, TrendingUp, Sparkles, LogOut } from "lucide-react";
import Link from "next/link";

export default async function SellerDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  const session = token ? verifyToken(token) : null;

  if (!session || session.role !== "SELLER") {
    redirect("/auth/login");
  }

  const products = await prisma.product.findMany({
    where: { sellerId: session.userId },
    orderBy: { createdAt: "desc" },
  });

  const totalRevenue = products.length * 45.0; // Mock calculation

  return (
    <div className="min-h-screen pt-24 px-8 pb-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Seller Dashboard</h1>
            <p className="text-muted-foreground">Manage your mobile accessory listings and track sales.</p>
          </div>
          <Link 
            href="/seller/add-product" 
            className="bg-primary text-primary-foreground h-12 px-6 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            <Plus className="w-5 h-5" /> List New Item
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
              <Package className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Total Listings</p>
              <p className="text-3xl font-black">{products.length}</p>
            </div>
          </div>
          <div className="glass p-6 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Total Revenue</p>
              <p className="text-3xl font-black">${totalRevenue.toFixed(2)}</p>
            </div>
          </div>
          <div className="glass p-6 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Sales Growth</p>
              <p className="text-3xl font-black">+12.5%</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Your Listings</h2>
          
          {products.length === 0 ? (
            <div className="glass p-20 rounded-[3rem] text-center space-y-4">
              <Package className="w-12 h-12 text-muted-foreground mx-auto opacity-20" />
              <p className="text-muted-foreground">You haven't listed any items yet.</p>
              <Link href="/seller/add-product" className="text-primary font-bold hover:underline">
                Start selling now
              </Link>
            </div>
          ) : (
            <div className="glass rounded-[2.5rem] overflow-hidden border-border/20">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border/20 bg-secondary/30">
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Product</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-secondary/20 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-secondary">
                            <img src={p.imageUrl || ""} alt="" className="w-full h-full object-cover" />
                          </div>
                          <span className="font-bold">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{p.category}</td>
                      <td className="px-6 py-4 font-black">${p.price.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <button className="text-sm font-bold text-primary hover:underline">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
