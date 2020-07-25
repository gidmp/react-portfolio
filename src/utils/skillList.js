function SkillList(icon, color, title, description) {
    this.icon = icon;
    this.color = color
    this.title = title;
    this.description = description;
};

const frontend = new SkillList(
    "fas fa-desktop",
    "#5c2a9d",
    "Front-end",
    "React, HTML5, CSS3, JavaScript, Jquery, Bootstrap, Materialize, UIKit"
);

const backend = new SkillList(
    "fas fa-server",
    "#b5076b",
    "Back-end",
    "Node.JS, Express.JS, MySQL, Sequelize, MongoDB, Mongoose, Handlebars, AJAX"
)

const design = new SkillList (
    "fas fa-palette",
    "#ffd31d",
    "Design",
    "Figma, Adobe Illustrator, Adobe Photoshop"
)

let skillList = [frontend , backend, design];

export default skillList;