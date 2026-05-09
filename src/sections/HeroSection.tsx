import { useRef, useEffect, useState } from 'react'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      heroRef.current.style.setProperty('--parallax-x', `${x}px`)
      heroRef.current.style.setProperty('--parallax-y', `${y}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Trigger entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 200)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center"
      style={{ '--parallax-x': '0px', '--parallax-y': '0px' } as React.CSSProperties}
    >
      {/* Video Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: 'translate(calc(var(--parallax-x) * 0.5), calc(var(--parallax-y) * 0.5)) scale(1.1)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/posters/Space-Bg.webp"
          className={`w-full h-full object-cover transition-opacity duration-[2000ms] ${
            isLoaded ? 'opacity-60' : 'opacity-0'
          }`}
          onCanPlayThrough={() => setIsLoaded(true)}
        >
          <source src="/videos/Space-Bg.webm" type="video/webm" />
        </video>
      </div>

      {/* Floating planet accent — Earth visible in background */}
      <div
        className={`absolute right-[-5%] top-[15%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full overflow-hidden z-[1] transition-all duration-[2500ms] ${
          isLoaded ? 'opacity-40 scale-100' : 'opacity-0 scale-90'
        }`}
        style={{
          transform: `translate(calc(var(--parallax-x) * -0.3), calc(var(--parallax-y) * -0.3))`,
          filter: 'blur(1px)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/posters/Earth.webp"
          className="w-full h-full object-cover"
        >
          <source src="/videos/Earth.webm" type="video/webm" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 40% 40%, transparent 30%, rgba(5,5,8,0.8) 70%)',
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508] z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/80 via-transparent to-[#050508]/80 z-[2]" />
      {/* Additional top gradient for navbar readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/40 via-transparent to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium text-white/70 tracking-wide uppercase">
              Interactive Astronomy Platform
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.9] tracking-tight mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transform: 'translate(calc(var(--parallax-x) * -0.2), calc(var(--parallax-y) * -0.2))',
            }}
          >
            <span className="block">Beyond</span>
            <span className="block gradient-text">the Observable</span>
          </h1>

          <p
            className={`text-base sm:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transform: 'translate(calc(var(--parallax-x) * -0.1), calc(var(--parallax-y) * -0.1))',
            }}
          >
            Journey through the cosmos with stunning visualizations. Explore distant planets,
            mysterious black holes, and the frontiers of human understanding.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transform: 'translate(calc(var(--parallax-x) * -0.15), calc(var(--parallax-y) * -0.15))',
            }}
          >
            <a
              href="#planets"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore Planets
              <svg
                className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="#topics"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
            >
              Discover Topics
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
