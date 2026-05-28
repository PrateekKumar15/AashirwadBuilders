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
          className="text-4xl md:text-5xl font-normal text-[rgba(30,50,90,0.9)] mb-4 tracking-tight"
        >
          Signature Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#5E6470] max-w-2xl font-normal"
        >
          Discover our curated collection of premium real estate, where innovative design meets unparalleled comfort.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => {
          // Use the first size as the default display for the card
          const defaultSize = project.sizes[0];
          const defaultImage = defaultSize.images[0];

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/40 backdrop-blur-md rounded-[2rem] p-4 flex flex-col gap-4 border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-[280px] rounded-[1.5rem] overflow-hidden">
                <img src={defaultImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[rgba(30,50,90,0.9)]">
                  {project.location}
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-normal text-[rgba(30,50,90,0.95)] mb-2">{project.title}</h3>
                <div className="flex items-center gap-6 text-[#5E6470] text-sm mb-6">
                  <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4" /> {defaultSize.features.beds} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath className="w-4 h-4" /> {defaultSize.features.baths} Baths</span>
                  <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4" /> {defaultSize.features.sqft} sqft</span>
                </div>
                <Link href={`/projects/${project.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex justify-center items-center bg-[rgba(30,50,90,0.05)] hover:bg-[rgba(30,50,90,0.1)] text-[rgba(30,50,90,0.9)] rounded-full py-3 gap-2 transition-colors border border-[rgba(30,50,90,0.1)]"
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
