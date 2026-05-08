export interface GalleryImage {
  id: string
  url: string
  title: string
  description: string
  category: string
  photographer: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop',
    title: 'Nebula Dreams',
    description: 'A stunning emission nebula glowing with hydrogen and oxygen emissions.',
    category: 'Nebulae',
    photographer: 'NASA/ESA'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800&auto=format&fit=crop',
    title: 'Galactic Core',
    description: 'The heart of our Milky Way galaxy, teeming with billions of stars.',
    category: 'Galaxies',
    photographer: 'ESO'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=800&auto=format&fit=crop',
    title: 'Exoplanet Horizon',
    description: 'Artist impression of a habitable exoplanet orbiting a red dwarf star.',
    category: 'Exoplanets',
    photographer: 'NASA/JPL'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=800&auto=format&fit=crop',
    title: 'Martian Landscape',
    description: 'The rusty surface of Mars as captured by the Perseverance rover.',
    category: 'Mars',
    photographer: 'NASA/JPL-Caltech'
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=800&auto=format&fit=crop',
    title: 'Starry Night',
    description: 'A long exposure capturing the rotation of stars around the celestial pole.',
    category: 'Night Sky',
    photographer: 'ESO'
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=800&auto=format&fit=crop',
    title: 'Solar Flare',
    description: 'A massive solar prominence erupting from the Sun surface.',
    category: 'Solar',
    photographer: 'NASA/SDO'
  },
  {
    id: 'g7',
    url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop',
    title: 'Milky Way Panorama',
    description: 'A wide-angle view of our galaxy stretching across the night sky.',
    category: 'Galaxies',
    photographer: 'ESO'
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800&auto=format&fit=crop',
    title: 'Aurora Borealis',
    description: 'The northern lights dancing across the Arctic sky.',
    category: 'Earth',
    photographer: 'ESA'
  },
  {
    id: 'g9',
    url: 'https://images.unsplash.com/photo-1614726365723-49cfae92782f?q=80&w=800&auto=format&fit=crop',
    title: 'JWST Deep Field',
    description: 'The James Webb Space Telescope deepest infrared view of the universe.',
    category: 'Deep Space',
    photographer: 'NASA/ESA/CSA'
  },
  {
    id: 'g10',
    url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=800&auto=format&fit=crop',
    title: 'Supernova Remnant',
    description: 'The expanding shell of gas from a massive star explosive death.',
    category: 'Supernovae',
    photographer: 'NASA/CXC'
  },
  {
    id: 'g11',
    url: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=800&auto=format&fit=crop',
    title: 'Pillars of Creation',
    description: 'The iconic Eagle Nebula columns where new stars are born.',
    category: 'Nebulae',
    photographer: 'NASA/ESA/Hubble'
  },
  {
    id: 'g12',
    url: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=800&auto=format&fit=crop',
    title: 'Eclipse Totality',
    description: 'A total solar eclipse revealing the Sun corona.',
    category: 'Solar',
    photographer: 'NASA'
  }
]
