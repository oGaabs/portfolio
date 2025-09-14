"use client"

import Navigation  from "./components/Navigation";
import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import SplashScreen from "./components/SplashScreen";
import TechStack from "./components/TechStack";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}
