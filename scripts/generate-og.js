const fs = require('fs');
const sharp = require('sharp');

async function generateOG() {
  const width = 1200;
  const height = 630;

  // Process avatar image into circular crop
  const avatarBuffer = await sharp('public/raj-kumar-timalsina.webp')
    .resize(230, 230, { fit: 'cover', position: 'top' })
    .composite([{
      input: Buffer.from('<svg><circle cx="115" cy="115" r="115" fill="white"/></svg>'),
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  const avatarBase64 = 'data:image/png;base64,' + avatarBuffer.toString('base64');

  const svgContent = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0a09" />
        <stop offset="60%" stop-color="#141210" />
        <stop offset="100%" stop-color="#1c1917" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#38bdf8" />
        <stop offset="100%" stop-color="#818cf8" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="60" result="blur" />
      </filter>
    </defs>

    <!-- Background -->
    <rect width="100%" height="100%" fill="url(#bgGradient)" />

    <!-- Subtle Grid Pattern -->
    <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />

    <!-- Ambient Glow Accent Circles -->
    <circle cx="1030" cy="200" r="220" fill="#0284c7" opacity="0.16" filter="url(#glow)" />
    <circle cx="180" cy="520" r="180" fill="#6366f1" opacity="0.10" filter="url(#glow)" />

    <!-- Outer Card Frame Border -->
    <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />

    <!-- Top Badge / Status -->
    <g transform="translate(70, 70)">
      <rect width="250" height="34" rx="17" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" />
      <circle cx="20" cy="17" r="4.5" fill="#10b981" />
      <text x="34" y="22" fill="#e7e5e4" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="500">
        Available for Opportunities
      </text>
    </g>

    <!-- Main Title -->
    <text x="70" y="195" fill="#f5f5f4" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="58" font-weight="700" letter-spacing="-1">
      Raj Kumar Timalsina
    </text>

    <!-- Subtitle / Headline -->
    <text x="70" y="255" fill="url(#accentGrad)" font-family="Consolas, 'Courier New', monospace" font-size="26" font-weight="600" letter-spacing="-0.5">
      Full-Stack &amp; Flutter Developer
    </text>

    <!-- Tagline description -->
    <text x="70" y="315" fill="#a8a29e" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="400">
      Cross-Platform Mobile Apps • Clean Architecture • Real-Time Systems
    </text>

    <!-- Tech Stack Pills -->
    <g transform="translate(70, 360)">
      <!-- Flutter -->
      <rect x="0" y="0" width="94" height="34" rx="8" fill="rgba(56, 189, 248, 0.14)" stroke="rgba(56, 189, 248, 0.35)" />
      <text x="47" y="22" fill="#38bdf8" font-family="Consolas, 'Courier New', monospace" font-size="14" font-weight="600" text-anchor="middle">Flutter</text>

      <!-- Spring Boot -->
      <rect x="106" y="0" width="124" height="34" rx="8" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" />
      <text x="168" y="22" fill="#f5f5f4" font-family="Consolas, 'Courier New', monospace" font-size="14" font-weight="500" text-anchor="middle">Spring Boot</text>

      <!-- Node.js -->
      <rect x="242" y="0" width="94" height="34" rx="8" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" />
      <text x="289" y="22" fill="#f5f5f4" font-family="Consolas, 'Courier New', monospace" font-size="14" font-weight="500" text-anchor="middle">Node.js</text>

      <!-- Redis -->
      <rect x="348" y="0" width="80" height="34" rx="8" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" />
      <text x="388" y="22" fill="#f5f5f4" font-family="Consolas, 'Courier New', monospace" font-size="14" font-weight="500" text-anchor="middle">Redis</text>

      <!-- WebSockets -->
      <rect x="440" y="0" width="122" height="34" rx="8" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" />
      <text x="501" y="22" fill="#f5f5f4" font-family="Consolas, 'Courier New', monospace" font-size="14" font-weight="500" text-anchor="middle">WebSockets</text>

      <!-- Clean Architecture -->
      <rect x="574" y="0" width="176" height="34" rx="8" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" />
      <text x="662" y="22" fill="#f5f5f4" font-family="Consolas, 'Courier New', monospace" font-size="14" font-weight="500" text-anchor="middle">Clean Architecture</text>
    </g>

    <!-- Bottom Divider Line -->
    <line x1="70" y1="440" x2="1130" y2="440" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />

    <!-- Footer Row: Domain & Credentials -->
    <g transform="translate(70, 480)">
      <text x="0" y="28" fill="#f5f5f4" font-family="Consolas, 'Courier New', monospace" font-size="24" font-weight="700">
        rajkumartimalsina.me
      </text>
      <text x="0" y="58" fill="#78716c" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="400">
        B.Sc. CSIT • Kathmandu, Nepal
      </text>
    </g>

    <!-- Avatar Image with Double Border on the Right -->
    <g transform="translate(890, 155)">
      <circle cx="115" cy="115" r="122" fill="none" stroke="rgba(56, 189, 248, 0.4)" stroke-width="2" />
      <circle cx="115" cy="115" r="118" fill="#1c1917" />
      <image href="${avatarBase64}" x="0" y="0" width="230" height="230" />
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svgContent))
    .jpeg({ quality: 95 })
    .toFile('public/og-image.jpeg');

  console.log('Successfully regenerated public/og-image.jpeg');
}

generateOG().catch(console.error);
