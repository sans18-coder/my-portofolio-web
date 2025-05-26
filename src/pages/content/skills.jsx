import React from "react";
import {
  Code2, // For Programming Languages
  ServerCog, // For Backend Frameworks
  AppWindow, // For Frontend Frameworks
  Brain, // For Machine Learning Tools
  Table, // For Data Analysis Tools
  FileText as FileTextIcon, // For Microsoft Office (Lucide has FileText)
  Languages as LanguagesIcon, // For Languages (Lucide has Languages)
  Star, // For proficiency rating
  Cpu, // For the main section icon
} from "lucide-react";

// Helper component to display proficiency stars
// Helper component to display proficiency stars with simplified levels
const ProficiencyStars = ({ level }) => {
  const totalStars = 5;
  let filledStars = 0;

  // Determine the number of filled stars based on the simplified level
  switch (level.toLowerCase()) {
    case "native":
      filledStars = 5;
      break;
    case "advanced":
      filledStars = 4;
      break;
    case "intermediate":
      filledStars = 3;
      break;
    case "beginner":
      filledStars = 2; // Using 2 stars for beginner to show some basic knowledge
      break;
    default:
      filledStars = 0; // Default to 0 if level is not recognized
  }

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={`mr-1 ${
            i < filledStars
              ? "fill-yellow-400 text-yellow-500"
              : "fill-gray-300 text-gray-400 dark:fill-gray-600 dark:text-gray-500"
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 capitalize">
        {level}
      </span>
    </div>
  );
};

// Data for skills, with levels updated to "Beginner", "Intermediate", or "Advanced"
const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code2 size={28} className="text-blue-600 dark:text-blue-400" />,
    items: [
      { name: "PHP", level: "Advanced", logo: "🐘" /* PHP elephant emoji */ }, // Mahir -> Advanced
      {
        name: "Python",
        level: "Advanced",
        logo: "🐍" /* Python snake emoji */,
      },
      {
        name: "JavaScript",
        level: "Advanced",
        logo: "JS" /* Simple text logo */,
      },
    ],
  },
  {
    category: "Backend Frameworks",
    icon: (
      <ServerCog size={28} className="text-green-600 dark:text-green-400" />
    ),
    items: [
      { name: "Laravel", level: "Advanced", logo: "Lv" }, // Mahir -> Advanced
      { name: "CodeIgniter", level: "Intermediate", logo: "CI" }, // Menengah -> Intermediate
      { name: "Node.js", level: "Intermediate", logo: "NJS" }, // Menengah Atas -> Advanced
      { name: "Flask", level: "Intermediate", logo: "Flk" }, // Menengah -> Intermediate
    ],
  },
  {
    category: "Frontend Frameworks",
    icon: (
      <AppWindow size={28} className="text-purple-600 dark:text-purple-400" />
    ),
    items: [
      { name: "Bootstrap", level: "Intermediate", logo: "B" },
      { name: "Tailwind CSS", level: "Intermediate", logo: "Tw" },
      { name: "React.js", level: "Intermediate", logo: "Rjs" },
    ],
  },
  {
    category: "Machine Learning Tools",
    icon: <Brain size={28} className="text-red-600 dark:text-red-400" />,
    items: [
      { name: "TensorFlow", level: "Intermediate", logo: "TF" }, // Menengah -> Intermediate
      { name: "Scikit-learn", level: "Intermediate", logo: "SKL" }, // Menengah -> Intermediate
      { name: "Ultralytics (YOLO)", level: "Intermediate", logo: "YOLO" }, // Menengah -> Intermediate
      {
        name: "Hugging Face",
        level: "Intermediate", // Menengah -> Intermediate
        logo: "🤗" /* Hugging Face emoji */,
      },
      { name: "Roboflow", level: "Intermediate", logo: "RF" }, // Menengah -> Intermediate
    ],
  },
  {
    category: "Data Analysis Tools",
    icon: <Table size={28} className="text-yellow-600 dark:text-yellow-400" />,
    items: [
      { name: "Excel", level: "Intermediate", logo: "XLS" }, // Menengah -> Intermediate
      { name: "Pandas", level: "Intermediate", logo: "Pd" }, // Menengah Atas -> Advanced
      { name: "Matplotlib", level: "Intermediate", logo: "MPL" }, // Menengah -> Intermediate
    ],
  },
  {
    category: "Microsoft Office",
    icon: <FileTextIcon size={28} className="text-sky-600 dark:text-sky-400" />,
    items: [
      { name: "Word", level: "Advanced", logo: "Doc" }, // Mahir -> Advanced
      { name: "Excel", level: "Intermediate", logo: "XLS" }, // Menengah -> Intermediate
      { name: "PowerPoint", level: "Intermediate", logo: "PPT" }, // Menengah -> Intermediate
    ],
  },
  {
    category: "Languages",
    icon: (
      <LanguagesIcon
        size={28}
        className="text-orange-600 dark:text-orange-400"
      />
    ),
    items: [
      { name: "Indonesian", level: "Native", logo: "ID" }, // Native -> Advanced (as it's the highest proficiency)
      { name: "English (passive)", level: "Intermediate", logo: "EN" }, // Menengah -> Intermediate
    ],
  },
];

const Skills = () => {
  return (
    // Main container for the skills page
    <div className="w-full bg-white text-black dark:bg-gray-900 dark:text-white font-inter p-4 md:p-8 selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Increased max-width for wider content area */}
        {/* Section Title: Keahlian */}
        <div className="w-full mt-10 mb-10 md:mb-16">
          {" "}
          {/* Increased bottom margin */}
          <div className="flex items-center space-x-4">
            <Cpu size={48} className="text-black dark:text-white" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
              My Skills
            </h1>
          </div>
        </div>
        {/* Grid container for skill categories */}
        <div className="space-y-12">
          {" "}
          {/* Increased space between category cards */}
          {skillsData.map((categoryObj, catIndex) => (
            // Card for each skill category
            <div
              key={catIndex}
              className="p-6 md:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                {/* Dynamically clone icon and add margin */}
                {React.cloneElement(categoryObj.icon, {
                  className: `${categoryObj.icon.props.className} mr-3`,
                })}
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
                  {categoryObj.category}
                </h2>
              </div>
              {/* Grid for individual skills within a category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {" "}
                {/* Added lg:grid-cols-3 for larger screens */}
                {categoryObj.items.map((skill, skillIndex) => (
                  // Card for each individual skill
                  <div
                    key={skillIndex}
                    className="p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-3">
                      {/* Skill Logo Placeholder */}
                      <span className="flex items-center justify-center w-10 h-10 mr-4 text-lg font-bold bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full shadow-sm">
                        {skill.logo}
                      </span>
                      {/* Skill Name */}
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    {/* Proficiency Stars */}
                    <div>
                      <ProficiencyStars level={skill.level} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
