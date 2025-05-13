"use client"

import { useEffect, useRef, useState } from "react"
import { Play, ChevronDown, Instagram, Youtube, Mail, Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import VideoHero from "@/components/video-hero"
import PortfolioGrid from "@/components/portfolio-grid"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import WhyChooseUsItem from "@/components/why-choose-us-item"

export default function Home() {
  // Refs for sections to animate on scroll
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Get all elements with reveal class
    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    // Handle scroll for header background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      {/* CapCut-style Header */}
      <header className={`capcut-header ${scrolled ? "py-3 shadow-md" : "py-5"} transition-all duration-300`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="text-2xl font-bold">45Clickers</div>
            <nav className="hidden md:flex capcut-nav">
              <Link href="#about" className="capcut-nav-link">
                About
              </Link>
              <Link href="#services" className="capcut-nav-link">
                Services
              </Link>
              <Link href="#portfolio" className="capcut-nav-link">
                Portfolio
              </Link>
              <Link href="#contact" className="capcut-nav-link">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <Button className="bg-[#0061F2] hover:bg-[#0050C0] text-white rounded-md px-4 py-2 hidden md:flex">
              Get Started
            </Button>
            <button className="md:hidden text-white" onClick={toggleMobileMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button className="absolute top-6 right-6 text-white hover:text-[#0061F2]" onClick={closeMobileMenu}>
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-4">
            <Link href="#about" className="mobile-menu-link" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="#services" className="mobile-menu-link" onClick={closeMobileMenu}>
              Services
            </Link>
            <Link href="#portfolio" className="mobile-menu-link" onClick={closeMobileMenu}>
              Portfolio
            </Link>
            <Link href="#contact" className="mobile-menu-link" onClick={closeMobileMenu}>
              Contact
            </Link>
            <Button
              className="bg-[#0061F2] hover:bg-[#0050C0] text-white rounded-md px-6 py-3 mt-4"
              onClick={closeMobileMenu}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col">
        <VideoHero />

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Where Edits Click Right</h1>
          <p className="text-xl mb-8 max-w-2xl text-[#B0B0B0] animate-fade-in-up-delay">
            Creative video editing & content team from Indore
          </p>
          <Button className="bg-[#0061F2] hover:bg-[#0050C0] text-white px-6 py-6 rounded-md flex items-center gap-2 text-lg animate-fade-in-up-delay hover-scale">
            Watch Our Work
            <Play size={18} />
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={32} className="text-[#0061F2]" />
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 px-6 md:px-20 bg-[#181818] reveal"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            <span className="relative z-10">About Us</span>
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#0061F2]"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-8 leading-relaxed text-[#B0B0B0]">
                We are 45Clickers – a youth-led group of editors & content creators based in Indore. With 4+ years of
                experience, we deliver cinematic reels, ads, branding visuals, and social media content that connects.
                We believe in editing that tells stories and visuals that leave a mark.
              </p>

              <div className="flex gap-6 mt-8">
                <div className="flex flex-col items-center hover-scale">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="CapCut"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span>CapCut</span>
                </div>
                <div className="flex flex-col items-center hover-scale">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Premiere Pro"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span>Premiere Pro</span>
                </div>
                <div className="flex flex-col items-center hover-scale">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="After Effects"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span>After Effects</span>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden hover-scale">
              <Image src="/placeholder.svg?height=400&width=600" alt="45Clickers Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 md:px-20 bg-[#121212] reveal"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            <span className="relative z-10">Our Services</span>
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#0061F2]"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Video Editing"
              description="Professional video editing with cinematic effects, color grading, and seamless transitions."
              icon="video"
            />
            <ServiceCard
              title="Social Media Management"
              description="Strategic content creation and management for all your social media platforms."
              icon="social"
            />
            <ServiceCard
              title="Branding Visuals"
              description="Eye-catching visual assets that strengthen your brand identity and recognition."
              icon="branding"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        className="py-20 px-6 md:px-20 bg-[#181818] reveal"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            <span className="relative z-10">Why Choose Us</span>
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#0061F2]"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <WhyChooseUsItem
              title="Fast Turnaround"
              description="We deliver high-quality content within tight deadlines."
            />
            <WhyChooseUsItem
              title="Creative & Affordable"
              description="Premium quality content that fits your budget."
            />
            <WhyChooseUsItem
              title="Social-First Content Strategy"
              description="Content optimized for maximum engagement on social platforms."
            />
            <WhyChooseUsItem
              title="Trusted by YouTubers, Startups, Creators"
              description="A proven track record with diverse clients."
            />
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#0061F2] hover:bg-[#0050C0] text-white px-8 py-6 rounded-md text-lg hover-scale">
              Let's Work Together
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 px-6 md:px-20 bg-[#121212] reveal"
        ref={(el) => (sectionRefs.current[3] = el)}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            <span className="relative z-10">Our Portfolio</span>
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#0061F2]"></span>
          </h2>

          <PortfolioGrid />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-6 md:px-20 bg-[#181818] reveal"
        ref={(el) => (sectionRefs.current[4] = el)}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            <span className="relative z-10">Testimonials</span>
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#0061F2]"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="They delivered exactly what I imagined – fast, clean and cinematic!"
              author="Aman S."
            />
            <TestimonialCard
              quote="45Clickers transformed our brand with their creative vision and technical skills."
              author="Priya M."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-20 bg-[#121212] reveal"
        ref={(el) => (sectionRefs.current[5] = el)}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#0061F2]"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover-scale p-2 rounded-md transition-all">
                    <Phone className="text-[#0061F2]" />
                    <div>
                      <p>WhatsApp: +91 9171362855</p>
                      <p>Phone: 9755033035</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 hover-scale p-2 rounded-md transition-all">
                    <Mail className="text-[#0061F2]" />
                    <p>45clickers@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3 hover-scale p-2 rounded-md transition-all">
                    <Instagram className="text-[#0061F2]" />
                    <p>@clickers_45</p>
                  </div>
                  <div className="flex items-center gap-3 hover-scale p-2 rounded-md transition-all">
                    <Youtube className="text-[#0061F2]" />
                    <p>youtube.com/@45clickers</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#1E1E1E] border-[#333333] focus:border-[#0061F2] text-white rounded-md p-3"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-[#1E1E1E] border-[#333333] focus:border-[#0061F2] text-white rounded-md p-3"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-[#1E1E1E] border-[#333333] focus:border-[#0061F2] text-white min-h-[150px] rounded-md p-3"
                  />
                </div>
                <Button className="bg-[#0061F2] hover:bg-[#0050C0] text-white w-full py-6 rounded-md">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-20 bg-[#181818] border-t border-[#333333]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">45Clickers</div>
            <p className="text-[#B0B0B0]">© 2025 45Clickers. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-[#B0B0B0] hover:text-[#0061F2] transition-colors duration-300 hover-scale">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-[#B0B0B0] hover:text-[#0061F2] transition-colors duration-300 hover-scale">
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-[#B0B0B0] hover:text-[#0061F2] transition-colors duration-300 hover-scale">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
