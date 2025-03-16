// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shivam",
  middleName: "",
  lastName: "Jha",
  message: " I like Code. ",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/ivamshky",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/ivamshky/",
    },
    {
      image: "fa fa-envelope",
      url: "mailto:ivamshky1117@gmail.com",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/photo.jpeg"),
  imageSize: [350, 500],
  message:
    "I'm a Senior Software Engineer who loves building scalable systems and data pipelines. \
    I thrive on designing complex architectures, optimizing performance. Problem-solving is my passion, \
    and I enjoy tackling tough engineering challenges while continuously learning and improving.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "ivamshky", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Python", value: 70 },
    { name: "Golang", value: 65 },
    { name: "JavaScript", value: 60 },
    { name: "SQL", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "Docker", value: 50 },
    { name: "Kubernetes", value: 50 },
    { name: "Data Structures", value: 85 },
    { name: "System Design", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Feel free to email me at ",
  email: "ivamshky1117@gmail.com",
  linkedIn: "ivamshky"
};

const experiences = {
  show: true,
  heading: "Professional Experience",
  data: [
    {
      role: 'Senior Member of Technical Staff',// Here Add Company Name
      companylogo: require('../assets/img/orcl.jpg'),
      date: 'Sept 2024 - Present',
    },
    {
      role: 'Vice Precident (SDE3)',// Here Add Company Name
      companylogo: require('../assets/img/gs.png'),
      date: 'June 2021 - August 2024',
    },
    {
      role: 'Applications Developer',// Here Add Company Name
      companylogo: require('../assets/img/vmware.png'),
      date: 'July 2019 - March 2021',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/amiti.png'),
      date: 'November 2017 - July 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
