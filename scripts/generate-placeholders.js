const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

function generateSvg({ title, subtitle, icon, bgGradient, accentColor = '#D4AF37' }) {
  return `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      ${bgGradient}
    </linearGradient>
    <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F1E5AC" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="#D4AF37" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="800" fill="url(#bg)"/>
  
  <!-- Subtle Ornamental Borders -->
  <circle cx="400" cy="400" r="340" fill="none" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.4"/>
  <circle cx="400" cy="400" r="320" fill="url(#goldGlow)" opacity="0.3"/>
  <circle cx="400" cy="400" r="280" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.6"/>
  <circle cx="400" cy="400" r="260" fill="none" stroke="#F1E5AC" stroke-width="1" opacity="0.3"/>

  <!-- Icon / Emblem -->
  <g transform="translate(400, 360) scale(1.4)" text-anchor="middle" filter="url(#shadow)">
    ${icon}
  </g>

  <!-- Text -->
  <text x="400" y="520" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#FFFFFF" letter-spacing="4" filter="url(#shadow)">
    ${title}
  </text>
  <text x="400" y="560" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="600" fill="${accentColor}" letter-spacing="6">
    ${subtitle.toUpperCase()}
  </text>
  <text x="400" y="610" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="16" fill="#F1E5AC" opacity="0.8">
    Mark &amp; Sarah
  </text>
</svg>`;
}

const heartIcon = `
  <path d="M0 -30 C-30 -70 -80 -40 -80 10 C-80 60 0 100 0 110 C0 100 80 60 80 10 C80 -40 30 -70 0 -30 Z" fill="#D4AF37" opacity="0.9"/>
  <path d="M0 -20 C-22 -50 -60 -30 -60 10 C-60 45 0 75 0 85 C0 75 60 45 60 10 C60 -30 22 -50 0 -20 Z" fill="#F1E5AC" opacity="0.6"/>
`;

const ringsIcon = `
  <circle cx="-25" cy="0" r="45" fill="none" stroke="#D4AF37" stroke-width="8"/>
  <circle cx="25" cy="0" r="45" fill="none" stroke="#F1E5AC" stroke-width="8"/>
  <polygon points="25,-48 33,-38 25,-28 17,-38" fill="#FFFFFF"/>
`;

const flowersIcon = `
  <circle cx="0" cy="0" r="16" fill="#D4AF37"/>
  <circle cx="0" cy="-35" r="18" fill="#F1E5AC" opacity="0.85"/>
  <circle cx="33" cy="-11" r="18" fill="#F1E5AC" opacity="0.85"/>
  <circle cx="21" cy="28" r="18" fill="#F1E5AC" opacity="0.85"/>
  <circle cx="-21" cy="28" r="18" fill="#F1E5AC" opacity="0.85"/>
  <circle cx="-33" cy="-11" r="18" fill="#F1E5AC" opacity="0.85"/>
`;

const cheersIcon = `
  <path d="M-30 -40 L-10 10 L-20 40 L-40 40 M-10 10 L-10 40" fill="none" stroke="#D4AF37" stroke-width="5"/>
  <path d="M30 -40 L10 10 L20 40 L40 40 M10 10 L10 40" fill="none" stroke="#F1E5AC" stroke-width="5"/>
  <circle cx="0" cy="-20" r="4" fill="#F1E5AC"/>
  <circle cx="-5" cy="-35" r="3" fill="#D4AF37"/>
  <circle cx="5" cy="-30" r="3" fill="#FFFFFF"/>
`;

const coverSvg = `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="coverBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141416"/>
      <stop offset="50%" stop-color="#241E1A"/>
      <stop offset="100%" stop-color="#0E0D0F"/>
    </linearGradient>
    <radialGradient id="coverGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.3"/>
      <stop offset="60%" stop-color="#1A1815" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1080" height="1920" fill="url(#coverBg)"/>
  <rect width="1080" height="1920" fill="url(#coverGlow)"/>

  <!-- Ornate Frame -->
  <rect x="50" y="50" width="980" height="1820" rx="30" fill="none" stroke="#D4AF37" stroke-width="2" opacity="0.3"/>
  <rect x="70" y="70" width="940" height="1780" rx="20" fill="none" stroke="#F1E5AC" stroke-width="1" stroke-dasharray="10 8" opacity="0.2"/>

  <!-- Corner Flourishes -->
  <circle cx="50" cy="50" r="8" fill="#D4AF37"/>
  <circle cx="1030" cy="50" r="8" fill="#D4AF37"/>
  <circle cx="50" cy="1870" r="8" fill="#D4AF37"/>
  <circle cx="1030" cy="1870" r="8" fill="#D4AF37"/>
</svg>`;

const files = [
  {
    name: 'weddingwalk.jpg',
    content: coverSvg
  },
  {
    name: 'wedding_hero_image_1775197041013.png',
    content: generateSvg({
      title: 'A Beautiful Beginning',
      subtitle: 'Forever Starts Today',
      icon: ringsIcon,
      bgGradient: '<stop offset="0%" stop-color="#2B2620"/><stop offset="100%" stop-color="#100F0D"/>'
    })
  },
  {
    name: 'photo_2.png',
    content: generateSvg({
      title: 'Our Love Story',
      subtitle: 'Two Hearts Joined',
      icon: heartIcon,
      bgGradient: '<stop offset="0%" stop-color="#342820"/><stop offset="100%" stop-color="#141110"/>'
    })
  },
  {
    name: 'photo_3.png',
    content: generateSvg({
      title: 'Cherished Moments',
      subtitle: 'A Lifetime of Joy',
      icon: flowersIcon,
      bgGradient: '<stop offset="0%" stop-color="#222B28"/><stop offset="100%" stop-color="#0E1211"/>'
    })
  },
  {
    name: 'photo_4.png',
    content: generateSvg({
      title: 'Special Celebration',
      subtitle: 'With Dear Family & Friends',
      icon: cheersIcon,
      bgGradient: '<stop offset="0%" stop-color="#2E232A"/><stop offset="100%" stop-color="#120E11"/>'
    })
  },
  {
    name: 'photo_5.png',
    content: generateSvg({
      title: 'With Love & Gratitude',
      subtitle: 'Thank You For Celebrating',
      icon: heartIcon,
      bgGradient: '<stop offset="0%" stop-color="#2F281E"/><stop offset="100%" stop-color="#13100B"/>'
    })
  }
];

files.forEach(f => {
  fs.writeFileSync(path.join(publicDir, f.name), f.content);
  console.log(`Generated: ${f.name}`);
});
