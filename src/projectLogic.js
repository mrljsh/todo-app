let projects = [{ name: 'DEFAULT', toDoList: [{ name: 'TEST TASK', description: 'TASK DESCRIPTION', done: true }], active: true }];

function ToDo(name, description) {
  this.name = name;
  this.description = description;
  this.done = false;
}

function Project(name) {
  this.name = name;
  this.toDoList = [];
  this.active = true;
}

export const createProject = (name) => {
  clearActiveProjects();
  const newProject = new Project(name);
  projects.push(newProject);
};

const createToDo = (name, description) => {
  const todo = new ToDo(name, description);
  projects[getActiveProjectIndex()].toDoList.push(todo);
};

export const getProjects = () => projects;

export const getToDos = () => projects[getActiveProjectIndex()].toDoList;

function clearActiveProjects() {
  projects.forEach((project) => project.active = false);
}

function getActiveProject() {
  const activeProject = projects.filter((project) => project.active === true);
  return activeProject;
}

function getActiveProjectIndex() {
  const activeProject = projects.findIndex((project) => project.active === true);
  return activeProject;
}

function setActiveProject(index) {
  clearActiveProjects();
  projects[index].active = true;
}

export { getActiveProjectIndex, setActiveProject, createToDo }
