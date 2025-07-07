const verses = {
    1: {
        ancient: {
            reference: "Jeremiah 3:22a - God's Invitation",
            text: '"Come back to me, you wayward people. I want to cure your waywardness…"',
            context: "In ancient Judah, the people had turned away from Yahweh to worship foreign gods. Despite their rebellion, God extends a compassionate invitation to return. The Hebrew word for 'wayward' suggests a stubborn, rebellious child who has strayed from the path. <strong>God doesn't just call them back—He promises healing and restoration.</strong> This was radical grace in a time when abandoning your god typically meant permanent exile."
        },
        modern: {
            reference: "God's Call to You Today",
            text: "God is calling you back to a faithful relationship with Him",
            context: "Just as God called wayward Judah, <strong>He calls you back to a faithful relationship with Him as well!</strong> He offers you the path to grace, mercy, forgiveness, and healing. Even though you may have ignored His still voice in the past, He's loved you enough to send help in some other way. Whether through the uncomfortable nudging in your heart, the loving correction of a trusted person, or something you heard your pastor say, <strong>God has called you to repent. Will you answer the call?</strong>"
        }
    },
    2: {
        ancient: {
            reference: "Jeremiah 3:22b - Declaration of Lordship",
            text: '"Say, \'Here we are. We come to you because you are the Lord our God.\'"',
            context: "God required a public declaration of His lordship and authority. In the ancient Near East, acknowledging someone as 'lord' meant complete submission to their rule. <strong>The people had to verbally affirm that Yahweh—not Baal, not Asherah, not any foreign deity—was their true God.</strong> This wasn't just lip service; it was a covenant renewal requiring total allegiance."
        },
        modern: {
            reference: "Submitting to God's Authority",
            text: "Declaring God as the ultimate authority in your life",
            context: "Once we accept the invitation to return our hearts to Him, we must acknowledge who He is in our lives: He is the Creator. We are the created. He is the Potter, we are the clay. <strong>God is the ultimate governing authority over our lives</strong>—not our jobs, not our family and friends, not money, not sports, sex, drugs, or anything else. In welcoming the call to repent, we too must fully relinquish our control and submit to His sovereign authority over every aspect of our lives."
        }
    },
    3: {
        ancient: {
            reference: "Jeremiah 3:23 - Acknowledging Failed Idolatry",
            text: '"We know our noisy worship of false gods on the hills and mountains did not help us."',
            context: "The 'high places' were hilltop shrines where Canaanite fertility gods were worshipped through ritual prostitution and child sacrifice. The word 'noisy' suggests loud, shameless worship that couldn't be hidden. <strong>God demanded they specifically acknowledge what they did, where they did it, how they did it, and that it failed to help them.</strong> Vague confessions wouldn't suffice—they had to face the full reality of their spiritual adultery."
        },
        modern: {
            reference: "Honest Self-Examination",
            text: "Being specific about your sins and their consequences",
            context: "Why would the all-knowing, all-seeing, all-hearing God require such detail? <strong>Vague or general acknowledgments fail to fully capture the gravity of the sins committed.</strong> When we hide or minimize our wrongdoing, we maintain a barrier of dishonesty that fosters separation from God. Instead of creating enmity between you and God, be forthcoming about the nature of your sin(s). If you truly don't realize the magnitude of your actions, ask God to reveal these things to you."
        }
    },
    4: {
        ancient: {
            reference: "Jeremiah 3:24 - Recognizing the True Source",
            text: '"We know that the Lord our God is the only one who can deliver Israel."',
            context: "This was a crucial correction of misattribution. The people had credited false gods with providing rain, crops, fertility, and protection. <strong>God required them to acknowledge that He alone was their deliverer and provider.</strong> The Hebrew word for 'deliver' implies both rescue from enemies and provision of needs. They had to admit that their idols were powerless and that Yahweh was the true source of all good things."
        },
        modern: {
            reference: "Correcting Misattribution",
            text: "Recognizing God as the source of all good things",
            context: "<strong>When we attribute talent, skills, personal achievements, material wealth, relationships, social status, or any fortunate events to anyone other than God, we too become guilty of a misattribution error.</strong> We begin to place our trust in these temporary and unreliable sources, rather than in God's eternal provision. This is modern day idolatry. For every good and perfect thing in your life, God is the source. You, too, are a resource—a conduit for God's blessing to flow through."
        }
    },
    5: {
        ancient: {
            reference: "Jeremiah 3:25 - Complete Confession",
            text: '"Let us acknowledge our shame. Let us bear the disgrace... we have not obeyed the Lord our God."',
            context: "The Hebrew literally says 'let us lie down in our shame'—a posture of complete humiliation and mourning. This wasn't just intellectual acknowledgment but emotional and physical submission. <strong>They had to feel the weight of their generational sin</strong>—not just their own failures, but the pattern of disobedience that stretched back to their ancestors. This level of confession was necessary for genuine restoration."
        },
        modern: {
            reference: "Embracing Godly Sorrow",
            text: "Allowing yourself to feel the weight of your sin",
            context: "Some translations begin with 'Let us <strong>lie down</strong> in our shame,' which implies experiencing uncomfortable emotions. <strong>These feelings can play an important role in spiritual development and moral integrity.</strong> When these emotions stem from empathy and compassion rather than mere embarrassment, they often lead to positive change of heart. When we come to God in our brokenness, acknowledging our shame and sorrow from the very depths of our emotional being, <strong>His healing process can begin.</strong>"
        }
    }
};

let currentVerse = 1;

function showVerse(verseNumber) {
    currentVerse = verseNumber;
    
    // Update button states
    document.querySelectorAll('.verse-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-verse="${verseNumber}"]`).classList.add('active');

    // Get content
    const verse = verses[verseNumber];

    // Update ancient content
    const ancientContent = document.getElementById('ancient-content');
    ancientContent.classList.remove('active');
    
    setTimeout(() => {
        ancientContent.innerHTML = `
            <div class="verse-reference">${verse.ancient.reference}</div>
            <div class="verse-text">${verse.ancient.text}</div>
            <div class="context-text">${verse.ancient.context}</div>
        `;
        ancientContent.classList.add('active');
    }, 300);

    // Update modern content
    const modernContent = document.getElementById('modern-content');
    modernContent.classList.remove('active');
    
    setTimeout(() => {
        modernContent.innerHTML = `
            <div class="verse-reference">${verse.modern.reference}</div>
            <div class="verse-text">${verse.modern.text}</div>
            <div class="context-text">${verse.modern.context}</div>
        `;
        modernContent.classList.add('active');
    }, 300);
}

function showDownload() {
    document.getElementById('download-section').classList.add('active');
}

function hideDownload() {
    document.getElementById('download-section').classList.remove('active');
}

// Add click handlers
document.querySelectorAll('.verse-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const verseNumber = parseInt(btn.getAttribute('data-verse'));
        showVerse(verseNumber);
    });
});

// Initialize with first verse
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        showVerse(1);
    }, 500);
});
