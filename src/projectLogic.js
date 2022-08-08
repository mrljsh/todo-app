let projects = [{name:"TEST PROJECT", toDoList: [], active: true}, ];

function ToDo(name, description) {
    this.name = name;
    this.description = description;
}

function Project(name) {
    this.name = name;
    this.toDoList = [];
    this.active = true;
}

export const createProject = (name) => {
    _clearActiveProjects();
    const newProject = new Project(name);
    projects.push(newProject);
};

const createToDo = (name, description) => {
    const todo = new ToDo(name, description);
    projects[getActiveProjectIndex()].toDoList.push(todo);
}

export const getProjects = () => {
    return projects;
};

function _clearActiveProjects(){
    projects.forEach(project => project.active = false);
}

function getActiveProject(){
    let activeProject = projects.filter(project => project.active === true);
    return activeProject;
}

function getActiveProjectIndex(){
    let activeProject = projects.findIndex(project => project.active === true);
    return activeProject;
}

function setActiveProject(index){
    _clearActiveProjects();
    projects[index].active = true;
}


export { getActiveProjectIndex, setActiveProject }
//CREATE TODO LOGIC
