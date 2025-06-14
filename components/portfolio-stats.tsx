"use client"

import { motion } from "framer-motion"
import { Play, Clock, Smartphone, Video } from "lucide-react"
import { getVideoStats, getLongFormCategories, getShortFormCategories } from "./video-detector"

export default function PortfolioStats() {
  const stats = getVideoStats()
  const longFormCategories = getLongFormCategories()
  const shortFormCategories = getShortFormCategories()

  const statsData = [
    {
      icon: <Video className="h-8 w-8 text-purple-500" />,
      value: stats.total,
      label: "Total Videos",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      value: stats.longForm,
      label: "Long-form Content",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-pink-500" />,
      value: stats.shortForm,
      label: "Reels & Shorts",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <Play className="h-8 w-8 text-green-500" />,
      value: longFormCategories.length + shortFormCategories.length,
      label: "Categories",
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <motion.section
      className="py-16 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Portfolio{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Statistics
            </span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive video portfolio spanning multiple categories and formats
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Long-form Categories */}
          <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
            <h4 className="text-lg font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Long-form Categories
              </span>
            </h4>
            <div className="space-y-2">
              {longFormCategories.map((category) => (
                <div key={category.id} className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">{category.label}</span>
                  <span className="text-blue-400 font-medium">{category.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Short-form Categories */}
          <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
            <h4 className="text-lg font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Short-form Categories
              </span>
            </h4>
            <div className="space-y-2">
              {shortFormCategories.map((category) => (
                <div key={category.id} className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">{category.label}</span>
                  <span className="text-pink-400 font-medium">{category.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
