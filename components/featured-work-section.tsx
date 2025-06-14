"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
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

export default function FeaturedWorkSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const videos = [
    // Long-form videos for Featured Work section
    {
      id: 1,
      title: "Professional Cinematic Edit",
      category: "cinematic",
      videoId: "1JRHTsp6rQziiP4IH7bGg597gwo3iRc5D",
      description: "Cinematic storytelling with professional editing techniques",
    },
    {
      id: 2,
      title: "Corporate Brand Story",
      category: "corporate",
      videoId: "165c4U8x4OC9-VJLjnyYBoNe0M4_QkkeS",
      description: "Professional corporate video with brand messaging",
    },
    {
      id: 3,
      title: "Event Highlight Reel",
      category: "event",
      videoId: "1dZuMt4U93NdTTAhV4ieeULDgs-97hd--",
      description: "Dynamic event coverage with key moments",
    },
    {
      id: 4,
      title: "Product Showcase",
      category: "product",
      videoId: "1BQMbX5xiB-fsQoJ2RA2bUkgK0yVn1FJh",
      description: "Detailed product showcase with features highlight",
    },
    {
      id: 5,
      title: "Interview Series",
      category: "interview",
      videoId: "1AYIWPGM5BfhpsRZywYRjTiaIv_57BWQz",
      description: "Professional interview with expert insights",
    },
    {
      id: 6,
      title: "Documentary Style",
      category: "documentary",
      videoId: "1S3lV--O8vcH7hvWu6yl-jFZukG-g4HcD",
      description: "In-depth documentary storytelling approach",
    },
    {
      id: 7,
      title: "Educational Content",
      category: "educational",
      videoId: "10QAVtCyp8Bx-EcF1BTU36f-5djpOWHtB",
      description: "Informative educational video with clear explanations",
    },
    {
      id: 8,
      title: "Promotional Campaign",
      category: "promotional",
      videoId: "1YI4OeqvxnotKqd4cevmLTHQMgqxhjrxb",
      description: "Engaging promotional content for marketing",
    },
  ]

  const categories = [
    { id: "all", label: "All" },
    { id: "cinematic", label: "Cinematic" },
    { id: "corporate", label: "Corporate" },
    { id: "event", label: "Event" },
    { id: "product", label: "Product" },
    { id: "interview", label: "Interview" },
    { id: "documentary", label: "Documentary" },
    { id: "educational", label: "Educational" },
    { id: "promotional", label: "Promotional" },
  ]

  const filteredVideos = activeCategory === "all" ? videos : videos.filter((video) => video.category === activeCategory)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -current.clientWidth : current.clientWidth
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <motion.section
      id="featured-work"
      className="py-20 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={titleVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our showcase of professional long-form video productions across various categories
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
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-gray-700 hover:bg-black/70 md:-left-5"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

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
                className="min-w-[300px] md:min-w-[400px] snap-start"
              >
                <div className="relative group rounded-xl overflow-hidden border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 z-10 pointer-events-none"></div>

                  <div className="aspect-video overflow-hidden">
                    <VideoEmbed
                      videoId={video.videoId}
                      title={video.title}
                      className="w-full h-full"
                      category={video.category}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <p className="text-sm text-gray-300 mt-1 line-clamp-2">{video.description}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-gray-700 hover:bg-black/70 md:-right-5"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
