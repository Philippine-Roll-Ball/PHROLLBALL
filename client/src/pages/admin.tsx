import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Image,
  Newspaper,
  Settings,
  LogOut,
  Bell,
  Search,
  X,
  TrendingUp,
  Trophy,
  QrCode,
} from "lucide-react";

import { useAuth } from "@/hook/useAuth";
import { GenerateQR } from "./GenerateQr";
import { GalleryAdmin } from "@/components/GalleryAdmin";
import { MemberSection } from "@/components/MemberSection";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", key: "dashboard" },
  { icon: Users, label: "Members", key: "members" },
  { icon: Calendar, label: "Events", key: "events" },
  { icon: QrCode, label: "Generate QR", key: "generate QR" },
  { icon: Image, label: "Gallery", key: "gallery" },
  { icon: Newspaper, label: "News", key: "news" },
  { icon: Settings, label: "Settings", key: "settings" },
];

const stats = [
  { label: "Total Members", value: "2,845", icon: Users, change: "+12%", color: "gradient-hero" },
  { label: "Upcoming Events", value: "08", icon: Calendar, change: "Active", color: "gradient-blue" },
  { label: "Recent News", value: "14", icon: Newspaper, change: "Drafts: 2", color: "bg-secondary" },
  { label: "Pending Regs", value: "126", icon: Trophy, change: "Critical", color: "gradient-gold" },
];

const activities = [
  {
    title: "Manila Open 2024 Registration Live",
    desc: "Event registration opened for Manila Regional Open.",
    time: "2 hours ago",
  },
  {
    title: "New Club Affiliation: Davao Rollers",
    desc: "Submitted affiliation documents.",
    time: "Yesterday, 4:45 PM",
  },
  {
    title: "National Team Selection Guidelines",
    desc: "Official memo released for tryouts.",
    time: "Aug 24, 2023",
  },
];

export default function Admin() {
  const { signOut } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30 flex">

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 gradient-dark text-primary-foreground transform transition-transform lg:translate-x-0 lg:static ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-primary-foreground/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
              <span className="font-bold">PR</span>
            </div>
            <span className="font-display text-xl">Admin</span>
          </div>

          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveTab(item.key);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium ${
                activeTab === item.key
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button
            onClick={signOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

   
      <div className="flex-1 flex flex-col min-h-screen">

  
      <header className="bg-card border-b px-6 py-4 flex items-center justify-between">

  <div>
    <h2 className="text-2xl font-display capitalize">
      {activeTab}
    </h2>
    <p className="text-on-surface-variant font-body-md">
      Welcome back, Admin. Here's what's happening today.
    </p>
  </div>

 
  <div className="flex items-center gap-4">

    <div className="flex items-center bg-surface-container rounded-full px-4 py-2 border border-outline-variant">
      <Search className="w-4 h-4 text-outline" />
      <input
        className="bg-transparent border-none focus:ring-0 text-sm w-48 ml-2 outline-none"
        placeholder="Search data..."
      />
    </div>

  
    <button className="relative p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
      <Bell className="w-5 h-5" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full border-2 border-surface"></span>
    </button>

    <div className="flex items-center gap-3 pl-4 border-l border-outline-variant">

      <div className="text-right">
        <p className="font-label-bold text-label-bold block">
          Juan Dela Cruz
        </p>
        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
          Regional Director
        </p>
      </div>

      <img
        className="w-10 h-10 rounded-full border-2 border-primary object-cover"
        src="joed.jpg"
        alt="Admin"
      />
    </div>
  </div>
</header>


        {/* CONTENT */}
        <main className="flex-1 p-6">

          {/* DASHBOARD */}
          {activeTab === "dashboard" ? (
            <div className="space-y-6">

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card border rounded-xl p-6">
                    <div className="flex justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs text-green-600 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-3xl font-display">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* ACTIVITIES */}
              <div className="bg-card border rounded-xl p-6">
                <h2 className="text-xl font-display mb-4">Recent Activity</h2>

                <div className="space-y-4">
                  {activities.map((item, index) => (
                    <div key={index} className="border-b pb-4 last:border-none">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : activeTab === "gallery" ? (
            <GalleryAdmin />
          ) : activeTab === "generate QR" ? (
            <GenerateQR />
          ) : activeTab === "members" ? (
            <MemberSection />
          ) : (
            <div className="bg-card border rounded-xl p-12 text-center">
              <h2 className="text-xl font-display capitalize">{activeTab}</h2>
              <p className="text-muted-foreground mt-2">
                This section is coming soon.
              </p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}