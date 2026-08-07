import { Timer, Users2, Goal, Zap } from "lucide-react";


const features = [
    {
      icon: Timer,
      stat: "30",
      label: "Minutes",
      description: "Three periods of 10 minutes",
    },
    {
      icon: Users2,
      stat: "6",
      label: "Players",
      description: "Per team on the court",
    },
    {
      icon: Goal,
      stat: "Goal",
      label: "Based",
      description: "Score into opponent's goal",
    },
    {
      icon: Zap,
      stat: "Quad",
      label: "Skates",
      description: "Speed and agility on wheels",
    },
  ];

export function AboutSection() {
  return (
    <section id="rollball" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
                The Sport
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                WHAT IS ROLL BALL?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Roll Ball is an innovative and fast-paced sport that combines elements
                of handball, basketball, and roller skating. Invented in India in 2003,
                it has grown into an international sport played across multiple continents.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Players wear quad roller skates and compete to score goals by throwing a
                specialized ball into the opponent's goal. It's a sport that demands
                speed, skill, coordination, and teamwork.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="bg-card border border-border rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-display text-3xl text-foreground mb-1">
                  {feature.stat}
                </div>
                <div className="text-foreground font-medium text-sm mb-2">
                  {feature.label}
                </div>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 py-8 border-t border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl text-primary">60+</div>
            <div className="text-muted-foreground text-sm">Countries Playing</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-secondary">2003</div>
            <div className="text-muted-foreground text-sm">Year Founded</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-accent-foreground">12</div>
            <div className="text-muted-foreground text-sm">Players Per Team</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-primary">IRBF</div>
            <div className="text-muted-foreground text-sm">Governing Body</div>
          </div>
        </div>
      </div>
    </section>
  );
};


