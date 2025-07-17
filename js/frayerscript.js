    // ==========================================================================
    // CONTENT DATA FOR ALL 6 VALUE PAIRS
    // ==========================================================================
    // CORRECTED valueData array - all 6 value pairs in correct order
const valueData = [
  // Index 0: Empowerment &amp; Collaboration (you have this one - it's correct)
  {
    name: "Empowerment & Collaboration",
    headerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    yourMatches: '"Therapist asked patient which coping strategies they preferred" → Empowerment/Collaboration',
    correctMatches: [
      "Therapist invites social worker to co-design a care plan",
      "Clinician asks patient to prioritize session goals",
      "Team meeting where all disciplines contribute equally"
    ],
    correctAnswer: {
      text: "Empowerment fuels collaboration when we trust others to lead; collaboration multiplies empowerment when we share ownership.",
      emphasis: "This means that we trust colleagues' expertise and invite patient input."
    },
    characteristics: {
      looksLike: "Shared decision-making, team input, patient choice, delegating authority",
      soundsLike: '"What do you think?", "Let\'s work together on this", "You have the expertise here"'
    },
    staffExamples: "Therapist invites social worker to co-design a care plan, recognizing their expertise",
    patientExamples: 'Clinician asks, "What coping strategies have worked best for you in the past?"',
    staffNonExamples: "Department head makes all decisions without consulting team members",
    patientNonExamples: "Therapist creates treatment plan without patient input or preferences",
    questions: [
      {
        text: "Which approach best demonstrates Empowerment/Collaboration?",
        options: [
          {
            text: "Team meeting where all disciplines contribute equally to care planning",
            correct: true,
            feedback: "Correct! This empowers each team member and creates true collaboration."
          },
          {
            text: "Senior physician makes treatment decisions and informs team",
            correct: false,
            feedback: "Incorrect. This lacks empowerment of team members and true collaboration."
          }
        ]
      },
      {
        text: "How should clinicians involve patients in treatment decisions?",
        options: [
          {
            text: "Ask for patient preferences and incorporate them into planning",
            correct: true,
            feedback: "Correct! This empowers patients and creates collaborative care."
          },
          {
            text: "Make expert decisions and explain them to patients",
            correct: false,
            feedback: "Incorrect. This doesn't empower patients or create true collaboration."
          }
        ]
      }
    ]
  },

  // Index 1: Integrity &amp; Transparency (MISSING - needs to be added)
  {
    name: "Integrity & Transparency",
    headerImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    yourMatches: '"Supervisor disclosed medication error to patient and family" → Integrity/Transparency',
    correctMatches: [
      "Staff member admits mistake and explains corrective action",
      "Team shares honest updates about treatment progress",
      "Administration provides clear communication about policy changes"
    ],
    correctAnswer: {
      text: "Integrity means doing the right thing even when it's difficult; transparency builds trust through honest communication.",
      emphasis: "This means being truthful, admitting mistakes, and communicating openly with patients and colleagues."
    },
    characteristics: {
      looksLike: "Honest communication, admitting errors, clear documentation, consistent values-based decisions",
      soundsLike: '"I made a mistake and here\'s how we\'ll fix it", "Let me explain what\'s happening", "I need to be honest with you"'
    },
    staffExamples: "Nurse discovers medication error, immediately reports it, and works with team to prevent future occurrences",
    patientExamples: 'Doctor says, "The treatment isn\'t working as well as hoped. Let\'s discuss other options"',
    staffNonExamples: "Staff member covers up a mistake instead of reporting it",
    patientNonExamples: "Clinician gives overly optimistic prognosis when evidence suggests otherwise",
    questions: [
      {
        text: "Which approach best demonstrates Integrity/Transparency?",
        options: [
          {
            text: "Staff member reports own error and explains prevention steps",
            correct: true,
            feedback: "Correct! This shows integrity in owning mistakes and transparency in communication."
          },
          {
            text: "Staff member handles error quietly to avoid upsetting patient",
            correct: false,
            feedback: "Incorrect. This lacks transparency and may compromise trust and safety."
          }
        ]
      },
      {
        text: "How should teams communicate difficult news to patients?",
        options: [
          {
            text: "Share information honestly with compassion and support",
            correct: true,
            feedback: "Correct! This balances transparency with empathetic communication."
          },
          {
            text: "Minimize negative aspects to keep patient hopeful",
            correct: false,
            feedback: "Incorrect. This compromises transparency and informed decision-making."
          }
        ]
      }
    ]
  },

  // Index 2: Innovation &amp; Growth (MISSING - needs to be added)
  {
    name: "Innovation & Growth",
    headerImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1559757148-5d7d9c2c9b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    yourMatches: '"Team implemented new therapy approach after research" → Innovation/Growth',
    correctMatches: [
      "Department pilots new patient communication technology",
      "Clinician attends conference and shares learnings with team",
      "Team develops new process based on patient feedback"
    ],
    correctAnswer: {
      text: "Innovation drives us to find better ways to serve patients; growth comes from continuous learning and improvement.",
      emphasis: "This means embracing change, learning from experience, and constantly seeking better outcomes."
    },
    characteristics: {
      looksLike: "Trying new approaches, seeking feedback, continuous learning, process improvements",
      soundsLike: '"What if we tried...", "How can we improve this?", "I learned something new today"'
    },
    staffExamples: "Social worker proposes new group therapy format after researching best practices",
    patientExamples: 'Therapist says, "Let\'s try a different approach based on what you\'ve told me"',
    staffNonExamples: "Team member says 'We\'ve always done it this way' when presented with new ideas",
    patientNonExamples: "Clinician refuses to modify treatment plan despite patient feedback",
    questions: [
      {
        text: "Which approach best demonstrates Innovation/Growth?",
        options: [
          {
            text: "Team pilots new patient communication system based on feedback",
            correct: true,
            feedback: "Correct! This shows willingness to innovate and grow based on input."
          },
          {
            text: "Staff member resists new procedures because current ones work fine",
            correct: false,
            feedback: "Incorrect. This blocks innovation and growth opportunities."
          }
        ]
      },
      {
        text: "How should clinicians respond to patient suggestions?",
        options: [
          {
            text: "Consider the suggestion and explain decision-making process",
            correct: true,
            feedback: "Correct! This demonstrates openness to growth and patient partnership."
          },
          {
            text: "Dismiss suggestions since patients aren't trained professionals",
            correct: false,
            feedback: "Incorrect. This misses valuable insights and growth opportunities."
          }
        ]
      }
    ]
  },

  // Index 3: Humility &amp; Respect (you have this but it's currently at wrong index)
  {
    name: "Humility & Respect",
    headerImage: "https://images.unsplash.com/photo-1559757175-3155d9eadf7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    yourMatches: '"Doctor asked nurse for input on complex case" → Humility/Respect',
    correctMatches: [
      "Psychiatrist acknowledges limits and consults specialist",
      "Therapist apologizes for interrupting patient",
      "Team member asks for help instead of struggling alone"
    ],
    correctAnswer: {
      text: "Humility recognizes our limitations and the value of others; respect honors the dignity and worth of every person.",
      emphasis: "This means listening more than speaking and valuing diverse perspectives and experiences."
    },
    characteristics: {
      looksLike: "Active listening, asking for help, acknowledging others' expertise, cultural sensitivity",
      soundsLike: '"I need to learn more about this", "You have valuable insight", "I apologize for..."'
    },
    staffExamples: "Doctor asks nurse for input on complex case, recognizing their patient interaction expertise",
    patientExamples: 'Therapist says, "I want to understand your cultural background better to serve you well"',
    staffNonExamples: "Senior clinician dismisses junior staff suggestions without consideration",
    patientNonExamples: "Staff member interrupts patient repeatedly during assessment",
    questions: [
      {
        text: "Which behavior best shows Humility/Respect among staff?",
        options: [
          {
            text: "Experienced doctor asks newer nurse about patient observations",
            correct: true,
            feedback: "Correct! This shows humility about learning and respect for others' expertise."
          },
          {
            text: "Department head makes decisions without consulting team",
            correct: false,
            feedback: "Incorrect. This lacks humility and disrespects team members' contributions."
          }
        ]
      },
      {
        text: "How should staff demonstrate respect for patients?",
        options: [
          {
            text: "Listen fully before responding and ask clarifying questions",
            correct: true,
            feedback: "Correct! This shows respect for patient perspectives and experiences."
          },
          {
            text: "Explain quickly what they need to know and move on",
            correct: false,
            feedback: "Incorrect. This shows lack of respect for patient input and understanding."
          }
        ]
      }
    ]
  },

  // Index 4: Partnership &amp; Security (you have this but it's currently at wrong index)
  {
    name: "Partnership & Security",
    headerImage: "https://images.unsplash.com/photo-1559757148-8c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1559757188-5d7d9c2c9b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    yourMatches: '"Case manager coordinated with family and community resources" → Partnership/Security',
    correctMatches: [
      "Team creates comprehensive discharge plan with family involvement",
      "Social worker connects patient with community support services",
      "Staff ensures patient has safe, stable housing arrangement"
    ],
    correctAnswer: {
      text: "Partnership creates strong support networks; security ensures safety and stability for healing and growth.",
      emphasis: "This means building connections with families, communities, and ensuring patients feel safe and supported."
    },
    characteristics: {
      looksLike: "Building alliances, ensuring safety, coordinating resources, family involvement",
      soundsLike: '"Let\'s work together", "How can we keep you safe?", "What support do you need?"'
    },
    staffExamples: "Case manager coordinates with housing, mental health, and medical providers for comprehensive care",
    patientExamples: 'Social worker says, "Let\'s identify all the people and resources in your support network"',
    staffNonExamples: "Discharge planner works in isolation without consulting other team members",
    patientNonExamples: "Staff member ignores patient\'s safety concerns about returning home",
    questions: [
      {
        text: "Which approach best demonstrates Partnership/Security?",
        options: [
          {
            text: "Team collaborates with family and community to create safety plan",
            correct: true,
            feedback: "Correct! This builds partnerships and ensures comprehensive security."
          },
          {
            text: "Individual provider handles all aspects of care independently",
            correct: false,
            feedback: "Incorrect. This misses partnership opportunities and may compromise security."
          }
        ]
      },
      {
        text: "How should staff address patient safety concerns?",
        options: [
          {
            text: "Take all concerns seriously and develop concrete safety strategies",
            correct: true,
            feedback: "Correct! This prioritizes security while building trust through partnership."
          },
          {
            text: "Reassure patient that professional judgment is sufficient",
            correct: false,
            feedback: "Incorrect. This dismisses patient input and may miss important security issues."
          }
        ]
      }
    ]
  },

  // Index 5: Excellence &amp; Commitment (you have this but it's currently at wrong index)
  {
    name: "Excellence & Commitment",
    headerImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1559757188-5d7d9c2c9b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    yourMatches: '"Therapist stayed late to complete thorough treatment plan" → Excellence/Commitment',
    correctMatches: [
      "Nurse double-checks medication calculations for accuracy",
      "Doctor follows up personally on patient concerns",
      "Team member attends training to improve skills"
    ],
    correctAnswer: {
      text: "Excellence drives us to deliver the highest quality care; commitment ensures we persist through challenges for our patients.",
      emphasis: "This means going above and beyond, continuous improvement, and never giving up on patient outcomes."
    },
    characteristics: {
      looksLike: "Attention to detail, follow-through, skill development, persistence through challenges",
      soundsLike: '"I want to make sure this is perfect", "I\'ll follow up tomorrow", "Let me research this further"'
    },
    staffExamples: "Nurse double-checks complex medication calculations and consults pharmacy for verification",
    patientExamples: 'Doctor says, "I want to research your condition further to give you the best possible options"',
    staffNonExamples: "Staff member does minimum required work and leaves promptly at shift end",
    patientNonExamples: "Clinician gives up easily when first treatment approach doesn\'t work",
    questions: [
      {
        text: "Which behavior best demonstrates Excellence/Commitment?",
        options: [
          {
            text: "Therapist researches new techniques to better serve challenging case",
            correct: true,
            feedback: "Correct! This shows commitment to excellence and patient outcomes."
          },
          {
            text: "Staff member completes tasks adequately but doesn\'t go beyond requirements",
            correct: false,
            feedback: "Incorrect. This meets minimum standards but doesn\'t demonstrate excellence or commitment."
          }
        ]
      },
      {
        text: "How should staff respond when treatment isn\'t working?",
        options: [
          {
            text: "Consult colleagues, research alternatives, and adjust approach",
            correct: true,
            feedback: "Correct! This demonstrates commitment to excellence and patient success."
          },
          {
            text: "Continue same approach since it usually works for most patients",
            correct: false,
            feedback: "Incorrect. This lacks commitment to individual patient excellence."
          }
        ]
      }
    ]
  }
];

    // ==========================================================================
    // APPLICATION STATE
    // ==========================================================================
    let currentValueIndex = 0;
    let currentQuestionIndex = 0;
    let score = 0;
    let valueScores = [0, 0, 0, 0, 0, 0]; // Track score for each value pair
    let completedValues = []; // Track which values are completed

    // ==========================================================================
    // UTILITY FUNCTIONS
    // ==========================================================================
    function updateProgress() {
      const progress = ((currentValueIndex + (currentQuestionIndex / 2)) / 6) * 100;
      document.getElementById('progress-bar').style.width = `${progress}%`;
    }

    function updateScore() {
      document.getElementById('scoreDisplay').textContent = `Score: ${score}/12`;
    }

    function updateValueMenuStates() {
      const valueLinks = document.querySelectorAll('.value-link');
      valueLinks.forEach((link, index) => {
        link.classList.remove('active', 'available', 'completed');
        
        if (index === currentValueIndex) {
          link.classList.add('active');
        } else if (completedValues.includes(index)) {
          link.classList.add('completed');
        } else if (index === currentValueIndex + 1 || index < currentValueIndex) {
          link.classList.add('available');
        }
      });
    }

    // ==========================================================================
    // CONTENT LOADING FUNCTIONS
    // ==========================================================================
    function loadValueContent(valueIndex) {
      const value = valueData[valueIndex];
      
      // Add fade animation
      document.querySelector('.scenario-container').classList.add('fade-in');
      
      // Update images
      document.getElementById('hero-image').src = value.heroImage;
      document.getElementById('hero-image').alt = `${value.name} illustration`;
      
      // Update hero title
      document.getElementById('hero-title').textContent = value.name;
      
      // Update top cards
      document.getElementById('your-matches-content').textContent = value.yourMatches;
      const correctMatchesList = document.getElementById('correct-matches-content');
      correctMatchesList.innerHTML = '';
      value.correctMatches.forEach(match => {
        const li = document.createElement('li');
        li.textContent = match;
        correctMatchesList.appendChild(li);
      });
      
     
// Update dynamic headers
document.querySelector('.correct-answer h3').textContent = `Defining ${value.name}`;
document.querySelector('.characteristics h3').textContent = `Characteristics of ${value.name}`;
          // Update Frayer model content
        document.getElementById('correct-answer-content').innerHTML = `
        <p>${value.correctAnswer.text}</p>
        <p><em>"${value.correctAnswer.emphasis}"</em></p>
      `;
      
      document.getElementById('characteristics-content').innerHTML = `
        <p><strong>Looks like:</strong> ${value.characteristics.looksLike}</p>
        <p><strong>Sounds like:</strong> ${value.characteristics.soundsLike}</p>
      `;
      
      document.getElementById('staff-examples').textContent = value.staffExamples;
      document.getElementById('patient-examples').textContent = value.patientExamples;
      document.getElementById('staff-non-examples').textContent = value.staffNonExamples;
      document.getElementById('patient-non-examples').textContent = value.patientNonExamples;
      
      // Load questions - Clear any existing content first
      document.getElementById('question1-text').textContent = '';
      document.getElementById('question1-options').innerHTML = '';
      document.getElementById('question2-text').textContent = '';
      document.getElementById('question2-options').innerHTML = '';
      
      // Load questions properly
      setTimeout(() => {
        loadQuestion(0);
        loadQuestion(1);
      }, 100);
      
      // Reset question display
      currentQuestionIndex = 0;
      document.getElementById('q1').classList.add('active');
      document.getElementById('q2').classList.remove('active');
    }

    function loadQuestion(questionIndex) {
      const value = valueData[currentValueIndex];
      const question = value.questions[questionIndex];
      const questionId = questionIndex === 0 ? 'question1' : 'question2';
      
      // Update question text
      document.getElementById(`${questionId}-text`).textContent = question.text;
      
      // Update options
      const optionsContainer = document.getElementById(`${questionId}-options`);
      optionsContainer.innerHTML = '';
      
      question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.correct = option.correct;
        optionDiv.dataset.questionIndex = questionIndex;
        optionDiv.dataset.optionIndex = optionIndex;
        
        optionDiv.innerHTML = `
          ${option.text}
          <div class="feedback ${option.correct ? 'correct-feedback' : 'incorrect-feedback'}">
            ${option.feedback}
          </div>
        `;
        
        optionsContainer.appendChild(optionDiv);
      });
    }

    // ==========================================================================
    // EVENT HANDLERS
    // ==========================================================================
    function initializeEventListeners() {
      // Toggle buttons for examples/non-examples
      document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const type = this.dataset.type;
          const container = this.closest('.frayer-square');
          
          // Update button states
          container.querySelectorAll('.toggle-btn').forEach(b => {
            b.classList.remove('active');
          });
          this.classList.add('active');
          
          // Show relevant content
          if (container.classList.contains('examples')) {
            container.querySelectorAll('.example-content').forEach(c => {
              c.style.display = 'none';
            });
            container.querySelector(`.${type}-example`).style.display = 'block';
          } else {
            container.querySelectorAll('.non-example-content').forEach(c => {
              c.style.display = 'none';
            });
            container.querySelector(`.${type}-non-example`).style.display = 'block';
          }
        });
      });

      // Question option clicks
      document.addEventListener('click', function(e) {
        if (e.target.classList.contains('option')) {
          handleOptionClick(e.target);
        }
      });

      // Value menu navigation
      document.querySelectorAll('.value-link').forEach(link => {
        link.addEventListener('click', function() {
          const targetIndex = parseInt(this.dataset.value);
          if (this.classList.contains('available') || this.classList.contains('completed') || this.classList.contains('active')) {
            navigateToValue(targetIndex);
          }
        });
      });

      // Navigation buttons
      document.getElementById('prev-btn').addEventListener('click', function() {
        if (currentValueIndex > 0) {
          navigateToValue(currentValueIndex - 1);
        }
      });

      document.getElementById('next-btn').addEventListener('click', function() {
        if (currentValueIndex < valueData.length - 1) {
          navigateToValue(currentValueIndex + 1);
        } else {
          // Course complete
          alert('Congratulations! You have completed all core values training modules.');
        }
      });
    }

    function handleOptionClick(optionElement) {
      const questionIndex = parseInt(optionElement.dataset.questionIndex);
      const isCorrect = optionElement.dataset.correct === 'true';
      const questionContainer = optionElement.closest('.question');
      
      // Highlight selected option
      questionContainer.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
      });
      optionElement.classList.add(isCorrect ? 'correct' : 'incorrect');
      
      // Show feedback
      questionContainer.querySelectorAll('.feedback').forEach(f => {
        f.style.display = 'none';
      });
      optionElement.querySelector('.feedback').style.display = 'block';
      
      // Update score if correct
      if (isCorrect) {
        if (!optionElement.dataset.scored) {
          score++;
          valueScores[currentValueIndex]++;
          optionElement.dataset.scored = 'true';
          updateScore();
        }
      }
      
      // Progress to next question or enable next button
      setTimeout(() => {
        if (questionIndex === 0 && isCorrect) {
         //  document.getElementById('q1').classList.remove('active');
          document.getElementById('q2').classList.add('active');
          currentQuestionIndex = 1;
        } else if (questionIndex === 1) {
          // Both questions completed for this value
          if (!completedValues.includes(currentValueIndex)) {
            completedValues.push(currentValueIndex);
          }
          updateValueMenuStates();
          updateNavigationButtons();
        }
        updateProgress();
      }, 500);
    }

    function navigateToValue(valueIndex) {
      if (valueIndex >= 0 && valueIndex < valueData.length) {
        currentValueIndex = valueIndex;
        currentQuestionIndex = 0;
        loadValueContent(valueIndex);
        updateValueMenuStates();
        updateNavigationButtons();
        updateProgress();
        window.scrollTo(0, 0);
      }
    }
function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  prevBtn.disabled = currentValueIndex === 0;
  
  // Check if both questions are answered correctly
  const bothQuestionsCorrect = valueScores[currentValueIndex] === 2;
  nextBtn.disabled = !bothQuestionsCorrect;
  
  // Add tooltip for disabled button
  if (!bothQuestionsCorrect) {
    nextBtn.title = "Our values are important! Answer both questions correctly.";
  } else {
    nextBtn.title = "";
  }
  
  if (currentValueIndex === valueData.length - 1) {
    nextBtn.textContent = bothQuestionsCorrect ? 'Course Complete' : 'Complete Final Module';
  } else {
    nextBtn.textContent = 'Next Value Pair';
  }
}
    

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================
    document.addEventListener('DOMContentLoaded', function() {
      initializeEventListeners();
      loadValueContent(0);
      updateValueMenuStates();
      updateNavigationButtons();
      updateScore();
      updateProgress();
    });
  
