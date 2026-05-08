import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { Atom, ArrowUpRight } from 'lucide-react'

const scienceTopics = topics.filter((t) => t.category === 'science')

export default function ScienceSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-padding">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-4 block">
            Science & Theory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-glow">
            The Science Behind the Cosmos
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Explore the theories and scientific principles that help us understand
            the fundamental nature of our universe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {scienceTopics.map((topic, index) => (
            <Link
              key={topic.id}
              to={`/cosmic-topics#${topic.id}`}
              className="group space-card p-8 text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Atom className="w-8 h-8 text-blue-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {topic.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                {topic.description}
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span>Learn more</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/cosmic-topics"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
          >
            View All Topics
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
