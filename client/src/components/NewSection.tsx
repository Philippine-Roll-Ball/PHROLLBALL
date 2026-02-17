import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    title: "Philippines Qualifies for World Rollball Championship",
    excerpt: "In a historic achievement, the Philippine national rollball team has secured their spot in the upcoming World Championship.",
    date: "January 28, 2026",
    category: "International",
    featured: true,
  },
  {
    id: 2,
    title: "New Training Center Opens in Cebu",
    excerpt: "A state-of-the-art rollball training facility opens its doors to athletes in the Visayas region.",
    date: "January 25, 2026",
    category: "Infrastructure",
    featured: false,
  },
  {
    id: 3,
    title: "Youth Development Program Expands to 10 More Schools",
    excerpt: "The federation announces expansion of grassroots program to additional schools nationwide.",
    date: "January 22, 2026",
    category: "Development",
    featured: false,
  },
  {
    id: 4,
    title: "Coach Maria Santos Named Coach of the Year",
    excerpt: "Recognized for her outstanding contributions to Philippine rollball development.",
    date: "January 18, 2026",
    category: "Awards",
    featured: false,
  },
];

export function NewsSection() {
  const featuredArticle = newsArticles.find(a => a.featured);
  const regularArticles = newsArticles.filter(a => !a.featured);

  return (
    <section id="news" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Latest News
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground">
              NEWS & <span className="text-primary">UPDATES</span>
            </h2>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="aspect-video gradient-hero relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-primary-foreground/20">📰</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full gradient-gold text-accent-foreground text-sm font-semibold shadow-gold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.date}
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {featuredArticle.excerpt}
                </p>
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          )}

          {/* Regular Articles */}
          <div className="flex flex-col gap-6">
            {regularArticles.map((article) => (
              <div
                key={article.id}
                className="group flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-lg gradient-blue flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{article.date}</span>
                  </div>
                  <h4 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
