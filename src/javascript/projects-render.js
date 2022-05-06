'use strict';

import projects from "./projects.js";

let projectIndex = 0;
const buttonsNavigation = document.querySelectorAll("#projects .container-projects .project-buttons button");

export default function showProject(index = 0) {
    document.querySelector("#projects .container-projects .project-image img").src = projects[index].img;
    document.querySelector("#projects .container-projects .project-info h2").textContent = projects[index].title;
    document.querySelector("#projects .container-projects .project-info a").href = projects[index].url_online;
};

function next() {
    if (projectIndex == projects.length - 1) {
        projectIndex = 0;
    } else {
        projectIndex++;
    }
}

function back() {
    if (projectIndex == 0) {
        projectIndex = projects.length - 1;
    } else {
        projectIndex--;
    }
}

buttonsNavigation[0].addEventListener("click", () => {
    back();
    showProject(projectIndex);
});

buttonsNavigation[1].addEventListener("click", () => {
    next();
    showProject(projectIndex);
});
