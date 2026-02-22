import { Target, Users, Trophy, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { getTestJson } from "../services/testService";

const features = [
  {
    icon: Zap,
    title: "Fast-Paced Action",
    description: "Rollball combines the excitement of handball and basketball on roller skates for non-stop action.",
  },
  {
    icon: Users,
    title: "Team Spirit",
    description: "Build lasting friendships and learn the value of teamwork in this collaborative sport.",
  },
  {
    icon: Trophy,
    title: "Competitive Excellence",
    description: "Compete at local, national, and international levels representing the Philippines.",
  },
  {
    icon: Target,
    title: "Skill Development",
    description: "Develop agility, coordination, and strategic thinking while having fun.",
  },
];
export function AboutSection() {
    
  const [message, setMessage] = useState("");

  useEffect(() => {
    getTestJson()
      .then(data => setMessage(data.message))
      .catch(err => console.error("API Error:", err));
  }, []);


  return (

    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

              {/* API Connection Message */}

        {message && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500 text-green-500 text-sm font-mono text-center">
             API Connected: <strong>{message}</strong>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            About Rollball
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            WHAT IS <span className="text-primary">ROLLBALL?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Rollball is an exciting team sport played on quad roller skates, 
            combining elements of handball, basketball, and throwball.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <div className="aspect-video bg-cover bg-center rounded-2xl shadow-lg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80)" }} />

           {/* Text Content */}
           <div className="text-center lg:text-left">
            <h3 className="font-display text-3xl text-foreground mb-4">The Philippine Rollball Federation</h3>
            <p className="text-muted-foreground mb-6">
              Founded in 2018, the Philippine Rollball Federation is dedicated to promoting and developing the sport of rollball across the country. We organize tournaments, train athletes, and work to establish rollball as a recognized sport in the Philippines.
            </p>
            <p className="text-muted-foreground">
              Our mission is to provide a platform for athletes to compete at national and international levels while fostering a culture of sportsmanship and excellence.
            </p>
          </div>



          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center mb-4 group-hover:shadow-primary-glow transition-shadow">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Rules Summary */}
        <div className="mt-20 p-8 md:p-12 rounded-2xl bg-muted/50 border border-border">
          <h3 className="font-display text-3xl text-foreground text-center mb-8">
            HOW IT&apos;S <span className="text-primary">PLAYED</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl mb-4">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">The Setup</h4>
              <p className="text-muted-foreground text-sm">
                Two teams of 6 players each on roller skates compete on a rectangular court
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-display text-2xl mb-4">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">The Game</h4>
              <p className="text-muted-foreground text-sm">
                Pass and shoot the ball into the opponent&apos;s goal within 30-second possessions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full gradient-gold text-accent-foreground flex items-center justify-center font-display text-2xl mb-4 shadow-gold">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">The Victory</h4>
              <p className="text-muted-foreground text-sm">
                The team with the most goals at the end of two 20-minute halves wins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}