"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-24 px-4 sm:px-6 md:px-10 max-w-[1536px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
          >
            <span className="text-[12px] uppercase tracking-wider font-bold text-primary/80">
              Our Legacy
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary/95 mb-6 tracking-tight leading-[1.1]"
          >
            Crafting architectural masterpieces since 2005.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-6 leading-relaxed font-normal"
          >
            At Aashirwad Builders, we believe that a home is more than just a physical structure; it's a foundation for life's greatest moments. With over two decades of expertise in luxury real estate, we merge innovative engineering with timeless design.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground mb-10 leading-relaxed font-normal"
          >
            Our commitment is to transform rigid structural concepts into fluid, living environments that elevate the human experience. This is where your search for the perfect property ends, and luxury truly finds a home. With Aashirwad Builders, you are not just buying a house; you are stepping into a community built on trust, architectural brilliance, and an uncompromising commitment to quality.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center bg-primary/80 text-white rounded-full pl-6 pr-6 py-3 gap-3 hover:bg-primary transition-colors group shadow-md"
          >
            <span className="text-sm font-normal">Read Our Story</span>
            <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </motion.button>
        </div>

        {/* Staggered Imagery Grid */}
        <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] flex items-center justify-center">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute z-10 w-[60%] h-[70%] left-[5%] top-[10%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#f0f0f0]"
          >
            <img src="/property_2_1778505977306.png" alt="Architecture" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Secondary Overlapping Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-20 w-[50%] h-[55%] right-[5%] bottom-[5%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#f0f0f0]"
          >
            <img src="/property_1_1778505958766.png" alt="Interior" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Decorative glass element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute z-30 top-[5%] right-[10%] bg-white/40 backdrop-blur-xl p-4 rounded-2xl border border-white/30 shadow-xl"
          >
            <div className="text-3xl font-normal text-primary/90 text-center">20+</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider text-center mt-1">Years Experience</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
