/* ==========================================================================
   FINAL TRAINING SYSTEM JAVASCRIPT
   ========================================================================== */

// ==========================================================================
// GLOBAL VARIABLES
// ==========================================================================
let selectedChoices = {};      // Tracks user's choice selections
let currentSlide = 1;          // Current slide number (1-4)
let score = 0;                 // Running score counter
let unlockedSlides = [1, 2];   // Slides 1 & 2 unlocked by default, 3 & 4 locked

// Page titles for each slide (change these for different scenarios)
const pageTitles = {
    1: "Crisis Leadership Scenario",
    2: "Decision Point 1", 
    3: "Decision Point 2",
    4: "Decision Point 3"
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    showSlide(1);
    updateNavigationState();
});

// ==========================================================================
// EVENT LISTENERS SETUP
// ==========================================================================
function setupEventListeners() {
    // Navigation dots - allow clicking only on unlocked slides
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const slideNum = index + 1;
            if (unlockedSlides.includes(slideNum)) {
                showSlide(slideNum);
            }
        });
    });

    // Choice selection - handle clicking on answer choices
    document.querySelectorAll('.choice').forEach(choice => {
        choice.addEventListener('click', function() {
            const decision = this.getAttribute('data-decision');
            const choiceValue = this.getAttribute('data-choice');
            selectChoice(parseInt(decision), choiceValue, this);
        });
    });

    // Continue buttons - navigate to next slide
    document.querySelectorAll('[data-next]').forEach(btn => {
        btn.addEventListener('click', function() {
            const nextSlide = parseInt(this.getAttribute('data-next'));
            if (unlockedSlides.includes(nextSlide)) {
                showSlide(nextSlide);
            }
        });
    });

    // Previous/Next navigation buttons
    document.getElementById('prevBtn').addEventListener('click', goToPrevious);
    document.getElementById('nextBtn').addEventListener('click', goToNext);
}

// ==========================================================================
// SLIDE NAVIGATION
// ==========================================================================
function showSlide(slideNumber) {
    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show selected slide
    const targetSlide = document.getElementById('slide' + slideNumber);
    if (targetSlide) {
        targetSlide.classList.add('active');
        currentSlide = slideNumber;
        
        // Update page title
        document.getElementById('pageTitle').textContent = pageTitles[slideNumber];
        
        // Update navigation dots
        document.querySelectorAll('.nav-dot').forEach((dot, index) => {
            dot.classList.remove('active');
            if (index + 1 === slideNumber) {
                dot.classList.add('active');
            }
        });

        // Update progress bar
        const progressPercent = slideNumber === 1 ? 20 : slideNumber * 25;
        document.getElementById('progressBar').style.width = progressPercent + '%';

        updateNavigationState();
    }
}

// ==========================================================================
// NAVIGATION STATE MANAGEMENT
// ==========================================================================
function updateNavigationState() {
    // Update navigation dots - disable locked slides
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        const slideNum = index + 1;
        if (unlockedSlides.includes(slideNum)) {
            dot.classList.remove('disabled');
        } else {
            dot.classList.add('disabled');
        }
    });

    // Update next button state
    const nextBtn = document.getElementById('nextBtn');
    if (currentSlide < 4) {
        const nextSlideUnlocked = unlockedSlides.includes(currentSlide + 1);
        nextBtn.disabled = !nextSlideUnlocked;
    } else {
        nextBtn.disabled = true; // Last slide
    }

    // Update previous button state
    const prevBtn = document.getElementById('prevBtn');
    prevBtn.disabled = currentSlide <= 1;
}

// ==========================================================================
// CHOICE SELECTION AND FEEDBACK
// ==========================================================================
function selectChoice(decisionPoint, choice, element) {
    // Hide all feedback for this decision point
    const currentSlideEl = document.getElementById('slide' + (decisionPoint + 1));
    currentSlideEl.querySelectorAll('.choice-feedback').forEach(f => {
        f.style.display = 'none';
    });
    
    // Remove previous selections
    currentSlideEl.querySelectorAll('.choice').forEach(c => {
        c.classList.remove('selected', 'incorrect');
    });
    
    // Mark selected choice
    element.classList.add('selected');
    selectedChoices[decisionPoint] = choice;
    
    // Show feedback for selected choice
    const feedbackElement = element.querySelector('.choice-feedback');
    if (feedbackElement) {
        feedbackElement.style.display = 'block';
        
        // Update score if correct
        if (feedbackElement.classList.contains('correct')) {
            // Only add to score if this question wasn't answered correctly before
            if (!selectedChoices[decisionPoint + '_correct']) {
                score++;
                selectedChoices[decisionPoint + '_correct'] = true;
            }
        } else {
            element.classList.add('incorrect');
            // Mark as answered incorrectly (remove correct flag if it existed)
            selectedChoices[decisionPoint + '_correct'] = false;
        }
        
        // Update score display
        document.getElementById('scoreDisplay').textContent = `Score: ${score}/3`;
    }
    
    // Enable continue button and unlock next slide
    const continueBtn = document.getElementById('continue' + decisionPoint);
    if (continueBtn) {
        continueBtn.disabled = false;
        
        // Unlock next slide
        const nextSlide = decisionPoint + 2; // +2 because slide numbers are offset
        if (nextSlide <= 4 && !unlockedSlides.includes(nextSlide)) {
            unlockedSlides.push(nextSlide);
        }
        
        updateNavigationState();
    }
}

// ==========================================================================
// NAVIGATION FUNCTIONS
// ==========================================================================
function goToNext() {
    if (currentSlide < 4 && unlockedSlides.includes(currentSlide + 1)) {
        showSlide(currentSlide + 1);
    } else if (currentSlide >= 4) {
        alert('This is the last slide. Going to next page...');
    }
}

function goToPrevious() {
    if (currentSlide > 1) {
        showSlide(currentSlide - 1);
    } else {
        alert('This is the first slide. Going to previous page...');
    }
}