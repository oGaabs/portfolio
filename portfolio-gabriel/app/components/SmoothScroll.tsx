"use client"

import Lenis from "lenis"
import { useEffect, type ReactNode } from "react"

type Props = {
  children: ReactNode;
};

// Provides buttery smooth scrolling and easing across the app using Lenis
export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId);
      // destroy exists at runtime
      (lenis as unknown as { destroy?: () => void }).destroy?.()
    }
  }, [])

  return <>{children}</>
}
