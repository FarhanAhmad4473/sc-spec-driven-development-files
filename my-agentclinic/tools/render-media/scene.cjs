// Original AgentClinic artwork: a tired robot agent resting on a therapy couch.
// scene(t) returns an SVG string for loop position t in [0, 1).
const W = 640, H = 360
const TAU = Math.PI * 2
const FONT = "Helvetica, Arial, sans-serif"

function zzz(t, phase, size, x0) {
  const p = (t + phase) % 1
  const x = x0 + Math.sin(p * TAU) * 8 + p * 30
  const y = 150 - p * 95
  const op = p < 0.15 ? p / 0.15 : p > 0.75 ? (1 - p) / 0.25 : 1
  return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-family="${FONT}" font-weight="700" font-size="${size}" fill="#3d5a80" opacity="${op.toFixed(3)}">Z</text>`
}

function scene(t) {
  const breath = Math.sin(t * TAU * 2)          // 2 breaths per loop
  const chestRise = 3 * breath
  const ledOn = 0.55 + 0.45 * Math.sin(t * TAU * 4)
  // blink window: eyes open briefly around t = 0.45..0.55, otherwise asleep
  const awake = t > 0.45 && t < 0.56
  const eyeOpen = awake ? Math.sin(((t - 0.45) / 0.11) * Math.PI) : 0
  const bubbleOp = awake ? Math.min(1, Math.sin(((t - 0.45) / 0.11) * Math.PI) * 1.6) : 0

  // heartbeat line on the monitor, scrolling
  let pulse = ''
  for (let i = 0; i <= 60; i++) {
    const u = (i / 60 + t * 2) % 1
    const spike = u > 0.42 && u < 0.5 ? (u < 0.46 ? -(u - 0.42) * 450 : -(0.5 - u) * 450) : 0
    pulse += `${i === 0 ? 'M' : 'L'}${(538 + i * 1.2).toFixed(1)},${(118 + spike).toFixed(1)}`
  }

  const eyeH = 1.5 + 6 * eyeOpen
  const eyes = eyeOpen > 0.05
    ? `<ellipse cx="428" cy="188" rx="6" ry="${eyeH.toFixed(2)}" fill="#1b2a41"/>
       <ellipse cx="456" cy="188" rx="6" ry="${eyeH.toFixed(2)}" fill="#1b2a41"/>`
    : `<path d="M421 188 q7 6 14 0 M449 188 q7 6 14 0" stroke="#1b2a41" stroke-width="3" fill="none" stroke-linecap="round"/>`

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <title>A tired AI agent resting on the AgentClinic therapy couch</title>
  <defs>
    <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#eaf4f4"/><stop offset="1" stop-color="#cfe6e6"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d9e1ec"/><stop offset="1" stop-color="#a9b6c9"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#wall)"/>
  <rect y="292" width="${W}" height="68" fill="#d8c3a5"/>
  <rect y="290" width="${W}" height="4" fill="#bfa98a"/>

  <!-- framed certificate -->
  <rect x="58" y="44" width="128" height="86" rx="4" fill="#8d6e4c"/>
  <rect x="66" y="52" width="112" height="70" fill="#fffdf5"/>
  <text x="122" y="76" text-anchor="middle" font-family="${FONT}" font-size="11" font-weight="700" fill="#3d5a80">Dr. Prompt</text>
  <text x="122" y="92" text-anchor="middle" font-family="${FONT}" font-size="8.5" fill="#55606e">Licensed Agent</text>
  <text x="122" y="103" text-anchor="middle" font-family="${FONT}" font-size="8.5" fill="#55606e">Therapist</text>
  <circle cx="160" cy="111" r="6" fill="#e0a526"/>

  <!-- monitor on a stand -->
  <rect x="580" y="140" width="6" height="150" fill="#7a8696"/>
  <rect x="558" y="286" width="50" height="6" rx="3" fill="#7a8696"/>
  <rect x="530" y="92" width="88" height="54" rx="6" fill="#1b2a41"/>
  <path d="${pulse}" stroke="#5ee6a8" stroke-width="2" fill="none"/>
  <text x="574" y="140" text-anchor="middle" font-family="${FONT}" font-size="7" fill="#9fb3c8">CONTEXT: 99%</text>

  <!-- plant -->
  <path d="M38 292 l8 -40 h32 l8 40 z" fill="#c8693b"/>
  <path d="M62 252 c-20 -30 -28 -48 -10 -70 c4 22 10 40 10 70 z" fill="#4f9d69"/>
  <path d="M62 252 c18 -26 30 -40 16 -66 c-8 22 -14 40 -16 66 z" fill="#3f8a5a"/>
  <path d="M62 252 c-6 -28 0 -50 4 -58 c6 18 4 40 -4 58 z" fill="#5cb57a"/>

  <!-- couch -->
  <rect x="170" y="268" width="12" height="24" fill="#5a3e2b"/>
  <rect x="470" y="268" width="12" height="24" fill="#5a3e2b"/>
  <rect x="158" y="160" width="336" height="70" rx="22" fill="#5b8c85"/>
  <rect x="150" y="214" width="352" height="60" rx="16" fill="#6fa39b"/>
  <rect x="130" y="196" width="52" height="84" rx="24" fill="#4f7d77"/>
  <rect x="470" y="176" width="52" height="104" rx="24" fill="#4f7d77"/>

  <!-- robot: legs over left armrest -->
  <rect x="150" y="${(200 - chestRise * 0.2).toFixed(1)}" width="80" height="16" rx="8" fill="url(#metal)"/>
  <rect x="150" y="${(218 - chestRise * 0.2).toFixed(1)}" width="80" height="14" rx="7" fill="url(#metal)"/>
  <rect x="134" y="194" width="20" height="24" rx="6" fill="#3d5a80"/>
  <rect x="134" y="214" width="20" height="22" rx="6" fill="#3d5a80"/>

  <!-- robot: body (breathing) -->
  <rect x="222" y="${(186 - chestRise).toFixed(1)}" width="190" height="${(56 + chestRise).toFixed(1)}" rx="16" fill="url(#metal)" stroke="#8796ab" stroke-width="2"/>
  <rect x="270" y="${(198 - chestRise).toFixed(1)}" width="74" height="26" rx="6" fill="#1b2a41"/>
  <circle cx="290" cy="${(211 - chestRise).toFixed(1)}" r="5" fill="#ff6b6b" opacity="${ledOn.toFixed(3)}"/>
  <rect x="302" y="${(207 - chestRise).toFixed(1)}" width="34" height="3" rx="1.5" fill="#5ee6a8"/>
  <rect x="302" y="${(214 - chestRise).toFixed(1)}" width="22" height="3" rx="1.5" fill="#5ee6a8" opacity="0.7"/>
  <!-- arm resting across the body -->
  <path d="M370 ${(196 - chestRise).toFixed(1)} q-40 30 -96 26" stroke="#8796ab" stroke-width="14" fill="none" stroke-linecap="round"/>
  <path d="M370 ${(196 - chestRise).toFixed(1)} q-40 30 -96 26" stroke="url(#metal)" stroke-width="10" fill="none" stroke-linecap="round"/>

  <!-- robot: head on right armrest -->
  <rect x="404" y="158" width="74" height="60" rx="18" fill="url(#metal)" stroke="#8796ab" stroke-width="2"/>
  <line x1="441" y1="158" x2="441" y2="140" stroke="#8796ab" stroke-width="3"/>
  <circle cx="441" cy="136" r="6" fill="#e0a526" opacity="${(0.6 + 0.4 * ledOn).toFixed(3)}"/>
  ${eyes}
  <path d="M434 204 q8 ${awake ? -3 : 3} 16 0" stroke="#1b2a41" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- cold compress -->
  <rect x="414" y="160" width="54" height="10" rx="5" fill="#9ad1f0" opacity="0.9"/>

  <!-- Zzz while asleep -->
  <g opacity="${(1 - bubbleOp).toFixed(3)}">
    ${zzz(t, 0.0, 18, 482)}${zzz(t, 0.33, 15, 482)}${zzz(t, 0.66, 12, 482)}
  </g>

  <!-- brief wake-up thought -->
  <g opacity="${bubbleOp.toFixed(3)}">
    <rect x="300" y="40" width="210" height="52" rx="18" fill="#ffffff" stroke="#3d5a80" stroke-width="2"/>
    <circle cx="430" cy="104" r="7" fill="#ffffff" stroke="#3d5a80" stroke-width="2"/>
    <circle cx="442" cy="122" r="4" fill="#ffffff" stroke="#3d5a80" stroke-width="2"/>
    <text x="405" y="62" text-anchor="middle" font-family="${FONT}" font-size="13" fill="#1b2a41">"Just make it pop..."</text>
    <text x="405" y="80" text-anchor="middle" font-family="${FONT}" font-size="11" fill="#55606e">five more minutes, please</text>
  </g>
</svg>`
}

module.exports = { scene, W, H }
