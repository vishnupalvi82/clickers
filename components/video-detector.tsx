"use client"

interface VideoInfo {
  id: string
  title: string
  videoId: string
  aspectRatio: "16:9" | "9:16"
  category: string
  description: string
  type: "long-form" | "short-form"
}

// Updated Video database with new promotional video
export const videoDatabase: VideoInfo[] = [
  // LONG-FORM VIDEOS (16:9 Horizontal) - Only working videos

  // Promotional Videos
  {
    id: "1",
    title: "Event Promotion Video",
    videoId: "165c4U8x4OC9-VJLjnyYBoNe0M4_QkkeS",
    aspectRatio: "16:9",
    category: "promotional",
    description: "Promotional video highlighting an event",
    type: "long-form",
  },
  {
    id: "37",
    title: "Awwebworld Motion Video",
    videoId: "1E2F3iw5PwxAeyFjhLBe3B-7-f-4Y272_",
    aspectRatio: "16:9",
    category: "promotional",
    description: "Professional motion graphics promotional video",
    type: "long-form",
  },

  // Podcast Videos
  {
    id: "3",
    title: "Podcast Intro Highlights",
    videoId: "1dZuMt4U93NdTTAhV4ieeULDgs-97hd--",
    aspectRatio: "16:9",
    category: "podcast",
    description: "Engaging intro and teaser clips from multiple podcast episodes",
    type: "long-form",
  },
  {
    id: "4",
    title: "Podcast Episode - New Addition",
    videoId: "1YomPGR-kbSnnfDimnx3A9oXf3GjW3v2t",
    aspectRatio: "16:9",
    category: "podcast",
    description: "Professional podcast episode with engaging content",
    type: "long-form",
  },

  // Talking Head Videos
  {
    id: "5",
    title: "Talking Head Video - Expert Interview",
    videoId: "1jVdA6L-dYQxoUS3mvNcAcFKB0s4Mwami",
    aspectRatio: "16:9",
    category: "talking-head",
    description: "Direct-to-camera explanatory videos",
    type: "long-form",
  },
  {
    id: "6",
    title: "Talking Head Video - Educational Content",
    videoId: "1dxQ-NnRdEbxmbYwPlh3R4ktQsuFMP9RM",
    aspectRatio: "16:9",
    category: "talking-head",
    description: "Direct-to-camera explanatory videos",
    type: "long-form",
  },
  {
    id: "7",
    title: "Talking Head - Professional Presentation 1",
    videoId: "tBHHl4KFlTE",
    aspectRatio: "16:9",
    category: "talking-head",
    description: "Professional talking head presentation with clear delivery",
    type: "long-form",
  },
  {
    id: "8",
    title: "Talking Head - Professional Presentation 2",
    videoId: "OmE2fcpwmw8",
    aspectRatio: "16:9",
    category: "talking-head",
    description: "Professional talking head presentation with clear delivery",
    type: "long-form",
  },
  {
    id: "9",
    title: "Talking Head - Professional Presentation 3",
    videoId: "BxpMitcDHFg",
    aspectRatio: "16:9",
    category: "talking-head",
    description: "Professional talking head presentation with clear delivery",
    type: "long-form",
  },
  {
    id: "10",
    title: "Talking Head - Professional Presentation 4",
    videoId: "5RLDHvgvHFM",
    aspectRatio: "16:9",
    category: "talking-head",
    description: "Professional talking head presentation with clear delivery",
    type: "long-form",
  },

  // Educational Videos
  {
    id: "12",
    title: "Educational Content - Tutorial 1",
    videoId: "tBHHl4KFlTE",
    aspectRatio: "16:9",
    category: "educational",
    description: "Educational tutorial with step-by-step instructions",
    type: "long-form",
  },
  {
    id: "13",
    title: "Educational Content - Tutorial 2",
    videoId: "OmE2fcpwmw8",
    aspectRatio: "16:9",
    category: "educational",
    description: "Educational tutorial with step-by-step instructions",
    type: "long-form",
  },
  {
    id: "14",
    title: "Educational Content - Tutorial 3",
    videoId: "BxpMitcDHFg",
    aspectRatio: "16:9",
    category: "educational",
    description: "Educational tutorial with step-by-step instructions",
    type: "long-form",
  },
  {
    id: "15",
    title: "Educational Content - Tutorial 4",
    videoId: "5RLDHvgvHFM",
    aspectRatio: "16:9",
    category: "educational",
    description: "Educational tutorial with step-by-step instructions",
    type: "long-form",
  },

  // Documentary Videos
  {
    id: "17",
    title: "Documentary - New Production",
    videoId: "l1vwy8pF_F8",
    aspectRatio: "16:9",
    category: "documentary",
    description: "Professional documentary with compelling storytelling",
    type: "long-form",
  },

  // Interview Videos
  {
    id: "20",
    title: "Professional Interview - New",
    videoId: "sZO2wW2GJGs",
    aspectRatio: "16:9",
    category: "interview",
    description: "Professional interview with expert insights and analysis",
    type: "long-form",
  },

  // Cinematic Videos (moved to last as requested)
  {
    id: "21",
    title: "Cinematic Video",
    videoId: "1JRHTsp6rQziiP4IH7bGg597gwo3iRc5D",
    aspectRatio: "16:9",
    category: "cinematic",
    description: "A visually rich cinematic video with emotional depth",
    type: "long-form",
  },
  {
    id: "23",
    title: "Cinematic Adventure - New",
    videoId: "lJmfwzKJIMQ",
    aspectRatio: "16:9",
    category: "cinematic",
    description: "Stunning cinematic adventure with breathtaking visuals",
    type: "long-form",
  },

  // SHORT-FORM VIDEOS (9:16 Vertical) - Only working videos

  // Explainer & Awareness Videos
  {
    id: "24",
    title: "Explainer & Awareness - Part 1",
    videoId: "1BQMbX5xiB-fsQoJ2RA2bUkgK0yVn1FJh",
    aspectRatio: "9:16",
    category: "explainer",
    description: "Short awareness or educational videos",
    type: "short-form",
  },
  {
    id: "25",
    title: "Explainer & Awareness - Part 2",
    videoId: "1AYIWPGM5BfhpsRZywYRjTiaIv_57BWQz",
    aspectRatio: "9:16",
    category: "explainer",
    description: "Short awareness or educational videos",
    type: "short-form",
  },
  {
    id: "26",
    title: "Explainer & Awareness - Part 3",
    videoId: "1S3lV--O8vcH7hvWu6yl-jFZukG-g4HcD",
    aspectRatio: "9:16",
    category: "explainer",
    description: "Short awareness or educational videos",
    type: "short-form",
  },
  {
    id: "27",
    title: "Explainer & Awareness - Part 4",
    videoId: "10QAVtCyp8Bx-EcF1BTU36f-5djpOWHtB",
    aspectRatio: "9:16",
    category: "explainer",
    description: "Short awareness or educational videos",
    type: "short-form",
  },
  {
    id: "28",
    title: "Explainer & Awareness - Part 5",
    videoId: "1YI4OeqvxnotKqd4cevmLTHQMgqxhjrxb",
    aspectRatio: "9:16",
    category: "explainer",
    description: "Short awareness or educational videos",
    type: "short-form",
  },

  // Podcast Reels
  {
    id: "29",
    title: "Podcast Reel - Episode Highlight",
    videoId: "13jNEpKjAJbAZVB7mG8EEX-9JmY1UmCLj",
    aspectRatio: "9:16",
    category: "podcast-reel",
    description: "Short social media podcast clips",
    type: "short-form",
  },
  {
    id: "30",
    title: "Podcast Reel - Best Moments",
    videoId: "118kNHDAZINcEG4YpteUPY79EGGWR-WL8",
    aspectRatio: "9:16",
    category: "podcast-reel",
    description: "Short social media podcast clips",
    type: "short-form",
  },

  // Voice Over Videos
  {
    id: "33",
    title: "Voice Over Video - Part 1",
    videoId: "1afedH4AU-EvYOAIC2K2aDfuAgMFvCwBj",
    aspectRatio: "9:16",
    category: "voice-over",
    description: "Narrated videos with visuals",
    type: "short-form",
  },
  {
    id: "34",
    title: "Voice Over Video - Part 2",
    videoId: "1kkNhe7dgOF7SKtSzixLqlh2qce2pnPm4",
    aspectRatio: "9:16",
    category: "voice-over",
    description: "Narrated videos with visuals",
    type: "short-form",
  },
  {
    id: "35",
    title: "Voice Over Video - Part 3",
    videoId: "1wUbUSXSBwwoxR1w6i4NeyJbC5Gr6sj1J",
    aspectRatio: "9:16",
    category: "voice-over",
    description: "Narrated videos with visuals",
    type: "short-form",
  },
  {
    id: "36",
    title: "Voice Over Video - Part 4",
    videoId: "1cS8HdH6RWqftOw1LX-u2orhu7dXEHn5-",
    aspectRatio: "9:16",
    category: "voice-over",
    description: "Narrated videos with visuals",
    type: "short-form",
  },
]

// Helper functions to filter videos
export const getLongFormVideos = () => {
  return videoDatabase.filter((video) => video.type === "long-form" && video.aspectRatio === "16:9")
}

export const getShortFormVideos = () => {
  return videoDatabase.filter((video) => video.type === "short-form" && video.aspectRatio === "9:16")
}

export const getVideosByCategory = (category: string, type: "long-form" | "short-form") => {
  return videoDatabase.filter((video) => video.category === category && video.type === type)
}

// Get unique categories for each type
export const getLongFormCategories = () => {
  const longFormVideos = getLongFormVideos()
  const categories = [...new Set(longFormVideos.map((video) => video.category))]
  return categories.map((category) => ({
    id: category,
    label: category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    count: longFormVideos.filter((v) => v.category === category).length,
  }))
}

export const getShortFormCategories = () => {
  const shortFormVideos = getShortFormVideos()
  const categories = [...new Set(shortFormVideos.map((video) => video.category))]
  return categories.map((category) => ({
    id: category,
    label: category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    count: shortFormVideos.filter((v) => v.category === category).length,
  }))
}

// Get total video counts
export const getVideoStats = () => {
  const longFormCount = getLongFormVideos().length
  const shortFormCount = getShortFormVideos().length
  const totalCount = videoDatabase.length

  return {
    longForm: longFormCount,
    shortForm: shortFormCount,
    total: totalCount,
  }
}
