import ProjectSidebar from "./components/ProjectSidebar.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

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

  function handleSelectProject(id) {
    setProjectState(prevState => ({
        ...prevState,
        selectedProjectId: id,
      })
    )
  }

  function handleStartAddProject() {
    setProjectState(prevState => ({
        ...prevState,
        selectedProjectId: null,
      })
    )
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

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let content = <SelectedProject project={selectedProject}/>;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCloseAdd={handleCancelAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </ main>
  );
}

export default App;
