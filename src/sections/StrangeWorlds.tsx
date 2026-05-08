import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { ArrowUpRight } from 'lucide-react'

const strangeWorldsTopics = topics.filter((t) => t.category === 'strange-worlds')

export default function StrangeWorlds() {
  return (
    <section id="topics" className="py-24 lg:py-32 relative">
      <div className="section-padding">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-purple-400 tracking-widest uppercase mb-4 block">
            Strange Worlds
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-glow-purple">
            Cosmic Phenomena
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Discover the most extreme and mysterious objects in our universe, from
the remnants of dead stars to the birthplaces of new ones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {strangeWorldsTopics.map((topic, index) => (
            <Link
              key={topic.id}
              to={`/cosmic-topics#${topic.id}`}
              className="group space-card relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/50 to-transparent" />
              </div>

              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                    {topic.category === 'strange-worlds' ? 'Strange World' : 'Science'}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {topic.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                  {topic.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore topic</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
