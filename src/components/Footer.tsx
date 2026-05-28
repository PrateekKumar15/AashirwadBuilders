"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Globe, MessageSquare, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white/40 backdrop-blur-sm rounded-t-[3rem] border-t border-white/40 mt-12 overflow-hidden px-4 sm:px-6 md:px-10 py-16">
      <div className="max-w-[1536px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col max-w-sm">
          <div className="mb-6 flex ">
            <img src="/logo.png" alt="Aashirwad Builders" className="h-16 w-auto object-contain rounded-full mix-blend-multiply" />
            <div className="ml-5 self-center text-primary text-lg md:text-2xl font-medium ">AASHIRWAD BUILDERS</div>
          </div>
          <p className="text-muted-foreground font-normal leading-relaxed text-sm mb-6">
            Building the future of luxury real estate with an unwavering commitment to quality and architectural innovation.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full bg-primary/5 text-primary/80 hover:bg-primary/10 transition-colors border border-primary/10">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/5 text-primary/80 hover:bg-primary/10 transition-colors border border-primary/10">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/5 text-primary/80 hover:bg-primary/10 transition-colors border border-primary/10">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex gap-16 lg:gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-primary/90 text-sm tracking-wider uppercase mb-2">Company</span>
            <a href="#about" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">About Us</a>
            <a href="#projects" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Projects</a>
            <a href="#careers" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Careers</a>
            <a href="#press" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Press</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="font-bold text-primary/90 text-sm tracking-wider uppercase mb-2">Legal</span>
            <a href="#terms" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Terms of Service</a>
            <a href="#privacy" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Privacy Policy</a>
            <a href="#cookies" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1536px] mx-auto border-t border-primary/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-muted-foreground font-normal">&copy; {new Date().getFullYear()} Aashirwad Builders. All rights reserved.</span>
        
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-xs font-bold text-primary/80 uppercase tracking-wider bg-white/50 px-4 py-2 rounded-full border border-white/60 hover:bg-white transition-colors"
        >
          Back to Top <ArrowUpRight className="w-3 h-3 transform -rotate-45" />
        </motion.button>
      </div>
    </footer>
  );
}
