"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import GoogleDriveVideo from "./google-drive-video"

interface VideoEmbedProps {
  videoId: string
  title: string
  className?: string
  showControls?: boolean
  category?: string
  aspectRatio?: "16:9" | "9:16"
}

export default function VideoEmbed({
  videoId,
  title,
  className = "",
  showControls = true,
  category,
  aspectRatio = "16:9",
}: VideoEmbedProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Check if this is a Google Drive video ID (longer than typical YouTube IDs)
  const isGoogleDriveVideo = videoId.length > 20

  // Auto-play YouTube videos
  useEffect(() => {
    // For YouTube videos, autoplay=1 is already in the URL
    // This is just a placeholder for any future initialization logic
  }, [])

  if (isGoogleDriveVideo) {
    return (
      <GoogleDriveVideo
        videoId={videoId}
        title={title}
        className={className}
        showControls={showControls}
        aspectRatio={aspectRatio}
      />
    )
  }

  const toggleMute = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current
      const message = isMuted
        ? '{"event":"command","func":"unMute","args":""}'
        : '{"event":"command","func":"mute","args":""}'
      iframe.contentWindow?.postMessage(message, "*")
      setIsMuted(!isMuted)
    }
  }

  const openInYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  const getContainerClass = () => {
    if (aspectRatio === "9:16") {
      return "aspect-[9/16] w-full"
    }
    return "aspect-video w-full"
  }

  return (
    <div
      className={`relative w-full h-full group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={getContainerClass()}>
        <iframe
          ref={iframeRef}
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&start=0&end=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Controls Overlay */}
      {showControls && (
        <div
          className={`absolute bottom-4 right-4 flex gap-2 z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMute}
            className="bg-black/60 border-gray-600 hover:bg-black/80 text-white backdrop-blur-sm"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={openInYouTube}
            className="bg-black/60 border-gray-600 hover:bg-black/80 text-white backdrop-blur-sm"
            aria-label="Open in YouTube"
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
