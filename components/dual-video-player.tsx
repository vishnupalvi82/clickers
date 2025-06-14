"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DualVideoPlayerProps {
  primaryVideoId: string
  secondaryVideoId: string
  className?: string
}

export default function DualVideoPlayer({ primaryVideoId, secondaryVideoId, className = "" }: DualVideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [currentVideo, setCurrentVideo] = useState<"primary" | "secondary">("primary")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const primaryIframeRef = useRef<HTMLIFrameElement>(null)
  const secondaryIframeRef = useRef<HTMLIFrameElement>(null)
  const [videoDurations] = useState({
    primary: 30000, // 30 seconds for showreel
    secondary: 25000, // 25 seconds for slideshow
  })

  useEffect(() => {
    let timer: NodeJS.Timeout

    const switchVideo = () => {
      setIsTransitioning(true)

      // Fade out current video and fade in next video
      setTimeout(() => {
        setCurrentVideo((prev) => (prev === "primary" ? "secondary" : "primary"))
        setIsTransitioning(false)
      }, 1000) // 1 second fade transition
    }

    // Set timer based on current video duration
    const duration = currentVideo === "primary" ? videoDurations.primary : videoDurations.secondary
    timer = setTimeout(switchVideo, duration)

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [currentVideo, videoDurations])

  const toggleMute = () => {
    const activeIframe = currentVideo === "primary" ? primaryIframeRef.current : secondaryIframeRef.current

    if (activeIframe) {
      const message = isMuted
        ? '{"event":"command","func":"unMute","args":""}'
        : '{"event":"command","func":"mute","args":""}'
      activeIframe.contentWindow?.postMessage(message, "*")
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Primary Video (Showreel) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentVideo === "primary" && !isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <iframe
          ref={primaryIframeRef}
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${primaryVideoId}?autoplay=1&mute=1&loop=1&playlist=${primaryVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&start=0`}
          title="45Clickers Showreel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Secondary Video (Main Slideshow) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentVideo === "secondary" && !isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <iframe
          ref={secondaryIframeRef}
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${secondaryVideoId}?autoplay=1&mute=1&loop=1&playlist=${secondaryVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&start=0`}
          title="Main Slideshow"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Video Labels */}
      <div className="absolute top-4 left-4 z-30">
        <span
          className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg transition-opacity duration-300 ${
            currentVideo === "primary" ? "opacity-100" : "opacity-0"
          }`}
        >
          SHOWREEL
        </span>
        <span
          className={`bg-gradient-to-r from-green-600 to-teal-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg transition-opacity duration-300 ${
            currentVideo === "secondary" ? "opacity-100" : "opacity-0"
          }`}
        >
          SLIDESHOW
        </span>
      </div>

      {/* Video Progress Indicator */}
      <div className="absolute bottom-4 left-4 right-16 z-30">
        <div className="bg-black/40 backdrop-blur-sm rounded-full p-2">
          <div className="flex items-center gap-2 text-white text-xs">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentVideo === "primary" ? "bg-purple-500" : "bg-gray-500"
              }`}
            />
            <span className="text-[10px]">Showreel</span>
            <div className="w-px h-3 bg-gray-600 mx-1" />
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentVideo === "secondary" ? "bg-green-500" : "bg-gray-500"
              }`}
            />
            <span className="text-[10px]">Slideshow</span>
          </div>
        </div>
      </div>

      {/* Custom Mute/Unmute Button */}
      <div className="absolute bottom-4 right-4 z-30">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMute}
          className="bg-black/60 border-gray-600 hover:bg-black/80 text-white backdrop-blur-sm"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-20 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Overlay to prevent right-click and other interactions */}
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  )
}
