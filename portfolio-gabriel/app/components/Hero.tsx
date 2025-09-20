"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

const links = {
  github: "https://github.com/oGaabs",
  linkedin: "https://linkedin.com/in/gabriel-santana-silva/",
  email: "mailto:gabriel04.ok@gmail.com"
}

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("skills")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    // use full viewport height but subtract top navigation height (approx 80px) to avoid extra bottom space
    <section id="about" className="bg-background min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Photo Section */}
            <PhotoSection />
            {/* Text Section */}
            <TextSection scrollToAbout={scrollToAbout} />
          </div>
        </div>
      </div>
    </section>
  )
}

// Photo Section Component
function PhotoSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const el = wrapperRef.current
    const img = imgRef.current
    if (!el || !img) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 .. 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      const rotX = (-y * 10).toFixed(2)
      const rotY = (x * 10).toFixed(2)
      const translateX = (x * 8).toFixed(2)
      const translateY = (y * 8).toFixed(2)

      img.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate(${translateX}px, ${translateY}px) scale(1.04)`
    }

    const handleLeave = () => {
      if (img) img.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translate(0px, 0px) scale(1)"
    }

    el.addEventListener("mousemove", handleMove)
    el.addEventListener("mouseleave", handleLeave)

    return () => {
      el.removeEventListener("mousemove", handleMove)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return (
    <div className="flex justify-center md:justify-end order-2 md:order-1">
      <div ref={wrapperRef} className="relative group w-80 h-80 -mt-3 -ml-3 md:-mt-6 md:-ml-6">
        {/* colorful blurred ring (blue / cyan theme) */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-200 blur-3xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

        {/* glass card with portrait */}
        <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl transform transition-all duration-500 group-hover:scale-105">
          <Image
            ref={imgRef as unknown as React.RefObject<HTMLImageElement>}
            src="/Gabriel-1.png"
            alt="Portrait of Gabriel Santana"
            fill
            className="object-cover transition-transform duration-300 will-change-transform"
            priority
          />

          {/* subtle overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30 pointer-events-none" />
        </div>

        {/* small floating accents */}
        <span className="absolute -right-3 -top-3 w-6 h-6 bg-white/20 rounded-full blur-sm animate-pulse pointer-events-none" />
        <span className="absolute -left-3 -bottom-3 w-4 h-4 bg-cyan-300/30 rounded-full blur-sm animate-pulse pointer-events-none" />
      </div>
    </div>
  )
}

// Text Section Component
function TextSection({ scrollToAbout }: { scrollToAbout: () => void }) {
  return (
    <div className="text-center md:text-left order-1 md:order-2">
      <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
        Hi, I&#39;m <span className="text-primary bg-clip-text">Gabriel Santana</span>
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-8">
        Data Engineer and Full Stack Developer passionate about creating beautiful, functional applications
        that make a difference
      </p>

      <div className="flex justify-center md:justify-start space-x-6 mb-12">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gradient-to-r from-black-500 to-gray-500 bg-card border border-border text-foreground rounded-full hover:bg-accent transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaGithub size={24} />
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-primary-foreground rounded-full hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href={links.email}
          className="p-3 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-full hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <button
        onClick={scrollToAbout}
        className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 animate-bounce"
      >
        <span className="text-lg font-medium text-cyan-500">Discover More</span>
        <FaArrowDown className="text-cyan-500" size={20} />
      </button>
    </div>
  )
}



export default Hero