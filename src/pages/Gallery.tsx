import { useState } from 'react'
import { galleryImages, type GalleryImage } from '../data/gallery'
import { X, ZoomIn, Camera } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const columns: GalleryImage[][] = [[], [], []]
  galleryImages.forEach((img, i) => {
    columns[i % 3].push(img)
  })

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-4 block">
              Visual Collection
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
              Cosmic Gallery
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              A curated collection of stunning space imagery from NASA, ESA, and leading
              observatories around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                  {column.map((image: GalleryImage) => (
                    <div
                      key={image.id}
                      className="group relative overflow-hidden rounded-xl cursor-pointer bg-white/5"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-[#050508]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-1 block">
                          {image.category}
                        </span>
                        <h3 className="text-sm font-bold text-white mb-1">{image.title}</h3>
                        <p className="text-xs text-white/50">{image.photographer}</p>
                      </div>

                      <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Camera className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-sm text-white/50 mb-1">{selectedImage.description}</p>
              <p className="text-xs text-white/30">{selectedImage.photographer}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
