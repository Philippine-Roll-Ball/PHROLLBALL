import { useAuth } from "@/hook/useAuth";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  Newspaper,
  QrCode,
  Image,
  LogOut,
  X,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    key: "dashboard",
    path: "/admin",
  },
  {
    icon: Users,
    label: "Members",
    key: "members",
    path: "/admin/members",
  },
  {
    icon: Calendar,
    label: "Events",
    key: "events",
    path: "/admin/events",
  },
  {
    icon: QrCode,
    label: "Generate QR",
    key: "generate-qr",
    path: "/admin/generate-qr",
  },
  {
    icon: Image,
    label: "Gallery",
    key: "gallery",
    path: "/admin/gallery",
  },
  {
    icon: Newspaper,
    label: "News",
    key: "news",
    path: "/admin/news",
  },
  {
    icon: Settings,
    label: "Settings",
    key: "settings",
    path: "/admin/settings",
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

        <nav className=" flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => (
            <Link 
              key={item.key}
              to={item.path}
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
            </Link>
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
</div>
    </div>
  );
}

