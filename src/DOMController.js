import { closeModal, openModal } from "./modalController";
import { createProject, createToDo, getActiveProjectIndex, getProjects, getToDos, setActiveProject } from "./projectLogic";

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
    renderToDos(getActiveProjectIndex());
};

function renderToDos(index) {
    const notesDiv = document.querySelector('.notes');
    notesDiv.innerHTML = ""

    const heading = _createProjectHeading(projectsList[index].name);
    const content = _createToDoList();
    notesDiv.append(heading, content);

}


//IIFE FOR ADDING EVENT LISTENERS ON ADD NEW FOLDER INPUT
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

function _createProjectHeading(name){
    const headingDiv = document.createElement('div');
    headingDiv.classList.add('project-heading-container');
    
    const heading = document.createElement('h2');
    heading.textContent = name;

    const addButton = document.createElement('p');
    addButton.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V13.81C21.39 13.46 20.72 13.22 20 13.09V8H4V18H13.09C13.04 18.33 13 18.66 13 19M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" /></svg> ADD NEW TASK'
    addButton.addEventListener('click', () => {
        openModal();
    });

    headingDiv.append(heading, addButton);
    
    return headingDiv;
}

function _createToDoList() {
    const containterDiv = document.createElement('div');
    containterDiv.classList.add('todo-container');

    const ToDoList = getToDos();

    ToDoList.forEach(list => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('todo-list');

        const createTitle = document.createElement('p');
        createTitle.textContent = list.name;

        const createDescription = document.createElement('p');
        createDescription.textContent = list.description;

        createDiv.append(createTitle, createDescription);
        containterDiv.append(createDiv);

    });

    return containterDiv;
}

const addNewTask = (() => {    
    let TaskTitle = document.getElementById('title');
    let Description = document.getElementById('description');
    const AddButton = document.getElementById('addBtn');

    AddButton.addEventListener('click', () => {
        createToDo(TaskTitle.value, Description.value);
        TaskTitle.value = "";
        Description.value = "";
        renderToDos(getActiveProjectIndex());
        closeModal();
    });

})();



//RENDER PROJECT TAB
//CREATE MODAL FOR NEW TASK
