"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  BedDouble,
  Bath,
  Maximize,
  CheckCircle2,
  Info,
  Building2,
  Sparkles,
} from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const project = projectsData.find((p) => p.id === id);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"specs" | "amenities">("specs");

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--color-surface-alt)" }}>
        <h1 className="text-2xl" style={{ color: "var(--color-primary)" }}>Project Not Found</h1>
      </div>
    );
  }

  const activeSize = project.sizes[activeSizeIndex];
  const activeImages =
    activeSize.images && activeSize.images.length > 0
      ? activeSize.images
      : ["https://placehold.co/1920x1080/d4d0cb/888888?text=Image+Coming+Soon"];
  const heroImage = activeImages[0];

  // Only Apartments and Marketplaces have shared project amenities
  const hasProjectAmenities =
    project.type !== "Villa" &&
    project.commonAmenities &&
    project.commonAmenities.length > 0;

  const handleSizeChange = (idx: number) => {
    setActiveSizeIndex(idx);
    setCurrentImageIndex(0);
    setActiveTab("specs");
  };

  const nextImage = () =>
    setCurrentImageIndex((p) => (p + 1) % activeImages.length);
  const prevImage = () =>
    setCurrentImageIndex((p) => (p === 0 ? activeImages.length - 1 : p - 1));

  const isCustomizable = project.type === "Villa" || activeSize.customizable;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  return (
    <main className="min-h-screen no-scrollbar" style={{ background: "var(--color-surface)" }}>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Ambient blurred background fill so letterbox areas aren't white */}
        {/* <AnimatePresence mode="wait">
          <motion.img
            key={`blur-${heroImage}`}
            src={heroImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            style={{ objectFit: "cover", filter: "blur(40px)", transform: "scale(1.2)", opacity: 0.6 }}
            aria-hidden="true"
            alt=""
          />
        </AnimatePresence> */}

        {/* Sharp full-image (object-contain – no crop) */}
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImage}
            src={heroImage}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute  inset-0 w-full "
            style={{ objectFit: "cover", objectPosition: "center", height: "90vh" }}
            alt={project.title}
          />
        </AnimatePresence>

        {/* Gradient overlay
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/72 z-10" /> */}

        {/* Back button */}
        <nav className="absolute top-0 left-0 w-full px-6 sm:px-10 py-8 z-20">
          <motion.button
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="section-label" style={{ color: "inherit", letterSpacing: "0.2em" }}>
              All Projects
            </span>
          </motion.button>
        </nav>

        {/* Hero text content */}
        <div className="absolute bottom-0 left-0 w-full z-20 px-6 sm:px-10 md:px-16 pb-14">
          {/* Location + type */}
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label  px-3 py-1 rounded-full bg-slate-200">{project.location}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="section-label text-white/90 px-3 py-1 rounded-full bg-slate-200">{project.type}</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-7 tracking-tight leading-none"
            style={{ fontFamily: "var(--font-helvetica)" }}
          >
            {project.title}
          </h1>

          {/* Size pill selector on hero */}
          <div className="flex flex-wrap gap-3">
            {project.sizes.map((size, idx) => (
              <button
                key={idx}
                onClick={() => handleSizeChange(idx)}
                className={`pill transition-all duration-300 ${
                  activeSizeIndex === idx
                    ? "bg-white border-white text-primary scale-105 shadow-xl"
                    : "bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20"
                }`}
                style={{ fontSize: "0.75rem", padding: "0.5rem 1.1rem" }}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-2 text-white/40">
          <div className="w-px h-12 bg-white/20" />
          <span className="section-label text-white/40" style={{ writingMode: "vertical-rl" }}>
            scroll
          </span>
        </div>
      </section>

      {/* ─── KEY STATS STRIP ────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSizeIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          style={{ background: "var(--color-primary)" }}
          className="w-full"
        >
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 md:px-16 py-6 flex flex-wrap items-center gap-10 md:gap-16">
            {activeSize.features.beds > 0 && (
              <div className="flex items-center gap-3">
                <BedDouble className="w-5 h-5 text-white/50" />
                <div>
                  <div className="text-xl font-bold text-white">{activeSize.features.beds}</div>
                  <div className="section-label text-white/60">Bedrooms</div>
                </div>
              </div>
            )}
            {activeSize.features.baths > 0 && (
              <div className="flex items-center gap-3">
                <Bath className="w-5 h-5 text-white/50" />
                <div>
                  <div className="text-xl font-bold text-white">{activeSize.features.baths}</div>
                  <div className="section-label text-white/60">Bathrooms</div>
                </div>
              </div>
            )}
            {(activeSize.features.sqft || activeSize.features.sqyard) && (
              <div className="flex items-center gap-3">
                <Maximize className="w-5 h-5 text-white/50" />
                <div>
                  <div className="text-xl font-bold text-white">
                    {activeSize.features.sqft || activeSize.features.sqyard}
                  </div>
                  <div className="section-label text-white/60">
                    {activeSize.features.sqft ? "Sq. Ft." : "Sq. Yd."}
                  </div>
                </div>
              </div>
            )}

            {/* Price (pushed right) */}
            <div className="md:ml-auto flex flex-col items-end">
              <div className="text-2xl font-extrabold text-white"><p className=" text-xs font-thin text-white/60">Starting From</p> {activeSize.price}</div>
              {isCustomizable && (
                <div className="section-label text-white/60">* Base Price</div>
              )}
            </div>

            {/* Availability badge */}
            {(activeSize.soldOut || activeSize.remainingUnits !== undefined) && (
              <div>
                {activeSize.soldOut ? (
                  <span className="pill bg-red-500/20 border-red-400/40 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse mr-1.5" />
                    Sold Out
                  </span>
                ) : activeSize.totalUnits !== undefined ? (
                  <span
                    className={`pill text-white ${
                      (activeSize.remainingUnits || 0) <= 3
                        ? "bg-amber-500/20 border-amber-400/40 animate-pulse"
                        : "bg-green-500/20 border-green-400/40"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                        (activeSize.remainingUnits || 0) <= 3 ? "bg-amber-400" : "bg-green-400"
                      }`}
                    />
                    {activeSize.remainingUnits} / {activeSize.totalUnits} Units
                  </span>
                ) : null}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ─── MAIN CONTENT ───────────────────────────────────────── */}
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 md:px-16 py-20 flex flex-col xl:flex-row gap-16 xl:gap-24">

        {/* LEFT: Gallery + description + customisation notice */}
        <div className="w-full xl:w-3/5 flex flex-col gap-10">

          {/* Gallery */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`gallery-${activeSizeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              {/* Main image */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden group" style={{ boxShadow: "var(--shadow-lg)" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`main-${currentImageIndex}`}
                    src={activeImages[currentImageIndex]}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    drag={activeImages.length > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(_, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -8000) nextImage();
                      else if (swipe > 8000) prevImage();
                    }}
                    className={`w-full h-full object-cover ${activeImages.length > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
                    alt={`${project.title} – ${activeSize.name} – view ${currentImageIndex + 1}`}
                  />
                </AnimatePresence>

                {/* Nav arrows (md+) */}
                {activeImages.length > 1 && (
                  <div className="absolute inset-0 hidden md:flex items-center justify-between px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <button
                      onClick={prevImage}
                      className="pointer-events-auto p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                      style={{ background: "var(--glass-overlay)", boxShadow: "var(--shadow-md)" }}
                    >
                      <ChevronLeft className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="pointer-events-auto p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                      style={{ background: "var(--glass-overlay)", boxShadow: "var(--shadow-md)" }}
                    >
                      <ChevronRight className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                    </button>
                  </div>
                )}

                {/* Counter badge */}
                {activeImages.length > 1 && (
                  <div
                    className="absolute bottom-4 right-5 z-10 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}
                  >
                    {currentImageIndex + 1} / {activeImages.length}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {activeImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
                  {activeImages.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className="flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden transition-all"
                      style={{
                        border: `2px solid ${idx === currentImageIndex ? "var(--color-primary)" : "transparent"}`,
                        opacity: idx === currentImageIndex ? 1 : 0.55,
                        transform: idx === currentImageIndex ? "scale(1.06)" : "scale(1)",
                        boxShadow: idx === currentImageIndex ? "var(--shadow-md)" : "none",
                      }}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeSizeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg leading-relaxed font-normal"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              {activeSize.features.description}
            </motion.p>
          </AnimatePresence>

          {/* Customisation notice – only for villas */}
          {isCustomizable && activeSize.customizationNote && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4 p-5 rounded-2xl"
              style={{ background: "#fffbeb", border: "1px solid #fcd34d" }}
            >
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "#92400e" }}>Customizable Requirements</p>
                <p className="text-sm leading-relaxed" style={{ color: "#b45309" }}>
                  {activeSize.customizationNote}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* RIGHT: Tab panel + CTA + size switcher */}
        <div className="w-full xl:w-2/5 flex flex-col gap-8">

          {/* Tab switcher */}
          <div className="card-glass flex p-1.5 gap-1">
            <button
              onClick={() => setActiveTab("specs")}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300"
              style={
                activeTab === "specs"
                  ? { background: "var(--color-primary)", color: "#fff", boxShadow: "var(--shadow-md)" }
                  : { color: "var(--text-subtle)" }
              }
            >
              <Sparkles className="w-4 h-4" />
              Unit Features
            </button>

            {/* Project Amenities tab – only for Apartments and Marketplaces */}
            {hasProjectAmenities && (
              <button
                onClick={() => setActiveTab("amenities")}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300"
                style={
                  activeTab === "amenities"
                    ? { background: "var(--color-primary)", color: "#fff", boxShadow: "var(--shadow-md)" }
                    : { color: "var(--text-subtle)" }
                }
              >
                <Building2 className="w-4 h-4" />
                Project Amenities
              </button>
            )}
          </div>

          {/* Tab content with 2-column grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSizeIndex}-${activeTab}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="card-glass overflow-hidden"
            >
              {activeTab === "specs" && activeSize.features.amenities.length > 0 && (
                <div className="p-6">
                  <p className="section-label mb-5">Unit specifications</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-0">
                    {activeSize.features.amenities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.035 }}
                        className="feature-item"
                      >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-primary)", opacity: 0.6 }} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "amenities" && hasProjectAmenities && (
                <div className="p-6">
                  <p className="section-label mb-5">Shared project amenities</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-0">
                    {project.commonAmenities!.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.035 }}
                        className="feature-item"
                      >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-success)", opacity: 0.8 }} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          {activeSize.soldOut ? (
            <button className="btn-disabled">Sold Out</button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              Schedule a Viewing
            </motion.button>
          )}

          {/* Other configurations */}
          {project.sizes.length > 1 && (
            <div className="card-glass p-5">
              <p className="section-label mb-4">Other Configurations</p>
              <div className="flex flex-col gap-3">
                {project.sizes.map((size, idx) =>
                  idx === activeSizeIndex ? null : (
                    <button
                      key={idx}
                      onClick={() => handleSizeChange(idx)}
                      className="flex items-center justify-between px-5 py-3.5 rounded-xl transition-all hover:scale-[1.01] group"
                      style={{ background: "var(--glass-overlay)", border: "1px solid var(--border)" }}
                    >
                      <span className="font-bold text-sm" style={{ color: "var(--color-foreground)" }}>
                        {size.name}
                      </span>
                      <span className="text-sm font-extrabold transition-colors" style={{ color: "var(--color-primary)" }}>
                        {size.price}
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
