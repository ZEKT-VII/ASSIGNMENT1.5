import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { planets } from '../data/planets'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

export default function PlanetCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const goTo = (dir: 'prev' | 'next') => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) =>
      dir === 'next'
        ? (prev + 1) % planets.length
        : (prev - 1 + planets.length) % planets.length
    )
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const activePlanet = planets[activeIndex]

  // Reset video when planet changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [activeIndex])

  return (
    <section
      id="planets"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated video background for active planet */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: isTransitioning ? 0 : 0.25 }}
        >
          <video
            key={activePlanet.id + '-bg'}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={activePlanet.poster}
            className="w-full h-full object-cover"
          >
            <source src={activePlanet.video} type="video/webm" />
          </video>
        </div>
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-[#050508]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-4 block">
            Solar System Explorer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-glow">
            Explore the Planets
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Navigate through our solar system. Click any planet to dive deeper into its cosmic story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Planet Display */}
          <div className="relative group">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              {/* Glow ring around the video */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-30 blur-xl transition-colors duration-700 z-0"
                style={{
                  background: `radial-gradient(circle, ${activePlanet.color}40, transparent 70%)`,
                }}
              />

              {/* Planet video */}
              <video
                ref={videoRef}
                key={activePlanet.id}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster={activePlanet.poster}
                className={`relative z-10 w-full h-full object-cover rounded-2xl transition-all duration-700 ${
                  isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <source src={activePlanet.video} type="video/webm" />
              </video>

              {/* Subtle vignette overlay on the video */}
              <div className="absolute inset-0 z-20 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,5,8,0.6) 100%)',
                }}
              />

              {/* Planet name label on the video */}
              <div className="absolute bottom-4 left-4 z-30">
                <div
                  className="px-3 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-white/10"
                >
                  <span className="text-xs font-medium text-white/80 tracking-wider uppercase">
                    {activePlanet.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Planet Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full shadow-lg transition-colors duration-500"
                style={{
                  backgroundColor: activePlanet.color,
                  boxShadow: `0 0 12px ${activePlanet.color}80`,
                }}
              />
              <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Planet {activeIndex + 1} of {planets.length}
              </span>
            </div>

            <div
              key={activePlanet.id}
              className="animate-in fade-in slide-in-from-right-4 duration-500"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {activePlanet.name}
              </h3>
              <p
                className="text-lg font-medium mb-4 transition-colors duration-500"
                style={{ color: activePlanet.color }}
              >
                {activePlanet.subtitle}
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                {activePlanet.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(activePlanet.details).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-300"
                  >
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                      {key}
                    </p>
                    <p className="text-sm text-white/80 font-medium">{value}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate(`/cosmic-topics`)}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => goTo('prev')}
                disabled={isTransitioning}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all disabled:opacity-50"
                aria-label="Previous planet"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {planets.map((planet, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!isTransitioning) {
                        setIsTransitioning(true)
                        setActiveIndex(i)
                        setTimeout(() => setIsTransitioning(false), 600)
                      }
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-8'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    style={
                      i === activeIndex
                        ? { backgroundColor: planet.color }
                        : undefined
                    }
                    aria-label={`Go to ${planet.name}`}
                  />
                ))}
              </div>

              <button
                onClick={() => goTo('next')}
                disabled={isTransitioning}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all disabled:opacity-50"
                aria-label="Next planet"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
