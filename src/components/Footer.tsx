"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Share2 } from "lucide-react";

export default function Footer() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Aashirwad Builders",
          text: "Check out Aashirwad Builders - Building the future of luxury real estate.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

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
            <a href="https://instagram.com/aashirwad_builders" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-primary/5 text-primary/80 hover:bg-primary/10 transition-colors border border-primary/10">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/919785085227" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-full bg-primary/5 text-primary/80 hover:bg-primary/10 transition-colors border border-primary/10">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
            <button onClick={handleShare} aria-label="Share" className="p-2 rounded-full bg-primary/5 text-primary/80 hover:bg-primary/10 transition-colors border border-primary/10 cursor-pointer">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-16 lg:gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-primary/90 text-sm tracking-wider uppercase mb-2">Company</span>
            <a href="#about" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">About Us</a>
            <a href="#projects" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Projects</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="font-bold text-primary/90 text-sm tracking-wider uppercase mb-2">Legal</span>
            <a href="/terms" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Terms of Service</a>
            <a href="/privacy" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Privacy Policy</a>
            <a href="/cookies" className="text-muted-foreground text-sm hover:text-primary/90 transition-colors">Cookie Policy</a>
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
