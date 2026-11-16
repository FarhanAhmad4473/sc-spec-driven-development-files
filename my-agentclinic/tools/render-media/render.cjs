// One-off renderer for static/media/agent-on-couch.{svg,mp4}. Not an app dependency.
// To re-render, from a scratch folder:
//   npm i @resvg/resvg-js ffmpeg-static && cp <repo>/my-agentclinic/tools/render-media/*.cjs . && mkdir -p frames
//   node render.cjs <repo>/my-agentclinic/static/media
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process')
const { Resvg } = require('@resvg/resvg-js')
const ffmpeg = require('ffmpeg-static')
const { scene } = require('./scene.cjs')
const out = process.argv[2], FPS = 24, SECONDS = 4, N = FPS * SECONDS
fs.writeFileSync(path.join(out, 'agent-on-couch.svg'), scene(0))
for (let i = 0; i < N; i++) {
  const png = new Resvg(scene(i / N), { font: { loadSystemFonts: true } }).render().asPng()
  fs.writeFileSync(path.join('frames', `f${String(i).padStart(3, '0')}.png`), png)
}
fs.copyFileSync('frames/f000.png', 'preview-asleep.png'); fs.copyFileSync('frames/f048.png', 'preview-awake.png')
execFileSync(ffmpeg, ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', 'frames/f%03d.png',
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-profile:v', 'main', '-crf', '23', '-movflags', '+faststart', '-an',
  path.join(out, 'agent-on-couch.mp4')])
console.log('done', N, 'frames')
