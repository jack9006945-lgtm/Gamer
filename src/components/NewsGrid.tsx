import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";
import { NewsItem } from "../types";

const NEWS: NewsItem[] = [
  {
    id: "1",
    title: "PUBG Mobile Season 32: Everything You Need to Know",
    category: "Updates",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    excerpt: "New maps, weapons, and the long-awaited return of the zombie mode are finally here."
  },
  {
    id: "2",
    title: "Top 5 Loadouts for CoD Mobile Ranked Play",
    category: "Guides",
    date: "March 08, 2026",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    excerpt: "Dominate the leaderboard with these pro-tested weapon configurations for Season 3."
  },
  {
    id: "3",
    title: "Esports: Mobile Legends World Championship Announced",
    category: "Esports",
    date: "March 05, 2026",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    excerpt: "The biggest tournament of the year heads to Tokyo with a $2M prize pool."
  }
];

export const NewsGrid = () => {
  return (
    <section className="py-20 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">LATEST NEWS</h2>
            <p className="text-gray-400">Stay updated with the gaming world</p>
          </div>
          <button className="text-gaming-cyan font-medium hover:underline">Read More</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-gaming-cyan text-xs font-bold rounded-full border border-gaming-cyan/30">
                  {item.category}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-gaming-neon transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {item.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-gaming-neon font-bold text-sm">
                READ ARTICLE <ArrowRight size={16} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
