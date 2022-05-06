'use strict';

import showProject from "./projects-render.js";

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
        showProject();
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