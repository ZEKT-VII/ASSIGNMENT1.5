export interface Planet {
  id: string
  name: string
  subtitle: string
  description: string
  color: string
  video: string
  poster: string
  details: {
    distance: string
    mass: string
    temperature: string
    discovery: string
    composition: string
  }
}

export const planets: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    subtitle: 'The Swift Planet',
    description: 'Mercury is the smallest planet in our solar system and closest to the Sun. It races around the Sun in just 88 Earth days, making it the fastest planet. Despite its proximity to the Sun, it is not the hottest planet — that title belongs to Venus.',
    color: '#A0917B',
    video: '/videos/Mercury.webm',
    poster: '/videos/posters/Mercury.webp',
    details: {
      distance: '57.9 million km from Sun',
      mass: '3.285 × 10^23 kg',
      temperature: '167°C average',
      discovery: 'Known since antiquity',
      composition: 'Iron core, silicate mantle'
    }
  },
  {
    id: 'venus',
    name: 'Venus',
    subtitle: 'The Hottest World',
    description: 'Venus is the second planet from the Sun and the hottest planet in our solar system, with surface temperatures reaching 462°C. Its thick atmosphere traps heat in a runaway greenhouse effect.',
    color: '#E6C288',
    video: '/videos/Venus.webm',
    poster: '/videos/posters/Venus.webp',
    details: {
      distance: '108.2 million km from Sun',
      mass: '4.867 × 10^24 kg',
      temperature: '462°C surface',
      discovery: 'Known since antiquity',
      composition: '96% CO2, 3% Nitrogen atmosphere'
    }
  },
  {
    id: 'earth',
    name: 'Earth',
    subtitle: 'The Blue Marble',
    description: 'Earth is the third planet from the Sun and the only known planet to harbor life. Its surface is covered by 71% water, and its atmosphere is rich in nitrogen and oxygen, creating the perfect conditions for a vibrant biosphere.',
    color: '#4A90D9',
    video: '/videos/Earth.webm',
    poster: '/videos/posters/Earth.webp',
    details: {
      distance: '149.6 million km from Sun',
      mass: '5.972 × 10^24 kg',
      temperature: '15°C average',
      discovery: 'Known since antiquity',
      composition: '78% Nitrogen, 21% Oxygen atmosphere'
    }
  },
  {
    id: 'mars',
    name: 'Mars',
    subtitle: 'The Red Planet',
    description: 'Mars, the fourth planet from the Sun, has captured human imagination for centuries. Its reddish appearance comes from iron oxide on its surface. Mars hosts the tallest volcano and deepest canyon in the solar system.',
    color: '#C1440E',
    video: '/videos/Mars.webm',
    poster: '/videos/posters/Mars.webp',
    details: {
      distance: '227.9 million km from Sun',
      mass: '6.417 × 10^23 kg',
      temperature: '-63°C average',
      discovery: 'Known since antiquity',
      composition: 'Iron oxide surface, CO2 atmosphere'
    }
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    subtitle: 'The Gas Giant',
    description: 'The largest planet in our solar system, Jupiter is a gas giant with a mass more than two and a half times that of all the other planets combined. Its Great Red Spot is a storm larger than Earth that has raged for centuries.',
    color: '#C88B5C',
    video: '/videos/Jupiter.webm',
    poster: '/videos/posters/Jupiter.webp',
    details: {
      distance: '778.5 million km from Sun',
      mass: '1.898 × 10^27 kg',
      temperature: '-110°C average',
      discovery: 'Known since antiquity',
      composition: '89% Hydrogen, 10% Helium'
    }
  },
  {
    id: 'saturn',
    name: 'Saturn',
    subtitle: 'The Ringed Jewel',
    description: 'Famous for its spectacular ring system, Saturn is the second-largest planet. Its rings are made of billions of particles of ice and rock, ranging in size from tiny grains to house-sized boulders.',
    color: '#E8D5A3',
    video: '/videos/Saturn.webm',
    poster: '/videos/posters/Saturn.webp',
    details: {
      distance: '1.434 billion km from Sun',
      mass: '5.683 × 10^26 kg',
      temperature: '-140°C average',
      discovery: 'Known since antiquity',
      composition: '96% Hydrogen, 3% Helium'
    }
  },
  {
    id: 'uranus',
    name: 'Uranus',
    subtitle: 'The Ice Giant',
    description: 'Uranus is unique among planets as it rotates on its side, likely due to a massive collision in its past. This ice giant has a faint ring system and 27 known moons.',
    color: '#7DE3F4',
    video: '/videos/Uranus.webm',
    poster: '/videos/posters/Uranus.webp',
    details: {
      distance: '2.871 billion km from Sun',
      mass: '8.681 × 10^25 kg',
      temperature: '-224°C average',
      discovery: '1781, William Herschel',
      composition: '83% Hydrogen, 15% Helium, 2% Methane'
    }
  },
  {
    id: 'neptune',
    name: 'Neptune',
    subtitle: 'The Windy World',
    description: 'Neptune is the eighth and farthest planet from the Sun. It has the strongest winds in the solar system, reaching speeds of 2,100 km/h. Its deep blue color comes from methane in its atmosphere.',
    color: '#3E54E8',
    video: '/videos/Neptune.webm',
    poster: '/videos/posters/Neptune.webp',
    details: {
      distance: '4.495 billion km from Sun',
      mass: '1.024 × 10^26 kg',
      temperature: '-214°C average',
      discovery: '1846, Urbain Le Verrier',
      composition: '80% Hydrogen, 19% Helium, 1% Methane'
    }
  }
]
