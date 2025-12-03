export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  role: string;
  tech: string[];
  github: string;
  liveLink: string;
  image: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "reuse",
    title: "ReUse",
    shortDescription:
      "ReUse is a digital platform that turns recyclable waste into value.",
    fullDescription:
      "ReUse is a digital platform that turns recyclable waste into value. Users drop off recyclables like plastic bottles or cans at nearby collection points and instantly earn tokens they can redeem for airtime, data, or cash.",
    problem:
      "In Nigeria’s Delta State and many urban centers, plastic waste has become a growing environmental and public health hazard. Streets, markets, rivers, and drainage systems are overwhelmed with discarded plastic bottles, shopping bags, and packaging materials. This situation is more than an eyesore, it is a systemic problem with far-reaching consequences.",
    solution:
      "A web platform that transforms how plastic waste is collected and recycled in Nigerian cities. Instead of relying on informal, uncoordinated collection, our solution introduces designated drop-off points where households and businesses can deposit recyclable plastics.",
    role: "Full-Stack Developer - Led the development of both frontend and backend, designed database schema, and implemented user authentication and payment processing.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Express.js",
      "shadcn-ui",
    ],
    github: "https://github.com/kingieX/ReUse",
    liveLink: "https://re-use-navy.vercel.app/",
    image: "/images/Reuse.png",
    features: [
      "User registration and authentication",
      "Plastic drop-off point locator",
      "Token earning and redemption system",
      "Admin dashboard for managing collection points",
      "Real-time notifications and updates",
      "Responsive design for mobile and desktop",
    ],
  },
  {
    id: "finvault",
    title: "FinVault",
    shortDescription:
      "FinVault is a mobile-first personal finance and investment tracker designed to help users manage spending, track financial goals, and gain personalized financial insights through AI.",
    fullDescription:
      "FinVault is a comprehensive personal finance management application designed to empower users to take control of their financial lives. It provides a holistic view of their finances, helping them track expenses, manage budgets, set financial goals, and monitor their investment portfolio.",
    problem:
      "Many individuals struggle to manage their personal finances effectively. They often lack a clear understanding of their spending habits, find it challenging to set and achieve financial goals, and have difficulty tracking investments.",
    solution:
      "Developed a mobile-first personal finance app that consolidates all financial accounts in one place, offers budgeting tools, expense tracking, goal setting features, and investment monitoring with AI-driven insights.",
    role: "Full-Stack Developer - Led the development of both frontend and backend, designed database schema, and implemented user authentication and financial data integration.",
    tech: [
      "React Native",
      "TypeScript",
      "Expo",
      "Nativewind",
      "Axios",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Google generative AI API",
    ],
    github: "https://github.com/kingieX/FinVault",
    liveLink:
      "https://expo.dev/accounts/kingiex/projects/finvault/builds/e963c361-b78d-42b8-997e-2666d97ca895",
    image: "/images/finvault.jpeg",
    features: [
      "Account aggregation from multiple banks",
      "Expense tracking and categorization",
      "Budget creation and monitoring",
      "Financial goal setting and progress tracking",
      "Investment portfolio overview",
      "AI-driven financial insights and tips",
    ],
  },
  {
    id: "insightdash",
    title: "InsightDash",
    shortDescription:
      "InsightDash uses AI to help you turn CSV files into clear, actionable insights. No data science background required.",
    fullDescription:
      "InsightDash is an AI-powered data analysis platform that simplifies the process of extracting insights from CSV files. It leverages advanced machine learning algorithms to analyze datasets, identify patterns, and generate visualizations, making data analysis accessible to users without a data science background.",
    problem:
      "Many individuals and businesses struggle to analyze and interpret data stored in CSV files due to a lack of technical expertise in data science and analytics.",
    solution:
      "Developed a user-friendly web application that allows users to upload CSV files and receive automated data analysis, visualizations, and insights powered by AI.",
    role: "Full-Stack Developer - Led the development of both frontend and backend, designed database schema, and implemented AI integration for data analysis.",
    tech: [
      "React",
      "TypeScript",
      "Nextjs",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Google Generative AI API",
    ],
    github: "https://github.com/kingieX/InsightDash",
    liveLink: "https://insightdash.vercel.app/",
    image: "/images/insightdash.png",
    features: [
      "CSV file upload and parsing",
      "Automated data analysis using AI",
      "Interactive data visualizations",
      "Pattern recognition and trend identification",
      "User-friendly interface for non-technical users",
      "Secure data handling and privacy",
    ],
  },
  {
    id: "smartwaste",
    title: "SmartWaste",
    shortDescription:
      "SmartWaste is an IoT-based waste management system that optimizes garbage collection routes and schedules using real-time data from smart bins.",
    fullDescription:
      "SmartWaste is an innovative waste management solution that leverages IoT technology to optimize garbage collection processes. By equipping waste bins with sensors that monitor fill levels, SmartWaste provides real-time data to waste management companies, enabling them to plan efficient collection routes and schedules.",
    problem:
      "Traditional waste collection methods are often inefficient, leading to overflowing bins, missed pickups, and unnecessary fuel consumption due to fixed routes and schedules.",
    solution:
      "Developed a web-based platform that integrates with IoT-enabled smart bins to provide real-time monitoring of waste levels, optimize collection routes using algorithms, and improve overall efficiency in waste management operations.",
    role: "Full-Stack Developer - Led the development of both frontend and backend, designed database schema, and implemented IoT data integration and route optimization algorithms.",
    tech: [
      "React",
      "TypeScript",
      "Nextjs",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "IoT Sensors",
    ],
    github: "https://github.com/kingieX/smartWaste",
    liveLink: "https://smart-waste-ten.vercel.app/",
    image: "/images/smartwaste.png",
    features: [
      "IoT sensor integration for real-time bin monitoring",
      "Dynamic route optimization for waste collection",
      "Dashboard for waste management companies",
      "Notifications for collection schedules",
      "Data analytics for waste trends",
      "Responsive design for mobile and desktop",
    ],
  },
  {
    id: "mediroute",
    title: "MediRoute",
    shortDescription:
      "MediRoute helps hospitals reduce patient wait times, automate staff scheduling, and monitor resources with AI-powered dashboards for superior patient care.",
    fullDescription:
      "MediRoute is a real-time hospital operations dashboard aimed at improving staff scheduling and patient flow management. It leverages optimization algorithms, real-time tracking, and visualization to streamline staff allocation and reduce patient wait times.",
    problem:
      "Hospitals often struggle with inefficient staff scheduling and patient flow management, leading to long wait times and suboptimal resource utilization.",
    solution:
      "Developed a web-based dashboard that provides real-time insights into hospital operations, enabling administrators to optimize staff schedules and monitor patient flow effectively.",
    role: "Full stack Developer - Implemented the user interface, data visualization components, integrated real-time data feeds and the Backend API.",
    tech: ["React", "Nextjs", "Tailwind css", "radix-ui", "aos", "axios"],
    github: "https://github.com/kingieX/MediRoute",
    liveLink: "https://github.com/kingieX/MediRoute",
    image: "/images/Mediroute.png",
    features: [
      "Real-time patient flow tracking",
      "Staff scheduling optimization",
      "Interactive data visualizations",
      "Resource utilization monitoring",
      "Customizable alerts and notifications",
      "Responsive design for various devices",
    ],
  },
  {
    id: "egbonai",
    title: "EgbonAI",
    shortDescription:
      "EgbónAI is a modern web application that performs sentiment analysis on Nigerian social media texts using Google Gemini AI",
    fullDescription:
      "EgbónAI is a cutting-edge web application that leverages Google Gemini AI to perform sentiment analysis on social media texts specific to the Nigerian context. The platform allows users to input text data from various social media platforms and receive insights into the sentiment expressed, whether positive, negative, or neutral.",
    problem:
      "Understanding public sentiment on social media is crucial for businesses, policymakers, and researchers. However, analyzing sentiment in the Nigerian context can be challenging due to linguistic nuances, slang, and cultural references.",
    solution:
      "Developed a user-friendly web application that integrates with Google Gemini AI to analyze social media texts. The platform provides accurate sentiment analysis tailored to Nigerian language patterns and expressions.",
    role: "Full-Stack Developer - Led the development of both frontend and backend, designed database schema, and implemented AI integration for sentiment analysis.",
    tech: [
      "React",
      "TypeScript",
      "Nextjs",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Google Gemini AI API",
    ],
    github: "https://github.com/kingieX/EgbonAI",
    liveLink: "https://egbon-ai.vercel.app/",
    image: "/images/egbonai.png",
    features: [
      "Social media text input and parsing",
      "Sentiment analysis using Google Gemini AI",
      "Accurate analysis tailored to Nigerian context",
      "User-friendly interface for non-technical users",
      "Data visualization of sentiment trends",
      "Secure data handling and privacy",
    ],
  },
  {
    id: "aifinds",
    title: "AI Finds",
    shortDescription:
      "Explore the best AI tools, models, and projects curated for developers, creators, and curious minds.",
    fullDescription:
      "AI Finds is a comprehensive platform that curates the best AI tools, models, and projects from around the web. It serves as a one-stop destination for developers, creators, and enthusiasts looking to explore and utilize cutting-edge AI technologies.",
    problem:
      "With the rapid growth of AI technologies, it can be overwhelming for individuals to discover and evaluate the best tools and models available for their specific needs.",
    solution:
      "Developed a user-friendly web application that aggregates and curates high-quality AI resources, providing users with detailed information, reviews, and use cases to help them make informed decisions.",
    role: "Full-Stack Developer - Led the development of both frontend and backend, designed database schema, and implemented resource aggregation and curation features.",
    tech: [
      "React",
      "TypeScript",
      "Nextjs",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/kingieX/aifinds-io",
    liveLink: "https://aifindsio.vercel.app/",
    image: "/images/aifinds.png",
    features: [
      "Curated AI tools and models",
      "Detailed resource information and reviews",
      "User-friendly search and filtering",
      "Community ratings and feedback",
      "Regularly updated content",
      "Responsive design for mobile and desktop",
    ],
  },
  {
    id: "biteswift",
    title: "BiteSwift",
    shortDescription:
      "A modern restaurant and food ordering mobile application",
    fullDescription:
      "An Imaginary Food delivery app that takes in orders from a user and the user is able to track their order from the restaurant they ordered from. Restaurants in Abakaliki, Ebonyi state, Nigeria was used as a case study for this App.",
    problem:
      "Traditional restaurant ordering systems are often clunky and provide poor user experience. Customers need a fast, intuitive way to browse menus, customize orders, and track delivery.",
    solution:
      "Built a responsive mobile application with React Native featuring real-time order tracking, advanced filtering, personalized recommendations, and a smooth checkout process.",
    role: "Full-Stack Developer - Designed and implemented the frontend UI/UX, integrated backend APIs, and optimized performance.",
    tech: ["React Native", "Nativewind", "TypeScript", "Nativewind CSS", "Map"],
    github: "https://github.com/kingieX/BiteSwift",
    liveLink: "",
    image:
      "https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG9yZGVyaW5nJTIwYXBwfGVufDF8fHx8MTc2NDQzNTY2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Real-time order tracking",
      "Advanced menu filtering and search",
      "Responsive design for all devices",
      "Secure checkout process",
      "User authentication and profiles",
      "Order history and favorites",
    ],
  },
  {
    id: "konvey-extension",
    title: "Konvey Extension",
    shortDescription:
      "Chrome extension for video recording, screen recording and capturing screenshots.",
    fullDescription:
      "Konvey Extension is a Chrome browser extension used for video recording, screen recording, and capturing screenshots. It enhances user productivity by automating common web tasks and providing quick access to recording features directly from the browser.",
    problem:
      "Users often need to record videos, capture screenshots, or perform repetitive tasks while browsing the web. Existing tools can be cumbersome and lack integration with the browser environment.",
    solution:
      "Developed a Chrome extension that integrates seamlessly with the browser, providing users with easy-to-use tools for video recording, screen capturing, and task automation.",
    role: "Frontend Extension Developer - Designed and implemented the extension's user interface, integrated Chrome APIs, and optimized performance.",
    tech: ["JavaScript", "Chrome APIs", "HTML", "CSS"],
    github: "https://github.com/kingieX/Konvey-Extension",
    liveLink: "https://konvey.app/",
    image:
      "https://images.unsplash.com/photo-1662027067763-770376e710f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBicm93c2VyJTIwZXh0ZW5zaW9ufGVufDF8fHx8MTc2NDM0ODA3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Video recording and screen capturing",
      "Screenshot capture with annotation tools",
      "Task automation features",
      "User-friendly interface",
      "Quick access from browser toolbar",
      "Secure data handling and privacy",
    ],
  },
  {
    id: "shopbuddy-ng",
    title: "ShopBuddy",
    shortDescription:
      "E-commerce platform where you can shop for household items and get the best price in Abakaliki, Ebonyi state.",
    fullDescription:
      "ShopBuddy is an e-commerce platform designed to simplify online shopping by providing users with a seamless experience to browse, compare, and purchase household items. The platform aggregates products from various vendors, allowing users to find the best deals and make informed purchasing decisions.",
    problem:
      "Online shoppers struggle to find the best deals and compare products across multiple platforms. They need a centralized solution for smart shopping.",
    solution:
      "Created a React-based e-commerce platform with price comparison, product recommendations, and a user-friendly interface that simplifies the shopping experience.",
    role: "Fullstack Developer - Developed both frontend and backend components, integrated third-party APIs, and optimized the user experience.",
    tech: ["React", "TypeScript", "Tailwind", "Nextjs", "Shadcn", "REST APIs"],
    github: "https://github.com/kingieX/ShopBuddy.ng",
    liveLink: "https://shop-buddy-ng.vercel.app/",
    image: "/images/shopbuddy.png",
    features: [
      "Product catalog and search",
      "Price comparison across vendors",
      "Smart product recommendations",
      "Shopping cart and wishlist",
      "User reviews and ratings",
      "Secure payment integration",
    ],
  },
  {
    id: "timeless-planner-v2",
    title: "Timeless Planner v2",
    shortDescription:
      "TimelessPlanner is your ultimate event planning companion, designed to help you create unforgettable experiences with minimal effort",
    fullDescription:
      "Timeless Planner is a task management application designed to help users organize their tasks and manage time effectively. The app provides a clean and intuitive interface for creating, categorizing, and tracking tasks, along with features like recurring tasks and progress tracking.",
    problem:
      "People struggle to stay organized and manage their time effectively. Traditional planners lack flexibility and modern task management tools are often too complex.",
    solution:
      "Developed a clean, intuitive task management app with React that balances simplicity with powerful features like recurring tasks, categories, priority levels, and progress tracking.",
    role: "Frontend Developer - Designed and implemented the user interface, integrated backend APIs, and optimized performance.",
    tech: ["React", "TypeScript", "Nextjs", "Tailwind CSS", "shadcn-ui"],
    github: "https://github.com/kingieX/timeless-planner-v2",
    liveLink: "https://timeless-planner-v2.vercel.app/",
    image: "/images/timelessplanner.png",
    features: [
      "Task creation and categorization",
      "Recurring tasks and reminders",
      "Priority levels and deadlines",
      "Progress tracking and statistics",
      "Clean, responsive design",
      "User authentication and profiles",
    ],
  },
];
