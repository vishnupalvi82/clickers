"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Cinematic Reel",
    category: "Reel",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Brand Commercial",
    category: "Ad",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "YouTube Intro",
    category: "YouTube",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Product Showcase",
    category: "Ad",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Event Highlights",
    category: "Reel",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Social",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const openModal = (id: number) => {
    setSelectedItem(id)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedItem(null)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden rounded-md card-hover"
            onClick={() => openModal(item.id)}
          >
            <div className="aspect-video relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-[#B0B0B0]">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-[#0061F2] transition-colors hover-scale"
          >
            <X size={32} />
            <span className="sr-only">Close</span>
          </button>

          <div className="max-w-4xl w-full animate-fade-in-up">
            <div className="relative aspect-video">
              <Image
                src={portfolioItems.find((item) => item.id === selectedItem)?.image || ""}
                alt={portfolioItems.find((item) => item.id === selectedItem)?.title || ""}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">{portfolioItems.find((item) => item.id === selectedItem)?.title}</h3>
              <p className="text-[#B0B0B0]">{portfolioItems.find((item) => item.id === selectedItem)?.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
