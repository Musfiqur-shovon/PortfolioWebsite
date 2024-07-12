import hms from "../assests/images/projectImage/hms.jpg";
import portfolio from "../assests/images/projectImage/portfolio.jpg";
import nlp from "../assests/images/projectImage/nlp.png";
import esite from "../assests/images/projectImage/esite.jpg";
import bmi from "../assests/images/projectImage/bmi.png";
import todo from "../assests/images/projectImage/todo.png";

export const projects = [
  {
    title: "Portfolio Website",
    category: "Web Project",
    technology: "React, HTML, CSS, Boostrap",
    description:
      "Developed a sleek and responsive portfolio website using React, HTML, CSS, and Bootstrap to showcase projects and skills effectively",
    imageLink: portfolio,
    projectLink: "",
    completed: true,
  },
  {
    title: "Hospital Management",
    category: "Web Project",
    technology: "Html, CSS, JavaScript, PHP, MySql",
    description:
      "Created a comprehensive hospital management system to streamline administrative and patient management processes.Patients can book doctor appoinment based on their prefferable time",
    imageLink: hms,
    projectLink: "",
    completed: true,
  },
  {
    title: "Spam Text Classification",
    category: "Machine Learing Project",
    technology: "Machine Learning, NLP, Django",
    description:
      "Implemented a spam text classification system using Machine Learning and NLP with word embedding, vector tokenization, AI models, and a user-friendly interface built with Django",
    imageLink: nlp,
    projectLink: "",
    completed: true,
  },
  {
    title: "E-Commerce",
    category: "ERP Software",
    technology: "React, Node, Express, MongoDB",
    description:
      "Built an E-commerce platform using React for frontend, Node.js and Express.js for backend, and MongoDB for database management",
    imageLink: esite,
    projectLink: "",
    completed: false,
  },
  {
    title: "BMI Calculator",
    category: "Android APP",
    technology: "Android Studio, JAVA",
    description:
      "Developed a BMI calculator app using Android Studio and Java for efficient health tracking",
    imageLink: bmi,
    projectLink: "",
    completed: true,
  },
  {
    title: "Daily TODO",
    category: "WEB APP",
    technology: "React, Node, Express, MongoDB",
    description:
      "Created a daily TODO application using React for the frontend and Node.js, Express.js & MongoDB for backend services",
    imageLink: todo,
    projectLink: "",
    completed: true,
  },
];
