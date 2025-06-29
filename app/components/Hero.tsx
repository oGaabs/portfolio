import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const links = {
  github: 'https://github.com/oGaabs',
  linkedin: 'https://linkedin.com/in/gabriel-santana-silva/',
  email: 'mailto:gabriel04.ok@gmail.com'
}

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-20">
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
  );
};

// Photo Section Component
function PhotoSection() {
  return (
    <div className="flex justify-center md:justify-end order-2 md:order-1">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary via-yellow-400 to-orange-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
          <img
            src="Gabriel-1.png"
            alt="Gabriel Santana"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
}

// Text Section Component
function TextSection({ scrollToAbout }: { scrollToAbout: () => void }) {
  return (
    <div className="text-center md:text-left order-1 md:order-2">
      <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
        Hi, I'm <span className="text-yellow-400  bg-clip-text">Gabriel Santana</span>
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-8">
        Data Enginner and Full Stack Developer passionate about creating beautiful, functional applications
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
          className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <button
        onClick={scrollToAbout}
        className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 animate-bounce"
      >
        <span className="text-lg font-medium">Discover More</span>
        <FaArrowDown size={20} />
      </button>
    </div>
  );
}



export default Hero;