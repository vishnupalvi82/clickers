"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    let mounted = true
    let glitchInterval: NodeJS.Timeout

    // Function to safely play video
    const playVideo = async () => {
      if (!videoRef.current || !mounted) return

      try {
        // Try to play the video
        await videoRef.current.play()

        // Set up glitch effect only if video plays successfully
        glitchInterval = setInterval(() => {
          if (videoRef.current && mounted) {
            videoRef.current.classList.add("animate-glitch")
            setTimeout(() => {
              if (videoRef.current && mounted) {
                videoRef.current.classList.remove("animate-glitch")
              }
            }, 200)
          }
        }, 5000)
      } catch (error) {
        console.error("Video autoplay failed:", error)
        if (mounted) {
          setVideoFailed(true)
        }
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      playVideo()
    }, 100)

    return () => {
      mounted = false
      clearTimeout(timer)
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {!videoFailed ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover animate-fade-in"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support MP4 */}
          <source src="/placeholder.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Fallback image if video fails to play
        <div className="absolute w-full h-full">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hero Background"
            fill
            className="object-cover animate-fade-in"
            priority
          />
        </div>
      )}

      {/* Overlay gradient with enhanced styling */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#121212]/70 to-[#121212] z-0"
      ></div>
    </div>
  )
}
