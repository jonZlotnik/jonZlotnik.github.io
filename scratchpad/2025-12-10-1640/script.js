// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

// Initialize theme from localStorage or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-theme', currentTheme === 'dark');
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
});

function updateThemeIcon() {
    const isDark = body.classList.contains('dark-theme');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
}

// Scrolling Words Animation
const scrollingWords = [
    'a Developer',
    'a Designer',
    'a Creator',
    'a Problem Solver',
    'Innovative'
];

const scrollingWordsElement = document.getElementById('scrollingWords');

// Create the scrolling words HTML structure
function createScrollingWords() {
    const wordsHTML = scrollingWords.map(word => 
        `<span class="word-item">${word}</span>`
    ).join('');
    
    scrollingWordsElement.innerHTML = wordsHTML;
}

// Initialize scrolling words
createScrollingWords();

// Adjust animation duration based on number of words
const totalWords = scrollingWords.length;
const animationDuration = totalWords * 3; // 3 seconds per word
const pausePercentage = 15; // Percentage of time to pause on each word
const transitionPercentage = 5; // Percentage of time for transition

// Calculate keyframe percentages
function generateKeyframes() {
    const keyframes = [];
    const segmentDuration = 100 / totalWords;
    
    for (let i = 0; i < totalWords; i++) {
        const start = i * segmentDuration;
        const pauseStart = start + transitionPercentage;
        const pauseEnd = start + segmentDuration - transitionPercentage;
        const end = (i + 1) * segmentDuration;
        
        // Start position
        if (i === 0) {
            keyframes.push(`0% { transform: translateY(0); }`);
        }
        
        // Transition to next word
        keyframes.push(`${pauseStart}% { transform: translateY(-${(i + 1) * 1.2}em); }`);
        
        // Pause on word
        keyframes.push(`${pauseEnd}% { transform: translateY(-${(i + 1) * 1.2}em); }`);
    }
    
    // Return to start
    keyframes.push(`100% { transform: translateY(0); }`);
    
    return keyframes.join('\n        ');
}

// Update CSS animation duration dynamically
const style = document.createElement('style');
style.textContent = `
    .scrolling-words {
        animation: scrollWords ${animationDuration}s infinite;
    }
    
    @keyframes scrollWords {
        ${generateKeyframes()}
    }
`;
document.head.appendChild(style);

// Connect Button Functionality
const connectButton = document.getElementById('connectButton');

connectButton.addEventListener('click', () => {
    // Add your connect functionality here
    console.log('Connect button clicked');
    // Example: window.location.href = '/contact';
    // Or: window.open('mailto:your@email.com', '_blank');
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Handle window resize for responsive adjustments
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate any size-dependent animations if needed
    }, 250);
});

