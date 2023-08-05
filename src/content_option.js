const logotext = "Jeffrey Ding";
const meta = {
  title: "Jeffrey Ding",
  description:
    "I’m Jeffrey Ding, a Software Engineer with experience in full stack development and Machine Learning",
};

const introdata = {
  title: "I’m Jeffrey Ding",
  animated_list: [
    "I love all things tech",
    "I'm learning Machine Learning and AI",
    "I'm an avid musician in my free time",
  ],
  animated: {
    first: "I love all things tech",
    second: "I'm learning Machine Learning and AI",
    third: "I'm an avid musician",
  },
  description:
    "I'm a recent-grad software engineer from Harvard, with a background in full-stack development, Machine Learning, and consulting.",
  your_img_url: "react-portfoliosrcassetsimagespf.jpg",
};

const dataabout = {
  title: "More about me",
  aboutme: [
    "Thanks for stopping by my page! My name is Jeffrey Ding, and I'm a recent-grad from Harvard with a passion for all things Tech. \
    My technical background is in full-stack development and Machine Learning, however I also have experience in \
    business development and consulting. I am currently finishing a 6-month Machine Learning bootcamp and actively \
    looking for Software Engineering and Machine Learning roles!",
    "Outside of work, I've been a lifelong musician, enjoying singing, piano, and guitar in my free time. \
    Last summer, I spent 80+ days traveling to 20+ countries, performing with my acapella group (The Harvard Krokodiloes) for \
    audiences around the world. Outside of my musical endeavors, I'm also an avid tennis player, photographer, and love cooking!"
  ],
};

const educationList = [
  {
    school: "UCSD Extended Studies",
    major: "Machine Learning Bootcamp",
    location: "Remote",
    desc: "-",
    date_start: "04/2023",
    date_end: "10/2023",
  },
  {
    school: "Harvard University",
    major: "Computer Science",
    location: "Boston, MA",
    desc: "-",
    date_start: "09/2018",
    date_end: "05/2022",
  },
  {
    school: "The Thacher School",
    major: "-",
    location: "Ojai, CA",
    desc: "-",
    date_start: "09/2014",
    date_end: "05/2022",
  },
];

const worktimeline = [
  {
    jobtitle: "Tech Development",
    where: "TeamFirst",
    date_start: "09/2022",
    date_end: "01/2023",
    date: "2022",
    desc: ["Designed and coded a career journaling website prototype, with data collection and visualization through Javascript",
    "Aggregated unstructured data from various sources into a unified data pipeline for onboarding new community members",
    "Onboarded member data to recruiting CRM, leveraging AI to match members to suitable positions",
    "Restructured user-facing data inputs, to streamline data organization and improve readability of member information"],
  },
  {
    jobtitle: "Software Engineering Intern",
    where: "Meta",
    date_start: "06/2021",
    date_end: "08/2021",
    date: "2021",
    desc: ["Worked full-stack on the Instagram team to implement a UI tool for efficiently  entering and modifying information into a back-end database",
    "Designed visual elements of the tool with a focus on usability",
    "Substantial use of JS and Hack"],
  },
  {
    jobtitle: "Software Engineering Intern",
    where: "Amazon",
    date_start: "06/2020",
    date_end: "08/2020",
    date: "2020",
    desc: ["Designed and created a tool for engineers to efficiently process and analyze large amounts of customer data",
    "Documented re-usable procedure for using the tool to identify underperforming search queries, as a way to identify problems with the search engine",
    "Built using a combination of PySpark & SQL"],
  },
  {
    jobtitle: "Consulting",
    where: "Harvard CBE",
    date_start: "01/2019",
    date_end: "05/2021",
    date: "2019",
    desc: ["Served as an analyst for one semester, an associate for one semester, and a case team leader for two semesters",
      "Worked on cases involving AI, Machine Learning, and Chatbots, with a whitepaper deliverable and final presentation",
    "Led cases with one the world’s largest biotech companies and a biotech startup focused on vaccine development. Focused on blockchain and market research, and led the writing of a whitepaper as well as presentation"],
  },
];

const skills = [
  {
    name: "Java",
    value: 90,
  },
  {
    name: "Machine Learning",
    value: 85,
  },
  {
    name: "Python",
    value: 85,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React",
    value: 60,
  },
];

const languages = [
  {
    name: "English",
    value: 100,
    desc: "Native",
  },
  {
    name: "Japanese",
    value: 70,
    desc: "Conversationally Fluent",
  },
  {
    name: "Chinese",
    value: 70,
    desc: "Conversationally Fluent",
  },
]

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials. Lorem ipsum.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "jeffreyding18@gmail.com",
  YOUR_FONE: "(206)313-1674",
  description:
    "Recent-grad from Harvard, looking for Software Engineer and Machine Learning opportunities. My background is in full-stack development, Machine Learning, and consulting.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/jeffreyding18",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com/in/jeffreyding18/",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  educationList,
  languages,
};
