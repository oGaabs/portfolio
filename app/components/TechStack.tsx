
const techs: { name: string; src: string }[] = [

  { name: 'AI-Driven Solutions', src: 'https://github.com/user-attachments/assets/e5b54a09-52e5-4252-8e7f-61cde7fd2703' },
  { name: 'Google Cloud', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
];

export default function TechStack() {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <p className="text-xs md:text-sm uppercase tracking-wider font-medium text-primary/70 mb-2">What I use</p>
        <h3 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-foreground">
          Technical Skills
        </h3>
        <div className="mt-4 flex justify-center">
          <div className="w-28 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-400 opacity-90"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {techs.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center space-y-3 bg-card/60 backdrop-blur-sm p-3 rounded-2xl shadow-md hover:scale-105 transform transition-all duration-200"
              style={{ minWidth: 110 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500/10 to-blue-100/5 flex items-center justify-center">
                <img
                  src={t.src}
                  alt={t.name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground font-medium">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
