const { execFileSync } = require('child_process');
const path = require('path');
const ffmpeg = require('ffmpeg-static');

function getDuration(videoPath) {
  try {
    execFileSync(ffmpeg, ['-i', videoPath], { stdio: 'pipe' });
  } catch (err) {
    const output = err.stderr ? err.stderr.toString() : err.message;
    const match = output.match(/Duration: (\d{2}):(\d{2}):(\d{2}\.\d{2})/);
    if (match) {
      const hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      const seconds = parseFloat(match[3]);
      return hours * 3600 + minutes * 60 + seconds;
    }
  }
  return 0;
}

function extractFrame(videoPath, posterPath, timeInSeconds) {
  const h = Math.floor(timeInSeconds / 3600);
  const m = Math.floor((timeInSeconds % 3600) / 60);
  const s = (timeInSeconds % 60).toFixed(3);
  const timestamp = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s}`;
  
  execFileSync(ffmpeg, [
    '-y',
    '-ss', timestamp,
    '-i', videoPath,
    '-vframes', '1',
    '-c:v', 'libwebp',
    '-q:v', '50',
    posterPath
  ]);
  console.log(`Extracted frame at ${timestamp} for ${path.basename(videoPath)}`);
}

const videosDir = path.join(__dirname, 'public', 'videos');
const postersDir = path.join(videosDir, 'posters');

const mercuryPath = path.join(videosDir, 'Mercury.webm');
const venusPath = path.join(videosDir, 'Venus.webm');

const mercuryDur = getDuration(mercuryPath);
if (mercuryDur > 0) {
  // Using 0.2 seconds before the end to safely get the last visible frame
  extractFrame(mercuryPath, path.join(postersDir, 'Mercury.webp'), Math.max(0, mercuryDur - 0.2));
} else {
  console.log('Could not determine Mercury duration.');
}

const venusDur = getDuration(venusPath);
if (venusDur > 0) {
  extractFrame(venusPath, path.join(postersDir, 'Venus.webp'), venusDur / 2);
} else {
  console.log('Could not determine Venus duration.');
}
