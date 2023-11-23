// Create the overlay
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

// Create the spinner with SpinKit's swing animation
const spinner = document.createElement('div');
spinner.className = 'sk-swing';
spinner.style.cssText = `
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

// Create the dots with specified colors
const dot1 = document.createElement('div');
const dot2 = document.createElement('div');
dot1.className = dot2.className = 'sk-swing-dot';
dot1.style.backgroundColor = '#8f1739';
dot2.style.backgroundColor = '#d8005b';

// Append the dots to the spinner
spinner.appendChild(dot1);
spinner.appendChild(dot2);

// Append the overlay and spinner to the body
document.body.appendChild(overlay);
document.body.appendChild(spinner);

// Function to hide the overlay and display the spinner
function hideOverlay() {
    overlay.style.display = 'none';
    spinner.style.display = 'block';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', hideOverlay);

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
