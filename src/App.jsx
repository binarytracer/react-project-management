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
    setProjectsState((prevState) => {
      return {
        ...prevState,
        toCreateNewProject: toNewProject,
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  if (projectState.toCreateNewProject) {
    content = <NewProject />;
  }
    
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
