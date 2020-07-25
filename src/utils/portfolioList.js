
import checkYourselfImg from "../assets/images/portfolio-images/spending.png";
import treehouseImg from "../assets/images/portfolio-images/treehouse.png";
import noteTakerImg from "../assets/images/portfolio-images/notetaker.png";


function PortfolioList(name, description, img, appLink, githubLink) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.appLink = appLink;
    this.githubLink = githubLink;
};


const checkYourself = new PortfolioList(
    "Check Yourself",
    "Check yourself is a full-stack budgeting app that help user manage their money according to Elizabeth Warren's 50/30/20 rule. This app was made using Express.js, Node.js, passport, MySQL database and chart package",
    checkYourselfImg,
    "https://jp-project2.herokuapp.com/",
    "https://github.com/gidmp/Check-Yourself"
);

const treehouse = new PortfolioList(
    "Treehouse",
    "Treehouse is a JS app that utilizes AJAX calls to search and fetch the details and information of concerts happening near you. If interested, you are given an option to buy the tickets and see your favorite artist performs",
    treehouseImg,
    "https://gidmp.github.io/Treehouse/",
    "https://github.com/gidmp/Treehouse"
);

const noteTaker = new PortfolioList(
    "Note Taker",
    "Write down your todo list. Note taker is a note app created using expressJS. Note taker allows you to write down, save and delete your notes to help manage your daily tasks",
    noteTakerImg,
    "https://aqueous-everglades-38921.herokuapp.com/",
    "https://github.com/gidmp/Note-Taker-With-Express"
);


let portfolioList = [checkYourself, treehouse, noteTaker];

export default portfolioList;