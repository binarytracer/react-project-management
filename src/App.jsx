import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";

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
    setProjectsState((prevState) => ({
      ...prevState,
      toCreateNewProject: false,
      projects: [
        ...prevState.projects,
        { ...newProject, id: Math.round(Math.random() * 10000) },
      ],
    }));
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

  let content;

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
      />
      {content}
    </main>
  );
}

export default App;
