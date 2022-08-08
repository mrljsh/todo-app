let projects = [{name:"TEST PROJECT", toDoList: [], active: true}, ]

export const createProject = (name) => {
    _clearActiveProjects();
    projects.push({
        name,
        toDoList: [],
        active: true,
    });
};

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
    console.log(projects[index].active);
}


export { getActiveProjectIndex, setActiveProject }
//CREATE TODO LOGIC
