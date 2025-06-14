"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import VideoEmbed from "./video-embed"

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

export default function ShortsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "trending", label: "Trending" },
    { id: "tutorial", label: "Tutorial" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "comedy", label: "Comedy" },
    { id: "motivation", label: "Motivation" },
  ]

  const shorts = [
    {
      id: 1,
      title: "Quick Style Tutorial",
      category: "tutorial",
      videoId: "13jNEpKjAJbAZVB7mG8EEX-9JmY1UmCLj",
      description: "Learn this style technique in under a minute",
    },
    {
      id: 2,
      title: "Trending Challenge",
      category: "trending",
      videoId: "118kNHDAZINcEG4YpteUPY79EGGWR-WL8",
      description: "Join the latest viral challenge sweeping social media",
    },
    {
      id: 3,
      title: "Daily Motivation",
      category: "motivation",
      videoId: "1afedH4AU-EvYOAIC2K2aDfuAgMFvCwBj",
      description: "Quick motivation to start your day right",
    },
    {
      id: 4,
      title: "Life Hack Revealed",
      category: "lifestyle",
      videoId: "1kkNhe7dgOF7SKtSzixLqlh2qce2pnPm4",
      description: "This simple hack will change how you do things",
    },
    {
      id: 5,
      title: "Comedy Moment",
      category: "comedy",
      videoId: "1wUbUSXSBwwoxR1w6i4NeyJbC5Gr6sj1J",
      description: "A quick laugh to brighten your day",
    },
    {
      id: 6,
      title: "Quick Tip Tuesday",
      category: "tutorial",
      videoId: "1cS8HdH6RWqftOw1LX-u2orhu7dXEHn5-",
      description: "Essential tip you need to know now",
    },
    {
      id: 7,
      title: "Trending Sound",
      category: "trending",
      videoId: "1jVdA6L-dYQxoUS3mvNcAcFKB0s4Mwami",
      description: "Using the viral sound everyone's talking about",
    },
    {
      id: 8,
      title: "Motivational Minute",
      category: "motivation",
      videoId: "1dxQ-NnRdEbxmbYwPlh3R4ktQsuFMP9RM",
      description: "60 seconds of pure inspiration",
    },
  ]

  const filteredShorts = activeFilter === "all" ? shorts : shorts.filter((short) => short.category === activeFilter)

  return (
    <motion.section
      id="shorts"
      className="py-20 relative bg-gradient-to-b from-black to-gray-900"
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
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Shorts</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Bite-sized vertical videos optimized for social media platforms
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
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
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 border-transparent"
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filteredShorts.map((short) => (
              <motion.div
                key={short.id}
                variants={projectVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group max-w-[200px] mx-auto"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-800 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 to-purple-900/10 z-10 pointer-events-none"></div>

                  <div className="h-full">
                    <VideoEmbed
                      videoId={short.videoId}
                      title={short.title}
                      className="w-full h-full"
                      category="short-form"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent z-20 pointer-events-none">
                      <h3 className="text-sm font-bold text-white line-clamp-1">{short.title}</h3>
                      <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">{short.description}</p>
                      <span className="inline-block text-[10px] px-1.5 py-0.5 mt-1 rounded bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                        {short.category.charAt(0).toUpperCase() + short.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-medium px-6"
            size="lg"
          >
            View All Shorts
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
