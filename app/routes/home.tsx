import React, { useState } from 'react';
import Navigation from "~/components/Navigation";
import type { Route } from "./+types/home";
import SplashScreen from '~/components/SplashScreen';
import { ThemeProvider } from "~/components/ThemeProvider";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
      </div>
    </ThemeProvider>
  )
}
