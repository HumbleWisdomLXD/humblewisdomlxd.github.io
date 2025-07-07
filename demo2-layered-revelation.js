const verses = {
    1: {
        title: "God's Invitation to Return",
        text: "God calls the people of Judah to return their hearts to Him. Not only does He invite them back, but He also offers the opportunity for healing. Their disobedience has incited His wrath, yet His longing for their repentance remains strong. He loves them deeply and desires to do what is best for them.<br><br><strong>God calls you back to a faithful relationship with Him as well!</strong> He offers you the path to grace, mercy, forgiveness, and healing. Even though you may have ignored His still voice in the past, He's loved you enough to send help in some other way. Whether it was through the uncomfortable nudging in your heart and soul, the loving correction of a trusted person, or something you heard your pastor say, God has called you to repent.<br><br><strong>Will you answer the call?</strong>"
    },
    2: {
        title: "Declaration of Submission",
        text: "God wanted all of His people to come to him and wholeheartedly declare their submission to His Lordship and authority. Recognizing God's lordship required them to individually and collectively acknowledge who He is in relationship to them. This submission was essential for their healing and restoration.<br><br>Once we accept the invitation to return our hearts to Him, we must acknowledge who He is in our lives: He is the Creator. We are the created. He is the Potter, we are the clay. <strong>God is the ultimate governing authority over our lives</strong>—not our jobs, not our family and friends, not money, not sports, sex, drugs, or anything else.<br><br>In welcoming the call to repent, we too must fully relinquish our control and submit to His sovereign authority over every aspect of our lives. We must declare, trust, and submit to God's lordship."
    },
    3: {
        title: "Acknowledgment of Wrong",
        text: "The omniscient God wanted His people to fully acknowledge their wrongdoing by precisely describing the who, what, when, where, how, and why, along with the end results:<br><br><strong>• Who:</strong> We/The people of Judah<br><strong>• What:</strong> Worshipped false gods<br><strong>• When:</strong> Continuously; they continued to worship false gods even after seeing what happened to Israel<br><strong>• Where:</strong> On the hills and mountaintops<br><strong>• How:</strong> Noisily. This suggests that they didn't try to hide it<br><strong>• Why:</strong> To get their needs met<br><strong>• Results:</strong> Their actions did not help them<br><br>Why would the all-knowing, all-seeing, all-hearing God require such detail? <strong>Vague or general acknowledgments fail to fully capture the gravity of the sins committed.</strong> Instead of creating enmity between you and God, be forthcoming about the nature of your sin(s)."
    },
    4: {
        title: "Recognition of True Source",
        text: "In acknowledging that God was the only one who could deliver Israel, He wanted them to correct the misattribution error in their hearts. Misattribution occurs when the cause of something is assigned to the wrong source.<br><br><strong>When we attribute talent, skills, personal achievements, material wealth, relationships, social status, or any fortunate events to anyone other than God, we too become guilty of a misattribution error.</strong> We begin to place our trust in these temporary and unreliable sources, rather than in God's eternal and steadfast provision. This is modern day idolatry.<br><br>For every good and perfect thing in your life, God is the source. The combination of people, organizations, and tools are resources. You, too, are a resource—a conduit for God's blessing to flow through."
    },
    5: {
        title: "Complete Confession",
        text: "Instead of hiding themselves and putting on a bold front, God wanted His people to both acknowledge and feel the feelings that should have accompanied their historical tendency to disobey and worship idols.<br><br>Some translations begin with 'Let us <strong>lie down</strong> in our shame,' which implies experiencing a range of uncomfortable emotions. <strong>These feelings can play an important role in spiritual development and moral integrity.</strong> When these emotions stem from empathy and compassion, rather than mere embarrassment of getting caught, they often lead to a positive change of heart and improved behavior.<br><br>Freedom from the law of sin and death doesn't shield us from the pain of a broken and contrite heart. When we come to God in our brokenness, acknowledging our shame and sorrow from the very depths of our emotional being, <strong>His healing process can begin.</strong>"
    }
};

let selectedVerses = new Set();

function selectVerse(verseNumber) {
    const verseElement = document.querySelector(`[data-verse="${verseNumber}"]`);
    const commentary = document.getElementById('commentary-content');
    const comparisonMode = document.getElementById('comparison-mode');

    // Toggle selection
    if (selectedVerses.has(verseNumber)) {
        selectedVerses.delete(verseNumber);
        verseElement.classList.remove('selected');
    } else {
        selectedVerses.add(verseNumber);
        verseElement.classList.add('selected');
    }

    updateDisplay();
}

function updateDisplay() {
    const allVerses = document.querySelectorAll('.verse');
    const commentary = document.getElementById('commentary-content');
    const comparisonMode = document.getElementById('comparison-mode');
    const comparisonVerses = document.getElementById('comparison-verses');

    // Fade/highlight verses
    allVerses.forEach(verse => {
        const verseNum = verse.getAttribute('data-verse');
        if (selectedVerses.size > 0 && !selectedVerses.has(verseNum)) {
            verse.classList.add('faded');
        } else {
            verse.classList.remove('faded');
        }
    });

    // Update commentary
    if (selectedVerses.size === 0) {
        // No selection - show default
        commentary.innerHTML = `
            <div class="commentary-title">Select a Verse to Begin</div>
            <div class="commentary-text">
                <p>Click on any verse to the left to reveal its deeper meaning and personal application. This passage reveals God's heart for repentance and restoration.</p>
                <p>As you explore each verse, notice how they build upon each other to create a complete picture of genuine repentance.</p>
            </div>
        `;
        comparisonMode.style.display = 'none';
    } else if (selectedVerses.size === 1) {
        // Single selection - show full commentary
        const verseNum = Array.from(selectedVerses)[0];
        const verse = verses[verseNum];
        commentary.innerHTML = `
            <div class="commentary-title">${verse.title}</div>
            <div class="commentary-text">${verse.text}</div>
        `;
        comparisonMode.style.display = 'none';
    } else {
        // Multiple selections - show comparison
        const firstVerse = Array.from(selectedVerses)[0];
        commentary.innerHTML = `
            <div class="commentary-title">${verses[firstVerse].title}</div>
            <div class="commentary-text">${verses[firstVerse].text}</div>
        `;

        // Show comparison
        comparisonVerses.innerHTML = '';
        selectedVerses.forEach(num => {
            if (num !== firstVerse) {
                const div = document.createElement('div');
                div.className = 'comparison-verse';
                div.innerHTML = `<strong>${verses[num].title}:</strong> Key insight from this verse connects to the theme of genuine repentance.`;
                comparisonVerses.appendChild(div);
            }
        });
        comparisonMode.style.display = 'block';
    }

    // Trigger animation
    commentary.classList.remove('active');
    setTimeout(() => {
        commentary.classList.add('active');
    }, 100);
}

function resetSelection() {
    selectedVerses.clear();
    document.querySelectorAll('.verse').forEach(verse => {
        verse.classList.remove('selected', 'faded');
    });
    updateDisplay();
}

// Add click handlers
document.querySelectorAll('.verse').forEach(verse => {
    verse.addEventListener('click', () => {
        const verseNumber = verse.getAttribute('data-verse');
        selectVerse(verseNumber);
    });
});

// Initialize
updateDisplay();
