let projects = []

export const createProject = (name) => {
    projects.push({
        name,
        toDoList: [],
    });
};

export const getProjects = () => {
    return projects;
};
