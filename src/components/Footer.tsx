"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Globe, MessageSquare, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white/40 backdrop-blur-sm rounded-t-[3rem] border-t border-white/40 mt-12 overflow-hidden px-4 sm:px-6 md:px-10 py-16">
      <div className="max-w-[1536px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col max-w-sm">
          <span className="font-regular tracking-tighter text-3xl text-[rgba(30,50,90,0.95)] mb-4">
            AASHIRWAD BUILDERS
          </span>
          <p className="text-[#5E6470] font-normal leading-relaxed text-sm mb-6">
            Building the future of luxury real estate with an unwavering commitment to quality and architectural innovation.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full bg-[rgba(30,50,90,0.05)] text-[rgba(30,50,90,0.8)] hover:bg-[rgba(30,50,90,0.1)] transition-colors border border-[rgba(30,50,90,0.1)]">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-[rgba(30,50,90,0.05)] text-[rgba(30,50,90,0.8)] hover:bg-[rgba(30,50,90,0.1)] transition-colors border border-[rgba(30,50,90,0.1)]">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-[rgba(30,50,90,0.05)] text-[rgba(30,50,90,0.8)] hover:bg-[rgba(30,50,90,0.1)] transition-colors border border-[rgba(30,50,90,0.1)]">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex gap-16 lg:gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[rgba(30,50,90,0.9)] text-sm tracking-wider uppercase mb-2">Company</span>
            <a href="#about" className="text-[#5E6470] text-sm hover:text-[rgba(30,50,90,0.9)] transition-colors">About Us</a>
            <a href="#projects" className="text-[#5E6470] text-sm hover:text-[rgba(30,50,90,0.9)] transition-colors">Projects</a>
            <a href="#careers" className="text-[#5E6470] text-sm hover:text-[rgba(30,50,90,0.9)] transition-colors">Careers</a>
            <a href="#press" className="text-[#5E6470] text-sm hover:text-[rgba(30,50,90,0.9)] transition-colors">Press</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[rgba(30,50,90,0.9)] text-sm tracking-wider uppercase mb-2">Legal</span>
            <a href="#terms" className="text-[#5E6470] text-sm hover:text-[rgba(30,50,90,0.9)] transition-colors">Terms of Service</a>
            <a href="#privacy" className="text-[#5E6470] text-sm hover:text-[rgba(30,50,90,0.9)] transition-colors">Privacy Policy</a>
            <a href="#cookies" className="text-[#5E6470] text-sm hover:text-[rgba(30,50,90,0.9)] transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1536px] mx-auto border-t border-[rgba(30,50,90,0.1)] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-[#5E6470] font-normal">&copy; {new Date().getFullYear()} Aashirwad Builders. All rights reserved.</span>
        
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-xs font-bold text-[rgba(30,50,90,0.8)] uppercase tracking-wider bg-white/50 px-4 py-2 rounded-full border border-white/60 hover:bg-white transition-colors"
        >
          Back to Top <ArrowUpRight className="w-3 h-3 transform -rotate-45" />
        </motion.button>
      </div>
    </footer>
  );
}
