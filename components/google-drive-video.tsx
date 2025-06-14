"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Play, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GoogleDriveVideoProps {
  videoId: string
  title: string
  className?: string
  showControls?: boolean
  aspectRatio?: "16:9" | "9:16"
}

export default function GoogleDriveVideo({
  videoId,
  title,
  className = "",
  showControls = true,
  aspectRatio = "16:9",
}: GoogleDriveVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Auto-play all videos
  useEffect(() => {
    // Small delay to ensure component is fully mounted
    const timer = setTimeout(() => {
      setIsPlaying(true)
      // Additional delay to simulate loading completion
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const openInDrive = () => {
    window.open(`https://drive.google.com/file/d/${videoId}/view`, "_blank")
  }

  const getAspectRatioClass = () => {
    return aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-video"
  }

  const getContainerClass = () => {
    if (aspectRatio === "9:16") {
      return "w-full max-w-none"
    }
    return "w-full"
  }

  // Handle iframe load error
  const handleIframeError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  return (
    <div
      className={`relative w-full h-full group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isPlaying ? (
        // Thumbnail view with play button
        <div
          className={`relative w-full ${getAspectRatioClass()} ${getContainerClass()} bg-gray-900 rounded-lg flex items-center justify-center`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg"></div>

          {/* Play Button Overlay */}
          <button
            onClick={() => setIsPlaying(true)}
            className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Play className="h-8 w-8 text-white ml-1" />
          </button>

          {/* Video Title */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <h3 className="text-white font-medium text-sm">{title}</h3>
            <p className="text-gray-300 text-xs">Loading video...</p>
          </div>
        </div>
      ) : (
        // Embedded Google Drive video
        <div className={`w-full ${getAspectRatioClass()} ${getContainerClass()} relative`}>
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
              <div className="w-10 h-10 border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {hasError ? (
            // Error state
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 rounded-lg">
              <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
              <p className="text-red-400 text-sm mb-2">Video unavailable</p>
              <Button
                variant="outline"
                size="sm"
                onClick={openInDrive}
                className="border-red-600 text-red-400 hover:bg-red-900/20"
              >
                Open in Drive
              </Button>
            </div>
          ) : (
            <iframe
              className={`w-full h-full rounded-lg transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              title={title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
              onError={handleIframeError}
            />
          )}
        </div>
      )}

      {/* Controls Overlay */}
      {showControls && isPlaying && !isLoading && !hasError && (
        <div
          className={`absolute bottom-4 right-4 flex gap-2 z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={openInDrive}
            className="bg-black/60 border-gray-600 hover:bg-black/80 text-white backdrop-blur-sm"
            aria-label="Open in Google Drive"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Overlay to prevent right-click */}
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  )
}
