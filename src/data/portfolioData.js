export const personalInfo = {
  name: "Abdullah Hasan Mufid Fakhri",
  shortName: "Abdullah Fakhri",
  roles: [
    "UI/UX Designer",
    "Product Designer",
    "Front End Developer",
    "AI Design Engineer",
  ],
  bio: "I craft meaningful digital experiences that blend beautiful design with clean, performant code. Passionate about bridging the gap between user needs and technical excellence through thoughtful design and modern web technologies.",
  location: "Jakarta, Indonesia",
  university: "Brawijaya University",
  email: "abdullahfakhri17@gmail.com",
  social: {
    github: "https://github.com/abdullahfakhri",
    linkedin: "https://www.linkedin.com/in/abdullah-hasan-mufid-fakhri-21815b199/",
    instagram: "https://www.instagram.com/abdullahfakhri_?igsh=MThwaHZyN2RqbmVzdw%3D%3D&utm_source=qr",
    dribbble: "/coming-soon",
  },
};

export const skills = {
  design: [
    { name: "Figma", level: 95, icon: "figma" },
    { name: "Adobe XD", level: 88, icon: "xd" },
    { name: "UI/UX Design", level: 92, icon: "design" },
    { name: "Prototyping", level: 90, icon: "prototype" },
    { name: "Wireframing", level: 93, icon: "wireframe" },
    { name: "UX Research", level: 85, icon: "research" },
    { name: "UX Writing", level: 82, icon: "writing" },
  ],
  development: [
    { name: "React JS", level: 90, icon: "react" },
    { name: "Next.js", level: 85, icon: "next" },
    { name: "JavaScript", level: 88, icon: "js" },
    { name: "Tailwind CSS", level: 92, icon: "tailwind" },
    { name: "Vite", level: 87, icon: "vite" },
    { name: "React Native", level: 80, icon: "native" },
    { name: "Laravel", level: 75, icon: "laravel" },
    { name: "Python", level: 72, icon: "python" },
  ],
  database: [
    { name: "MySQL", level: 80, icon: "mysql" },
    { name: "PostgreSQL", level: 78, icon: "postgres" },
    { name: "REST API", level: 85, icon: "api" },
  ],
};

export const projects = [
  {
    id: 1,
    slug: "bacaanku",
    title: "BacaanKu",
    techstack: "Figma, UI/UX, Prototyping, Mobile App, Brand",
    category: "Mobile",
    year: "2025",
    role: "UI/UX Designer",
    timeline: "2 weeks",
    client: null,
    description:
      "A reading tracker and habit-building mobile app that helps users record the books they read, track progress, set goals, and build a more consistent reading routine.",
    image: "/assets/bacaanku.png",
    color: "#8b73e6",
    link: "https://www.figma.com/proto/Nj8Azo0ythQx0sVUH20NCz/BacaanKu-Abdullah-Hasan-Mufid-Fakhri--Project-?page-id=72%3A517&node-id=72-1041&starting-point-node-id=72%3A519",
    overview:
      "BacaanKu is a reading tracker and habit-building application that helps users record the books they read, track their reading progress, set personal goals, and develop a more consistent reading routine — created in response to Indonesia's low reading culture.",
    sections: [
      {
        title: "Get to know about BacaanKu",
        body: "BacaanKu is a reading tracker and habit-building app that helps users record the books they read, track progress, set personal goals, and build a more consistent reading routine. It was created in response to Indonesia's low reading culture — while adult literacy is high (92.8%), active reading interest is only 0.001%, about 1 in every 1,000 people, and students rank around 70th of 80 countries on PISA 2022.",
      },
      {
        title: "Examining the problem",
        body: "People struggle to stay consistent because they don't record their progress or goals, and there are very few local reading-tracker apps that are simple and easy to understand. Reading motivation is low without tracking, statistics, or reminders, and limited access to reading facilities pushes users toward digital platforms to support their literacy habits.",
      },
      {
        title: "The solutions we came up with",
        body: "A clean, minimalist UI suitable for users aged 17–45, with complete book-tracking features (want to read, currently reading, finished). Reading goals and progress tracking let users monitor their performance, a reading calendar helps them evaluate their habits, and reading statistics keep motivation high — all wrapped in a fun, lightweight experience that works even for beginners.",
      },
      {
        title: "Brand concept",
        body: "Developed as a modern, friendly digital literacy brand centered on calmness, consistency, and self-development. The tone is calm yet motivating, built around a soft purple core color symbolizing creativity, calmness, and focus. Clean, minimal, rounded UI and readable typography make it feel like a supportive 'digital reading companion' rather than just an app.",
      },
      {
        title: "User flow",
        body: "The user flow is designed to provide a simple, intuitive, and consistent reading experience — covering onboarding and registration, the home screen, searching and discovering books, book detail, the reading screen with bookmarks and notes, the library and wishlist, an optional purchase flow, and notes & highlights. Every step is crafted to minimize friction so users can reach their goals easily.",
        images: ["/assets/bacaanku-userflow.png"],
      },
      {
        title: "Moodboard",
        body: "The moodboard defines a visual direction that feels calm, modern, and comfortable for reading. Purple tones convey creativity, focus, and softness, while clean, minimalist references with ample white space and rounded shapes make the app feel light and approachable — like an intuitive, enjoyable personal digital library.",
        images: ["/assets/bacaanku-moodboard.png"],
      },
      {
        title: "Design system",
        body: "A consistent, readable, and scalable visual foundation. It defines a purple-led color system with neutral, success, warning, danger, and info states; a clear typographic hierarchy tuned for long-form reading comfort; a grid system for balanced, responsive layouts; multiple shadow levels for depth; and rounded, friendly components like book cards and reading lists — plus consistent logo usage.",
        images: ["/assets/bacaanku-designsystem-2.jpg", "/assets/bacaanku-designsystem-1.png"],
      },
      {
        title: "Low-fidelity",
        body: "Grayscale wireframes visualize the basic structure, user flow, and content hierarchy before detailed visual design — home, book detail, reading screen, text-display settings, bookmarks and notes, and the payment flow. Working in low fidelity keeps the focus on usability, flow consistency, and information clarity as a foundation for the high-fidelity stage.",
        images: ["/assets/bacaanku-lowfi.jpg"],
      },
      {
        title: "High-fidelity",
        body: "The final visual implementation applies the design system consistently across colors, typography, icons, grids, and components — home, search & book list, detail & reading screen, text-display settings, bookmarks/notes/highlights, and payment. Purple anchors the brand identity while generous margins keep the reading experience calm and focused.",
        images: ["/assets/bacaanku-hifi.jpg"],
      },
    ],
  },
  {
    id: 2,
    slug: "setirn",
    title: "Setir'n",
    techstack: "Figma, UI/UX, Prototyping, Mobile App, Brand",
    category: "Mobile",
    year: "2025",
    role: "UI/UX Designer",
    timeline: "2 weeks",
    client: null,
    description:
      "A vehicle rental app for cars and motorcycles — built so people with idle vehicles can rent them out, and renters can book quickly, clearly, and securely.",
    image: "/assets/setirn.png",
    color: "#387dc9",
    link: "https://www.figma.com/proto/f5q0BIvhZNnuCqdtDrdI6n/Setir-n--Project-?page-id=0%3A1&node-id=3219-1830&starting-point-node-id=3219%3A1830",
    overview:
      "Setir'n is an application that provides vehicle rental services for both cars and motorcycles. It was created out of the frustration of people who own extra vehicles but don't know what to do with them — instead of letting them sit idle in the garage, they can rent them out to those who need transportation.",
    sections: [
      {
        title: "Get to know about Setir'n",
        body: "Setir'n is an app that provides vehicle rental services, including both cars and motorcycles. It was created out of the frustration experienced by people who own extra vehicles but don't know what to do with them. Instead of letting these vehicles sit idle in the garage, it's better to rent them out to those in need of transportation.",
      },
      {
        title: "Examining the problem",
        body: "Users want an app that can process bookings quickly, clearly, and securely — but not everyone is familiar with current technology, especially older adults. Security in vehicle rental transactions can make users hesitant to proceed, and uncertainty about pricing and scheduling can lead to miscommunication or conflicts.",
      },
      {
        title: "The solutions we came up with",
        body: "Because the target users are teenagers aged 17 up to adults aged 45, the design style is clean and minimalist so it doesn't confuse less tech-savvy users. To secure transactions, the UI surfaces user verification and ratings so people can rent with peace of mind. Users can also book and set the schedule for the vehicle they want in real time — choosing the vehicle type and the area where they need it.",
      },
      {
        title: "Brand concept",
        body: "As a self-initiated project, Setir'n represents a conceptual mobility brand — modern, tech-driven, and friendly — focused on simplifying urban transportation through smart rental solutions. Its tone is playful yet professional, built around blue as the core color (trust, technology, reliability), with rounded shapes and smooth UI for a friendly visual impression. Target users are young professionals and city commuters aged 20–40 in metros like Jakarta, Bandung, and Surabaya.",
      },
      {
        title: "User flow",
        body: "The user flow is designed to be simple, intuitive, and consistent, letting users rent vehicles in just a few easy steps. It focuses on clarity, speed, and trust — ensuring users can navigate the process effortlessly for a smoother, more delightful rental experience.",
        images: ["/assets/setirn-userflow.png"],
      },
      {
        title: "Moodboard",
        body: "The moodboard establishes a clean, modern, and trustworthy visual direction that reflects Setir'n's identity as a smart and reliable vehicle rental app. It emphasizes simplicity, comfort, and user confidence through balanced colors and a clear visual hierarchy.",
        images: ["/assets/setirn-moodboard.png"],
      },
      {
        title: "Design system",
        body: "A consistent, scalable, and user-friendly visual foundation that keeps design harmony across all screens while maintaining the brand's modern, dynamic, and trustworthy personality. It defines color palettes, typography, logo usage, and interactive elements like buttons — with blue reinforcing reliability and confidence, and rounded shapes and balanced typography conveying approachability and simplicity.",
        images: ["/assets/setirn-designsystem-1.png", "/assets/setirn-designsystem-2.png"],
      },
      {
        title: "Low-fidelity",
        body: "Grayscale wireframes visualize the core structure and user flow before detailed design — defining layout hierarchy, navigation patterns, and key interactions to keep the experience simple, intuitive, and easy to navigate. Keeping this stage minimal prioritized usability and content placement and validated flow efficiency before high fidelity.",
        images: ["/assets/setirn-lowfi.png"],
      },
      {
        title: "High-fidelity",
        body: "The final visual implementation transforms the wireframes into a fully visualized, interactive interface — applying the brand identity, color palette, typography, and components from the design system for visual consistency across every screen. The goal is a clean, intuitive, engaging experience where users can browse, select, and rent vehicles with confidence.",
        images: ["/assets/setirn-hifi.png"],
      },
    ],
  },
  {
    id: 3,
    slug: "kalbe-dashboard",
    title: "Kalbe Dashboard Rebuild",
    techstack: "React (Vite), Tailwind CSS, JavaScript, HTML & CSS",
    category: "Web",
    year: "2025",
    role: "Front End Developer",
    timeline: "1 week",
    client: "Kalbe",
    description:
      "A rebuild of Kalbe's lab dashboard — a more modern, responsive interface that simplifies managing laboratory test parameter data.",
    image: "/assets/kalbe.jpg",
    color: "#43a047",
    link: "https://github.com/abdullahfakhri/mini_project_kalbe.git",
    overview:
      "In this project, I performed a rebuild of the previous Kalbe application design. The app simplifies the management of laboratory test parameter data with a more modern and responsive interface — updating the design, improving functionality, and enhancing the overall user experience so users can manage lab data without confusion.",
    sections: [
      {
        title: "Get to know about the project",
        body: "This is a rebuild of the previous Kalbe interface. On the main dashboard, users can view and manage the test parameters recorded in the system — each equipped with a unique code and a clear description that makes data easier to identify and manage. I updated the design to be more modern, improved its functionality, and enhanced the UX, giving the Kalbe application a cleaner look and more efficient navigation.",
      },
      {
        title: "Examining the problem",
        body: "The previous dashboard looked outdated and lacked a clear visual hierarchy, making it hard to quickly understand and manage laboratory parameter data. The layout wasn't optimized for usability, so simple tasks like editing or adding parameters took longer, and some features weren't intuitive — causing confusion for users juggling multiple data categories such as sample types, analysis methods, and parameters. The interface needed a more structured, modern design.",
      },
      {
        title: "The solutions we came up with",
        body: "I improved the table layout and action buttons (Edit/Delete) to make data management faster and clearer, and enhanced navigation with a well-organized sidebar so users can easily switch between modules like Request, Tracking Progress, Data History, and Master Data. I built a more responsive layout for consistent display across screen sizes, and simplified the user flow so viewing, editing, deleting, and searching parameters can all be done quickly without confusion.",
      },
    ],
  },
  {
    id: 4,
    slug: "wonocoyo",
    title: "Wonocoyo",
    techstack: "Figma, UI/UX, Prototyping, Brand",
    category: "Web",
    year: "2023",
    role: "UI/UX Designer",
    timeline: "4 months",
    client: null,
    description:
      "A tourism website for the Wonocoyo area, designed to showcase its beaches — like Pelang and Kili-Kili — to visitors planning a trip.",
    image: "/assets/wonocoyo.jpg",
    color: "#10b981",
    link: "https://www.figma.com/design/PZaI9D5km7nvbMJDZyDFC1/Metris-for-tourist?node-id=38-90701&t=mH4JaoBP0AD4volB-1",
    overview:
      "The Wonocoyo website is a real project to showcase tourism in the Wonocoyo area. It targets users who want to visit beaches in and around Wonocoyo — such as Pelang beach, Kili-Kili beach, and more.",
    sections: [
      {
        title: "Get to know about Wonocoyo",
        body: "The Wonocoyo website is a real project I worked on to show tourism in the Wonocoyo area. It targets users who want to visit beaches in the Wonocoyo area and its surroundings, such as Pelang beach, Kili-Kili beach, and others.",
      },
      {
        title: "Examining the problem",
        body: "Because this is a new tourism project, we were constrained by the ideas we wanted to implement for the website. There was no base UI or existing design to build on, so we had to create a basic concept for the UI/UX design of the Wonocoyo website from scratch.",
      },
      {
        title: "The solutions we came up with",
        body: "We made a simple UI and clearly explained the tourism the website offers, so there wasn't too much text to read. Eye-catching coloring was used so users could comfortably access the site, and we kept the features minimal so users wouldn't get confused while using it.",
      },
    ],
  },
  {
    id: 5,
    slug: "binausaha",
    title: "Binausaha.id",
    techstack: "Figma, UI/UX, Prototyping, Website, Brand",
    category: "Web",
    year: "2023",
    role: "UI/UX Designer",
    timeline: "4 months",
    client: "ANGIN",
    description:
      "An online-based training platform to build the capacity of rural Indonesian women entrepreneurs in the food & beverage, craft, and fashion sectors.",
    image: "/assets/binausaha.jpg",
    color: "#6aa84f",
    link: "https://www.figma.com/proto/cC5TmIhFg6cKIAo9eFa3lb/Magang-Binausaha-team-library?page-id=567%3A29&node-id=603-50&starting-point-node-id=603%3A50",
    overview:
      "Bina Usaha is an online-based training platform to increase the capacity of rural Indonesian entrepreneurs and advance the competitiveness of small and medium businesses through learning materials, access to networks, and business guidance consultations — delivered fully online.",
    sections: [
      {
        title: "Get to know about Binausaha.id",
        body: "Bina Usaha is an online-based training platform to increase the capacity of rural Indonesian entrepreneurs and advance the competitiveness of small and medium businesses through learning materials, network access, and business guidance consultations using online methods. It's an independent learning platform for women entrepreneurs across Indonesia working in the food & beverage, craft, and fashion sectors — with financial, marketing, and product-market fit materials accessible anytime, anywhere. Bina Usaha is brought to you by ANGIN, in collaboration with a consortium of Australian universities (Torrens, New England, RMIT, and Curtin) and supported by the Australian Department of Foreign Affairs and Trade (DFAT).",
      },
      {
        title: "Examining the problem",
        body: "Because this is a training website for rural Indonesian entrepreneurs — and more specifically the users are older adults who aren't familiar with app interfaces — it can be difficult for them to access an application. The website also had to be responsive, since the target audience is likely to access it more often from their smartphones.",
      },
      {
        title: "The solutions we came up with",
        body: "Create a UI design that's easy for the target users to understand, with eye-catching, bright coloring since the average users are older adults. Provide minimalist features so users don't have to deal with too many options that could confuse them. And keep the user flow clear and simple, so the points the binausaha.id website wants to convey come across briefly, concisely, and clearly.",
      },
    ],
  },
  {
    id: 6,
    slug: "coming-soon",
    title: "Coming Soon",
    comingSoon: true,
    lottie: "https://lottie.host/ba1d1fd5-b7d9-4764-8d7b-acb490af6c43/ex9SuLjnGE.lottie",
    techstack: "Something new is in the works",
    category: "New",
    year: "2026",
    role: null,
    timeline: null,
    client: null,
    description:
      "A new project is on the way — stay tuned. The next case study is currently in the works.",
    image: null,
    color: "#8b73e6",
    link: null,
  },
];

export const experience = [
  {
    role: "UI/UX Designer Intern",
    company: "WIZ",
    location: "Jakarta, Indonesia",
    period: "Apr 2026 – Present",
    current: true,
    points: [
      "Design UI predominantly for mobile web pages — from wireframing to high-fidelity design across various industries.",
      "Collaborate with other divisions including Developers, Project Managers, and the Graphic Design team to deliver working designs.",
      "Perform quality control once a developed web page has gone live.",
    ],
  },
  {
    role: "Fullstack Developer & UI/UX Designer",
    company: "PT. Talenta Sembilan",
    location: "Jakarta, Indonesia",
    period: "Sept 2025 – Jan 2026",
    current: false,
    points: [
      "Built and maintained websites with React JS and Next.js, ensuring cross-device and cross-browser compatibility.",
      "Developed server-side logic and RESTful APIs using Laravel and MySQL.",
      "Designed the user interface and experience later used to build the company website.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Freelance — Upwork",
    location: "Remote",
    period: "Jan 2024 – Present",
    current: true,
    points: [
      "Create UI/UX designs based on client needs — for companies, individuals, and more.",
      "Redesign existing features on clients' websites to improve usability and visual appeal.",
    ],
  },
  {
    role: "UI/UX Designer Intern",
    company: "PT. Angin Utama Jaya",
    location: "Jakarta, Indonesia",
    period: "Sept 2021 – Dec 2021",
    current: false,
    points: [
      "Created the UI concept and user flow for Binausaha.id, a platform to train women entrepreneurs across Indonesia, improving accessibility and engagement.",
      "Redesigned the PT Angin Utama Jaya website, enhancing visual appeal and navigation for a more intuitive experience.",
      "Conducted user research and usability testing, improving overall user satisfaction by 20%.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor's Degree",
    major: "Information Systems",
    institution: "Brawijaya University",
    location: "Malang, Indonesia",
    period: "2022 – 2025",
    description:
      "GPA 3.39/4.00. Coursework in web programming, data warehouse, and UX evaluation & design. Thesis on teacher acceptance of a digital learning advisory system.",
  },
  {
    degree: "Associate's Degree",
    major: "Information & Computer Technology",
    institution: "Brawijaya University",
    location: "Malang, Indonesia",
    period: "2019 – 2022",
    description:
      "GPA 3.52/4.00. Coursework in web programming, web-based system development, front-end programming, and UI/UX design implementation.",
  },
];

export const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Designing intuitive, accessible interfaces — from research and wireframes to polished high-fidelity prototypes.",
    skills: ["UX Research", "Wireframing", "Prototyping", "Figma", "Adobe XD", "UX Writing"],
    color: "#8b73e6",
  },
  {
    id: 2,
    title: "Product Design",
    description:
      "End-to-end product thinking that turns user needs and business goals into cohesive, scalable design systems.",
    skills: ["User Journey", "Design Systems", "Usability Testing", "Personas", "Information Architecture"],
    color: "#6366f1",
  },
  {
    id: 3,
    title: "Front End Development",
    description:
      "Building fast, responsive, cross-browser web apps with modern frameworks and clean, maintainable code.",
    skills: ["React JS", "Next.js", "Tailwind CSS", "JavaScript", "Vite", "React Native"],
    color: "#3b82f6",
  },
  {
    id: 4,
    title: "AI Design Engineering",
    description:
      "Leveraging AI tools to accelerate design and development workflows and craft smarter user experiences.",
    skills: ["AI Tools", "Design Tokens", "Automation", "Prompting", "Rapid Prototyping"],
    color: "#06b6d4",
  },
];
