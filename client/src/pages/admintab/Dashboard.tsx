import { useState } from "react";
import {
  Users,
  Calendar,

  Newspaper,
  
  TrendingUp,
  Trophy,
} from "lucide-react";

import { useAuth } from "@/hook/useAuth";




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



   
      <div className="flex-1 flex flex-col min-h-screen">
        
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
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Select a tab from the sidebar.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}