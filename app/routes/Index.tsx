import React, { useState } from 'react';
import Navigation from "~/components/Navigation";
import SplashScreen from '~/components/SplashScreen';
import Hero from '~/components/Hero';
import { ThemeProvider } from "~/components/ThemeProvider";

import type { Route } from "./+types/Index";
import Experience from '~/components/Experience';
import Contact from '~/components/Contact';
import TechStack from '~/components/TechStack';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Portfolio Santana" },
    { name: "description", content: "Portfolio of the Gabriel Santana Silva Developer!" },
  ];
}

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
