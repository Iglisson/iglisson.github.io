'use strict'

const projects = [
    {
        "img": "",
        "title": "Stopwatch",
        "url_online": "https://iglisson.github.io/stopwatch/",
        "url_github": "https://github.com/Iglisson/stopwatch/"
    },
    {
        "img": "",
        "title": "Guessing Game",
        "url_online": "https://iglisson.github.io/guessing-game-js/",
        "url_github": "https://github.com/Iglisson/guessing-game-js/"
    },
    {
        "img": "",
        "title": "Tip Calculator",
        "url_online": "https://iglisson.github.io/tip-calculator-js/",
        "url_github": "https://github.com/Iglisson/tip-calculator-js/"
    }
];

const btnDiscord = document.querySelector("#email").addEventListener("click", () => {
    navigator.clipboard.writeText("iglioliveira87@outlook.com");
    alert("E-mail copiado com sucesso!");
});


document.querySelector("#discord").addEventListener("click", () => {
    navigator.clipboard.writeText("Isnoglis#0560");
    alert("Discord copiado com sucesso!");
});



const writeProject = (index) => {
    const container = document.querySelector(".container-projects");
    const title = document.createElement("h2");
    const url_online = document.createElement("a");
    const url_github = document.createElement("a");

    title.textContent = projects[index].title;

    url_online.href = projects[index].url_online;
    url_online.textContent = "Teste aqui...";
    url_online.target = "_blank";

    url_github.href = projects[index].url_github;
    url_github.textContent = "Código fonte";
    url_github.target = "_blank";

    container.appendChild(title);
    container.appendChild(url_online);
    container.appendChild(url_github);
};

for (let i = 0; i < projects.length; i++) {
    writeProject(i);
}