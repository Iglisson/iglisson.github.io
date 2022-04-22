'use strict';

let projectIndex = 0;
const projects = [
    {
        "img": "./src/images/projects/stopwatch.png",
        "title": "Stopwatch",
        "url_online": "https://iglisson.github.io/stopwatch/"
    },
    {
        "img": "./src/images/projects/guessing-game.png",
        "title": "Guessing Game",
        "url_online": "https://iglisson.github.io/guessing-game-js/"
    },
    {
        "img": "./src/images/projects/tip-calculator.png",
        "title": "Tip Calculator",
        "url_online": "https://iglisson.github.io/tip-calculator-js/"
    }
];

document.querySelector("#email").addEventListener("click", () => {
    navigator.clipboard.writeText("iglioliveira87@outlook.com");
    alert("E-mail copiado com sucesso!");
});

document.querySelector("#discord").addEventListener("click", () => {
    navigator.clipboard.writeText("Isnoglis#0560");
    alert("Discord copiado com sucesso!");
});

function writeProject(index){
    const container = document.querySelector(".container-projects");
    container.innerHTML = "";
    const imageContainer = document.createElement("div");
    const infoContainer = document.createElement("div");
    const btnContainer = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const url_online = document.createElement("a");
    const btnNext = document.createElement("button");
    const btnBack = document.createElement("button");
    const iconNext = document.createElement("i");
    const iconBack = document.createElement("i");

    imageContainer.className = "project-image";
    image.src = projects[index].img;
    image.alt = "Project image: " + projects[index].title;
    imageContainer.appendChild(image);

    btnContainer.className = "project-buttons";
    iconNext.className = "fas fa-arrow-circle-right";
    iconBack.className = "fas fa-arrow-circle-left";
    btnNext.appendChild(iconNext);
    btnNext.addEventListener("click", () => {
        next();
        writeProject(projectIndex);
    });
    btnBack.appendChild(iconBack);
    btnBack.addEventListener("click", () => {
        back();
        writeProject(projectIndex);
    });
    btnContainer.appendChild(btnBack);
    btnContainer.appendChild(btnNext);

    infoContainer.className = "project-info";
    title.textContent = projects[index].title;
    infoContainer.appendChild(title);
    infoContainer.appendChild(btnContainer);
    url_online.href = projects[index].url_online;
    url_online.textContent = "Teste aqui...";
    url_online.target = "_blank";
    infoContainer.appendChild(url_online);

    container.appendChild(imageContainer);
    container.appendChild(infoContainer);
};

function next(){
    if (projectIndex == projects.length-1) {
        projectIndex = 0;
    } else {
        projectIndex++;
    }
}

function back() {
    if (projectIndex == 0) {
        projectIndex = projects.length-1;
    } else {
        projectIndex--;
    }
}

window.onload = writeProject(projectIndex);