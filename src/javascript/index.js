'use strict';

import projects from "./projects.js";

let projectIndex = 0;
const buttonsNavigation = document.querySelectorAll(".project-buttons button");

document.querySelector("#email").addEventListener("click", () => {
    navigator.clipboard.writeText("iglioliveira87@outlook.com");
    alert("E-mail copiado com sucesso!");
});

document.querySelector("#discord").addEventListener("click", () => {
    navigator.clipboard.writeText("Isnoglis#0560");
    alert("Discord copiado com sucesso!");
});

function showProject(index) {
    document.querySelector(".project-image img").src = projects[index].img;
    document.querySelector(".project-info h2").textContent = projects[index].title;
    document.querySelector(".project-info a").href = projects[index].url_online;
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

window.onload = showProject(projectIndex);