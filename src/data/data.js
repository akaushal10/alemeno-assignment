export const courses = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "1.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      { id: 101, name: "Alice Johnson", email: "alice@example.com" },
      { id: 102, name: "Bob Smith", email: "bob@example.com" },
    ],
  },
  {
    id: 2,
    name: "Python for Data Science",
    instructor: "Jane Doe",
    description:
      "Master Python for data science applications, including Pandas and NumPy.",
    enrollmentStatus: "Open",
    thumbnail: "2.png",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Python",
        content: "Python basics, syntax, and data structures.",
      },
      {
        week: 2,
        topic: "Data Analysis with Pandas",
        content: "Working with Pandas for data manipulation and analysis.",
      },
    ],
    students: [
      { id: 103, name: "Charlie Brown", email: "charlie@example.com" },
      { id: 115, name: "Steve Jobs", email: "steve@example.com" },
      { id: 104, name: "Diana Ross", email: "diana@example.com" },
    ],
  },
  {
    id: 3,
    name: "Full-Stack Web Development",
    instructor: "Michael Smith",
    description:
      "Learn front-end and back-end development using modern web technologies.",
    enrollmentStatus: "In Progress",
    thumbnail: "3.png",
    duration: "12 weeks",
    schedule: "Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic HTML, CSS, JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Web Development",
        content: "Overview of front-end and back-end technologies.",
      },
      {
        week: 2,
        topic: "Building Responsive Websites",
        content: "Using CSS frameworks for responsive design.",
      },
    ],
    students: [
      { id: 105, name: "Emma Watson", email: "emma@example.com" },
      { id: 106, name: "Liam Neeson", email: "liam@example.com" },
      { id: 108, name: "James Franco", email: "james@example.com" },
    ],
  },
  {
    id: 4,
    name: "Machine Learning Basics",
    instructor: "Sarah Lee",
    description:
      "Understand the fundamentals of machine learning and build your own models.",
    enrollmentStatus: "Open",
    thumbnail: "4.png",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge", "Statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Supervised vs unsupervised learning.",
      },
      {
        week: 2,
        topic: "Linear Regression",
        content: "Building and evaluating linear models.",
      },
    ],
    students: [{ id: 107, name: "Sophia Turner", email: "sophia@example.com" }],
  },
  {
    id: 5,
    name: "Cybersecurity Fundamentals",
    instructor: "David Miller",
    description: "Learn how to protect systems and data from cyber threats.",
    enrollmentStatus: "Closed",
    thumbnail: "5.png",
    duration: "8 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "Online",
    prerequisites: ["Basic networking knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content: "Threats, vulnerabilities, and risk assessment.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Firewall configuration and secure connections.",
      },
    ],
    students: [
      { id: 109, name: "Olivia Davis", email: "olivia@example.com" },
      { id: 110, name: "Chris Evans", email: "chris@example.com" },
    ],
  },
  {
    id: 6,
    name: "Deep Learning with TensorFlow",
    instructor: "Angela Yu",
    description:
      "A hands-on guide to deep learning using TensorFlow and Keras.",
    enrollmentStatus: "Open",
    thumbnail: "6.png",
    duration: "12 weeks",
    schedule: "Mondays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Python", "Machine Learning Basics"],
    syllabus: [
      {
        week: 1,
        topic: "Neural Networks",
        content: "Understanding perceptrons and activation functions.",
      },
      {
        week: 2,
        topic: "Convolutional Neural Networks",
        content: "Using CNNs for image classification.",
      },
    ],
    students: [
      { id: 111, name: "Robert Downey", email: "robert@example.com" },
      { id: 112, name: "Scarlett Johansson", email: "scarlett@example.com" },
    ],
  },
  {
    id: 7,
    name: "Blockchain and Cryptocurrency",
    instructor: "Vitalik Buterin",
    description:
      "An introduction to blockchain technology and cryptocurrencies.",
    enrollmentStatus: "Closed",
    thumbnail: "7.png",
    duration: "8 weeks",
    schedule: "Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic Cryptography"],
    syllabus: [
      {
        week: 1,
        topic: "Blockchain Basics",
        content: "How blockchain works and its applications.",
      },
      {
        week: 2,
        topic: "Smart Contracts",
        content: "Building decentralized applications (DApps).",
      },
    ],
    students: [
      { id: 113, name: "Elon Musk", email: "elon@example.com" },
      { id: 115, name: "Steve Jobs", email: "steve@example.com" },
      { id: 116, name: "Bill Gates", email: "bill@example.com" },
      { id: 109, name: "Olivia Davis", email: "olivia@example.com" },
      { id: 110, name: "Chris Evans", email: "chris@example.com" },
      { id: 108, name: "James Franco", email: "james@example.com" },
      { id: 114, name: "Mark Zuckerberg", email: "mark@example.com" },
    ],
  },
  {
    id: 8,
    name: "Data Visualization with Tableau",
    instructor: "Ben Shneiderman",
    description:
      "Create stunning visualizations using Tableau for data analysis.",
    enrollmentStatus: "Open",
    thumbnail: "8.png",
    duration: "6 weeks",
    schedule: "Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic Data Analysis"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Tableau",
        content: "Connecting to data sources and creating charts.",
      },
      {
        week: 2,
        topic: "Advanced Dashboards",
        content: "Building interactive dashboards for analytics.",
      },
    ],
    students: [
      { id: 108, name: "James Franco", email: "james@example.com" },
      { id: 115, name: "Steve Jobs", email: "steve@example.com" },
      { id: 116, name: "Bill Gates", email: "bill@example.com" },
    ],
  },
];

// [
//   "Introduction to React Native",
//   "Python for Data Science",
//   "Full-Stack Web Development",
//   "Machine Learning Basics",
//   "Cybersecurity Fundamentals",
//   "Deep Learning with TensorFlow",
//   "Blockchain and Cryptocurrency",
//   "Data Visualization with Tableau",
// ];
