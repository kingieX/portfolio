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
  image: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 'biteswift',
    title: 'BiteSwift',
    shortDescription: 'A modern restaurant and food ordering web application',
    fullDescription: 'BiteSwift is a comprehensive food ordering platform that connects customers with restaurants. Built with modern web technologies, it provides a seamless ordering experience with real-time updates and intuitive UI.',
    problem: 'Traditional restaurant ordering systems are often clunky and provide poor user experience. Customers need a fast, intuitive way to browse menus, customize orders, and track delivery.',
    solution: 'Built a responsive web application with React and Next.js featuring real-time order tracking, advanced filtering, personalized recommendations, and a smooth checkout process.',
    role: 'Full-Stack Developer - Designed and implemented the frontend UI/UX, integrated backend APIs, and optimized performance.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/kingieX/BiteSwift',
    image: 'https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG9yZGVyaW5nJTIwYXBwfGVufDF8fHx8MTc2NDQzNTY2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Real-time order tracking',
      'Advanced menu filtering and search',
      'Responsive design for all devices',
      'Secure checkout process',
      'User authentication and profiles',
      'Order history and favorites'
    ]
  },
  {
    id: 'konvey-extension',
    title: 'Konvey Extension',
    shortDescription: 'Chrome extension for web automation and enhancement',
    fullDescription: 'Konvey is a powerful Chrome extension that enhances browsing productivity through intelligent automation and web enhancements. It provides users with tools to streamline repetitive tasks and improve their web experience.',
    problem: 'Web users often perform repetitive tasks that consume time and reduce productivity. Manual data entry, form filling, and navigation can be tedious.',
    solution: 'Developed a Chrome extension using vanilla JavaScript and browser APIs that automates common web tasks, provides shortcuts, and enhances page functionality with custom features.',
    role: 'Extension Developer - Architected the extension structure, implemented core features, and ensured cross-browser compatibility.',
    tech: ['JavaScript', 'Chrome APIs', 'HTML', 'CSS'],
    github: 'https://github.com/kingieX/Konvey-Extension',
    image: 'https://images.unsplash.com/photo-1662027067763-770376e710f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBicm93c2VyJTIwZXh0ZW5zaW9ufGVufDF8fHx8MTc2NDM0ODA3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Automated form filling',
      'Custom keyboard shortcuts',
      'Page enhancement tools',
      'Data extraction capabilities',
      'Privacy-focused design',
      'Lightweight and fast'
    ]
  },
  {
    id: 'shopbuddy-ng',
    title: 'ShopBuddy.ng',
    shortDescription: 'E-commerce platform and shopping assistant',
    fullDescription: 'ShopBuddy.ng is an intelligent shopping platform that helps users discover products, compare prices, and make informed purchasing decisions. The platform combines e-commerce functionality with smart recommendations.',
    problem: 'Online shoppers struggle to find the best deals and compare products across multiple platforms. They need a centralized solution for smart shopping.',
    solution: 'Created a React-based e-commerce platform with price comparison, product recommendations, and a user-friendly interface that simplifies the shopping experience.',
    role: 'Frontend Developer - Built the user interface, implemented product catalog, and integrated third-party APIs for price comparison.',
    tech: ['React', 'JavaScript', 'CSS', 'REST APIs'],
    github: 'https://github.com/kingieX/ShopBuddy.ng',
    image: 'https://images.unsplash.com/photo-1763872011479-aa293bf083a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwc2hvcHBpbmclMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDQzNTY2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Product catalog and search',
      'Price comparison across vendors',
      'Smart product recommendations',
      'Shopping cart and wishlist',
      'User reviews and ratings',
      'Secure payment integration'
    ]
  },
  {
    id: 'timeless-planner-v2',
    title: 'Timeless Planner v2',
    shortDescription: 'Personal productivity and task management application',
    fullDescription: 'Timeless Planner v2 is a comprehensive productivity tool that helps users organize tasks, set goals, and track progress. With an intuitive interface and powerful features, it makes personal organization effortless.',
    problem: 'People struggle to stay organized and manage their time effectively. Traditional planners lack flexibility and modern task management tools are often too complex.',
    solution: 'Developed a clean, intuitive task management app with React that balances simplicity with powerful features like recurring tasks, categories, priority levels, and progress tracking.',
    role: 'Full-Stack Developer - Designed the complete application architecture, UI/UX, and implemented all features from planning to deployment.',
    tech: ['React', 'JavaScript', 'Local Storage', 'CSS'],
    github: 'https://github.com/kingieX/Timeless-Planner-v2',
    image: 'https://images.unsplash.com/photo-1654931799020-ce7cf3f4a2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFubmVyJTIwcHJvZHVjdGl2aXR5JTIwYXBwfGVufDF8fHx8MTc2NDQzNTY2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Task creation and management',
      'Priority levels and categories',
      'Recurring tasks',
      'Progress tracking and statistics',
      'Calendar integration',
      'Clean, distraction-free interface'
    ]
  }
];
