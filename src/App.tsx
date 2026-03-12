/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrendingGames } from "./components/TrendingGames";
import { NewsGrid } from "./components/NewsGrid";
import { CommunityCTA } from "./components/CommunityCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-gaming-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Background decorative glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gaming-neon/5 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gaming-cyan/5 blur-[120px] rounded-full -z-10" />
          
          <TrendingGames />
          <NewsGrid />
          <CommunityCTA />
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 bg-gaming-surface/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gaming-neon rounded flex items-center justify-center text-black">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/></svg>
                </div>
                <span className="text-xl font-bold tracking-tighter font-display">NEXUS</span>
              </div>
              <p className="text-gray-500 max-w-md">
                The ultimate destination for mobile gamers. Get the latest news, pro guides, and join a community of millions.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Links</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-gaming-neon transition-colors">Games Library</a></li>
                <li><a href="#" className="hover:text-gaming-neon transition-colors">News & Updates</a></li>
                <li><a href="#" className="hover:text-gaming-neon transition-colors">Pro Guides</a></li>
                <li><a href="#" className="hover:text-gaming-neon transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-gaming-neon transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gaming-neon transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gaming-neon transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-gaming-neon transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">
              © 2026 NEXUS MOBILE GAMING. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors">Discord</a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
