"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import DualVideoPlayer from "./dual-video-player"

export default function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return

      const { left, top, width, height } = videoRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      videoRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`
    }

    const handleMouseLeave = () => {
      if (!videoRef.current) return
      videoRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"
    }

    const element = videoRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const videoVariant = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    show: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.6,
      },
    },
  }

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[-1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-[-1]" />
      </div>

      {/* Content with enhanced backdrop for better visibility over video background */}
      <div className="container mx-auto px-4 relative z-10 backdrop-blur-[1px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
            {/* Enhanced text with better contrast */}
            <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let's Take Editing to the{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Next Level
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-lg"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
            >
              With{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Powerful Visuals</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-500/30 -z-10"></span>
              </span>{" "}
              and{" "}
              <span className="relative inline-block">
                <span className="relative z-10">AI Precision</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/30 -z-10"></span>
              </span>
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://www.youtube.com/@45_clickers" target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 py-6"
                  size="lg"
                >
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800 font-medium px-6 py-6"
                size="lg"
              >
                Download Portfolio
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            ref={videoRef}
            variants={videoVariant}
            initial="hidden"
            animate="show"
            className="relative transition-transform duration-300 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-20 pointer-events-none"></div>

              {/* Dual Video Player with Auto-Switching */}
              <div className="aspect-video">
                <DualVideoPlayer
                  primaryVideoId="csH4dpVPWWA"
                  secondaryVideoId="34X-8BmT_EA"
                  className="w-full h-full"
                />
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none"></div>
            </div>

            {/* Decorative elements with enhanced visibility */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/30 rounded-full blur-xl"></div>

            {/* Floating particles */}
            <div className="absolute top-1/4 -right-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 -left-6 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-12 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
