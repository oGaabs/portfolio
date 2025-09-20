"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function VerticalScrollBar() {
  const { scrollYProgress } = useScroll()

  // Thumb: keep a modern proportion of the track height
  const THUMB_SIZE = 0.08 // 8% of track height (slightly smaller for a more native feel)
  const top = useTransform(scrollYProgress, (v) => `${v * (1 - THUMB_SIZE) * 100}%`)
  const height = useTransform(scrollYProgress, (v) => `${Math.max(v * 100, 0.001)}%`)

  return (
    <div
      className="hidden md:block fixed right-1 top-1/2 -translate-y-1/2 z-[55] pointer-events-none select-none"
      aria-hidden
    >
      <div className="relative h-[48vh] w-[4px]">
        {/* Neutral Track */}
        <div className="absolute inset-0 rounded-full bg-border/30" />

        {/* Completed Fill (distinct gradient), constant width, variable height */}
        <motion.div
          style={{ height }}
          className="absolute left-0 right-0 top-0 rounded-full bg-gradient-to-b from-primary to-cyan-400 opacity-80"
        />

        {/* Thumb with glow indicating current position */}
        <motion.div
          style={{ top, height: `${THUMB_SIZE * 100}%` }}
          className="absolute left-0 right-0 w-full rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 opacity-90"
        />
      </div>
    </div>
  )
}
