import { H3 } from "@repo/ui-web";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  category: string;
  title: string;
}

export function NewsCard({
  category,
  title,
}: NewsCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border-l-4 border-primary bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div>
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          {category}
        </span>

        <H3 >
          {title}
        </H3>
      </div>

      <div className="mt-8 flex items-center gap-2 text-primary font-semibold">
        Read More
        <ArrowRight size={18} />
      </div>
    </div>
  );
}