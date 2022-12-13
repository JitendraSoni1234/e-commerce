import neuralNetwork from "../neuralNetwork";

const a = [
  {
    id: "1",
    message: "hii!!",
    trigger: "intro",
  },
  {
    id: "intro",
    user: true,
    trigger: ({ value, steps }) => {
      if (neuralNetwork(value).length) {
      return neuralNetwork(value);
      }
      return 'retry';
    },
  },
  // {
  //   id: "2",
  //   message: "help",
  //   trigger: ({ value, steps }) => {
  //     const last = steps[Object.keys(steps)[Object.keys(steps).length - 1]];
  //     console.log(last.message, "adf");
  //     return neuralNetwork(last.message);
  //   },
  // },
  // {
  //   id: "8",
  //   message: "Hi {previousValue}! What is your gender?",
  //   trigger: () => {
  //     return "gender";
  //   },
  // },
  // {
  //   id: "gender",
  //   options: [
  //     { value: "male", label: "Male", trigger: "5" },
  //     { value: "female", label: "Female", trigger: "5" },
  //   ],
  // },
  {
    id: "retry",
    message: "didn't get that come again",
    trigger: "intro",
  },
  // {
  //   id: "age",
  //   user: true,
  //   trigger: ({ value, steps }) => {
  //     console.log(neuralNetwork(value), "data is here");
  //     return neuralNetwork(value);
  //   },
  // },
  {
    id: "botGreet",
    message: "i am fine what about you my friend",
    trigger: "intro",
  },
  // {
  //   id: "update",
  //   message: "Would you like to update some field?",
  //   trigger: "update-question",
  // },
  // {
  //   id: "update-question",
  //   options: [
  //     { value: "yes", label: "Yes", trigger: "update-yes" },
  //     { value: "no", label: "No", trigger: "end-message" },
  //   ],
  // },
  // {
  //   id: "update-yes",
  //   message: "What field would you like to update?",
  //   trigger: "update-fields",
  // },
  // {
  //   id: "update-fields",
  //   options: [
  //     { value: "name", label: "Name", trigger: "update-name" },
  //     { value: "gender", label: "Gender", trigger: "update-gender" },
  //     { value: "age", label: "Age", trigger: "update-age" },
  //   ],
  // },
  // {
  //   id: "update-name",
  //   update: "name",
  //   trigger: "7",
  // },
  // {
  //   id: "update-gender",
  //   update: "gender",
  //   trigger: "7",
  // },
  // {
  //   id: "update-age",
  //   update: "age",
  //   trigger: "7",
  // },
  // {
  //   id: "end-message",
  //   message: "Thanks! Your data was submitted successfully!",
  //   end: true,
  // },
];
export default a;
