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

  const selectedProject = projectState.projects.find(
    (project) => (project.id = projectState.selectedProjectId)
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
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
      />
      {content}
    </main>
  );
}

export default App;
