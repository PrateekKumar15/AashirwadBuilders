"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Tag } from "lucide-react";
import Link from "next/link";
import { projectsData, ProjectType } from "@/data/projects";

type Category = "All" | "Villas" | "Apartments" | "Marketplace";

const categories: Category[] = ["All", "Villas", "Apartments", "Marketplace"];

const mapCategoryToType = (category: Category): ProjectType | "All" => {
  switch (category) {
    case "Villas": return "Villa";
    case "Apartments": return "Apartment";
    case "Marketplace": return "Marketplace";
    default: return "All";
  }
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.type === mapCategoryToType(activeCategory);
  });

  return (
    <section id="projects" className="w-full py-24 px-4 sm:px-6 md:px-10 max-w-[1536px] mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
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
          className="text-lg text-muted-foreground max-w-2xl font-normal mb-8"
        >
          Discover our curated collection of premium real estate, where innovative design meets unparalleled comfort. Discover an exclusive selection of meticulously crafted apartments, penthouses, commercial spaces, and villas.
        </motion.p>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 bg-white/50 backdrop-blur-md p-2 rounded-full border border-primary/10 shadow-sm"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary/90 text-white shadow-md scale-105"
                  : "bg-transparent text-primary/70 hover:bg-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const defaultImage = project.sizes.find(s => s.images?.length > 0)?.images[0]
              || "https://placehold.co/600x400/eeeeee/999999?text=No+Image";

            const totalUnits = project.sizes.reduce((acc, size) => acc + (size.totalUnits || 0), 0);
            const remainingUnits = project.sizes.reduce((acc, size) => acc + (size.remainingUnits || 0), 0);
            const isSoldOut = project.sizes.length > 0 && project.sizes.every(s => s.soldOut || s.remainingUnits === 0);

            // Determine if it's customizable for tag display
            const isCustomizable = project.type === "Villa" || project.sizes.some(s => s.customizable);

            // Compute minimum price across all sizes by stripping non-numeric chars
            const parsePrice = (p: string) => parseFloat(p.replace(/[^0-9.]/g, "")) || 0;
            const allPrices = project.sizes.map(s => s.price);
            const minPrice = allPrices.reduce((min, p) => parsePrice(p) < parsePrice(min) ? p : min, allPrices[0]);

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white/40 backdrop-blur-md rounded-[2.5rem] p-5 sm:p-6 flex flex-col gap-6 border border-white/20 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-black/5 flex items-center justify-center group/img">
                  {/* Ambient Blur Background */}
                  <img 
                    src={defaultImage} 
                    alt={`${project.title} background blur`} 
                    className="absolute inset-0 w-full h-full object-cover filter blur-2xl opacity-35 scale-110 pointer-events-none" 
                  />
                  {/* Sharp Center-fitted Image */}
                  <img 
                    src={defaultImage} 
                    alt={project.title} 
                    className="max-w-full max-h-full h-auto w-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-[1.03] rounded-[1rem] sm:rounded-[1.2rem]" 
                  />
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary/90 shadow-sm">
                      {project.location}
                    </div>
                    <div className="bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-extrabold text-white shadow-sm w-fit">
                      {project.type}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                    {isSoldOut ? (
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold shadow-md">
                        Sold Out
                      </div>
                    ) : totalUnits > 0 ? (
                      <div className={`${remainingUnits <= 3 ? 'bg-amber-500 animate-pulse' : 'bg-primary/90'} text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold shadow-md`}>
                        {remainingUnits} / {totalUnits} Left
                      </div>
                    ) : null}
                  </div>
                  
                  {/* Price Tag Overlay at Bottom */}
                  <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2">
                    <div className="bg-primary/10 p-1.5 rounded-full flex-shrink-0">
                      <Tag className="w-3.5 h-3.5 text-primary/80" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase leading-tight">Starting from</span>
                      <span className="text-sm font-extrabold text-primary/90 leading-tight whitespace-nowrap">{minPrice}</span>
                    </div>
                  </div>
                </div>

                <div className="px-2 sm:px-4 pb-2">
                  <h3 className="text-3xl font-normal text-primary/95 mb-3">{project.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {project.sizes.map((size, sIdx) => (
                      <span
                        key={sIdx}
                        className="pill pill-muted"
                      >
                        {size.name}
                      </span>
                    ))}
                    {isCustomizable && (
                      <span className="pill ml-auto" style={{ background: "#fffbeb", color: "#b45309", borderColor: "#fcd34d" }}>
                        Customizable
                      </span>
                    )}
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
        </AnimatePresence>
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground"
          >
            <p className="text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
