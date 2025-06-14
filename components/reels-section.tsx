"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Smartphone } from "lucide-react"
import VideoEmbed from "./video-embed"
import { getShortFormVideos, getShortFormCategories } from "./video-detector"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const reelVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function ReelsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const allShortFormVideos = getShortFormVideos()
  const dynamicCategories = getShortFormCategories()

  const filters = [{ id: "all", label: "All", count: allShortFormVideos.length }, ...dynamicCategories]

  const filteredReels =
    activeFilter === "all" ? allShortFormVideos : allShortFormVideos.filter((reel) => reel.category === activeFilter)

  return (
    <motion.section
      id="reels"
      className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Reels & Shorts
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vertical videos (9:16) optimized for Instagram, TikTok, YouTube Shorts, and social media
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              size="sm"
              className={`
                text-xs md:text-sm
                ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 border-transparent"
                    : "border-gray-700 hover:border-gray-600 text-gray-300"
                }
              `}
            >
              {filter.label}
              <span className="ml-1 text-xs opacity-70">({filter.count})</span>
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
          >
            {filteredReels.map((reel) => (
              <motion.div
                key={reel.id}
                variants={reelVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-blue-900/10 z-10 pointer-events-none"></div>

                  {/* 9:16 Aspect Ratio Container */}
                  <div className="aspect-[9/16] overflow-hidden">
                    <VideoEmbed
                      videoId={reel.videoId}
                      title={reel.title}
                      className="w-full h-full"
                      category="short-form"
                      aspectRatio="9:16"
                    />
                  </div>

                  {/* Reel Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 pointer-events-none">
                    <div className="flex items-end justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-white line-clamp-1 mb-1">{reel.title}</h3>
                        <p className="text-xs text-gray-300 line-clamp-1 mb-2">{reel.description}</p>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white">
                            {reel.category
                              .split("-")
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join(" ")}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-700 text-gray-300 flex items-center gap-1">
                            <Smartphone className="h-2 w-2" />
                            9:16
                          </span>
                        </div>
                      </div>
                      <div className="ml-2 flex flex-col items-center gap-1 opacity-60">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredReels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No reels found in this category.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 text-white font-medium px-6"
            size="lg"
          >
            View All Reels
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
