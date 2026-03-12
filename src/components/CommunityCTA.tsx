import { motion } from "motion/react";
import { MessageSquare, Users, Zap } from "lucide-react";

export const CommunityCTA = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-gaming-neon/20 to-gaming-cyan/20 border border-white/10 p-12 md:p-20 text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gaming-neon/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gaming-cyan/10 blur-[100px] translate-x-1/2 translate-y-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gaming-surface flex items-center justify-center text-gaming-neon neon-border">
              <Users size={32} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gaming-surface flex items-center justify-center text-gaming-cyan neon-border">
              <MessageSquare size={32} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gaming-surface flex items-center justify-center text-white neon-border">
              <Zap size={32} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            JOIN THE <span className="text-gaming-neon">NEXUS</span> COMMUNITY
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Connect with thousands of players, participate in exclusive tournaments, and get early access to game leaks and pro guides.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gaming-neon animate-pulse" />
              <span className="text-sm font-bold text-gray-300">52,401 ONLINE NOW</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gaming-cyan animate-pulse" />
              <span className="text-sm font-bold text-gray-300">1.2M MEMBERS</span>
            </div>
          </div>

          <button className="mt-12 px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gaming-neon transition-all hover:scale-105">
            JOIN DISCORD SERVER
          </button>
        </motion.div>
      </div>
    </section>
  );
};
