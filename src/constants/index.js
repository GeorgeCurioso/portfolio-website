// ===============================
// ASSETS
// ===============================

import {
  finance, data, machine, ai, css, git, html, aws, python, r,
  spark, sql, anaconda, telus, gnp, mask, nomad, uc_davis, 
  microsoft, domestika, google, aws_logo,
} from "../assets";

// ===============================
// NAVIGATION
// ===============================

export const navLinks = Object.freeze([
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
]);

// ===============================
// SERVICES
// ===============================

export const services = Object.freeze([
  {
    title: "Financial Data Science",
    icon: data,
  },
  {
    title: "Quantitative Analysis",
    icon: ai,
  },
  {
    title: "Machine Learning",
    icon: machine,
  },
  {
    title: "Financial Engineering",
    icon: finance,
  },
]);

// ===============================
// TECHNOLOGIES
// ===============================

export const technologies = Object.freeze([
  { name: "Python", icon: python },
  { name: "AWS", icon: aws },
  { name: "Apache Spark", icon: spark },
  { name: "SQL", icon: sql },
  { name: "R", icon: r },
  { name: "Git", icon: git },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Anaconda", icon: anaconda },
]);

// ===============================
// EXPERIENCE
// ===============================

export const experiences = Object.freeze([
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
]);

// ===============================
// CERTIFICATIONS
// ===============================

export const testimonials = Object.freeze([
  {
    certification: "SQL Basics for Data Science",
    company: "University of California",
    month: "April",
    year: "2024",
    image: uc_davis,
  },
  {
    certification: "Data Analysis Fundamentals with Excel",
    company: "Microsoft",
    month: "February",
    year: "2024",
    image: microsoft,
  },
  {
    certification: "Introduction to AI with Python",
    company: "Domestika",
    month: "January",
    year: "2024",
    image: domestika,
  },
  {
    certification: "Google Data Analytics",
    company: "Google",
    month: "April",
    year: "2023",
    image: google,
  },
  {
    certification: "Cloud Practitioner",
    company: "Amazon Web Services",
    month: "January",
    year: "2023",
    image: aws_logo,
  },
]);

// ===============================
// PROJECTS
// ===============================

export const projects = Object.freeze([
  {
    name: "Neural Network for Safety",
    description:
      "Mask detection model using TensorFlow and Keras, exploring advanced techniques such as data augmentation and transfer learning with MobileNet V2",
    tags: [
      { name: "machine-learning", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "neural networks", color: "pink-text-gradient" },
    ],
    image: mask,
    source_code_link:
      "https://www.kaggle.com/code/jorgesamuelyanas/mask-detection-neural-network-for-safety",
  },
  {
    name: "The nomad disease?",
    description:
      "Created the Nomad's Cost of Living Map on Tableau using Nomad List data, analyzing income disparity and happiness globally and in the Americas",
    tags: [
      { name: "data-visualization", color: "blue-text-gradient" },
      { name: "data-analysis", color: "green-text-gradient" },
      { name: "data-cleaning", color: "pink-text-gradient" },
    ],
    image: nomad,
    source_code_link:
      "https://www.kaggle.com/code/jorgesamuelyanas/the-nomad-disease/notebook",
  },
]);