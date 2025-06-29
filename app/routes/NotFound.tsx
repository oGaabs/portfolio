
export default function NotFound() {

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{ background: "#121214" }} 
    >
      {/* Overlay Content */}
      <div
        className="text-center p-10 rounded-xl shadow-2xl"
        style={{
          background: "rgba(18, 18, 20, 0.85)",
          border: "2px solid #78D1E1",
          zIndex: 1,
        }}
      >
        <h1
          className="font-extrabold mb-4"
          style={{
            fontSize: "5rem",
            color: "#78D1E1",
            textShadow: "0 0 20px #78D1E1, 0 0 40px #121214",
          }}
        >
          404
        </h1>
        <p
          className="mb-6"
          style={{
            fontSize: "1.5rem",
            color: "#E1E1E6",
            letterSpacing: "0.05em",
          }}
        >
          Oops! Página não encontrada.
        </p>
        <a
          href="/"
          className="px-6 py-3 rounded-full font-semibold transition-colors"
          style={{
            background: "#78D1E1",
            color: "#121214",
            boxShadow: "0 2px 16px #78D1E188",
          }}
        >
          Voltar para o início
        </a>
      </div>
    </div>
  );
}
