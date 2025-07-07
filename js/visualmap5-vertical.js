const verses = {
    1: {
        title: "God's Loving Invitation",
        text: '"Come back to me, you wayward people. I want to cure your waywardness…" - Jeremiah 3:22a',
        spiritual: {
            title: "Divine Love & Compassion",
            content: "God initiates the relationship restoration. Despite their rebellion, He extends grace and promises healing. The Hebrew word for 'wayward' suggests a beloved child who has strayed. <strong>This is the heart of a loving Father calling His children home.</strong> The emotional tone here is one of tender invitation, not harsh condemnation."
        },
        practical: {
            title: "Responding to God's Call",
            content: "<strong>God calls you back to a faithful relationship with Him as well!</strong> He offers you the path to grace, mercy, forgiveness, and healing. Even though you may have ignored His still voice in the past, He's loved you enough to send help in some other way. Whether through the uncomfortable nudging in your heart, the loving correction of a trusted person, or something you heard your pastor say, God has called you to repent. <strong>Will you answer the call?</strong>"
        },
        crossRefs: [
            { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion..." },
            { verse: "Isaiah 1:18", text: "'Come now, let us settle the matter,' says the Lord. 'Though your sins are like scarlet...'" }
        ],
        progress: 20
    },
    2: {
        title: "Humble Submission",
        text: '"Say, \'Here we are. We come to you because you are the Lord our God.\'" - Jeremiah 3:22b',
        spiritual: {
            title: "Acknowledgment of Lordship",
            content: "True repentance requires acknowledging God's rightful place as Lord. This isn't just intellectual assent but heartfelt submission. <strong>The people must verbally declare their allegiance and surrender their autonomy.</strong> This represents the emotional shift from rebellion to surrender, from pride to humility."
        },
        practical: {
            title: "Surrendering Control",
            content: "Once we accept the invitation to return our hearts to Him, we must acknowledge who He is in our lives: He is the Creator. We are the created. He is the Potter, we are the clay. <strong>God is the ultimate governing authority over our lives</strong>—not our jobs, not our family and friends, not money, not sports, sex, drugs, or anything else. In welcoming the call to repent, we too must fully relinquish our control and submit to His sovereign authority over every aspect of our lives."
        },
        crossRefs: [
            { verse: "Romans 10:9", text: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart..." },
            { verse: "Philippians 2:11", text: "And every tongue acknowledge that Jesus Christ is Lord..." }
        ],
        progress: 40
    },
    3: {
        title: "Honest Recognition",
        text: '"We know our noisy worship of false gods on the hills and mountains did not help us." - Jeremiah 3:23',
        spiritual: {
            title: "Facing Reality",
            content: "This stage requires brutal honesty about the failure of idolatry. The word 'noisy' suggests shameless, public worship that couldn't be hidden. <strong>God demands specific acknowledgment of what they did, where, how, and that it failed.</strong> This emotional stage involves confronting the futility of their choices and the pain of wasted time and energy."
        },
        practical: {
            title: "Specific Confession",
            content: "Why would the all-knowing, all-seeing, all-hearing God require such detail? <strong>Vague or general acknowledgments fail to fully capture the gravity of the sins committed.</strong> When we hide or minimize our wrongdoing, we maintain a barrier of dishonesty that fosters separation from God. Instead of creating enmity between you and God, be forthcoming about the nature of your sin(s). If you truly don't realize the magnitude of your actions, ask God to reveal these things to you."
        },
        crossRefs: [
            { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us..." },
            { verse: "Psalm 51:3", text: "For I know my transgressions, and my sin is always before me." }
        ],
        progress: 60
    },
    4: {
        title: "Divine Recognition",
        text: '"We know that the Lord our God is the only one who can deliver Israel." - Jeremiah 3:24',
        spiritual: {
            title: "Correcting Misattribution",
            content: "This represents a crucial cognitive and emotional shift—recognizing God as the true source of all good things. <strong>They must correct their misattribution error and acknowledge that only Yahweh can deliver and provide.</strong> This stage involves the relief and clarity that comes from seeing truth clearly after being deceived."
        },
        practical: {
            title: "Recognizing God's Provision",
            content: "<strong>When we attribute talent, skills, personal achievements, material wealth, relationships, social status, or any fortunate events to anyone other than God, we too become guilty of a misattribution error.</strong> We begin to place our trust in these temporary and unreliable sources, rather than in God's eternal provision. This is modern day idolatry. For every good and perfect thing in your life, God is the source. You, too, are a resource—a conduit for God's blessing to flow through."
        },
        crossRefs: [
            { verse: "James 1:17", text: "Every good and perfect gift is from above..." },
            { verse: "Psalm 121:2", text: "My help comes from the Lord, the Maker of heaven and earth." }
        ],
        progress: 80
    },
    5: {
        title: "Complete Brokenness",
        text: '"Let us acknowledge our shame. Let us bear the disgrace that we deserve..." - Jeremiah 3:25',
        spiritual: {
            title: "Godly Sorrow",
            content: "The final stage requires embracing the emotional weight of sin—not just intellectually but feelingly. The Hebrew suggests 'lying down in shame,' a posture of complete humiliation. <strong>This godly sorrow leads to repentance and is necessary for genuine restoration.</strong> This isn't condemnation but the broken and contrite heart that God desires."
        },
        practical: {
            title: "Embracing Healing Sorrow",
            content: "Some translations begin with 'Let us <strong>lie down</strong> in our shame,' which implies experiencing uncomfortable emotions. <strong>These feelings can play an important role in spiritual development and moral integrity.</strong> When these emotions stem from empathy and compassion rather than mere embarrassment, they often lead to positive change of heart. When we come to God in our brokenness, acknowledging our shame and sorrow from the very depths of our emotional being, <strong>His healing process can begin.</strong>"
        },
        crossRefs: [
            { verse: "2 Corinthians 7:10", text: "Godly sorrow brings repentance that leads to salvation..." },
            { verse: "Psalm 51:17", text: "A broken and contrite heart you, God, will not despise." }
        ],
        progress: 100
    }
};

let currentVerse = null;

function showVerse(verseNumber) {
    currentVerse = verseNumber;

    document.querySelectorAll('.timeline-point').forEach(point => {
        point.classList.remove('active');
    });
    document.querySelector(`[data-verse="${verseNumber}"]`).classList.add('active');

    const progressFill = document.getElementById('progress-fill');
    progressFill.style.width = verses[verseNumber].progress + '%';

    const verse = verses[verseNumber];
    const commentary = document.getElementById('commentary-content');
    commentary.classList.remove('active');

    setTimeout(() => {
        commentary.innerHTML = `
            <div class="verse-header">
                <div class="verse-title">${verse.title}</div>
                <div class="verse-text">${verse.text}</div>
            </div>

            <div class="commentary-grid">
                <div class="spiritual-state">
                    <div class="section-title">${verse.spiritual.title}</div>
                    <div class="section-content">${verse.spiritual.content}</div>
                </div>

                <div class="practical-application">
                    <div class="section-title">${verse.practical.title}</div>
                    <div class="section-content">${verse.practical.content}</div>
                </div>
            </div>

            <div class="cross-references">
                <div class="cross-ref-title">Related Scriptures</div>
                <div class="cross-ref-list">
                    ${verse.crossRefs.map(ref => `
                        <div class="cross-ref-item">
                            <div class="cross-ref-verse">${ref.verse}</div>
                            <div class="cross-ref-text">${ref.text}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        commentary.classList.add('active');
    }, 300);
}

document.querySelectorAll('.timeline-point').forEach(point => {
    point.addEventListener('click', () => {
        const verseNumber = parseInt(point.getAttribute('data-verse'));
        showVerse(verseNumber);
    });
});

setTimeout(() => {
    showVerse(1);
}, 1000);
