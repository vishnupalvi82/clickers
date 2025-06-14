"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import VideoEmbed from "./video-embed"
import { getLongFormVideos, getShortFormVideos, getLongFormCategories, getShortFormCategories } from "./video-detector"

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

const projectVariants = {
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

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const allLongFormVideos = getLongFormVideos()
  const allShortFormVideos = getShortFormVideos()
  const allVideos = [...allLongFormVideos, ...allShortFormVideos]

  // Create "All" category with diverse videos (no duplicates) - 8 Long + 4 Short
  const allCategoryVideos = [
    // Long-form videos (8 total)
    allLongFormVideos.find((video) => video.title === "Awwebworld Motion Video"), // Promotional
    allLongFormVideos.find((video) => video.title === "Talking Head Video - Educational Content"), // Another talking head
    allLongFormVideos.find((video) => video.category === "podcast"),
    allLongFormVideos.find((video) => video.category === "talking-head"),
    allLongFormVideos.find((video) => video.category === "educational"),
    allLongFormVideos.find((video) => video.category === "documentary"),
    allLongFormVideos.find((video) => video.category === "interview"),
    allLongFormVideos.find((video) => video.category === "cinematic"),

    // Short-form videos (4 total)
    allShortFormVideos.find((video) => video.title === "Explainer & Awareness - Part 1"),
    allShortFormVideos.find((video) => video.title === "Explainer & Awareness - Part 2"),
    allShortFormVideos.find((video) => video.title === "Podcast Reel - Episode Highlight"),
    allShortFormVideos.find((video) => video.title === "Voice Over Video - Part 3"),
  ].filter(Boolean) // Remove any undefined values

  // Create filters
  const filters = [
    { id: "all", label: "All" },
    { id: "long-form", label: "Long-form Content" },
    { id: "short-form", label: "Reels & Shorts" },
    ...getLongFormCategories().map((cat) => ({ id: cat.id, label: cat.label })),
    ...getShortFormCategories().map((cat) => ({ id: cat.id, label: cat.label })),
  ]

  // Filter logic
  const filteredProjects =
    activeFilter === "all"
      ? allCategoryVideos
      : activeFilter === "long-form"
        ? allLongFormVideos
        : activeFilter === "short-form"
          ? allShortFormVideos
          : allVideos.filter((project) => project.category === activeFilter)

  return (
    <motion.section
      id="portfolio"
      className="py-20 relative"
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
            Portfolio{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our diverse collection of video projects across different categories and formats
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 border-transparent"
                    : "border-gray-700 hover:border-gray-600 text-gray-300"
                }
              `}
            >
              {filter.label}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className={`group ${project.aspectRatio === "9:16" ? "max-w-sm mx-auto" : ""}`}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 z-10 pointer-events-none"></div>

                  <div className={project.aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-video"}>
                    <VideoEmbed
                      videoId={project.videoId}
                      title={project.title}
                      className="w-full h-full"
                      category={project.category}
                      aspectRatio={project.aspectRatio}
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300 capitalize">
                        {project.category
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-xs px-2 py-1 rounded bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                          {project.type === "long-form" ? "Long-form" : "Short-form"}
                        </span>
                        <span className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300 ml-2">
                          {project.aspectRatio}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No videos found for this filter.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6"
            size="lg"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
