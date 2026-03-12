import { motion } from "motion/react";
import { Download, Play, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-black via-gaming-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gaming-neon/10 border border-gaming-neon/20 text-gaming-neon text-sm mb-6">
            <TrendingUp size={16} />
            <span className="font-medium uppercase tracking-wider">Trending Now: Warzone Mobile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            LEVEL UP YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-neon to-gaming-cyan">
              MOBILE EXPERIENCE
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Discover the latest games, pro-level guides, and join the elite community of mobile gamers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gaming-neon text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors neon-glow">
              <Download size={20} />
              GET STARTED
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <Play size={20} />
              WATCH TRAILER
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
