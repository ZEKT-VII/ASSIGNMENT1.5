export interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
  tags: string[]
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'jwst-revolution',
    title: 'How the James Webb Space Telescope is Reshaping Our Understanding of the Universe',
    excerpt: 'The JWST has peered deeper into space than any telescope before, revealing ancient galaxies, analyzing exoplanet atmospheres, and challenging our cosmological models.',
    author: 'Dr. Elena Vasquez',
    date: '2026-03-15',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    tags: ['JWST', 'Cosmology', 'Deep Space'],
    content: [
      'When the James Webb Space Telescope (JWST) released its first images in July 2022, the world gasped. But those breathtaking pictures were merely the beginning of a scientific revolution that continues to reshape our understanding of the cosmos.',
      'Operating at infrared wavelengths from its perch 1.5 million kilometers from Earth, JWST can peer through cosmic dust clouds and detect the faint heat signatures of the universe most ancient objects. Its 6.5-meter primary mirror, composed of 18 gold-coated beryllium hexagons, provides unprecedented sensitivity.',
      'One of JWST most significant contributions has been the discovery of surprisingly mature galaxies in the early universe. Several galaxies observed just 300-500 million years after the Big Challenge appear to contain hundreds of billions of solar masses and show chemical complexity that challenges formation models.',
      'The telescope has also revolutionized exoplanet science. By analyzing starlight filtering through planetary atmospheres during transits, JWST has detected methane, carbon dioxide, water vapor, and even hints of dimethyl sulfide, a potential biosignature, in the atmosphere of K2-18b.',
      'Perhaps most provocatively, JWST observations of distant supernovae and Cepheid variables have reinforced tensions in our understanding of cosmic expansion. The Hubble tension, a discrepancy between different measurements of the universe expansion rate, persists and deepens with each new dataset.',
      'As JWST continues its observations, we can expect further surprises. Upcoming cycles will focus on characterizing potentially habitable worlds, mapping the earliest epoch of galaxy formation, and studying the mysterious nature of dark matter through gravitational lensing.'
    ]
  },
  {
    id: 'mars-colonization',
    title: 'The Road to Mars: Challenges and Breakthroughs in Human Space Colonization',
    excerpt: 'From radiation shielding to sustainable agriculture, we examine the cutting-edge technologies and daunting obstacles standing between humanity and its first interplanetary colony.',
    author: 'Prof. Marcus Chen',
    date: '2026-04-02',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1200&auto=format&fit=crop',
    tags: ['Mars', 'Space Exploration', 'Colonization'],
    content: [
      'The dream of establishing a permanent human presence on Mars has captivated scientists, engineers, and visionaries for decades. Today, that dream is closer to reality than ever before, though formidable challenges remain.',
      'The journey to Mars takes approximately seven months with current propulsion technology. During that time, astronauts would be exposed to dangerous levels of cosmic radiation. Solutions being developed include advanced radiation shielding using hydrogen-rich materials, magnetic field generators, and even pharmaceutical countermeasures.',
      'Life support presents another critical challenge. A Mars colony must achieve near-total recycling of air, water, and waste. Current systems on the International Space Station achieve about 93% water recycling, but Mars missions would need to push this above 98% with minimal resupply from Earth.',
      'In-situ resource utilization (ISRU) will be essential for long-term sustainability. The Martian atmosphere, composed primarily of carbon dioxide, can be processed to produce oxygen and methane for fuel. Experiments like MOXIE aboard the Perseverance rover have already demonstrated oxygen production from Martian CO2.',
      'Agriculture on Mars faces unique obstacles. The Martian regolith contains perchlorates, toxic chemicals that must be removed or neutralized. Low gravity, limited water, and reduced sunlight all complicate food production. Researchers are developing specialized hydroponic and aeroponic systems, as well as genetically modified crops adapted to Martian conditions.',
      'Perhaps the greatest challenge is psychological. Astronauts on Mars would face extreme isolation, confined spaces, and the knowledge that Earth is months away. Careful crew selection, robust communication systems, and virtual reality environments that connect colonists with Earth will be crucial for maintaining mental health.'
    ]
  },
  {
    id: 'gravitational-waves',
    title: 'Listening to the Cosmos: The New Era of Gravitational Wave Astronomy',
    excerpt: 'Since LIGO first detection in 2015, gravitational wave astronomy has opened an entirely new window on the universe, revealing the secrets of black hole mergers and neutron star collisions.',
    author: 'Dr. Sarah Okonkwo',
    date: '2026-02-20',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    tags: ['Gravitational Waves', 'Black Holes', 'Astronomy'],
    content: [
      'On September 14, 2015, the Laser Interferometer Gravitational-Wave Observatory (LIGO) detected a signal that would change astronomy forever. The characteristic chirp, resulting from the merger of two black holes 1.3 billion light-years away, confirmed a key prediction of Einstein general theory of relativity made a century earlier.',
      'Gravitational waves are ripples in the fabric of spacetime itself, caused by the acceleration of massive objects. Unlike electromagnetic waves, they interact very weakly with matter, allowing them to travel across the universe virtually unimpeded, carrying information about their cataclysmic origins.',
      'The detection method is extraordinarily precise. LIGO uses two 4-kilometer-long arms arranged in an L-shape. A laser beam is split, sent down each arm, and recombined. When a gravitational wave passes through, it stretches and compresses spacetime by a fraction of a proton width, shifting the interference pattern.',
      'Since that first detection, gravitational wave observatories have recorded dozens of mergers. The catalog includes binary black hole mergers, neutron star collisions, and possibly neutron star-black hole mergers. Each event provides new insights into extreme physics.',
      'The August 2017 detection of two merging neutron stars (GW170817) was particularly significant. Unlike black hole mergers, neutron star collisions produce light across the electromagnetic spectrum. Astronomers worldwide pointed their telescopes at the source, observing the resulting kilonova in unprecedented detail.',
      'Future gravitational wave detectors promise even more sensitivity. The Einstein Telescope, planned for the 2030s, will be an underground, triangular detector with 10-kilometer arms. In space, the Laser Interferometer Space Antenna (LISA) will detect gravitational waves from supermassive black hole mergers by measuring distances between three spacecraft millions of kilometers apart.'
    ]
  }
]
