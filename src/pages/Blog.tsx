import { useState } from 'react'
import { blogPosts } from '../data/blog'
import { Calendar, Clock, User, ArrowRight, ChevronLeft } from 'lucide-react'

export default function Blog() {
  const [activePost, setActivePost] = useState<string | null>(null)

  const selectedPost = blogPosts.find((p) => p.id === activePost)

  if (selectedPost) {
    return (
      <div className="pt-20">
        <article className="pb-24">
          <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 section-padding pb-12">
              <button
                onClick={() => setActivePost(null)}
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Blog
              </button>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-medium text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
                {selectedPost.title}
              </h1>
            </div>
          </div>

          <div className="section-padding -mt-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-6 mb-10 p-6 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{selectedPost.author}</p>
                    <p className="text-xs text-white/40">Author</p>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                {selectedPost.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-white/70 leading-relaxed mb-6 text-base lg:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-4 block">
              Space Journalism
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
              Cosmic Insights
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              In-depth articles exploring the latest discoveries, missions, and theories in
              astronomy and space exploration.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group space-card overflow-hidden cursor-pointer"
                onClick={() => setActivePost(post.id)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-white/40">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
