export interface Topic {
  id: string
  category: 'strange-worlds' | 'science'
  title: string
  description: string
  image: string
  content: string[]
  facts: string[]
}

export const topics: Topic[] = [
  {
    id: 'exoplanets',
    category: 'strange-worlds',
    title: 'Exoplanets',
    description: 'Worlds beyond our solar system, orbiting distant stars across the Milky Way galaxy.',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Exoplanets are planets that orbit stars outside our solar system. The first confirmed detection was in 1992, and since then, astronomers have discovered thousands of these alien worlds.',
      'These planets come in a staggering variety of sizes, compositions, and orbital configurations. Some are gas giants larger than Jupiter, orbiting incredibly close to their stars. Others are rocky worlds that might resemble Earth, sitting in the habitable zone where liquid water could exist.',
      'The search for exoplanets employs multiple methods. The transit method detects the slight dimming of a star when a planet passes in front of it. The radial velocity method measures the wobble of a star caused by an orbiting planet gravitational pull. Direct imaging, though challenging, captures actual photographs of these distant worlds.',
      'The Kepler Space Telescope revolutionized exoplanet hunting, discovering thousands of planets by staring at a single patch of sky. Its successor, TESS, scans about 85% of the sky, looking for nearby, bright exoplanet candidates for follow-up studies.',
      'The James Webb Space Telescope now peers into the atmospheres of these worlds, analyzing the starlight that passes through their atmospheres during transit. This spectroscopic analysis can reveal the presence of water vapor, methane, oxygen, and other potential biosignatures.'
    ],
    facts: [
      'Over 5,500 exoplanets have been confirmed in the Milky Way',
      'The closest exoplanet, Proxima Centauri b, is just 4.2 light-years away',
      'Some exoplanets have densities lighter than styrofoam',
      'Hot Jupiters can orbit their stars in less than 24 hours'
    ]
  },
  {
    id: 'neutron-stars',
    category: 'strange-worlds',
    title: 'Neutron Stars',
    description: 'Ultra-dense remnants of massive stars, where a teaspoon weighs billions of tons.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Neutron stars are the collapsed cores of massive stars that have undergone supernova explosions. They represent one of the most extreme states of matter in the universe.',
      'These stellar remnants are incredibly dense. A neutron star packs roughly 1.4 times the mass of our Sun into a sphere only about 20 kilometers in diameter. A single teaspoon of neutron star material would weigh about 6 billion tons on Earth.',
      'The gravity on a neutron star surface is about 200 billion times stronger than Earth gravity. The escape velocity is approximately one-third the speed of light. If you dropped an object from a meter above the surface, it would hit the ground at 7.2 million kilometers per hour.',
      'Neutron stars rotate rapidly, with some spinning hundreds of times per second. This rotation, combined with their intense magnetic fields, can create beams of radiation that sweep across space like lighthouse beams. When these beams point toward Earth, we detect them as pulsars.',
      'Some neutron stars exist in binary systems, where they can pull matter from a companion star. This accretion process can heat the material to millions of degrees, producing intense X-ray radiation.'
    ],
    facts: [
      'Neutron stars can spin at up to 716 rotations per second',
      'Their magnetic fields are a trillion times stronger than Earth',
      'A neutron star is about 1.4 times the mass of the Sun but only 20km wide',
      'The surface temperature can exceed 1 million degrees Celsius'
    ]
  },
  {
    id: 'pulsars',
    category: 'strange-worlds',
    title: 'Pulsars',
    description: 'Lighthouses of the cosmos, emitting precise beams of electromagnetic radiation.',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Pulsars are rapidly rotating neutron stars that emit beams of electromagnetic radiation from their magnetic poles. As these beams sweep past Earth, they appear as regular pulses of light, much like a cosmic lighthouse.',
      'The first pulsar was discovered in 1967 by Jocelyn Bell Burnell, a graduate student at the University of Cambridge. The incredibly regular pulses initially led to the playful nickname LGM-1 (Little Green Men), before the natural explanation was found.',
      'Pulsars are some of the most precise clocks in the universe. Their rotation periods are incredibly stable, with some millisecond pulsars maintaining accuracy comparable to atomic clocks. This makes them invaluable tools for testing fundamental physics.',
      'The study of pulsars has provided the first indirect evidence for gravitational waves. By monitoring the timing of pulsar signals over decades, astronomers can detect the tiny distortions in spacetime caused by passing gravitational waves.',
      'Pulsar timing arrays now span the globe, with radio telescopes in North America, Europe, Australia, and Asia working together to build a galaxy-scale gravitational wave detector.'
    ],
    facts: [
      'The fastest known pulsar rotates 716 times per second',
      'Some pulsars are over 10 billion years old',
      'Pulsar signals can be used for spacecraft navigation',
      'The first exoplanets were discovered orbiting a pulsar in 1992'
    ]
  },
  {
    id: 'supernovas',
    category: 'strange-worlds',
    title: 'Supernovas',
    description: 'The most powerful explosions in the universe, marking the death of massive stars.',
    image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1200&auto=format&fit=crop',
    content: [
      'A supernova is the brilliant, explosive death of a star. These cosmic cataclysms can briefly outshine entire galaxies, releasing more energy in months than our Sun will produce in its entire 10-billion-year lifetime.',
      'There are two main types of supernovae. Type II supernovae occur when massive stars (at least 8 times the Sun mass) exhaust their nuclear fuel and their cores collapse. Type Ia supernovae happen when a white dwarf star accretes enough matter from a companion to exceed the Chandrasekhar limit and undergoes runaway nuclear fusion.',
      'The core-collapse process happens in fractions of a second. The star inner core collapses at velocities up to 70,000 km/s, reaching temperatures of billions of degrees. The resulting shockwave blasts outward, tearing through the star outer layers.',
      'Supernovae are cosmic forges. The extreme temperatures and pressures create heavy elements like gold, platinum, and uranium through rapid neutron capture. Nearly every atom in your body heavier than iron was forged in a supernova explosion.',
      'The remnants of supernovae can take many forms. Some leave behind neutron stars or black holes. Others create spectacular expanding clouds of gas and dust called supernova remnants, like the famous Crab Nebula.'
    ],
    facts: [
      'A supernova can release 10^44 joules of energy',
      'The brightest supernova ever observed was 570 billion times brighter than the Sun',
      'Supernovae occur about once every 50 years in the Milky Way',
      'The iron in your blood was forged in supernova explosions'
    ]
  },
  {
    id: 'nebulas',
    category: 'strange-worlds',
    title: 'Nebulas',
    description: 'Cosmic nurseries where stars are born from clouds of gas and dust.',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Nebulae are vast clouds of gas and dust scattered throughout our galaxy and beyond. These cosmic marvels serve as both the birthplaces of new stars and the graveyards of dying ones.',
      'Emission nebulae, like the famous Orion Nebula, glow with the light of nearby hot, young stars. The intense ultraviolet radiation from these stars ionizes the surrounding hydrogen gas, causing it to emit characteristic red and blue light.',
      'Reflection nebulae don emit their own light but instead reflect the light of nearby stars. The dust particles in these nebulae scatter blue light more efficiently, giving them a characteristic blue appearance.',
      'Dark nebulae are dense clouds of dust that block the light from stars behind them. These appear as dark patches against the brighter background of the Milky Way. The Horsehead Nebula is one of the most famous examples.',
      'Planetary nebulae have nothing to do with planets. They form when a dying Sun-like star sheds its outer layers, creating a beautiful, glowing shell of gas around the remaining white dwarf core.'
    ],
    facts: [
      'The Orion Nebula is 1,344 light-years from Earth',
      'Some nebulae are over 100 light-years across',
      'The Pillars of Creation in the Eagle Nebula are 4-5 light-years tall',
      'Nebulae can contain enough gas to form thousands of new stars'
    ]
  },
  {
    id: 'dark-matter',
    category: 'science',
    title: 'Dark Matter',
    description: 'The invisible substance that makes up 85% of all matter in the universe.',
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Dark matter is one of the greatest mysteries in modern physics. This invisible substance doesn emit, absorb, or reflect light, making it completely invisible to telescopes. Yet its gravitational effects on visible matter betray its presence.',
      'The existence of dark matter was first proposed by Fritz Zwicky in 1933. He observed that galaxies in the Coma Cluster were moving so fast that the cluster should have flown apart unless it contained much more mass than what was visible.',
      'Multiple lines of evidence support dark matter existence. Galaxy rotation curves show stars orbiting too fast for the visible mass. Gravitational lensing reveals mass where no light is emitted. And cosmic microwave background radiation patterns match models that include dark matter.',
      'The leading candidate for dark matter is a hypothetical particle called a WIMP (Weakly Interacting Massive Particle). These particles would interact only through gravity and the weak nuclear force, making them extraordinarily difficult to detect.',
      'Experiments deep underground use ultra-sensitive detectors to try to catch rare interactions between dark matter particles and ordinary matter. So far, these direct detection experiments have yielded intriguing hints but no definitive detection.'
    ],
    facts: [
      'Dark matter makes up about 27% of the universe total mass-energy',
      'Ordinary matter accounts for only 5% of the universe',
      'Dark matter does not interact with electromagnetic forces',
      'The Bullet Cluster provides the strongest evidence for dark matter'
    ]
  },
  {
    id: 'fermi-paradox',
    category: 'science',
    title: 'Fermi Paradox',
    description: 'If aliens exist, where is everybody? The great silence of the cosmos.',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop',
    content: [
      'In 1950, physicist Enrico Fermi famously asked: Where is everybody? Given the vast number of stars and the age of the universe, we should see evidence of alien civilizations everywhere. Yet the cosmos appears silent.',
      'The numbers suggest we shouldn be alone. The Milky Way contains 200-400 billion stars. If even a tiny fraction have habitable planets, and even a tiny fraction of those develop life, and even a tiny fraction develop intelligence, there should still be thousands of civilizations in our galaxy alone.',
      'Numerous solutions to the Fermi Paradox have been proposed. The Great Filter hypothesis suggests that life faces an existential barrier at some point in its development. Perhaps the emergence of life, or intelligence, or spacefaring technology is incredibly rare.',
      'The Zoo Hypothesis proposes that advanced civilizations are deliberately avoiding contact with us, much like we avoid interfering with uncontacted tribes on Earth. Others suggest that civilizations self-destruct before achieving interstellar travel.',
      'The paradox grows deeper as we discover more potentially habitable worlds. The Kepler mission found that there may be 40 billion Earth-sized planets in the habitable zones of Sun-like stars in the Milky Way.'
    ],
    facts: [
      'The Drake Equation estimates between 1,000 and 100 million civilizations in the Milky Way',
      'We have only seriously searched for signals since the 1980s',
      'The Wow! Signal in 1977 remains the most promising candidate for alien communication',
      'Fast Radio Bursts from distant galaxies remain unexplained'
    ]
  },
  {
    id: 'dyson-spheres',
    category: 'science',
    title: 'Dyson Spheres',
    description: 'Hypothetical mega-structures that could encompass entire stars to harvest their energy.',
    image: 'https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=1200&auto=format&fit=crop',
    content: [
      'A Dyson Sphere is a hypothetical megastructure that encompasses a star to capture a large percentage of its power output. The concept was popularized by physicist Freeman Dyson in 1960, though it had appeared in science fiction earlier.',
      'Dyson originally envisioned not a solid sphere but a swarm of independent satellites orbiting in a dense formation around a star. This Dyson Swarm would be more physically plausible than a rigid shell completely enclosing a star.',
      'A civilization that builds a Dyson Sphere would qualify as a Kardashev Type II civilization, capable of harnessing the entire energy output of its parent star. For comparison, human civilization currently ranks at about Kardashev Type 0.73.',
      'A complete Dyson Sphere would be an astronomical engineering project requiring more material than exists in all the planets of a typical solar system. However, dismantling just one Jupiter-mass planet could provide enough material for a swarm.',
      'Searches for Dyson Spheres look for infrared excesses, as any structure absorbing starlight would eventually reradiate that energy as heat. Several surveys have hunted for these signatures, and while some candidates exist, none have been confirmed.'
    ],
    facts: [
      'A full Dyson Sphere would capture 100% of a star energy output',
      'The Sun outputs 3.8 × 10^26 watts of power',
      'Dyson Swarms are considered more feasible than solid spheres',
      'Several astronomical surveys have searched for Dyson Sphere signatures'
    ]
  }
]
