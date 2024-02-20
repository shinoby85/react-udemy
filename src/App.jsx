import ProjectSidebar from "./components/ProjectSidebar.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  
  function handleCancelAddProject() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
    }))
  }
  
  function handleStartAddProject() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }))
  }
  
  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [
          ...prevState.projects,
          newProject
        ]
      }
    })
  }
  
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCloseAdd={handleCancelAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {content}
    </ main>
  );
}

export default App;
