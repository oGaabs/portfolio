"use client"

import { useState } from "react";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import SmoothScroll from "./components/SmoothScroll";
import SplashScreen from "./components/SplashScreen";
import TechStack from "./components/TechStack";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <ThemeProvider>
      <SmoothScroll>
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
        <div className="min-h-screen bg-background transition-colors duration-300">
          <Navigation />
          <Hero />
          <TechStack />
          <Experience />
          {/* TODO: Implement Projects Section */}
          {/* <Projects /> */}
          <Contact />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  )
}
