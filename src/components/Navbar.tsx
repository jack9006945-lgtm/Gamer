import { Gamepad2, Search, Menu, User } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gaming-black/80 backdrop-blur-lg border-bottom border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gaming-neon rounded-lg flex items-center justify-center text-black">
            <Gamepad2 size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tighter font-display">NEXUS</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-sm font-bold text-gaming-neon">HOME</a>
          <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">GAMES</a>
          <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">NEWS</a>
          <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">GUIDES</a>
          <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">COMMUNITY</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gaming-surface rounded-lg border border-white/10 hover:border-gaming-neon/50 transition-colors">
            <User size={18} />
            <span className="text-sm font-bold">LOGIN</span>
          </button>
          <button className="lg:hidden p-2 text-gray-400">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};
