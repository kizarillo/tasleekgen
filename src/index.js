let focus;
let skillSelected;
let resources = {
  reading: [
    "Please visit https://www.englishrevealed.co.uk/pet.php and start with part 3. Spend at least 15 minutes a day. Take screenshots to show me on Sunday.",
    "I would like you to practice reading part 2. Please go to www.flo-joe.co.uk to complete reading parts 2. Do 3 exercises and practice underlining key words and match the profiles. practice the grammar sheets I gave you and complete by next week.",
    "Please complete two reading tasks  found on www.eslfast.com by next Sunday and show me the screenshots of the complete activities.",
    "Please complete two reading tasks  found on www.eslfast.com by next Sunday and show me the screenshots of the complete activities.",
    "Please complete two reading tasks  found on www.breakingnewsenglish.com by next Sunday and show me the screenshots of the complete activities.",
    "Please visit www.newsinlevels.com pick a topic of your choice and complete all of the acitivies assigned to that topic. Take screenshots to show me on Sunday."
  ],
  listening: [
    "Practice your listening skills by going on to www.esl-lab.com and picking an activity of your choice. Complete 3 full listening activities by next week and show me the screenshots of complete activities.",
    "Practice your listening skills by going on to www.elllo.org and picking an activity of your choice. Complete 3 full listening activities by next week and show me the screenshots of complete activities.",
    "Practice your listening skills by going on to www.newsinlevels.com and picking an activity of your choice. Complete 3 full listening activities by next week and show me the screenshots of complete activities."
  ],
  speaking: [
    "Do any speaking part of the KET exam practice on https://lms.aarcoe.com and record your speaking, show me on (Monday) or (record and send it to the WhatsApp group).",
    "To improve your speaking, you should go to extra class for speaking lesson every Wednesday. You should also speak in English to all your friends and family to enhance your speaking skills.",
    "Speaking, is a much more spontaneous process and nothing prepares you for it better than actually doing it. So, find people you can practise with – either on Skype, or on language exchange sites, could you please complete the task by Monday"
  ],
  writing: [
    "Please go on www.eslfast.com and choose a topic of your choice, click on a dictation link at the bottom of the page and complete the whole activity, screenshot every every successful attempt.",
    "Write 100 words about where you’re from and if you like it, and 100 words about what you would like to do in the future and why. Show me on Sunday."
  ]
};

function skillCheck(skill) {
  if (skill === "reading") {
    focus = "reading comprehesion";
    skillSelected = "reading";
  } else if (skill === "listening") {
    focus = "listening comprehesion";
    skillSelected = "listening";
  } else if (skill === "writing") {
    focus = "spelling";
    skillSelected = "writing";
  } else {
    focus = "speaking practice";
    skillSelected = "speaking";
  }
}

let genBank = {
  greeting: [
    "Good job _____, you did well in your _______ by archieving ________.",
    "Well done _____, you did well in your _______ by archieving ________.",
    "Nice work _____, you did well in your _______ by archieving ________."
  ],
  adviceone: [
    "You must improve in " + skillSelected,
    "You should improve in " + skillSelected,
    "I would like you to improve in " + skillSelected,
    "You need to improve in " + skillSelected
  ],
  advicetwo: [
    "by focusing on your " + focus + ".",
    "by concentrating on " + focus + ".",
    "by looking at developing your" + focus + ".",
    "by paying more attention to " + focus + ".",
    "by developing your " + focus + "."
  ],
  task: [
    resources.reading[Math.floor(Math.random() * resources.reading.length)],
    resources.writing[Math.floor(Math.random() * resources.writing.length)],
    resources.listening[Math.floor(Math.random() * resources.listening.length)],
    resources.speaking[Math.floor(Math.random() * resources.speaking.length)]
  ]
};

function compiler() {
  return (
    genBank.greeting[Math.floor(Math.random() * genBank.greeting.length)] +
    genBank.adviceone[Math.floor(Math.random() * genBank.adviceone.length)] +
    genBank.advicetwo[Math.floor(Math.random() * genBank.advicetwo.length)] +
    genBank.task[Math.floor(Math.random() * genBank.task.length)]
  );
}

skillCheck("reading");
document.write(compiler());
