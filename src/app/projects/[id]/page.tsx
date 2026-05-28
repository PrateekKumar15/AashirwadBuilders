"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight, BedDouble, Bath, Maximize, CheckCircle2 } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const project = projectsData.find(p => p.id === id);
  
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0]">
        <h1 className="text-2xl text-primary/90">Project Not Found</h1>
      </div>
    );
  }

  const activeSize = project.sizes[activeSizeIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activeSize.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? activeSize.images.length - 1 : prev - 1));
  };

  const handleSizeChange = (idx: number) => {
    setActiveSizeIndex(idx);
    setCurrentImageIndex(0); // Reset carousel to first image of new size
  };

  return (
    <main className="min-h-screen bg-[#f0f0f0] flex flex-col items-center">
      
      {/* Top Navigation Bar */}
      <nav className="w-full max-w-[1536px] px-6 py-6 flex items-center z-10 relative">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full text-primary/90 border border-primary/10 hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-bold tracking-wider">Back</span>
        </motion.button>
      </nav>

      <section className="w-full max-w-[1536px] px-4 sm:px-6 md:px-10 pb-24 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Carousel */}
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] rounded-[3rem] overflow-hidden bg-black/5 shadow-xl border-4 border-white/40 flex items-center justify-center group">
            {/* Ambient Blur Background */}
            <AnimatePresence mode="wait">
              <motion.img 
                key={`bg-${activeSizeIndex}-${currentImageIndex}`}
                src={activeSize.images[currentImageIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover filter blur-3xl scale-110 pointer-events-none z-0"
                alt=""
              />
            </AnimatePresence>

            {/* Sharp Center-fitted Image */}
            <AnimatePresence mode="wait">
              <motion.img 
                key={`${activeSizeIndex}-${currentImageIndex}`}
                src={activeSize.images[currentImageIndex]}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="max-w-full max-h-full h-auto w-auto object-contain relative z-10 p-2 sm:p-4 rounded-[1.5rem] md:rounded-[2rem]"
                alt={`${project.title} - ${activeSize.name}`}
              />
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button onClick={prevImage} className="bg-white/70 hover:bg-white backdrop-blur-md p-3 rounded-full text-primary/90 shadow-lg transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextImage} className="bg-white/70 hover:bg-white backdrop-blur-md p-3 rounded-full text-primary/90 shadow-lg transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-20">
              {activeSize.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Details & Configuration */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <div className="inline-block bg-primary/5 px-3 py-1 rounded-full text-xs font-bold text-primary/90 w-fit mb-4 border border-primary/10">
            {project.location}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-normal text-primary/95 mb-8 tracking-tight">
            {project.title}
          </h1>

          {/* Size Selector */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-primary/60 uppercase tracking-wider mb-4">Select Configuration</h3>
            <div className="flex flex-wrap gap-3">
              {project.sizes.map((size, idx) => (
                <button
                  key={size.name}
                  onClick={() => handleSizeChange(idx)}
                  className={`px-5 py-3 rounded-full font-bold text-sm transition-all duration-300 border flex items-center gap-2 ${
                    activeSizeIndex === idx 
                      ? 'bg-primary/90 text-white border-transparent shadow-lg scale-105' 
                      : 'bg-white/50 text-primary/80 border-primary/10 hover:bg-white'
                  }`}
                >
                  <span>{size.name}</span>
                  {size.soldOut && (
                    <span className={`text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full ${
                      activeSizeIndex === idx ? 'bg-red-500 text-white' : 'bg-red-50 text-red-500'
                    }`}>
                      Sold
                    </span>
                  )}
                  {!size.soldOut && size.remainingUnits !== undefined && size.remainingUnits <= 3 && (
                    <span className={`text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full animate-pulse ${
                      activeSizeIndex === idx ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-500'
                    }`}>
                      {size.remainingUnits} Left
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Features Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSizeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/40 backdrop-blur-xl rounded-[2rem] p-6 border border-white/50 shadow-sm flex flex-col gap-6"
            >
              {/* Inventory Status Badge */}
              {(activeSize.soldOut || activeSize.remainingUnits !== undefined) && (
                <div className="flex items-center gap-2">
                  {activeSize.soldOut ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      Sold Out
                    </span>
                  ) : activeSize.remainingUnits !== undefined ? (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      activeSize.remainingUnits <= 3 
                        ? 'bg-amber-50 text-amber-600 border border-amber-100 animate-pulse' 
                        : 'bg-green-50 text-green-600 border border-green-100'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        activeSize.remainingUnits <= 3 ? 'bg-amber-500' : 'bg-green-500'
                      }`} />
                      Only {activeSize.remainingUnits} units left
                    </span>
                  ) : null}
                </div>
              )}

              <div className="flex items-center justify-between border-b border-primary/10 pb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-primary/5 p-3 rounded-full text-primary/80">
                    <BedDouble className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold text-primary/90">{activeSize.features.beds}</span>
                  <span className="text-[10px] uppercase text-muted-foreground tracking-wider">Beds</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-primary/5 p-3 rounded-full text-primary/80">
                    <Bath className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold text-primary/90">{activeSize.features.baths}</span>
                  <span className="text-[10px] uppercase text-muted-foreground tracking-wider">Baths</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="bg-primary/5 p-3 rounded-full text-primary/80">
                    <Maximize className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold text-primary/90">{activeSize.features.sqft || activeSize.features.sqyard}</span>
                  <span className="text-[10px] uppercase text-muted-foreground tracking-wider">{activeSize.features.sqft ? "Sq. Ft." : "Sq. Yd."}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {activeSize.features.description}
              </p>

              <div>
                <h4 className="text-sm font-bold text-primary/90 mb-3">Premium Amenities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSize.features.amenities.map((amenity, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-600/70" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              
              {activeSize.soldOut ? (
                <button
                  disabled
                  className="mt-4 w-full flex justify-center items-center bg-red-50 border border-red-200 text-red-500 rounded-full py-4 font-bold text-sm cursor-not-allowed shadow-none"
                >
                  Sold Out
                </button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full flex justify-center items-center bg-primary/90 hover:bg-primary text-white rounded-full py-4 gap-2 transition-colors shadow-md text-sm font-bold"
                >
                  Schedule a Viewing
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </main>
  );
}
