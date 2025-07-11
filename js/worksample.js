/* ==========================================================================
   COMPLETE FINAL TRAINING SYSTEM JAVASCRIPT
   ========================================================================== */

// Global Variables
let selectedChoices = {};
let currentSlide = 1;
let score = 0;

// Page titles for each slide
const pageTitles = {
    1: "Crisis Leadership Scenario",
    2: "Decision Point 1", 
    3: "Decision Point 2",
    4: "Decision Point 3",
    5: "Your Leadership Impact"
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Training system initialized');
    setupEventListeners();
    showSlide(1);
    updateProgress();
    updateNavigationState();
});

// Set up all event listeners
function setupEventListeners() {
    // Navigation dots
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const slideNumber = index + 1;
            if (!this.classList.contains('disabled')) {
                showSlide(slideNumber);
            }
        });
    });

    // Choice selection
    document.querySelectorAll('.choice').forEach(choice => {
        choice.addEventListener('click', function() {
            const decision = this.dataset.decision;
            const choiceValue = this.dataset.choice;
            
            if (decision && choiceValue) {
                selectChoice(decision, choiceValue, this);
            }
        });
    });

    // Continue buttons
    document.querySelectorAll('.continue-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetSlide = parseInt(this.dataset.target);
            if (targetSlide && !this.disabled) {
                showSlide(targetSlide);
            }
        });
    });

    // Navigation buttons
    const prevBtn = document.querySelector('.previous-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', goToPrevious);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', goToNext);
    }
}

// Show specific slide
function showSlide(slideNumber) {
    console.log(`Showing slide ${slideNumber}`);
    
    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show target slide
    const targetSlide = document.getElementById(`slide${slideNumber}`);
    if (targetSlide) {
        targetSlide.classList.add('active');
        currentSlide = slideNumber;
        
        // Update page title
        const pageTitleElement = document.querySelector('.page-title-main');
        if (pageTitleElement && pageTitles[slideNumber]) {
            pageTitleElement.textContent = pageTitles[slideNumber];
        }
        
        // Update navigation
        updateNavigationDots();
        updateProgress();
        updateNavigationState();
        
        // If showing results slide, update outcome content
        if (slideNumber === 5) {
            updateOutcomeContent();
        }
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update navigation dots
function updateNavigationDots() {
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        const slideNumber = index + 1;
        
        // Remove all classes
        dot.classList.remove('active', 'disabled');
        
        // Add appropriate class
        if (slideNumber === currentSlide) {
            dot.classList.add('active');
        } else if (isSlideUnlocked(slideNumber)) {
            // Available but not current
        } else {
            dot.classList.add('disabled');
        }
    });
}

// Check if slide is unlocked
function isSlideUnlocked(slideNumber) {
    if (slideNumber <= 2) return true; // Slides 1 and 2 always unlocked
    if (slideNumber === 3) return selectedChoices['1'] !== undefined;
    if (slideNumber === 4) return selectedChoices['2'] !== undefined;
    if (slideNumber === 5) return selectedChoices['3'] !== undefined;
    return false;
}

// Update navigation state
function updateNavigationState() {
    // Update continue buttons
    document.querySelectorAll('.continue-btn').forEach(btn => {
        const targetSlide = parseInt(btn.dataset.target);
        const currentDecision = currentSlide === 2 ? '1' : currentSlide === 3 ? '2' : currentSlide === 4 ? '3' : null;
        
        if (currentDecision && selectedChoices[currentDecision] !== undefined) {
            btn.disabled = false;
            btn.style.opacity = '1';
        } else if (currentSlide === 1) {
            btn.disabled = false;
            btn.style.opacity = '1';
        } else {
            btn.disabled = true;
            btn.style.opacity = '0.5';
        }
    });

    // Update next button
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        const nextSlide = currentSlide + 1;
        if (nextSlide <= 5 && isSlideUnlocked(nextSlide)) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        } else {
            nextBtn.disabled = true;
            nextBtn.style.opacity = '0.5';
        }
    }

    // Update previous button
    const prevBtn = document.querySelector('.previous-btn');
    if (prevBtn) {
        if (currentSlide > 1) {
            prevBtn.disabled = false;
            prevBtn.style.opacity = '1';
        } else {
            prevBtn.disabled = true;
            prevBtn.style.opacity = '0.5';
        }
    }
}

// Handle choice selection
function selectChoice(decision, choice, element) {
    console.log(`Selected choice ${choice} for decision ${decision}`);
    
    // Clear previous selections for this decision
    const decisionContainer = element.closest('.slide');
    if (decisionContainer) {
        decisionContainer.querySelectorAll('.choice').forEach(c => {
            c.classList.remove('selected', 'incorrect');
            const feedback = c.querySelector('.choice-feedback');
            if (feedback) {
                feedback.classList.remove('show');
            }
        });
    }
    
    // Mark this choice as selected
    element.classList.add('selected');
    
    // Store the choice
    selectedChoices[decision] = choice;
    
    // Show feedback for this choice
    showFeedback(element, decision, choice);
    
    // Update score and navigation
    updateScore();
    updateNavigationState();
}

// Show feedback for selected choice
function showFeedback(element, decision, choice) {
    const feedback = element.querySelector('.choice-feedback');
    if (feedback) {
        // Determine if correct and add appropriate styling
        const isCorrect = feedback.classList.contains('correct');
        
        if (!isCorrect) {
            element.classList.add('incorrect');
        }
        
        // Show the feedback
        feedback.classList.add('show');
    }
}

// Update score based on correct answers
function updateScore() {
    score = 0;
    
    // Check each decision for correct answers
    document.querySelectorAll('.choice.selected').forEach(choice => {
        const feedback = choice.querySelector('.choice-feedback.correct');
        if (feedback) {
            score++;
        }
    });
    
    // Update score display
    const scoreDisplay = document.querySelector('.score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: ${score}/3`;
    }
    
    console.log(`Current score: ${score}/3`);
}

// Update progress bar
function updateProgress() {
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const progress = (currentSlide / 5) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

// Navigation functions
function goToNext() {
    const nextSlide = currentSlide + 1;
    if (nextSlide <= 5 && isSlideUnlocked(nextSlide)) {
        showSlide(nextSlide);
    }
}

function goToPrevious() {
    if (currentSlide > 1) {
        showSlide(currentSlide - 1);
    }
}

// Update outcome content based on performance
function updateOutcomeContent() {
    const valueHighlight = document.querySelector('.value-highlight');
    const valuesSummary = document.getElementById('values-summary');
    const stars = document.querySelectorAll('.star');
    
    if (!valueHighlight || !valuesSummary || !stars.length) {
        console.log('Missing outcome elements');
        return;
    }
    
    // Clear all stars first
    stars.forEach(star => {
        star.className = 'star';
    });
    
    // Reset value highlight classes
    valueHighlight.className = 'value-highlight';
    
    if (score === 3) {
        // Perfect score - 5 stars, excellent styling
        valuesSummary.textContent = "Exceptional Leadership! Your decisions perfectly demonstrated our core values in action. You showed strong ethical judgment, effective communication, and decisive leadership under pressure.";
        
        // Add excellent class and fill 5 stars
        valueHighlight.classList.add('excellent');
        for (let i = 0; i < 5; i++) {
            if (stars[i]) {
                stars[i].classList.add('filled', 'excellent');
            }
        }
        
    } else if (score === 2) {
        // Good score - 4 stars, good styling
        valuesSummary.textContent = "Strong Leadership! Your decisions showed good alignment with our core values. You demonstrated solid judgment with room for growth in crisis communication and stakeholder management.";
        
        // Add good class and fill 4 stars
        valueHighlight.classList.add('good');
        for (let i = 0; i < 4; i++) {
            if (stars[i]) {
                stars[i].classList.add('filled', 'good');
            }
        }
        
    } else if (score === 1) {
        // Needs improvement - 2 stars, needs-improvement styling
        valuesSummary.textContent = "Learning Opportunity: Your decisions show potential but need stronger alignment with our core values. Focus on balancing stakeholder needs while maintaining clear communication during crisis situations.";
        
        // Add needs-improvement class and fill 2 stars
        valueHighlight.classList.add('needs-improvement');
        for (let i = 0; i < 2; i++) {
            if (stars[i]) {
                stars[i].classList.add('filled', 'needs-improvement');
            }
        }
        
    } else {
        // Poor score - 1 star, poor styling
        valuesSummary.textContent = "Important Learning Moment: This scenario highlights areas for significant development. Consider additional training in crisis leadership, ethical decision-making, and stakeholder communication to strengthen your leadership capabilities.";
        
        // Add poor class and fill 1 star
        valueHighlight.classList.add('poor');
        if (stars[0]) {
            stars[0].classList.add('filled', 'poor');
        }
    }
    
    console.log(`Updated outcome for score: ${score}/3`);
}
