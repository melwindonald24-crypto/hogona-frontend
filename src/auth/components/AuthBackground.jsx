const LAYERS = [
  { src: "/assets/backgrounds/sky.png", top: "0%", height: "100%", position: "top center" },
  { src: "/assets/backgrounds/mountains.png", top: "20%", height: "100%", position: "center" },
  { src: "/assets/backgrounds/foreground-hill.png", top: "45%", height: "100%", position: "bottom center" },
]
 
export function AuthBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full">
    
      <div className="fixed inset-0 overflow-hidden">
        {LAYERS.map((layer, i) => (
          <div
            key={layer.src}
            className="absolute inset-x-0 pointer-events-none"
            style={{
              top: layer.top,
              height: layer.height,
              backgroundImage: `url(${layer.src})`,
              backgroundSize: "cover",
              backgroundPosition: layer.position,
              backgroundRepeat: "no-repeat",
              zIndex: i, 
            }}
          />
        ))}
      </div>
 
      
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 py-12">
        <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl bg-white/15 px-8 py-10 backdrop-blur-sm">
          {children}
        </div>
      </div>
    </div>
  )
}