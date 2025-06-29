import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showWaves, setShowWaves] = useState(true);

  useEffect(() => {
    // Mostrar efeitoss de onda por 200ms
    const wavesFadeTimer = setTimeout(() => {
      setShowWaves(false);
    }, 200);

    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 700); // texto aparece após ondas sumirem

    // Iniciar fade out após 4 segundos
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Esconder completamente após 5.2 segundos
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 5200);

    return () => {
      clearTimeout(wavesFadeTimer);
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#121214] via-gray-900 to-[#121214] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Partículas de fundo modernos */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: i % 3 === 0 ? '#78D1E1' : i % 3 === 1 ? '#60A5FA' : '#A78BFA',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: `0 0 10px ${i % 3 === 0 ? '#78D1E1' : i % 3 === 1 ? '#60A5FA' : '#A78BFA'}50`
            }}
          />
        ))}
      </div>


      {/* Ondas de energia */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${showWaves ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 animate-ping"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              borderColor: `${i === 0 ? '#78D1E1' : i === 1 ? '#60A5FA' : '#A78BFA'}30`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Texto principal */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider font-mono">
            <span
              className="bg-white bg-clip-text text-transparent animate-pulse"
              style={{
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                textShadow: '0 0 30px #78D1E150'
              }}
            >
              Transforming magic in
            </span>
          </h1>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-200 mb-4 tracking-wide font-mono">
            <span
              className="text-cyan-500 bg-clip-text"
              style={{
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                textShadow: '0 0 20px #78D1E150'
              }}
            >
              TECHNOLOGY
            </span>
          </h2>

          {/* Linhas animadas modernas */}
          <div className="flex justify-center items-center mt-10 space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#78D1E1] animate-pulse shadow-[0_0_10px_#78D1E1]"></div>
            <div className="w-8 h-8 border-2 border-[#78D1E1] rotate-45 animate-spin shadow-[0_0_15px_#78D1E1]" style={{ animationDuration: '3s' }}></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#78D1E1] animate-pulse shadow-[0_0_10px_#78D1E1]"></div>
          </div>
        </div>
      </div>

      {/* Efeito de brilho final */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#78D1E1]/5 to-transparent animate-pulse"></div>
    </div>
  );
};

export default SplashScreen;