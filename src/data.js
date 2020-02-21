// Education logos
import APlusComp from "./img/a-plus-comptia.png";
import Treehouse from "./img/treehouse1.png";
import SecPlusComp from "./img/sec-plus-comptia.png";

// Project Demos
import WebFlixDemo from "./img/demos/webflix-demo_1.gif";
import Flickr from "./img/demos/flckr_demo.gif";
import Phrase from "./img/demos/phrase_game_demo.gif";
import Registration from "./img/demos/register_demo.gif";
import RandomUser from "./img/demos/randomuser-demo.gif";

// Tech logos
import BootstrapLogo from "./img/icons/bootstrap-color.svg";
import CssLogo from "./img/icons/css3-color.svg"; 
import HtmlLogo from "./img/icons/html5-color.svg";
import JsLogo from "./img/icons/js-logo.png";
import NodeLogo from "./img/icons/nodejs-color.svg";
import ReactLogo from "./img/icons/react-logo.png";
import ReduxLogo from "./img/icons/redux-logo.png";
import SassLogo from "./img/icons/sass-color.svg";


export const data = {
  summary: {
    about: "Hello my name is Gerardo Keys. I am a Javascript developer with 2 years experience working with various technologies such as JavaScript, CSS/Sass, HTML and React. I started learning to program in college when I was studying for my IT certifications. Even though I was able to get my certifications I seemed to fall in love with programming, specifically web development. I feel this path gives me a chance to learn a valuable skill and to be more creative.",
    about2: "I enjoy making good-looking, fluid and responsive websites. I especially like working in React and JavaScript to make interactive re-usable components. CSS/Sass is my go-to for styles and creating re-usable style libraries. I have working knowledge of BEM to keep my styles and code organized and re-usable."
  },
  education: [
    {
      id: 1,
      logo: Treehouse,
      caption: "Team Treehouse",
      descriptionSub: "Team Treehouse Full-Stack JavaScript Bootcamp",
      descriptionMain:
        "I went through this JavaScript bootcamp not knowing much about development. After a year of this curriculum, I can now create full-stack apps using technologies such as React, Node, and Express. It was a project based path which also had me peer-review code from other students which helped me understand how to read other developers code."
    },
    {
      id: 2,
      logo: APlusComp,
      caption: "CompTia A+",
      descriptionSub: "CompTia A+ Certification",
      descriptionMain:
        "I studied and received my A+ certification during my time in school. This was my first certification and solidified my understanding and expertise with personal computer systems. This knowledge has helped me immensely on my coding journey."
    },
    {
      id: 3,
      logo: SecPlusComp,
      caption: "CompTia Security+",
      descriptionSub: "CompTia Security+ Certification",
      descriptionMain:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Distinctio eos in officiis debitis fugit saepe pariatur! Loremipsum dolor sit amet consectetur adipisicing elit. Lorem ipsumdolor sit amet consectetur adipisicing elit.Distinctio eos inofficiis debitis, fugit saepe pariatur"
    },
  ], 
  projects: [
    {
      id: 1,
      title: "Webflix Entertainment",
      screenshot: WebFlixDemo,
      description: 
        "One of my first projects using React + Redux. I used The Movie Database API, which was great to get info on all the new and upcoming movies and tv shows. I used react-router for this application linking home page and search pages."
    },
    {
      id: 2,
      title: "Flickr Search",
      screenshot: Flickr,
      description: 
        "One of my first projects I used Flickr's free api to create a gif search based on categories as well as user search. This project really taught me a lot about working with external api's and how to create user interaction and search."
    },
    {
      id: 3,
      title: "Phrase Hunter Gameshow",
      screenshot: Phrase,
      description: 
        "I created this game to practice object-oriented programming and making a game with vanilla JavaScript, CSS and html. This really helped me cement my fundamentals in programming while creating a fun Jeopardy style game."
    },
    {
      id: 3,
      title: "Full-Stack Conference Registration Form",
      screenshot: Registration,
      description: 
        "One of my first projects using vanilla JavaScript and JQuery to create a validation form for a full-stack conference. I used Regex with this project for form validation and a random user api to create the user profiles."
    },
    {
      id: 3,
      title: "Startup Directory",
      screenshot: RandomUser,
      description: 
        "One of my first projects using jQuery with fetch api and a free random user api to get profiles. I styled it to look like an official directory. Created classes using object-oriented programming to understand these concepts better."
    }
  ],
  technologies: [
    HtmlLogo,
    CssLogo,
    BootstrapLogo,
    JsLogo,
    NodeLogo,
    ReactLogo,
    ReduxLogo,
    SassLogo
  ]
};
