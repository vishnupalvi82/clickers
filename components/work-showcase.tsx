"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoEmbed from "./video-embed"
import { getLongFormVideos, getShortFormVideos } from "./video-detector"

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

const titleVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const filterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const carouselVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("youtube-video")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Get all videos
  const allLongFormVideos = getLongFormVideos()
  const allShortFormVideos = getShortFormVideos()

  // Create category-specific video collections
  const youtubeVideos = [
    // Talking Head videos
    ...allLongFormVideos.filter((v) => v.category === "talking-head").slice(0, 3),
    // Educational videos
    ...allLongFormVideos.filter((v) => v.category === "educational").slice(0, 2),
    // Documentary videos
    ...allLongFormVideos.filter((v) => v.category === "documentary").slice(0, 2),
  ]

  const reelShortVideos = [
    // Specific Explainer & Awareness videos
    ...allShortFormVideos.filter(
      (v) =>
        v.title === "Explainer & Awareness - Part 1" ||
        v.title === "Explainer & Awareness - Part 2" ||
        v.title === "Explainer & Awareness - Part 3",
    ),
    // Podcast Reel - Episode Highlight
    ...allShortFormVideos.filter((v) => v.title === "Podcast Reel - Episode Highlight"),
    // Voice Over - Part 3
    ...allShortFormVideos.filter((v) => v.title === "Voice Over Video - Part 3"),
  ]

  const podcastVideos = [
    // Podcast long-form videos
    ...allLongFormVideos.filter((v) => v.category === "podcast"),
    // Podcast reels
    ...allShortFormVideos.filter((v) => v.category === "podcast-reel"),
  ]

  // Define the 3 categories
  const categories = [
    { id: "youtube-video", label: "YouTube Video" },
    { id: "reel-short", label: "REEL/SHORT" },
    { id: "podcast", label: "PODCAST" },
  ]

  // Filter videos based on active category
  const filteredVideos =
    activeCategory === "youtube-video"
      ? youtubeVideos
      : activeCategory === "reel-short"
        ? reelShortVideos
        : podcastVideos

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -current.clientWidth : current.clientWidth
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <motion.section
      id="work"
      className="py-20 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={titleVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work Speaks{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Louder</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Browse through our collection of edited videos across YouTube, Reels/Shorts, and Podcast content
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div variants={filterVariants} className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 border-transparent"
                    : "border-gray-700 hover:border-gray-600 text-gray-300"
                }
              `}
            >
              <span>{category.label}</span>
            </Button>
          ))}
        </motion.div>

        <motion.div variants={carouselVariants} className="relative">
          {filteredVideos.length > 3 && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-gray-700 hover:bg-black/70 md:-left-5"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory"
          >
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`snap-start ${
                  video.aspectRatio === "9:16" ? "min-w-[200px] md:min-w-[250px]" : "min-w-[300px] md:min-w-[400px]"
                }`}
              >
                <div className="relative group rounded-xl overflow-hidden border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 z-10 pointer-events-none"></div>

                  <div className={video.aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-video"}>
                    <VideoEmbed
                      videoId={video.videoId}
                      title={video.title}
                      className="w-full h-full"
                      category={video.category}
                      aspectRatio={video.aspectRatio}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        {activeCategory === "youtube-video"
                          ? "YouTube Video"
                          : activeCategory === "reel-short"
                            ? "Reel/Short"
                            : "Podcast"}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300 ml-2">
                        {video.aspectRatio}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredVideos.length > 3 && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-gray-700 hover:bg-black/70 md:-right-5"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </motion.div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No videos found in this category.</p>
          </div>
        )}
      </div>
    </motion.section>
  )
}
