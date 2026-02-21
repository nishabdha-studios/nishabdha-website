
function generateWaveformBars() {
  const waveforms = document.querySelectorAll('.contact__waveform');
  
  if (waveforms.length === 0) return;

  const barCount = 300; // Number of bars per side
  const heights = []; // Store heights for symmetry
  
  // Generate random heights
  for (let i = 0; i < barCount; i++) {
    // Create a wave-like pattern with randomness
    const height = Math.random() * 70 + 30; // Between 30% and 100%
    heights.push(height);
  }

  waveforms.forEach((waveform, index) => {
    const fragment = document.createDocumentFragment();
    
    // Left waveform uses heights in order
    // Right waveform uses heights in reverse order
    const isLeft = waveform.classList.contains('contact__waveform--left');
    const orderedHeights = isLeft ? heights : [...heights].reverse();
    
    orderedHeights.forEach(height => {
      const bar = document.createElement('div');
      bar.className = 'contact__waveform-bar';
      bar.style.height = `${height}%`;
      fragment.appendChild(bar);
    });
    
    waveform.appendChild(fragment);
  });
}

document.addEventListener('DOMContentLoaded', generateWaveformBars);
