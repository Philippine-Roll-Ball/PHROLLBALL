import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "National Rollball Championship 2026",
    date: "March 15-20, 2026",
    location: "Manila, NCR",
    time: "8:00 AM - 6:00 PM",
    type: "Championship",
    status: "Registration Open",
  },
  {
    id: 2,
    title: "Visayas Regional Tournament",
    date: "April 5-7, 2026",
    location: "Cebu City",
    time: "9:00 AM - 5:00 PM",
    type: "Regional",
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "Youth Development Camp",
    date: "May 10-12, 2026",
    location: "Davao City",
    time: "7:00 AM - 4:00 PM",
    type: "Training",
    status: "Registration Open",
  },
  {
    id: 4,
    title: "Luzon Inter-School League",
    date: "June 1-15, 2026",
    location: "Multiple Venues",
    time: "Varies",
    type: "League",
    status: "Upcoming",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              Upcoming Events
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground">
              EVENTS & <span className="text-secondary">TOURNAMENTS</span>
            </h2>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit">
            View All Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              {/* Event Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === "Championship" 
                      ? "gradient-gold text-accent-foreground shadow-gold" 
                      : event.type === "Regional"
                      ? "bg-primary text-primary-foreground"
                      : event.type === "Training"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {event.type}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    event.status === "Registration Open"
                      ? "bg-green-100 text-green-700"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {event.status}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>

              {/* Event Footer */}
              <div className="px-6 py-4 bg-muted/50 border-t border-border">
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Event Banner */}
        <div className="mt-12 relative overflow-hidden rounded-2xl gradient-hero p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4 shadow-gold">
                🏆 Featured Event
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
                ASIAN ROLLBALL CUP 2026
              </h3>
              <p className="text-primary-foreground/80">
                The Philippines will host the Asian Rollball Cup for the first time!
              </p>
            </div>
            <Button 
              size="lg" 
              className="gradient-gold text-accent-foreground font-bold shadow-gold hover:opacity-90 whitespace-nowrap"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
