export const jsQuizz = {
    questions: [
      {
        question:
          "Which of the following is used in React.js to increase performance?",
        choices: [
          "Virtual DOM",
          "Original DOM",
          "Both A and B",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Virtual DOM",
      },
      {
        question: "What is ReactJS?",
        choices: [
          "Server-side framework",
          "User Interface framework",
          "both a and b",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "User Interface framework",
      },
      {
        question:
          "Identify the one which is used to pass data to components from outside",
        choices: [
          "Render with arguments",
          "setState",
          "PropTypes",
          "props"],
        type: "MCQs",
        correctAnswer: "props",
      },
      {
        question: "In which language is React.js written?",
        choices: [
          "Python",
          "Java",
          "C#",
          "JavaScript"],
        type: "MCQs",
        correctAnswer: "JavaScript",
      },
      {
        question: "What is Babel?",
        choices: [
          "JavaScript interpreter",
          "JavaScript transpiler",
          "JavaScript compiler",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "JavaScript compiler",
      },
      {
        question: "What is JSX in React.js?",
        choices: [
          "JavaScript XML",
          "JavaScript Extension",
          "JavaScript Syntax Extension",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "JavaScript XML",
      },
      {
        question: "How does React handle state in components?",
        choices: [
          "Using props",
          "Using setState method",
          "Using local variables",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Using setState method",
      },
      {
        question: "What is the purpose of the React Router library?",
        choices: [
          "Form handling in React",
          "State management in React",
          "Navigation in React applications",
          "Animation in React components",
        ],
        type: "MCQs",
        correctAnswer: "Navigation in React applications",
      },
      {
        question: "What are React Hooks used for?",
        choices: [
          "Managing browser history",
          "Managing component state and side effects in functional components",
          "Styling React components",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Managing component state and side effects in functional components",
      },
      {
        question: "What is the purpose of the useEffect hook in React?",
        choices: [
          "Handling events in React components",
          "Fetching data and performing side effects in functional components",
          "Managing component styles",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Fetching data and performing side effects in functional components",
      },
      {
        question: `What is the concept of "lifting state up" in React?`,
        choices: [
          "Moving state from child to parent components",
          "Passing state between sibling components",
          "Keeping state within a single component",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Moving state from child to parent components",
      },
      {
        question: `What is the purpose of the map() function in React?`,
        choices: [
          "Creating an array of React elements",
          "Modifying the existing array elements",
          "Iterating over an array and returning a new array",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Iterating over an array and returning a new array",
      },
      {
        question: `What is the role of the "key" prop in React lists?`,
        choices: [
          "Providing a unique identifier to list items",
          "Styling list items",
          "Controlling the visibility of list items",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Providing a unique identifier to list items",
      },
      {
        question: `What is the significance of the term "controlled components" in React forms?`,
        choices: [
          "Components that are manually manipulated through the DOM",
          "Components whose state is controlled by React",
          "Components without any form controls",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Components whose state is controlled by React",
      },
      {
        question: `How can you optimize performance in a React application?`,
        choices: [
          "Using Memoization",
          "Code splitting",
          "Minimizing renders with PureComponent",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: `What is the purpose of the ReactDOM library in React?`,
        choices: [
          "Server-side rendering",
          "DOM manipulation and rendering React components",
          "Routing in React applications",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "DOM manipulation and rendering React components",
      },
      {
        question: `What is the role of the "shouldComponentUpdate" lifecycle method in React class components?`,
        choices: [
          "Deciding whether a component should re-render",
          "Handling component mounting",
          "Managing component state",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Deciding whether a component should re-render",
      },
      {
        question: `How does React support internationalization (i18n) in applications?`,
        choices: [
          "Using third-party libraries",
          "Utilizing built-in React features",
          "Combining with Redux for localization",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: `What is the purpose of the "dangerouslySetInnerHTML" prop in React?`,
        choices: [
          "Including raw HTML content in React components",
          "Applying inline styles",
          "Handling component events",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Including raw HTML content in React components",
      },
      {
        question: `How can you pass data between sibling components in React?`,
        choices: [
          "Using context API",
          "Lifting state up through parent component",
          "Prop drilling",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      
    ],
  };

  export const resultInitialState = {
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
  }