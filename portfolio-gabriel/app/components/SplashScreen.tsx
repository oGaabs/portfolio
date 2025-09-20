import { useEffect, useState } from "react"

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [textVisible, setTextVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [showWaves, setShowWaves] = useState(true)

  useEffect(() => {
    // Mostrar efeitos de onda por 200ms
    const wavesFadeTimer = setTimeout(() => {
      setShowWaves(false)
    }, 200)

    const textTimer = setTimeout(() => {
      setTextVisible(true)
    }, 700) // texto aparece após ondas sumirem

    // Iniciar fade out após 4 segundos
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 4000)

    // Esconder completamente após 5.2 segundos
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      onFinish()
    }, 5200)

    return () => {
      clearTimeout(wavesFadeTimer)
      clearTimeout(textTimer)
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [onFinish])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#121214] via-gray-900 to-[#121214] transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      {/* Partículas de fundo modernos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full animate-pulse" style={{ width: "2.54884px", height: "3.66596px", backgroundColor: "rgb(120, 209, 225)", left: "68.4092%", top: "64.3311%", animationDelay: "0.578654s", animationDuration: "3.45881s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "3.95559px", height: "3.55707px", backgroundColor: "rgb(96, 165, 250)", left: "61.9937%", top: "19.1346%", animationDelay: "0.743458s", animationDuration: "2.50351s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "2.85394px", height: "2.38788px", backgroundColor: "rgb(167, 139, 250)", left: "77.1714%", top: "21.0375%", animationDelay: "0.56263s", animationDuration: "4.87151s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "4.99389px", height: "1.02862px", backgroundColor: "rgb(120, 209, 225)", left: "24.0309%", top: "78.9992%", animationDelay: "0.698839s", animationDuration: "2.73619s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.48391px", height: "4.72798px", backgroundColor: "rgb(96, 165, 250)", left: "26.3677%", top: "1.06171%", animationDelay: "0.842873s", animationDuration: "2.4727s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "2.30676px", height: "4.95791px", backgroundColor: "rgb(167, 139, 250)", left: "38.0542%", top: "55.6433%", animationDelay: "0.715274s", animationDuration: "2.31548s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "4.52143px", height: "2.60982px", backgroundColor: "rgb(120, 209, 225)", left: "42.101%", top: "15.115%", animationDelay: "0.290055s", animationDuration: "2.63329s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "3.66501px", height: "1.97995px", backgroundColor: "rgb(96, 165, 250)", left: "60.5091%", top: "72.5606%", animationDelay: "2.26223s", animationDuration: "4.76147s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.95189px", height: "3.85924px", backgroundColor: "rgb(167, 139, 250)", left: "91.5977%", top: "58.0008%", animationDelay: "2.36111s", animationDuration: "3.42671s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "3.8117px", height: "2.41765px", backgroundColor: "rgb(120, 209, 225)", left: "17.7958%", top: "2.82375%", animationDelay: "1.31707s", animationDuration: "2.08859s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "2.97384px", height: "2.67287px", backgroundColor: "rgb(96, 165, 250)", left: "30.1809%", top: "36.8376%", animationDelay: "0.319404s", animationDuration: "4.60575s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.00878px", height: "4.86354px", backgroundColor: "rgb(167, 139, 250)", left: "85.9106%", top: "64.4002%", animationDelay: "2.63276s", animationDuration: "2.17821s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "2.66898px", height: "2.56516px", backgroundColor: "rgb(120, 209, 225)", left: "15.8075%", top: "14.0638%", animationDelay: "1.45286s", animationDuration: "2.81808s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "4.3665px", height: "4.61219px", backgroundColor: "rgb(96, 165, 250)", left: "35.575%", top: "66.0081%", animationDelay: "2.34031s", animationDuration: "4.80713s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "2.74311px", height: "3.36466px", backgroundColor: "rgb(167, 139, 250)", left: "18.1407%", top: "60.479%", animationDelay: "2.67224s", animationDuration: "2.20112s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.07808px", height: "1.31976px", backgroundColor: "rgb(120, 209, 225)", left: "56.9787%", top: "3.89797%", animationDelay: "2.83938s", animationDuration: "3.03439s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "3.43843px", height: "3.35141px", backgroundColor: "rgb(96, 165, 250)", left: "37.9535%", top: "30.0243%", animationDelay: "2.0608s", animationDuration: "4.88788s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "2.57241px", height: "4.27537px", backgroundColor: "rgb(167, 139, 250)", left: "61.5414%", top: "81.9212%", animationDelay: "2.53121s", animationDuration: "3.62677s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.4386px", height: "2.33717px", backgroundColor: "rgb(120, 209, 225)", left: "37.3237%", top: "36.1802%", animationDelay: "0.837007s", animationDuration: "3.66817s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "3.88709px", height: "4.23719px", backgroundColor: "rgb(96, 165, 250)", left: "84.7043%", top: "0.647534%", animationDelay: "0.360443s", animationDuration: "3.14218s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "3.22891px", height: "1.29002px", backgroundColor: "rgb(167, 139, 250)", left: "81.6756%", top: "74.2157%", animationDelay: "0.154044s", animationDuration: "4.84732s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.88372px", height: "4.79878px", backgroundColor: "rgb(120, 209, 225)", left: "80.5371%", top: "16.0017%", animationDelay: "0.797355s", animationDuration: "2.10982s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.17126px", height: "2.34936px", backgroundColor: "rgb(96, 165, 250)", left: "41.6714%", top: "60.1673%", animationDelay: "1.79858s", animationDuration: "2.39886s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.14332px", height: "2.32324px", backgroundColor: "rgb(167, 139, 250)", left: "73.7496%", top: "87.7289%", animationDelay: "1.89321s", animationDuration: "3.94787s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "2.66221px", height: "3.7916px", backgroundColor: "rgb(120, 209, 225)", left: "22.1037%", top: "58.1837%", animationDelay: "2.73715s", animationDuration: "3.79083s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "3.43079px", height: "4.76309px", backgroundColor: "rgb(96, 165, 250)", left: "53.0839%", top: "79.5585%", animationDelay: "0.225777s", animationDuration: "2.73989s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "4.82065px", height: "4.93548px", backgroundColor: "rgb(167, 139, 250)", left: "25.4419%", top: "34.3408%", animationDelay: "1.48525s", animationDuration: "4.67085s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.52495px", height: "3.48013px", backgroundColor: "rgb(120, 209, 225)", left: "9.16853%", top: "42.7501%", animationDelay: "0.463442s", animationDuration: "3.58848s", boxShadow: "rgba(120, 209, 225, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "3.53103px", height: "2.18733px", backgroundColor: "rgb(96, 165, 250)", left: "23.171%", top: "5.57755%", animationDelay: "0.647238s", animationDuration: "3.36965s", boxShadow: "rgba(96, 165, 250, 0.314) 0px 0px 10px" }}>
        </div>
        <div className="absolute rounded-full animate-pulse" style={{ width: "1.01732px", height: "1.36831px", backgroundColor: "rgb(167, 139, 250)", left: "31.4544%", top: "59.3145%", animationDelay: "1.5147s", animationDuration: "3.06426s", boxShadow: "rgba(167, 139, 250, 0.314) 0px 0px 10px" }}>
        </div>
      </div>


      {/* Ondas de energia */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${showWaves ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 animate-ping"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              borderColor: `${i === 0 ? "#78D1E1" : i === 1 ? "#60A5FA" : "#A78BFA"}30`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s"
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1500 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Texto principal */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider font-mono">
            <span
              className="bg-white bg-clip-text text-transparent animate-pulse"
              style={{
                fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                textShadow: "0 0 30px #78D1E150"
              }}
            >
              Transforming magic in
            </span>
          </h1>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-200 mb-4 tracking-wide font-mono">
            <span
              className="text-cyan-500 bg-clip-text"
              style={{
                fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                textShadow: "0 0 20px #78D1E150"
              }}
            >
              TECHNOLOGY
            </span>
          </h2>

          {/* Linhas animadas modernas */}
          <div className="flex justify-center items-center mt-10 space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#78D1E1] animate-pulse shadow-[0_0_10px_#78D1E1]">
            </div>
            <div className="w-8 h-8 border-2 border-[#78D1E1] rotate-45 animate-spin shadow-[0_0_15px_#78D1E1]" style={{ animationDuration: "3s" }}>
            </div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#78D1E1] animate-pulse shadow-[0_0_10px_#78D1E1]">
            </div>
          </div>
        </div>
      </div>

      {/* Efeito de brilho final */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#78D1E1]/5 to-transparent animate-pulse">
      </div>
    </div>
  )
}

export default SplashScreen