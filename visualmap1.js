const verses = {
    1: {
        text: '"Come back to me, you wayward people. I want to cure your waywardness…" - Jeremiah 3:22a',
        commentary: `God calls the people of Judah to return their hearts to Him. Not only does He invite them back, but He also offers the opportunity for healing. Their disobedience has incited His wrath, yet His longing for their repentance remains strong. He loves them deeply and desires to do what is best for them.
        
        <p><strong>God calls you back to a faithful relationship with Him as well!</strong> He offers you the path to grace, mercy, forgiveness, and healing. Even though you may have ignored His still voice in the past, He's loved you enough to send help in some other way. Whether it was through the uncomfortable nudging in your heart and soul, the loving correction of a trusted person, or something you heard your pastor say, God has called you to repent.</p>
        
        <p><strong>Will you answer the call?</strong></p>`
    },
    2: {
        text: '"Say, \'Here we are. We come to you because you are the Lord our God.\'" - Jeremiah 3:22b',
        commentary: `God wanted all of His people to come to him and wholeheartedly declare their submission to His Lordship and authority. Recognizing God's lordship required them to individually and collectively acknowledge who He is in relationship to them. This submission was essential for their healing and restoration.
        
        <p>Once we accept the invitation to return our hearts to Him, we must acknowledge who He is in our lives: He is the Creator. We are the created. He is the Potter, we are the clay. <strong>God is the ultimate governing authority over our lives</strong>—not our jobs, not our family and friends, not money, not sports, sex, drugs, or anything else.</p>
        
        <p>In welcoming the call to repent, we too must fully relinquish our control and submit to His sovereign authority over every aspect of our lives. We must declare, trust, and submit to God's lordship.</p>`
    },
    3: {
        text: '"We know our noisy worship of false gods on the hills and mountains did not help us." - Jeremiah 3:23',
        commentary: `The omniscient God wanted His people to fully acknowledge their wrongdoing by precisely describing the who, what, when, where, how, and why, along with the end results:
        
        <p><strong>• Who:</strong> We/The people of Judah<br>
        <strong>• What:</strong> Worshipped false gods<br>
        <strong>• When:</strong> Continuously; they continued to worship false gods even after seeing what happened to Israel<br>
        <strong>• Where:</strong> On the hills and mountaintops<br>
        <strong>• How:</strong> Noisily. This suggests that they didn't try to hide it<br>
        <strong>• Why:</strong> To get their needs met<br>
        <strong>• Results:</strong> Their actions did not help them</p>
        
        <p>Why would the all-knowing, all-seeing, all-hearing God require such detail? <strong>Vague or general acknowledgments fail to fully capture the gravity of the sins committed.</strong> Instead of creating enmity between you and God, be forthcoming about the nature of your sin(s).</p>`
    },
    4: {
        text: '"We know that the Lord our God is the only one who can deliver Israel." - Jeremiah 3:24',
        commentary: `In acknowledging that God was the only one who could deliver Israel, He wanted them to correct the misattribution error in their hearts. Misattribution occurs when the cause of something is assigned to the wrong source.
        
        <p><strong>When we attribute talent, skills, personal achievements, material wealth, relationships, social status, or any fortunate events to anyone other than God, we too become guilty of a misattribution error.</strong> We begin to place our trust in these temporary and unreliable sources, rather than in God's eternal and steadfast provision. This is modern day idolatry.</p>
        
        <p>For every good and perfect thing in your life, God is the source. The combination of people, organizations, and tools are resources. You, too, are a resource—a conduit for God's blessing to flow through.</p>`
    },
    5: {
        text: '"Let us acknowledge our shame. Let us bear the disgrace that we deserve. For we have sinned against the Lord our God..." - Jeremiah 3:25',
        commentary: `Instead of hiding themselves and putting on a bold front, God wanted His people to both acknowledge and feel the feelings that should have accompanied their historical tendency to disobey and worship idols.
        
        <p>Some translations begin with "Let us <strong>lie down</strong> in our shame," which implies experiencing a range of uncomfortable emotions. <strong>These feelings can play an important role in spiritual development and moral integrity.</strong> When these emotions stem from empathy and compassion, rather than mere embarrassment of getting caught, they often lead to a positive change of heart and improved behavior.</p>
        
        <p>Freedom from the law of sin and death doesn't shield us from the pain of a broken and contrite heart. When we come to God in our brokenness, acknowledging our shame and sorrow from the very depths of our emotional being, <strong>His healing process can begin.</strong></p>`
    }
};

function showVerse(verseNumber) {
    // Remove active class from all stops
    document.querySelectorAll('.verse-stop').forEach(stop => {
        stop.classList.remove('active');
    });

    // Add active class to clicked stop
    document.querySelector(`[data-verse="${verseNumber}"]`).classList.add('active');

    // Show commentary panel
    const panel = document.getElementById('commentary');
    const verseText = document.getElementById('verse-text');
    const commentaryText = document.getElementById('commentary-text');

    // Fade out
    panel.classList.remove('active');

    setTimeout(() => {
        // Update content
        verseText.textContent = verses[verseNumber].text;
        commentaryText.innerHTML = verses[verseNumber].commentary;

        // Fade in
        panel.classList.add('active');
    }, 200);
}

// Add click handlers
document.querySelectorAll('.verse-stop').forEach(stop => {
    stop.addEventListener('click', () => {
        const verseNumber = stop.getAttribute('data-verse');
        showVerse(verseNumber);
    });
});

// Auto-start with first verse
setTimeout(() => {
    showVerse(1);
}, 500);
