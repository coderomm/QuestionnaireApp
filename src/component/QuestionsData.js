const questionsData = [
  {
    id: 1,
    question: "What’s Your age?",
    options: ["18-21", "22-30", "31-40", "41-55", "55-70", "70+"],
    type: "single-choice",
  }, 
  {
    id: 2,
    question: "What is your Gender?",
    options: ["Male", "Female", "Rather not say"],
    type: "single-choice",
  },
  {
    id: 3,
    question: "What’s Your Profession:",
    options: [
      "Own my own business",
      "Service",
      "Student",
      "Athlete",
      "Retired",
      "Others",
    ],
    type: "single-choice",
  },

  {
    id: 4,
    question: "What is your Weight: ___________",
    type: "text-input",
  },
  {
    id: 5,
    question: "What is your Height: ___________",
    type: "text-input",
  },
  {
    id: 6,
    question: "Whom are you looking for supplements for?",
    options: ["Myself", "My Parents", "Partner", "My Child"],
    type: "single-choice",
  },

  {
    id: 7,
    question: "What is your City: ___________",
    type: "text-input",
  },
  {
    id: 8,
    question: "How many hours do you sleep per night? (0-12hrs)",
    type: "range",
    min: 0,
    max: 12,
    step: 1,
    // follow-up question for Q8 if answer is <5h
    followUp: {
      question: "Do you have problems falling or staying asleep?",
      options: [
        "Obstructive sleep",
        "Insomnia",
        "Disturbed sleep-wake schedule",
        "I have trouble falling asleep",
      ],
      type: "single-choice",
    },
  },
  {
    id: 9,
    question:
      "In the last 7 days, on average how many times did you experience Job/work-related stress?",
    options: ["Everyday", "3-4 times", "1-2 times", "None"],
    type: "single-choice",
  },
  {
    id: 10,
    question: "Kindly select the one applicable to you:",
    options: [
      "I am anxious for a better part of the day",
      "I have trouble remembering things at important moments",
      "I experience mood swings",
      "I stress eat",
      "I am stressed and cannot eat",
      "I feel drained out of energy",
      "I relate to more than one statement",
    ],
    type: "single-choice",
  },
  {
    id: 11,
    question:
      "On an average day, how much time do you spend sitting per day? (0-12hours+)",
    type: "range",
    min: 0,
    max: 12,
    step: 1,
  },
  {
    id: 12,
    question: "Do you exercise regularly?",
    options: ["Yes", "Occasionally", "if I feel out of shape", "No"],
    type: "single-choice",
    // Follow-ups for Q12 if choose 1 & 2:
    followUp: {
      question: "The type of exercise I follow is:",
      options: [
        "Yoga",
        "Cardio- Brisk walking, jogging, running",
        "HIIT",
        "Weightlifting",
        "Callisthenics",
        "Swimming",
      ],
      type: "single-choice",
      followUp: [
        {
          question: "I play a sport: name ______",
          type: "text-input",
        },
        {
          question: "I have a _____ intensity workout",
          options: ["High", "Moderate", "Low", "No"],
          type: "single-choice",
        },
      ],
    },
  },
  {
    id: 13,
    question: "How often do you drink alcohol?",
    options: [
      "Frequently (3-4 times a week)",
      "Occasionally(1-2 times a month)",
      "Never",
    ],
    type: "single-choice",
  },
  {
    id: 14,
    question: "How often do you smoke?",
    options: [
      "Frequently (3-4 times a week)",
      "Occasionally(1-2 times a month)",
      "Never",
    ],
    type: "single-choice",
  },
  {
    id: 15,
    question: "Existing health concerns (Kindly select the ones that apply)",
    options: [
      "Diabetes",
      "Obesity",
      "Hypertension",
      "Respiratory illness- Asthma",
      "Joint Pain/ Arthritis",
      "Heart conditions",
      "Autoimmune disease",
      "Thyroid conditions",
      "Neurodegenerative- Parkinson’s, Alzheimer’s, Dementia",
      "Allergies- seasonal, food, or environmental",
      "Kidney Problems (Avoid Ca-AKG)",
      "None",
    ],
    type: "multiple-choice",
  },
  {
    id: 16,
    question: "Are you currently pregnant, nursing, or trying to conceive?",
    options: [
      "Yes-(Consult Physician Before starting any new supplement)",
      "No",
    ],
    type: "single-choice",
  },
  {
    id: 17,
    question: "Are you on blood thinners?",
    options: ["Yes-(Avoid Trans-Resveratrol)", "No"],
    type: "single-choice",
  },
  {
    id: 18,
    question: "Diet Preference:",
    options: ["Non-vegetarian", "Vegetarian", "Vegan"],
    type: "single-choice",
  },
  {
    id: 19,
    question: "I am looking for a product that can help:",
    options: [
      "Improve my lifestyle",
      "Chronic disease management",
      "Gut Health Management",
      "Improve my athleticism",
      "Mitigate age-related concerns",
      "Start my Healthy Ageing Journey-Healthy Ageing Bundle",
    ],
    type: "single-choice",
  },
  // Please answer the following questions to help us recommend the best solutions for your health goals:
  // #### 1. My Primary Health Goal:
  {
    id: 20,
    question: "My Primary Health Goal:",
    options: [
      "Improve Overall Health and Biological Age",
      "Boost Focus and Concentration",
      "Enhance Skin, Hair, and Nail Health",
      "Better Sleep Quality",
      "Strengthen Bone & Muscle Health",
      "Increase Energy Levels",
      "Manage Weight Effectively",
      "Boost Metabolism",
      "Support through Menopause",
      "Improve Oral Health",
    ],
    type: "single-choice",
  },
  // #### Detailed Options for Selected Health Goals:
  // If you chose 'Improve Overall Health and Biological Age':
  {
    followUpQuestionId: 1,
    mqid: 20,
    type: "multiple-choice",
    question: "I want to focus on (Select all that apply):",
    options: [
      "Enhancing cell health and longevity (Senolytics, Sirtuins)",
      "Boosting cellular energy levels (NAD+)",
      "Improving the body's detox and repair processes (Autophagy)",
      "Strengthening antioxidant defences",
      "All of the above",
    ],
  },
  // If you chose 'Boost Focus and Concentration':
  {
    followUpQuestionId: 2,
    mqid: 20,
    type: "single-choice",
    question: "My main concern is (Select one):",
    options: [
      "Forgetting daily tasks and schedules",
      "Difficulty keeping track of passwords",
      "Forgetting why I entered a room",
      "Struggling to concentrate for long periods",
    ],
  },
  // If you chose 'Enhance Skin, Hair, and Nail Health':
  {
    followUpQuestionId: 3,
    mqid: 20,
    type: "single-choice",
    question: "I am most interested in (Select one):",
    options: [
      "Improving hair density and strength",
      "Enhancing skin texture and reducing signs of ageing",
      "Strengthening nails",
      "Achieving overall glowing skin",
    ],
  },
  // If you chose 'Strengthen Bone & Muscle Health':
  {
    followUpQuestionId: 4,
    mqid: 20,
    type: "single-choice",
    question: "My main issue is (Select one):",
    options: [
      "Frequent muscle cramps",
      "Muscle pain after light activities",
      "Persistent backache",
    ],
  },
  // If you chose 'Increase Energy Levels':
  {
    followUpQuestionId: 5,
    mqid: 20,
    type: "multiple-choice",
    question: "My energy concern is (Select all that apply):",
    options: [
      "Constant exhaustion",
      "Feeling sleepy at unusual times",
      "Decreased energy compared to previous months",
      "Tiredness despite adequate rest",
    ],
  },
  // If you chose 'Manage Weight Effectively':
  {
    followUpQuestionId: 6,
    mqid: 20,
    type: "single-choice",
    question: "My weight concern is (Select one)",
    options: [
      "Sudden unexplained weight gain",
      "Sudden unexplained weight loss",
      "Fluctuating weight despite a controlled diet",
    ],
  },
  // If you chose 'Boost Metabolism':
  {
    followUpQuestionId: 7,
    mqid: 20,
    type: "single-choice",
    question: "I aim to (Select one)",
    options: [
      "Improve overall metabolism",
      "Enhance nerve function and communication",
    ],
  },
  // If you chose 'Support through Menopause':
  {
    followUpQuestionId: 8,
    mqid: 20,
    type: "multiple-choice",
    question: "I need help with (Select all that apply)",
    options: [
      "Overall menopause support",
      "Nutritional advice for well-being",
      "Managing fatigue",
      "Reducing hot flashes",
      "Targeting osteoporosis",
    ],
  },
  // If you chose 'Improve Oral Health':
  {
    followUpQuestionId: 9,
    mqid: 20,
    type: "single-choice",
    question: "My main concern is (Select one)",
    options: [
      "Persistent bad breath",
      "Gum pain and sensitivity",
      "Tooth sensitivity",
      "Frequent mouth ulcers",
    ],
  },
  // #### 2. Chronic Disease Management:
  {
    id: 21,
    question: "I am looking for supplements to help with (Select one)",
    options: [
      "Type 2 Diabetes or Insulin Sensitivity Issues",
      "Arthritis",
      "Heart and Cardiovascular Health",
      "Muscle Function",
      "Nervous System Support",
      "Allergy Management",
      "Post COVID-19 Recovery",
      "Immune System Boosting",
    ],
    type: "single-choice",
  },
  // ## Detailed Options for Chronic Disease Management:
  // If you chose 'Heart and Cardiovascular Health':
  {
    followUpQuestionId: 1,
    mqid: 21,
    type: "single-choice",
    question: "Am I overweight according to my BMI?",
    options: ["Yes", "No"],
  },
  // If you chose 'Nervous System Support':
  {
    followUpQuestionId: 2,
    mqid: 21,
    type: "single-choice",
    question: "I have been diagnosed with or want to prevent (Select one):",
    options: [
      "Dementia",
      "Alzheimer’s Disease",
      "Parkinson’s Disease",
      "Schizophrenia",
      "Anxiety",
      "None, but interested in overall mental health improvement",
    ],
  },
  // 3. 'Gut Health':
  {
    id: 22,
    question: "My gut health concerns",
    options: [
      "Understanding and improving gut health",
      "Frequent indigestion",
      "Regular bloating",
      "Abdominal pain",
    ],
    type: "single-choice",
  },
  {
    id: 23,
    question: "How often do you eat outside?",
    options: ["Frequently", "Occasionally", "Never"],
    type: "single-choice",
  },
  {
    id: 24,
    question: "How often do you eat processed foods?",
    options: ["Frequently", "Occasionally", "Never"],
    type: "single-choice",
  },
  {
    id: 25,
    question:
      "Have you taken any medication or antibiotics in the past three months?",
    options: ["Yes", "No"],
    type: "single-choice",
  },
  // 4. Athletic Performance:
  {
    id: 26,
    question: "My athletic enhancement goals (Select one)",
    options: [
      "Improving mitochondrial health for energy",
      "Managing arterial stiffness from intense exercise",
      "Enhancing aerobic and exercise endurance",
      "Seeking a caffeine-free pre-workout boost",
      "Aiding muscle recovery post-workout",
      "Strengthening muscles",
      "Personalised nutrition for athletic performance",
      "Incorporating adaptogens into workout routine",
      "Overall sports performance improvement",
    ],
    type: "single-choice",
  },
  // 5. Age-Related Health Concerns:
  {
    id: 27,
    question: "My concerns with ageing (Select one)",
    options: [
      "Neurodegenerative conditions",
      "Managing cellular ageing (Senescent cells)",
      "High blood pressure (Hypertension)",
      "Reducing inflammation",
      "Brain health and cognitive function",
      "Heart and cardiovascular wellness",
      "Extending healthspan and vitality",
    ],
    type: "single-choice",
  },
];

export default questionsData;
