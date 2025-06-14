// Optional JavaScript for enhanced functionality
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video-background video")

  // Video loaded event
  video.addEventListener("loadeddata", () => {
    video.setAttribute("data-loaded", "true")
  })

  // Ensure video plays on mobile devices
  video.addEventListener("canplay", () => {
    video.play().catch((error) => {
      console.log("Video autoplay failed:", error)
    })
  })

  // Smooth scrolling for CTA button
  const ctaButton = document.querySelector(".cta-button")
  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    })
  }

  // Performance optimization: Pause video when not visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play()
      } else {
        video.pause()
      }
    })
  })

  observer.observe(video)
})
