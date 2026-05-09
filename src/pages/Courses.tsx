import { useEffect } from 'react'
import { Star, Clock, Award } from 'lucide-react'

const courses = [
  {
    id: 'backyard-astronomy',
    title: 'Introduction to Backyard Astronomy',
    description: 'Learn how to navigate the night sky, identify constellations, and use your first telescope effectively.',
    price: '$29',
    duration: '4 Weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=800&auto=format&fit=crop',
    features: ['Constellation identification', 'Telescope basics', 'Lunar observation'],
  },
  {
    id: 'astrophotography',
    title: 'Astrophotography Masterclass',
    description: 'Capture stunning images of deep space objects, planets, and the Milky Way using DSLR cameras and tracking mounts.',
    price: '$89',
    duration: '8 Weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop',
    features: ['Long exposure techniques', 'Image stacking & processing', 'Deep sky imaging'],
  },
  {
    id: 'cosmic-physics',
    title: 'The Physics of the Cosmos',
    description: 'A deep dive into the theoretical frameworks that govern our universe, from quantum mechanics to general relativity.',
    price: '$199',
    duration: '12 Weeks',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=800&auto=format&fit=crop',
    features: ['Relativity basics', 'Black hole thermodynamics', 'Cosmology models'],
  }
]

export default function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[#050508] z-0" />
        <div 
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"
        />
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"
        />

        <div className="section-padding relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-medium tracking-widest text-sm uppercase mb-4 block">
              Expand Your Mind
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
              Astronomy Courses
            </h1>
            <p className="text-white/60 text-lg md:text-xl">
              Embark on a journey of discovery with our curated educational programs. From your first telescope to the physics of black holes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent" />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.price}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {course.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 flex-grow">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-white/50 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-blue-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-purple-400" />
                      {course.level}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <Star className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`mailto:inquiries@beyond-astronomy.com?subject=Enrollment Inquiry: ${course.title}`}
                    className="mt-auto block w-full bg-blue-600 hover:bg-blue-500 text-white text-center py-3 rounded-lg font-medium transition-colors"
                  >
                    Inquire to Buy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
