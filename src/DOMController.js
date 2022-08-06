import { createProject, getProjects } from "./projectLogic";

const listSelector = document.querySelector(".folderLists");

const projectsList = getProjects();

export function renderProjects() {
    listSelector.replaceChildren();
    projectsList.forEach(project => {
        const listItem = document.createElement('p');
        listItem.textContent = project.name;
        listSelector.append(listItem);
    });
};

let addNewFolder = (() => {
    const folderInput = document.querySelector(".addFolderContainer > input");

    const addFolderButton = document.querySelector(".addFolderContainer > button");

    addFolderButton.addEventListener('click',() => {
        if(folderInput.value === ""){
            console.log("ERROR");
            return;
        }

        createProject(folderInput.value);
        folderInput.value = "";
        renderProjects();
    });

    folderInput.addEventListener('keypress', (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            addFolderButton.click();
        }
    });
})();

//RENDER