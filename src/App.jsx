import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectsState] = useState({
    selectedProjectId: null,
    toCreateNewProject: false,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject(toNewProject) {
    setProjectsState((prevState) => ({
      ...prevState,
      toCreateNewProject: toNewProject,
    }));
  }

  function handleAddProject(newProject) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        toCreateNewProject: false,
        projects: [
          ...prevState.projects,
          { ...newProject, projectId: prevState.projects.length + 1 },
        ],
      };
    });
  }

  function handleCancelNewProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        toCreateNewProject: false,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject(projectId) {
    setProjectsState((prevState) => {
      const projects = prevState.projects.filter(
        (project) => project.projectId !== projectId
      );

      return {
        ...prevState,
        selectedProjectId: null,
        toCreateNewProject: false,
        projects,
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const newTask = {
        text,
        projectId: prevState.selectedProjectId,
        taskId: Math.round(Math.random() * 10000),
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== taskId),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => (project.id = projectState.selectedProjectId)
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  if (projectState.toCreateNewProject) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelNewProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
