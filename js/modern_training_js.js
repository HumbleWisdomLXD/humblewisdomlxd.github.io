let selectedChoice = null;

function selectChoice(choice) {
    // Remove previous selections
    document.querySelectorAll('.choice').forEach(c => {
        c.classList.remove('selected', 'incorrect');
    });

    // Mark selected choice
    event.target.closest('.choice').classList.add('selected');
    selectedChoice = choice;

    // Show feedback
    showFeedback(choice);

    // Enable continue button
    document.getElementById('continueBtn').disabled = false;
    
    // Update progress
    document.getElementById('progressBar').style.width = '35%';
}

function showFeedback(choice) {
    const feedbackDiv = document.getElementById('feedback');
    const feedbackContent = document.getElementById('feedbackContent');
    
    const feedbacks = {
        'A': {
            text: "<strong>Leadership Insight:</strong> This reactive approach pressures Dr. Chen without addressing root causes and misses the opportunity to build her leadership capacity.<br><br><strong>Value Analysis:</strong> Lacks Empowerment - you're directing rather than developing her problem-solving skills.<br><br><strong>Growth Opportunity:</strong> Consider creating space for understanding before action. True empowerment means helping leaders develop their own insights.",
            type: 'incorrect'
        },
        'B': {
            text: "<strong>Exceptional Leadership Choice!</strong> This response demonstrates authentic Empowerment by creating psychological safety and seeking understanding first.<br><br><strong>Value in Action:</strong> You're building Dr. Chen's analytical capacity and treating her as a capable leader who can contribute to solutions.<br><br><strong>Strategic Impact:</strong> This approach builds long-term leadership capability while addressing the immediate crisis.",
            type: 'correct'
        },
        'C': {
            text: "<strong>Leadership Insight:</strong> While investigation is important, bypassing Dr. Chen undermines her role and misses a critical development opportunity.<br><br><strong>Value Analysis:</strong> Lacks Empowerment - you're taking control rather than building her investigative and leadership skills.<br><br><strong>Growth Opportunity:</strong> Include her in the process to strengthen both the investigation and her capabilities.",
            type: 'incorrect'
        },
        'D': {
            text: "<strong>Leadership Insight:</strong> This dismissive approach ignores valuable learning opportunities and fails to address systemic issues.<br><br><strong>Value Analysis:</strong> Misses both Empowerment and Excellence - not developing people or improving organizational systems.<br><br><strong>Growth Opportunity:</strong> Transform crisis moments into capacity-building opportunities for sustainable improvement.",
            type: 'incorrect'
        }
    };

    const feedback = feedbacks[choice];
    feedbackContent.innerHTML = feedback.text;
    feedbackDiv.className = `feedback ${feedback.type}`;
    feedbackDiv.style.display = 'block';

    // Mark incorrect choices
    if (feedback.type === 'incorrect') {
        event.target.closest('.choice').classList.add('incorrect');
    }
}

function showResult() {
    alert('Outstanding leadership decision-making! In the complete training, this continues to explore how your values-driven approach transforms the entire organizational crisis.');
}

// Initialize animations
window.addEventListener('load', function() {
    // Animate progress bar
    setTimeout(() => {
        document.getElementById('progressBar').style.width = '20%';
    }, 1000);
    
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-container').forEach(el => {
        observer.observe(el);
    });
});

// Additional utility functions for your training system

// Progress tracking function
function updateProgress(percentage) {
    document.getElementById('progressBar').style.width = percentage + '%';
}

// Reset scenario function
function resetScenario() {
    selectedChoice = null;
    document.querySelectorAll('.choice').forEach(c => {
        c.classList.remove('selected', 'incorrect');
    });
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('continueBtn').disabled = true;
    updateProgress(0);
}

// Generic feedback system for different scenarios
function createFeedbackSystem(feedbackData) {
    return function(choice) {
        const feedbackDiv = document.getElementById('feedback');
        const feedbackContent = document.getElementById('feedbackContent');
        
        const feedback = feedbackData[choice];
        feedbackContent.innerHTML = feedback.text;
        feedbackDiv.className = `feedback ${feedback.type}`;
        feedbackDiv.style.display = 'block';

        if (feedback.type === 'incorrect') {
            event.target.closest('.choice').classList.add('incorrect');
        }
    };
}

// Animation utilities
function animateElement(element, animationClass) {
    element.classList.add(animationClass);
    element.addEventListener('animationend', () => {
        element.classList.remove(animationClass);
    }, { once: true });
}

// Smooth scroll to element
function scrollToElement(elementId) {
    document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}
