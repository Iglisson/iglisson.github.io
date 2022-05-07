'use strict';

import itemProjects from "./itemProjects.js";
import projects from "./projects.js";

const radios = document.getElementsByTagName("input");

function renderSection() {
    if (radios[0].checked) {
        document.querySelector("#home").style.display = "flex";
        document.querySelector("#about").style.display = "none";
        document.querySelector("#projects").style.display = "none";
        document.querySelector("#contact").style.display = "none";
        document.getElementsByTagName("label")[0].style.textDecoration = "underline";
        document.getElementsByTagName("label")[1].style.textDecoration = "none";
        document.getElementsByTagName("label")[2].style.textDecoration = "none";
        document.getElementsByTagName("label")[3].style.textDecoration = "none";
    } else if (radios[1].checked) {
        document.querySelector("#home").style.display = "none";
        document.querySelector("#about").style.display = "flex";
        document.querySelector("#projects").style.display = "none";
        document.querySelector("#contact").style.display = "none";
        document.getElementsByTagName("label")[0].style.textDecoration = "none";
        document.getElementsByTagName("label")[1].style.textDecoration = "underline";
        document.getElementsByTagName("label")[2].style.textDecoration = "none";
        document.getElementsByTagName("label")[3].style.textDecoration = "none";
    } else if (radios[2].checked) {
        document.querySelector("#home").style.display = "none";
        document.querySelector("#about").style.display = "none";
        document.querySelector("#projects").style.display = "flex";
        document.querySelector("#contact").style.display = "none";
        document.getElementsByTagName("label")[0].style.textDecoration = "none";
        document.getElementsByTagName("label")[1].style.textDecoration = "none";
        document.getElementsByTagName("label")[2].style.textDecoration = "underline";
        document.getElementsByTagName("label")[3].style.textDecoration = "none";
    } else if (radios[3].checked) {
        document.querySelector("#home").style.display = "none";
        document.querySelector("#about").style.display = "none";
        document.querySelector("#projects").style.display = "none";
        document.querySelector("#contact").style.display = "flex";
        document.getElementsByTagName("label")[0].style.textDecoration = "none";
        document.getElementsByTagName("label")[1].style.textDecoration = "none";
        document.getElementsByTagName("label")[2].style.textDecoration = "none";
        document.getElementsByTagName("label")[3].style.textDecoration = "underline";
    }
}

radios[0].addEventListener("click", () => {
    radios[0].checked = true;
    renderSection();
});

radios[1].addEventListener("click", () => {
    radios[1].checked = true;
    renderSection();
});
radios[2].addEventListener("click", () => {
    radios[2].checked = true;
    renderSection();
});
radios[3].addEventListener("click", () => {
    radios[3].checked = true;
    renderSection();
});

function renderProjects() {
    const list = document.querySelector("#projects .projects-list ul");
    projects.map((project) => {
        list.appendChild(itemProjects(project));
    });
}

document.querySelector("#btnLinkedin").addEventListener("click", () => {
    navigator.clipboard.writeText("https://www.linkedin.com/in/iglisson-ruan/");
    alert("LinkedIn copiado com sucesso!");
});

document.querySelector("#btnEmail").addEventListener("click", () => {
    navigator.clipboard.writeText("iglioliveira87@outlook.com");
    alert("E-mail copiado com sucesso!");
});

document.querySelector("#btnDiscord").addEventListener("click", () => {
    navigator.clipboard.writeText("Isnoglis#0560");
    alert("Discord copiado com sucesso!");
});


document.querySelector("#btnGithub").addEventListener("click", () => {
    navigator.clipboard.writeText("https://github.com/Iglisson");
    alert("Github copiado com sucesso!");
});


window.onload = renderProjects;