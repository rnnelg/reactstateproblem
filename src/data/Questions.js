const questions = [
  {
    type: "MultipleChoiceQuestion",
    question: "What is the capital of Canada?",
    answers: [
      { 
        name: "Winnipeg",
        value: "false",
        id: 1
      },
      { 
        name: "Ottawa",
        value: "true",
        id: 2
      },
      {
        name: "Vancouver",
        value: "false",
        id: 3
      }
    ]
  },
  {
    type: "TrueFalseQuestion",
    question: "Is the capital of Canada Ottawa?",
    answers: [
      { 
        name: "True",
        value: "true",
        id: 1
      },
      { 
        name: "False",
        value: "false",
        id: 2
      }
    ]
  },
  {
    type: "FillInTheBlanksQuestion",
    question: "Name the capital of Canada?",
    answers: [
      { 
        name: "Ottawa",
        value: "Ottawa",
        id: 1
      }
    ]
  },
  {
    type: "FillInTheBlanksQuestion",
    question: "The (A)______ is the prime minister of Canada and he is in the (B)_____ party?",
    answers: [
      { 
        name: "(A)",
        value: "Justin Trudeau",
        id: 1
      },
      { 
        name: "(B)",
        value: "Liberal",
        id: 2
      }
    ]
  },
  {
    type: "OrderingQuestion",
    question: "Order the following government level from highest to lowest",
    answers: [
      { 
        name: "Municipal",
        value: 3,
        id: 1
      },
      { 
        name: "Federal",
        value: 1,
        id: 2
      },
      {
        name: "Provincial",
        value: 2,
        id: 3
      }
    ]
  }
];

export default questions;