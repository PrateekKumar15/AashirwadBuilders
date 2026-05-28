"use client";

import { motion } from "motion/react";
import { ArrowUpRight, BedDouble, Bath, Maximize } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-4 sm:px-6 md:px-10 max-w-[1536px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-normal text-primary/90 mb-4 tracking-tight"
        >
          Signature Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl font-normal"
        >
          Discover our curated collection of premium real estate, where innovative design meets unparalleled comfort.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => {
          const defaultSize = project.sizes[0];
          const defaultImage = defaultSize.images[0];
          
          const totalUnits = project.sizes.reduce((acc, size) => acc + (size.totalUnits || 0), 0);
          const remainingUnits = project.sizes.reduce((acc, size) => acc + (size.remainingUnits || 0), 0);
          const isSoldOut = project.sizes.length > 0 && project.sizes.every(s => s.soldOut || s.remainingUnits === 0);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/40 backdrop-blur-md rounded-[2rem] p-4 flex flex-col gap-4 border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-[320px] rounded-[1.5rem] overflow-hidden bg-black/5 flex items-center justify-center group/img">
                {/* Ambient Blur Background */}
                <img 
                  src={defaultImage} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover filter blur-2xl opacity-35 scale-110 pointer-events-none" 
                />
                {/* Sharp Center-fitted Image */}
                <img 
                  src={defaultImage} 
                  alt={project.title} 
                  className="max-w-full max-h-full h-auto w-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-[1.03] rounded-[1rem] sm:rounded-[1.2rem]" 
                />
                <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary/90">
                  {project.location}
                </div>
                {isSoldOut ? (
                  <div className="absolute top-4 right-4 z-20 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold shadow-md">
                    Sold Out
                  </div>
                ) : totalUnits > 0 ? (
                  <div className={`absolute top-4 right-4 z-20 ${remainingUnits <= 3 ? 'bg-amber-500 animate-pulse' : 'bg-primary/90'} text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold shadow-md`}>
                    {remainingUnits} / {totalUnits} Units Left
                  </div>
                ) : null}
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-normal text-primary/95 mb-2">{project.title}</h3>
                <div className="flex items-center gap-6 text-muted-foreground text-sm mb-6">
                  <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4" /> {defaultSize.features.beds} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath className="w-4 h-4" /> {defaultSize.features.baths} Baths</span>
                  <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4" /> {defaultSize.features.sqft ? `${defaultSize.features.sqft} sqft` : `${defaultSize.features.sqyard} sqyd`}</span>
                </div>
                <Link href={`/projects/${project.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex justify-center items-center bg-primary/5 hover:bg-primary/10 text-primary/90 rounded-full py-3 gap-2 transition-colors border border-primary/10"
                  >
                    View Details <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
