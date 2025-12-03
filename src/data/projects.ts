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
    shortDescription: "Chrome extension for web automation and enhancement",
    fullDescription:
      "Konvey is a powerful Chrome extension that enhances browsing productivity through intelligent automation and web enhancements. It provides users with tools to streamline repetitive tasks and improve their web experience.",
    problem:
      "Web users often perform repetitive tasks that consume time and reduce productivity. Manual data entry, form filling, and navigation can be tedious.",
    solution:
      "Developed a Chrome extension using vanilla JavaScript and browser APIs that automates common web tasks, provides shortcuts, and enhances page functionality with custom features.",
    role: "Extension Developer - Architected the extension structure, implemented core features, and ensured cross-browser compatibility.",
    tech: ["JavaScript", "Chrome APIs", "HTML", "CSS"],
    github: "https://github.com/kingieX/Konvey-Extension",
    liveLink: "",
    image:
      "https://images.unsplash.com/photo-1662027067763-770376e710f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBicm93c2VyJTIwZXh0ZW5zaW9ufGVufDF8fHx8MTc2NDM0ODA3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Automated form filling",
      "Custom keyboard shortcuts",
      "Page enhancement tools",
      "Data extraction capabilities",
      "Privacy-focused design",
      "Lightweight and fast",
    ],
  },
  {
    id: "shopbuddy-ng",
    title: "ShopBuddy.ng",
    shortDescription: "E-commerce platform and shopping assistant",
    fullDescription:
      "ShopBuddy.ng is an intelligent shopping platform that helps users discover products, compare prices, and make informed purchasing decisions. The platform combines e-commerce functionality with smart recommendations.",
    problem:
      "Online shoppers struggle to find the best deals and compare products across multiple platforms. They need a centralized solution for smart shopping.",
    solution:
      "Created a React-based e-commerce platform with price comparison, product recommendations, and a user-friendly interface that simplifies the shopping experience.",
    role: "Frontend Developer - Built the user interface, implemented product catalog, and integrated third-party APIs for price comparison.",
    tech: ["React", "JavaScript", "CSS", "REST APIs"],
    github: "https://github.com/kingieX/ShopBuddy.ng",
    liveLink: "",
    image:
      "https://images.unsplash.com/photo-1763872011479-aa293bf083a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwc2hvcHBpbmclMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDQzNTY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
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
    shortDescription: "Personal productivity and task management application",
    fullDescription:
      "Timeless Planner v2 is a comprehensive productivity tool that helps users organize tasks, set goals, and track progress. With an intuitive interface and powerful features, it makes personal organization effortless.",
    problem:
      "People struggle to stay organized and manage their time effectively. Traditional planners lack flexibility and modern task management tools are often too complex.",
    solution:
      "Developed a clean, intuitive task management app with React that balances simplicity with powerful features like recurring tasks, categories, priority levels, and progress tracking.",
    role: "Full-Stack Developer - Designed the complete application architecture, UI/UX, and implemented all features from planning to deployment.",
    tech: ["React", "JavaScript", "Local Storage", "CSS"],
    github: "https://github.com/kingieX/Timeless-Planner-v2",
    liveLink: "",
    image:
      "https://images.unsplash.com/photo-1654931799020-ce7cf3f4a2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFubmVyJTIwcHJvZHVjdGl2aXR5JTIwYXBwfGVufDF8fHx8MTc2NDQzNTY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Task creation and management",
      "Priority levels and categories",
      "Recurring tasks",
      "Progress tracking and statistics",
      "Calendar integration",
      "Clean, distraction-free interface",
    ],
  },
];
