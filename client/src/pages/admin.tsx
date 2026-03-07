import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Image,
  Newspaper,
  Settings,
  LogOut,
  Menu,
  X,
  TrendingUp,
  UserPlus,
  Trophy,
  Eye,
} from "lucide-react";
import { useAuth } from "@/hook/useAuth";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", key: "dashboard" },
  { icon: Users, label: "Members", key: "members" },
  { icon: Calendar, label: "Events", key: "events" },
  { icon: Image, label: "Gallery", key: "gallery" },
  { icon: Newspaper, label: "News", key: "news" },
  { icon: Settings, label: "Settings", key: "settings" },
];

const stats = [
  { label: "Total Members", value: "523", icon: Users, change: "+12%", color: "gradient-hero" },
  { label: "New Signups", value: "48", icon: UserPlus, change: "+8%", color: "gradient-blue" },
  { label: "Active Events", value: "6", icon: Trophy, change: "+2", color: "bg-secondary" },
  { label: "Page Views", value: "12.4k", icon: Eye, change: "+24%", color: "gradient-gold" },
];

export default function Admin() {
  // We only need 'user' and 'signOut' here now.
  // The Bouncer (ProtectedRoute) guarantees 'user' will NOT be null by the time this code runs!
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 gradient-dark text-primary-foreground transform transition-transform lg:translate-x-0 lg:static ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-primary-foreground/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center shadow-gold">
              <span className="font-display text-lg text-accent-foreground">PR</span>
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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.key
                  ? "bg-primary-foreground/10 text-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary-foreground/10">
          <button
            onClick={signOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="w-6 h-6 text-foreground" />
            </button>
            <h1 className="font-display text-2xl capitalize">{activeTab}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user!.email}
            </span>
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">
                {user!.email?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {activeTab === "dashboard" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl border p-6">
                  <div className="flex justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs text-primary flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-display">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-xl border p-12 text-center">
              <h2 className="text-2xl font-display capitalize">{activeTab}</h2>
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