const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

try {
  const ffmpeg = require('ffmpeg-static');
  const videosDir = path.join(__dirname, 'public', 'videos');
  const postersDir = path.join(videosDir, 'posters');
  
  if (!fs.existsSync(postersDir)) {
    fs.mkdirSync(postersDir);
  }
  
  const files = fs.readdirSync(videosDir).filter(f => f.endsWith('.webm'));
  
  for (const file of files) {
    const videoPath = path.join(videosDir, file);
    const posterPath = path.join(postersDir, file.replace('.webm', '.webp'));
    console.log(`Extracting frame from ${file}...`);
    // Extract first frame, scale down slightly for performance (optional, let's keep original res or 720p)
    // We'll just extract a single frame to webp
    execFileSync(ffmpeg, [
      '-y',
      '-i', videoPath,
      '-ss', '00:00:00.000',
      '-vframes', '1',
      '-c:v', 'libwebp',
      '-q:v', '50', // quality 50 for good compression
      posterPath
    ]);
  }
  console.log('Posters generated successfully!');
} catch (err) {
  console.error(err);
}
