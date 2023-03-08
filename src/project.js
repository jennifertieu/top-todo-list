"use strict";

const generateProjectId = () => {

};

const getProjectIds = () => {
    // return list of project ids
    // query select all data-project-id values
}

// create project list interface
const Project = (name) => {
    const name = name;
    const id = generateProjectId();
    

    const addProjectTodo = (projectId, todoId) => {
        // add todo to project
    };

    const getProjectTodos = (projectId) => {
        // return list of project todos
    }

    const deleteProjectTodo = (projectId) => {
        // delete project todo
    }

    const deleteProject = (id) => {
        // delete project
    }

    const updateProjectName = (id) => {
        // update project name
    };

    return {
        id,
        name,
        addProjectTodo,
        getProjectTodos,
        deleteProjectTodo,
        deleteProject,
        updateProjectName
    }
}
