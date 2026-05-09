import { Link } from 'react-router-dom'
import { Rocket, Github, Twitter, Youtube, Mail, ArrowRight } from 'lucide-react'

const sitemapLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Cosmic Topics', path: '/cosmic-topics' },
  { label: 'Blog', path: '/blog' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

const topicLinks = [
  { label: 'Exoplanets', path: '/cosmic-topics#exoplanets' },
  { label: 'Neutron Stars', path: '/cosmic-topics#neutron-stars' },
  { label: 'Dark Matter', path: '/cosmic-topics#dark-matter' },
  { label: 'Supernovas', path: '/cosmic-topics#supernovas' },
  { label: 'Nebulas', path: '/cosmic-topics#nebulas' },
]

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/beyondobservable' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/beyondobservable' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/beyondobservable' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@beyondobservable.space' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#030305]">
      <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
        {/* Video background replacing 3D BlackHole */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/videos/Black-Hole.webm" type="video/webm" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center section-padding z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-glow">
            The Universe Awaits
          </h2>
          <p className="text-white/60 max-w-lg mb-8 text-base lg:text-lg">
            Continue your journey through the cosmos. Every question leads to a new discovery.
          </p>
          <Link
            to="/cosmic-topics"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <Rocket className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold text-white">
                  Beyond<span className="text-blue-400">.</span>
                </span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                An immersive educational astronomy platform exploring the wonders of our universe through stunning visualizations and comprehensive cosmic knowledge.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-2 rounded-lg bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Sitemap
              </h3>
              <ul className="space-y-3">
                {sitemapLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Topics
              </h3>
              <ul className="space-y-3">
                {topicLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Newsletter
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Stay updated with the latest discoveries in astronomy and space exploration.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium text-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Beyond the Observable. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-white/30 hover:text-white/50 text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-white/30 hover:text-white/50 text-xs transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="text-white/30 hover:text-white/50 text-xs transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
