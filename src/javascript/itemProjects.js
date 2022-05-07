export default function writeProject(project){
    const item = document.createElement("li");
    const nameProject = document.createElement("h3");
    const urlOnline = document.createElement("a");
    const urlRepository = document.createElement("a");
    const github = document.createElement("i");

    nameProject.textContent = project.title;

    urlOnline.href = project.url_online;
    urlOnline.textContent = "Test here...";

    urlRepository.href = project.repository;
    github.className = "fab fa-github";

    urlRepository.appendChild(github);
    item.appendChild(nameProject);
    item.appendChild(urlOnline);
    item.appendChild(urlRepository);
    item.appendChild(toolList(project.tools));

    return item;
}

function toolList(toolsUsed) {
    const tools = document.createElement("div");
    tools.className = "tools-used";

    toolsUsed.forEach((e) => {
        const icon = document.createElement("i");
        icon.className = e;
        tools.appendChild(icon);
    });
    
    return tools;
}