const logos = [
  new URL("../assets/features/TS.svg", import.meta.url).href,
  new URL("../assets/features/AI.svg", import.meta.url).href,
  new URL("../assets/features/Analytic.svg", import.meta.url).href,
  new URL("../assets/features/Aws.svg", import.meta.url).href,
  new URL("../assets/features/Auth.svg", import.meta.url).href,
  new URL("../assets/features/JS.svg", import.meta.url).href,
  // new URL("../assets/features/Docker.svg", import.meta.url).href,
  new URL("../assets/features/GitHub.svg", import.meta.url).href,
  new URL("../assets/features/Mongo.svg", import.meta.url).href,
];

//This is the logo in the BOX
const features = [
  {
    gridArea: "tl",
    image: new URL("../assets/features/TS.svg", import.meta.url).href,
    heading: "Average Bill Duration",
    description: `Measures the average time billed for each serverless function execution, including initialization and overhead.`,
  },
  {
    gridArea: "tr",
    image: new URL("../assets/features/Aws.svg", import.meta.url).href,
    heading: "Cold Start Performance Metrics",
    description: `Tracks the time taken for functions to initialize when they have been idle or are invoked for the first time.`,
  },
  {
    gridArea: "bl",
    image: new URL("../assets/features/Auth.svg", import.meta.url).href,
    heading: "Total Cold Starts",
    description: `The total number of times a function was initialized from scratch, indicating how often it experiences cold starts.
            `,
  },
  {
    gridArea: "blm",
    image: new URL("../assets/features/Analytic.svg", import.meta.url)
      .href,
    heading: "Real-Time Performance Metric",
    description: `Gain insights through advanced data visualization and monitor performance metrics in real time.`,
  },
  {
    gridArea: "brm",
    image: new URL("../assets/features/AI.svg", import.meta.url).href,
    heading: "AI-Powered BedRock",
    description: `Leverage AI-driven Bedrock integration to gain deeper insights into your performance metrics.`,
  },
];

const pricingData = [
  {
    darkMode: false,
    plan: "Individual Plan",
    planIcon: new URL("../assets/pricing/individual-plan.svg", import.meta.url)
      .href,
    planPrice: 9.99,
    bullets: [
      "Real-time collaboration",
      "AI-powered organization",
      "Customizable templates",
      "5GB cloud storage",
      "Basic integrations",
    ],
    CallToAction: "Start Free Trial",
  },
  {
    darkMode: true,
    plan: "Team Plan",
    planIcon: new URL("../assets/pricing/team-plan.svg", import.meta.url).href,
    planPrice: 19.99,
    bullets: [
      "Everything in the Individual Plan",
      "Unlimited cloud storage",
      "Advanced integrations",
      "Team management and permissions",
      "Shared templates and note libraries",
    ],
    CallToAction: "Start Free Trial",
  },
  {
    darkMode: false,
    plan: "Enterprise Plan",
    planIcon: new URL("../assets/pricing/enterprise-plan.svg", import.meta.url)
      .href,
    bullets: [
      "Everything in the Team Plan",
      "Dedicated account manager",
      "Enterprise-grade security",
      "Customized onboarding",
      "Advanced analytics",
    ],
    CallToAction: "Contact support",
  },
];

const faqItems = [
  {
    id: 1,
    question: "How to locally install the LambdaLens Open-source project?",
    answerHeading: "How to locally install the LambdaLens Open-source project?",
    answer: `Getting started with LambdaLens is easy! Simply visit
             our github page, and start exploring 
             the features. `,
  },
  {
    id: 2,
    question: "Do I need to set up my IAM account on AWS?",
    answerHeading: "Do I need to set up my IAM account on AWS?",
    answer: `Yes, there are few steps that you need to do before 
             running your localhost applications with AWS.
             1. Setting up your AWS IAM account with roles and attached
             AdmininistratorAccess to your role
             2. Clone our repository and cd client to run 'npm run dev', and
             cd server to run 'npm run dev'
             3. Congratulations, you started the performance metrics application.
             Now you can add features to it for your projects! `,
  },
  {
    id: 3,
    question: "What should I do if I encounter an issue with Lambda Lens?",
    answerHeading: "What should I do if I encounter an issue with Lambda Lens?",
    answer: `If you encounter issues, check our troubleshooting documentation.
              You can also reach out to us on GitHub or Linkedin. Please provide details
              informations and logs to help us resolve your issues quickly!`,
  },
  {
    id: 4,
    question: "How can I contribute to Lambda Lens?",
    answerHeading: "How can I contribute to Lambda Lens?",
    answer: `Contributions are welcome! To Contribute
            1. Create a fork of Lambda lens repo on Github
            2. Develop your changes in a separate branch
            3. Push your changes to your fork and submit pull request to the main repo`,
  },
  // {
  //   id: 5,
  //   question: "What is SmartNotes?",
  //   answerHeading: "How do I get started with SmartNotes?",
  //   answer: `Getting started with SmartNotes is easy! Simply visit
  //            our website, sign up for a free trial, and start exploring 
  //            the features. Our intuitive interface and comprehensive onboarding 
  //            materials will guide you through the process.`,
  // },
];

export { logos, features, pricingData, faqItems };
