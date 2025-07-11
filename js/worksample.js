/* ==========================================================================
   COMPLETE FINAL TRAINING SYSTEM JAVASCRIPT
   ========================================================================== */

// ==========================================================================
// GLOBAL VARIABLES
// ==========================================================================
let selectedChoices = {};      // Tracks user's choice selections
let currentSlide = 1;          // Current slide number (1-5)
let score = 0;                 // Running score counter
let unlockedSlides = [1, 2];   // Slides 1 & 2 unlocked by default, 3, 4, 5 locked

// Page titles for each slide (change these for different scenarios)
const pageTitles = {
    1: "Crisis Leadership Scenario",
    2: "Decision Point 1", 
    3: "Decision Point 2",
    4: "Decision Point 3",
    5: "Results & Reflection"
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

        // If showing results slide, update outcome based on score
        if (slideNumber === 5) {
            updateOutcomeContent();
        }

        updateNavigationState();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
    if (currentSlide < 5) {
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
        if (nextSlide <= 5 && !unlockedSlides.includes(nextSlide)) {
            unlockedSlides.push(nextSlide);
        }
        
        updateNavigationState();
    }
}

// ==========================================================================
// OUTCOME CONTENT BASED ON SCORE
// ==========================================================================
function updateOutcomeContent() {
    const outcomeDiv = document.getElementById('outcome-content');
    const valuesSummary = document.getElementById('values-summary');
    const stars = document.querySelectorAll('.star');
    const valueHighlight = document.querySelector('.value-highlight');
    
    // Clear all stars first
    stars.forEach(star => {
        star.className = 'star';
    });
    
    // Reset value highlight classes
    valueHighlight.className = 'value-highlight';
    
    if (score === 3) {
        // Perfect score
        valuesSummary.textContent = "Exceptional Leadership! Your decisions perfectly demonstrated our core values in action.";
        
        // Add excellent class for background and border
        valueHighlight.classList.add('excellent');
        
        // Fill 5 stars
        for (let i = 0; i < 5; i++) {
            stars[i].classList.add('filled', 'excellent');
        }
        
        outcomeDiv.innerHTML = `
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                <strong>Outstanding performance!</strong> You demonstrated masterful leadership by consistently choosing value-driven responses. Your approach showed deep understanding of Empowerment, Transparency, and Excellence in crisis situations.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8;">
                Leaders like you don't just solve problems - you build stronger teams and better systems. Your value-driven approach turned a potential disaster into a growth opportunity for everyone involved.
            </p>
        `;
    } else if (score === 2) {
        // Good score
        valuesSummary.textContent = "Strong Leadership! Most of your decisions aligned well with our core values.";
        
        // Add good class for background and border
        valueHighlight.classList.add('good');
        
        // Fill 4 stars
        for (let i = 0; i < 4; i++) {
            stars[i].classList.add('filled', 'good');
        }
        
        outcomeDiv.innerHTML = `
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                <strong>Well done!</strong> You showed solid leadership instincts and made mostly value-driven decisions. With some refinement in applying our core values consistently, you'll be even more effective in crisis situations.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8;">
                Continue developing your skills in Empowerment, Transparency, and Excellence. Your foundation is strong - now focus on consistent application across all decisions.
            </p>
        `;
    } else if (score === 1) {
        // Needs improvement
        valuesSummary.textContent = "Learning Opportunity: Some decisions aligned with our values, but there's room for growth.";
        
        // Add needs-improvement class for background and border
        valueHighlight.classList.add('needs-improvement');
        
        // Fill 2 stars
        for (let i = 0; i < 2; i++) {
            stars[i].classList.add('filled', 'needs-improvement');
        }
        
        outcomeDiv.innerHTML = `
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                <strong>Development opportunity identified.</strong> While you showed some understanding of our values, there are significant opportunities to strengthen your value-driven decision making in crisis situations.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8;">
                Focus on deepening your understanding of Empowerment, Transparency, and Excellence. Consider additional training and mentoring to build confidence in applying these values under pressure.
            </p>
        `;
    } else {
        // Poor score
        valuesSummary.textContent = "Important Learning Moment: Your decisions suggest a need to strengthen value-based leadership skills.";
        
        // Add poor class for background and border
        valueHighlight.classList.add('poor');
        
        // Fill 1 star
        stars[0].classList.add('filled', 'poor');
        
        outcomeDiv.innerHTML = `
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                <strong>Critical development needed.</strong> Your responses indicate a significant gap between your current approach and our organizational values. This presents an important opportunity for growth and learning.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8;">
                We recommend immediate focus on understanding and practicing Empowerment, Transparency, and Excellence. Consider working with a mentor and taking additional leadership development courses.
            </p>
        `;
    }
}

// ==========================================================================
// NAVIGATION FUNCTIONS
// ==========================================================================
function goToNext() {
    if (currentSlide < 5 && unlockedSlides.includes(currentSlide + 1)) {
        showSlide(currentSlide + 1);
    } else if (currentSlide >= 5) {
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
