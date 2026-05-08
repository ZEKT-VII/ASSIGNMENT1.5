import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { topics } from '../data/topics'
import { Atom, Orbit, Star } from 'lucide-react'

const strangeWorlds = topics.filter((t) => t.category === 'strange-worlds')
const scienceTopics = topics.filter((t) => t.category === 'science')

function TopicCard({ topic }: { topic: (typeof topics)[0] }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-4')
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      id={topic.id}
      ref={sectionRef}
      className="scroll-mt-24 space-card overflow-hidden"
    >
      <div className="aspect-[21/9] relative overflow-hidden">
        <img
          src={topic.image}
          alt={topic.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-medium text-blue-400">
              {topic.category === 'strange-worlds' ? 'Strange World' : 'Science & Theory'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{topic.title}</h2>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        <p className="text-lg text-white/70 mb-6 leading-relaxed">{topic.description}</p>

        <div className="space-y-4 mb-8">
          {topic.content.map((paragraph, i) => (
            <p key={i} className="text-white/60 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            Key Facts
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {topic.facts.map((fact, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-white/60"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function CosmicTopics() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-4 block">
              Cosmic Knowledge
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
              Cosmic Topics
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Deep dives into the most fascinating phenomena in our universe. From the remnants of
              dead stars to the invisible fabric of spacetime, explore the frontiers of cosmic knowledge.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <Orbit className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Strange Worlds</h2>
            </div>
            <div className="space-y-12 mb-20">
              {strangeWorlds.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>

            <div className="flex items-center gap-3 mb-10">
              <Atom className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Science & Theory</h2>
            </div>
            <div className="space-y-12">
              {scienceTopics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
