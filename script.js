// Navigation and interaction logic

// Keep track of the current frame
let currentFrame = 'frame-1';

// Function to navigate between frames
function goToFrame(targetFrameId) {
    // Get current and target frames
    const current = document.getElementById(currentFrame);
    const target = document.getElementById(targetFrameId);
    
    if (!target) {
        console.error('Target frame not found:', targetFrameId);
        return;
    }
    
    // Remove active class from current frame
    if (current) {
        current.classList.remove('active');
    }
    
    // Add active class to target frame
    target.classList.add('active');
    
    // Update current frame reference
    currentFrame = targetFrameId;
    
    // Auto-transition logic with reading delays

    // Frame 1: Opening image → Frame 1.5 (CLICK TO ADVANCE - no auto-transition)
    
    // Frame 1.5: Question text → Frame 2 (3 seconds to read)
    if (targetFrameId === 'frame-1-5') {
        setTimeout(() => {
            goToFrame('frame-2');
        }, 3000);
    }
    
    // Frame 2: Multiple choice - wait for user selection (no auto-advance)
    
    // Frame 3A: Cup centered, then slide down with text appearing
    if (targetFrameId === 'frame-3a') {
        const cupContainer = document.getElementById('cup-container-3a');
        const text = document.getElementById('text-3a');
        if (cupContainer && text) {
            // Set initial text position
            text.style.top = '5%';
            // Wait 1 second, then slide cup down and slide text down with fade in
            setTimeout(() => {
                cupContainer.style.transition = 'all 3s ease-out';
                cupContainer.style.transform = 'translateX(-50%) scale(1.3)';
                cupContainer.style.top = 'auto';
                cupContainer.style.bottom = '-30%';
                text.style.transition = 'all 2.5s ease-out';
                text.style.opacity = '1';
                text.style.top = '18%';
            }, 1000);
            // After animation completes, transition directly to 5A (skip 4A)
            setTimeout(() => {
                goToFrame('frame-5a');
            }, 6000);
        }
    }
    
    // Frame 3B: Cup centered, then slide down with text appearing
    if (targetFrameId === 'frame-3b') {
        const cupContainer = document.getElementById('cup-container-3b');
        const text = document.getElementById('text-3b');
        if (cupContainer && text) {
            // Set initial text position
            text.style.top = '5%';
            // Wait 1 second, then slide cup down and slide text down with fade in
            setTimeout(() => {
                cupContainer.style.transition = 'all 3s ease-out';
                cupContainer.style.transform = 'translateX(-50%) scale(1.3)';
                cupContainer.style.top = 'auto';
                cupContainer.style.bottom = '-30%';
                text.style.transition = 'all 2.5s ease-out';
                text.style.opacity = '1';
                text.style.top = '18%';
            }, 1000);
            // After animation completes, transition directly to 5A (skip 4B)
            setTimeout(() => {
                goToFrame('frame-5a');
            }, 6000);
        }
    }
    
    // Frame 3C: Cup centered, then slide down with text appearing
    if (targetFrameId === 'frame-3c') {
        const cupContainer = document.getElementById('cup-container-3c');
        const text = document.getElementById('text-3c');
        if (cupContainer && text) {
            // Set initial text position
            text.style.top = '5%';
            // Wait 1 second, then slide cup down and slide text down with fade in
            setTimeout(() => {
                cupContainer.style.transition = 'all 3s ease-out';
                cupContainer.style.transform = 'translateX(-50%) scale(1.3)';
                cupContainer.style.top = 'auto';
                cupContainer.style.bottom = '-30%';
                text.style.transition = 'all 2.5s ease-out';
                text.style.opacity = '1';
                text.style.top = '18%';
            }, 1000);
            // After animation completes, transition directly to 4.5 (skip 4C)
            setTimeout(() => {
                goToFrame('frame-4-5');
            }, 6000);
        }
    }
    
    // Frame 4A: Show text with cup → Frame 5A (4 seconds to read)
    if (targetFrameId === 'frame-4a') {
        setTimeout(() => {
            goToFrame('frame-5a');
        }, 4500);
    }
    
    // Frame 4B: Show text with cup → Frame 5A (4 seconds to read)
    if (targetFrameId === 'frame-4b') {
        setTimeout(() => {
            goToFrame('frame-5a');
        }, 4500);
    }
    
    // Frame 4C: Show text with cup → Frame 4.5 (4 seconds to read)
    if (targetFrameId === 'frame-4c') {
        setTimeout(() => {
            goToFrame('frame-4-5');
        }, 4500);
    }
    
    // Frame 4.5: Follow-up text → restart to Frame 1 (5 seconds to read)
    if (targetFrameId === 'frame-4-5') {
        setTimeout(() => {
            goToFrame('frame-1');
        }, 5500);
    }
    
    // Frame 5A: Trigger scroll animation through 5A and 5B
    if (targetFrameId === 'frame-5a') {
        const scrollContainer = document.getElementById('scroll-container-5');
        if (scrollContainer) {
            // Reset scroll position first - remove class and reset transform
            scrollContainer.classList.remove('scrolled');
            scrollContainer.style.transition = 'none';
            scrollContainer.style.transform = 'translateY(0)';

            // Force reflow to ensure reset is applied
            scrollContainer.offsetHeight;

            // Restore transition and start scroll after brief delay
            setTimeout(() => {
                scrollContainer.style.transition = 'transform 5s ease-in-out';
                scrollContainer.classList.add('scrolled');
            }, 500);
            // After scroll completes (5s scroll + 2s pause on 5B), go to 5C
            setTimeout(() => {
                goToFrame('frame-5c');
            }, 8000);
        }
    }
    
    // Frame 5C: Text display → Frame 6 (3.5 seconds to read)
    if (targetFrameId === 'frame-5c') {
        setTimeout(() => {
            goToFrame('frame-6');
        }, 3500);
    }
    
    // Frame 6: Question text → Frame 7 (4 seconds to read)
    if (targetFrameId === 'frame-6') {
        setTimeout(() => {
            goToFrame('frame-7');
        }, 4500);
    }
    
    // Frame 7: Multiple choice - wait for user selection (no auto-advance)
    
    // Frame 7.5A and 7.5B: Endings → restart after 5 seconds
    if (targetFrameId === 'frame-7-5a' || targetFrameId === 'frame-7-5b') {
        setTimeout(() => {
            goToFrame('frame-1');
        }, 6000);
    }
    
    // Log for debugging
    console.log('Navigated to:', targetFrameId);
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    // Press R to restart from beginning
    if (event.code === 'KeyR') {
        goToFrame('frame-1');
    }
    
    // Number keys for choices in Frame 2
    if (currentFrame === 'frame-2') {
        if (event.code === 'Digit1' || event.code === 'Numpad1') {
            goToFrame('frame-3a');
        } else if (event.code === 'Digit2' || event.code === 'Numpad2') {
            goToFrame('frame-3b');
        } else if (event.code === 'Digit3' || event.code === 'Numpad3') {
            goToFrame('frame-3c');
        }
    }
    
    // Number keys for choices in Frame 7
    if (currentFrame === 'frame-7') {
        if (event.code === 'Digit1' || event.code === 'Numpad1') {
            goToFrame('frame-7-5a');
        } else if (event.code === 'Digit2' || event.code === 'Numpad2') {
            goToFrame('frame-7-5b');
        }
    }
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add click sound effect (optional)
    const clickableElements = document.querySelectorAll('.overlay-click, .choice-btn, .choice-btn-large, .restart-btn');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', function() {
            // Visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
    
    // Log initial state
    console.log('Interactive story loaded. Current frame:', currentFrame);
    console.log('Keyboard shortcuts:');
    console.log('- R: Restart from beginning');
    console.log('- 1/2/3: Select choices in Frame 2 (warm/sweet/strong)');
    console.log('- 1/2: Select choices in Frame 7 (quiet/alone)');
    console.log('Note: All other transitions are automatic with reading delays');
});

// Save progress (optional feature for future enhancement)
function saveProgress() {
    localStorage.setItem('storyProgress', currentFrame);
}

// Load progress (optional feature for future enhancement)
function loadProgress() {
    const savedFrame = localStorage.getItem('storyProgress');
    if (savedFrame && document.getElementById(savedFrame)) {
        goToFrame(savedFrame);
    }
}

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(event) {
    const touchEndX = event.changedTouches[0].screenX;
    const touchEndY = event.changedTouches[0].screenY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Detect horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Swipe left or right could be used for navigation if desired
        // Currently not implemented to avoid interfering with choice selection
    }
});

// Preload images for smoother transitions
function preloadImages() {
    const images = [
        'https://www.figma.com/api/mcp/asset/b0b62627-4d9c-44cf-a160-8b9efcc98a0c',
        'https://www.figma.com/api/mcp/asset/25af6e34-79d3-40b5-8dee-001d8d96e817',
        'https://www.figma.com/api/mcp/asset/2581de70-5fda-43de-a85f-ee147139f876',
        'https://www.figma.com/api/mcp/asset/b5b40a2c-33ad-4c57-bd03-e082639c1a21',
        'https://www.figma.com/api/mcp/asset/95d1ae58-5e3d-4018-8ece-a9bfa4f9477e'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize
preloadImages();

// Export functions for use in HTML onclick attributes
window.goToFrame = goToFrame;
window.saveProgress = saveProgress;
window.loadProgress = loadProgress;
