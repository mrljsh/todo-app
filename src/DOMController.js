import { createProject, getActiveProjectIndex, getProjects, setActiveProject } from "./projectLogic";

const listSelector = document.querySelector(".folderLists");

const projectsList = getProjects();


export function renderProjects() {
    listSelector.replaceChildren();
    projectsList.forEach(project => {
        const listItem = document.createElement('p');
        listItem.textContent = project.name;
        listItem.dataset.index = projectsList.indexOf(project);
        listSelector.append(listItem);
    });
    setActiveClass();
    setProjectClickListeners();
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

function setActiveClass() {
    const activeFolderIndex = getActiveProjectIndex();
    const folderList = document.querySelectorAll('.folderLists > *');

    folderList[activeFolderIndex].classList.add('active');

}

function setProjectClickListeners() {
    const folderList = document.querySelectorAll('.folderLists > *');

    folderList.forEach(folder => {
        folder.addEventListener('click', () => {
            setActiveProject(folder.dataset.index);
            renderProjects();
        })
    });
};

//RENDER PROJECT TAB
//HOW TO KNOW WHICH ONE IS ACTIVE? (ID's, name??, index?)
//CREATE MODAL FOR NEW TASK
