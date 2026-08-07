"use client";

import { useEffect, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";

import { Card, Container } from "@repo/ui-web";

const TARGET_DATE = new Date("2026-12-06T09:00:00");

export function CountdownSection() {
  const calculateTime = () => {
    const difference = TARGET_DATE.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

 const [time, setTime] = useState(calculateTime());
const [mounted, setMounted] = useState(false);

  useEffect(() => {
  setMounted(true);

  const interval = setInterval(() => {
    setTime(calculateTime());
  }, 1000);

  return () => clearInterval(interval);
}, []);

 if (!mounted) {
    return null;
  }

  return (
    <section className="relative -mt-10 z-30">
      <Container>
        <Card className="rounded-2xl border-b-4 border-yellow-400 shadow-2xl">
          <div className="flex flex-col gap-8 p-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}
            <div>
              <h3 className="text-2xl font-bold text-primary">
                2nd Junior World Cup 2026
              </h3>

              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>Indore India</span>
              </div>
            </div>

            {/* Middle */}
            <div className="flex justify-center gap-8">

              <TimeCard
                value={time.days}
                label="DAYS"
              />

              <TimeCard
                value={time.hours}
                label="HRS"
              />

              <TimeCard
                value={time.minutes}
                label="MINS"
              />

              <TimeCard
                value={time.seconds}
                label="SECS"
              />

            </div>

            {/* Right */}
            <button className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:scale-105 hover:bg-primary/90 lg:mx-0">
              <CalendarDays size={24} />
            </button>

          </div>
        </Card>
      </Container>
    </section>
  );
}

interface TimeCardProps {
  value: number;
  label: string;
}

function TimeCard({
  value,
  label,
}: TimeCardProps) {
  return (
    <div className="text-center min-w-[70px]">
      <h2 className="text-4xl font-extrabold text-secondary">
        {String(value).padStart(2, "0")}
      </h2>

      <p className="mt-1 text-xs font-semibold tracking-widest text-muted-foreground">
        {label}
      </p>
    </div>
  );
}