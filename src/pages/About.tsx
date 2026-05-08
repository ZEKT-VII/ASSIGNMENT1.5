import { useEffect } from 'react'
import { Target, Users, BookOpen, Globe, Award, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To make the wonders of the universe accessible to everyone through immersive, interactive experiences that inspire curiosity and scientific literacy.',
  },
  {
    icon: Users,
    title: 'Our Community',
    description:
      'A global network of space enthusiasts, students, educators, and researchers united by a shared passion for understanding the cosmos.',
  },
  {
    icon: BookOpen,
    title: 'Education First',
    description:
      'Every piece of content is meticulously researched and verified against the latest peer-reviewed astronomical literature.',
  },
  {
    icon: Globe,
    title: 'Open Access',
    description:
      'We believe cosmic knowledge belongs to everyone. Our platform is freely accessible, with no paywalls or subscription fees.',
  },
  {
    icon: Award,
    title: 'Scientific Rigor',
    description:
      'Our content is developed in collaboration with professional astronomers and space scientists to ensure accuracy and depth.',
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description:
      'Created by a team that genuinely loves space. Every feature, article, and visualization reflects our deep fascination with the universe.',
  },
]

const stats = [
  { value: '8+', label: 'Cosmic Topics' },
  { value: '8', label: 'Planet Videos' },
  { value: '3', label: 'Research Articles' },
  { value: '12', label: 'Gallery Images' },
]

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Video background replacing 3D RotatingGalaxy + StarField */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/videos/space-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508] z-[1]" />

        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
              Our Cosmic Mission
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Beyond the Observable is an immersive educational platform dedicated to making
              astronomy accessible, engaging, and visually stunning for learners of all ages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who We Are
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              We are a team of astronomers, developers, designers, and science communicators
              passionate about sharing the wonders of the universe with the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="space-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Founded in 2024, Beyond the Observable began as a passion project among a group of
                graduate students in astrophysics who wanted to share their love of space with the
                wider world. Frustrated by the lack of visually engaging, scientifically accurate
                astronomy resources online, they set out to build the platform they wished existed.
              </p>
              <p className="text-white/60 leading-relaxed">
                What started as a small blog with planet visualizations has grown into a comprehensive
                educational platform reaching thousands of curious minds worldwide. We have expanded
                our team to include professional educators, web developers, and science communicators,
                all united by a shared mission.
              </p>
            </div>

            <div className="space-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                We believe that understanding the universe should be an immersive experience. That is
                why we have built our platform around stunning video visualizations and rich media,
                allowing users to explore celestial bodies in ways that static images simply cannot
                match.
              </p>
              <p className="text-white/60 leading-relaxed">
                Every article, visualization, and interactive element on our platform is grounded in
                peer-reviewed science. We collaborate with professional astronomers to ensure our
                content reflects the latest discoveries and theoretical frameworks in the field.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we create and share with our community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="space-card p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join the Journey
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed mb-8">
              Whether you are a student taking your first steps into astronomy, a teacher looking
              for engaging educational resources, or a seasoned space enthusiast, there is something
              here for you. Explore the cosmos with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/cosmic-topics"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
              >
                Start Exploring
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
