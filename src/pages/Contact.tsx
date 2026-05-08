import { useState } from 'react'
import { Send, Mail, MapPin, Phone, CheckCircle, Twitter, Youtube, Github } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
              Contact Us
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Have a question about the cosmos? Want to collaborate? Or just want to share
              your love for space? We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white mb-1">Email</h3>
                      <a
                        href="mailto:hello@beyondobservable.space"
                        className="text-sm text-white/50 hover:text-blue-400 transition-colors"
                      >
                        hello@beyondobservable.space
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white mb-1">Location</h3>
                      <p className="text-sm text-white/50">
                        San Francisco, CA<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white mb-1">Phone</h3>
                      <a
                        href="tel:+14155551234"
                        className="text-sm text-white/50 hover:text-pink-400 transition-colors"
                      >
                        +1 (415) 555-1234
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://twitter.com/beyondobservable"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/beyondobservable"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-red-400 hover:border-red-500/30 transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/beyondobservable"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="space-card p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-white/50 mb-6">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm hover:bg-white/10 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-card p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-white/10 focus:border-blue-500/50'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-white/10 focus:border-blue-500/50'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-white/10 focus:border-blue-500/50'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
