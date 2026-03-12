import { motion } from "motion/react";
import { Star, Download } from "lucide-react";
import { Game } from "../types";

const GAMES: Game[] = [
  {
    id: "1",
    title: "PUBG Mobile",
    category: "Battle Royale",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    downloads: "1B+",
    isTrending: true
  },
  {
    id: "2",
    title: "Call of Duty: Mobile",
    category: "Action",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    downloads: "500M+",
    isTrending: true
  },
  {
    id: "3",
    title: "Mobile Legends",
    category: "MOBA",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    downloads: "100M+",
    isTrending: false
  },
  {
    id: "4",
    title: "Genshin Impact",
    category: "RPG",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800",
    downloads: "50M+",
    isTrending: false
  }
];

export const TrendingGames = () => {
  return (
    <section className="py-20 container mx-auto px-6">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">TRENDING GAMES</h2>
          <p className="text-gray-400">Most played titles this week</p>
        </div>
        <button className="text-gaming-neon font-medium hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gaming-surface rounded-2xl overflow-hidden neon-border hover:border-gaming-neon/50 transition-all"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gaming-cyan uppercase tracking-widest">{game.category}</span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <span className="text-sm font-bold">{game.rating}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{game.title}</h3>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{game.downloads} Downloads</span>
                <button className="p-2 bg-gaming-neon/10 text-gaming-neon rounded-lg hover:bg-gaming-neon hover:text-black transition-colors">
                  <Download size={18} />
                </button>
              </div>
            </div>

            {game.isTrending && (
              <div className="absolute top-4 left-4 px-2 py-1 bg-gaming-neon text-black text-[10px] font-bold rounded uppercase">
                Trending
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
