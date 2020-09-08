import { QuestionModel } from "../models/Question";

const PETags = [
  { start: 1, span: 1, note: "Poor" },
  { start: 2, span: 9, note: null },
  { start: 11, span: 1, note: "Excellent" },
];
const HowWell = {
  question:
    "Give yourself a personal rating on how well you performed the task.",
  tags: [
    { start: 1, span: 2, note: "Couldn't do it" },
    { start: 3, span: 3, note: null },
    { start: 6, span: 2, note: "With difficulty" },
    { start: 8, span: 2, note: null },
    { start: 10, span: 2, note: "Easy" },
  ],
};
const BotWall = {
  question: "How far is your bottom from the wall?",
  tags: [
    { start: 1, span: 1, note: "20cm" },
    { start: 2, span: 1, note: "18cm" },
    { start: 3, span: 1, note: "16cm" },
    { start: 4, span: 1, note: "14cm" },
    { start: 5, span: 1, note: "12cm" },
    { start: 6, span: 1, note: "10cm" },
    { start: 7, span: 1, note: "8cm" },
    { start: 8, span: 1, note: "6cm" },
    { start: 9, span: 1, note: "4cm" },
    { start: 10, span: 1, note: "2cm" },
    { start: 11, span: 1, note: "0cm" },
  ],
};

export default [
  new QuestionModel({
    type: "PostureCheck",
    title: "Standing up straight - front on",
    description:
      "Wearing shorts, T-shirt and bare feet, take a picture of yourself, standing up straight, front on and with feet comfortably apart.",
    params: {
      question:
        "Based on your own personal assessment, is your body in good alignment.",
      tags: PETags,
    },
  }),
  new QuestionModel({
    type: "PostureCheck",
    title: "Standing up straight side on",
    description: `Wearing shorts, T-shirt and bare feet, take a picture of yourself side on - standing up straight with feet
    comfortable apart. Don't even think of holding your abdomen in!`,
    params: {
      question:
        "Based on your own personal assessment, is your body in good alignment.",
      tags: PETags,
    },
  }),
  new QuestionModel({
    type: "PostureCheck",
    title:
      "Can you put a sock on your RIGHT foot while standiing on your left leg?",
    description: `Standing on your left leg, can you bend down and put a sock on your right foot without falling over? Your
      right knee must stay close to the mid line of your body so your foot, knee and hip are all in a straight line.`,
    params: HowWell,
  }),
  new QuestionModel({
    type: "PostureCheck",
    title:
      "Can you put a sock on your LEFT foot while standing on your right leg?",
    description: `Standing on your right leg, can you bend down and put a sock on your left foot without falling over? Your
    leftt knee must stay close to the mid line of your body so your foot, knee and hip are all in a straight line`,
    params: HowWell,
  }),
  new QuestionModel({
    type: "PostureCheck",
    title:
      "Calf and hamstring flexibility test. Can you sit up straight against a wall",
    description: `Sit up against a wall, legs straight and backs of knees on the floor. Push your bottom back as close to the
      wall as you can.
      Let us know which muscles feel tight when you push your bottom closer to the wall. `,
    params: BotWall,
  }),
  new QuestionModel({
    type: "PostureCheck",
    title:
      "Right hamstring flexibility test against a wall: right leg against the wall",
    description: `Get in close to the corner of a wall, or a doorway. Lie on your back with your left leg flat on the floor.
      Keeping your right leg straight, put the heel on the wall and then gradually edge your bottom in towards the
      wall as far as you can.
      
      Take a photo at the point where you can’t move your bottom any closer into the wall. We're interested to see
      if there is a gap between your bottom and the wall and if there is, how large it is. Make sure you keep your
      legs straight. `,
    params: BotWall,
  }),
  new QuestionModel({
    type: "PostureCheck",
    title:
      "Left hamstring flexibility test against a wall: left leg against the wall",
    description: `Get in close to the corner of a wall, or a doorway. Lie down on you back with your right leg flat on the floor.
      Keeping your left leg straight, put the heel on the wall and then gradually edge your bottom in towards the
      wall.
      Take a photo at the point where you can’t move your bottom any closer into the wall. We're interested to see
      if there is a gap between your bottom and the wall and if there is, how large it is. Make sure you keep your
      right leg straight and flat on the floor. `,
    params: BotWall,
  }),
  new QuestionModel({
    type: "PostureCheck",
    title: "Right buttock function test – front on",
    description: `Can you sit up exceptionally straight with your legs crossed; left leg under the right, right leg over the left
    and hands clasped behind your back?`,
    params: {
      question:
        "Give yourself a personal rating of how well you performed the task.",
      tags: [
        { start: 1, span: 6, note: "Couldn't do it - fell over backwards." },
        { start: 7, span: 2, note: "Leadning to one side" },
        { start: 9, span: 1, note: null },
        { start: 10, span: 2, note: "Sitting up straight" },
      ],
    },
  }),
  new QuestionModel({
    type: "PostureCheck",
    title: "Right buttock test - side on",
    params: {
      question:
        "Give yourself a personal rating of how well you performed the task.",
      tags: [
        { start: 1, span: 6, note: "Couldn't do it - fell over backwards." },
        { start: 7, span: 2, note: "Only just. Back in a 'C' shape." },
        {
          start: 9,
          span: 2,
          note: "Easy and up straight with hollow in lumbar spine.",
        },
      ],
    },
  }),
  new QuestionModel({
    type: "PostureCheck",
    title: "Left buttock function test – front on",
    description: `Can you sit up exceptionally straight with your legs crossed; right leg under the left, Left leg over the right
    and hands clasped behind your back?`,
    params: {
      question:
        "Give yourself a personal rating of how well you performed the task.",
      tags: [
        { start: 1, span: 6, note: "Couldn't do it - fell over backwards." },
        { start: 7, span: 2, note: "Leadning to one side" },
        { start: 9, span: 1, note: null },
        { start: 10, span: 2, note: "Sitting up straight" },
      ],
    },
  }),
  new QuestionModel({
    type: "PostureCheck",
    title: "Left buttock test - side on",
    params: {
      question:
        "Give yourself a personal rating of how well you performed the task.",
      tags: [
        { start: 1, span: 6, note: "Couldn't do it - fell over backwards." },
        { start: 7, span: 2, note: "Only just. Back in a 'C' shape." },
        {
          start: 9,
          span: 2,
          note: "Easy and up straight with hollow in lumbar spine.",
        },
      ],
    },
  }),
];
