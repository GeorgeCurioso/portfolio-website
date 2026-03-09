import {
  finance,
  data,
  machine,
  ai,
  css,
  git,
  html,
  aws,
  python,
  r,
  spark,
  sql,
  anaconda,
  telus,
  gnp,
  mask,
  nomad,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: data,
  },
  {
    title: "AI Engineer",
    icon: ai,
  },
  {
    title: "Machine Learning Specialist",
    icon: machine,
  },
  {
    title: "Financial Data Analyst",
    icon: finance,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Apache Spark",
    icon: spark,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Anaconda",
    icon: anaconda,
  },
];

const experiences = [
  {
    title: "Online Data Analyst",
    company_name: "Telus International",
    icon: telus,
    iconBg: "#f4f3f9",
    date: "Nov 2023 - Present",
    points: [
      "Conducted comprehensive data analysis to extract actionable insights and inform business decisions",
      "Monitored online platform performance metrics to identify trends and areas for improvement",
      "Generated clear and concise reports and visualizations to communicate key findings to stakeholders",
      "Identified and implemented process improvements to enhance efficiency and effectiveness of data analysis workflows",
    ],
  },
  {
    title: "Insurance Agent",
    company_name: "GNP Seguros",
    icon: gnp,
    iconBg: "#ffffff",
    date: "Jun 2023 - Dec 2023",
    points: [
      "Provided personalized insurance solutions to address individual client requirements effectively",
      "Demonstrated expertise in sales and marketing strategies to meet sales objectives and generate leads",
      "Conducted thorough analysis to evaluate risks and determine appropriate insurance coverage for clients",
      "Ensured adherence to industry regulations and ethical standards in all business dealings",
    ],
  },
];

const testimonials = [
  {
    certification:
      "SQL Basics for Data Science",
    company: "University of California",
    month: "April",
    year: "2024",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/66/4d1f6067b511e599c247e28e57110c/Logo-B-for-Coursera.png?auto=format%2Ccompress&dpr=1&w=180&h=180",
  },
  {
    certification:
      "Data Analysis Fundamentals with Excel",
    company: "Microsoft",
    month: "February",
    year: "2024",
    image: "https://static-00.iconduck.com/assets.00/microsoft-icon-2048x2048-xtoxrveo.png",
  },
  {
    certification:
      "Introduction to AI with Python",
    company: "Domestika",
    month: "January",
    year: "2024",
    image: "https://seeklogo.com/images/D/domestika-logo-010C51BB5B-seeklogo.com.png",
  },
  {
    certification:
      "Google Data Analytics",
    company: "Google",
    month: "April",
    year: "2023",
    image: "https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png",
  },
  {
    certification:
      "Cloud Practitioner",
    company: "Amazon Web Services",
    month: "January",
    year: "2023",
    image: "https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-File.png",
  },
];

const projects = [
  {
    name: "Neural Network for Safety",
    description:
      "Mask detection model using TensorFlow and Keras, exploring advanced techniques such as data augmentation and transfer learning with MobileNet V2",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "neural networks",
        color: "pink-text-gradient",
      },
    ],
    image: mask,
    source_code_link: "https://www.kaggle.com/code/jorgesamuelyanas/mask-detection-neural-network-for-safety",
  },
  {
    name: "The nomad disease?",
    description:
      "Created the Nomad's Cost of Living Map on Tableau using Nomad List data, analyzing income disparity and happiness globally and in the Americas",
    tags: [
      {
        name: "data-visualization",
        color: "blue-text-gradient",
      },
      {
        name: "data-analysis",
        color: "green-text-gradient",
      },
      {
        name: "data-cleaning",
        color: "pink-text-gradient",
      },
    ],
    image: nomad,
    source_code_link: "https://www.kaggle.com/code/jorgesamuelyanas/the-nomad-disease/notebook",
  },
];

export { services, technologies, experiences, testimonials, projects };
