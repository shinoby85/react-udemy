import ProjectSidebar from "./components/ProjectSidebar.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  
  function handleStartAddProject() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }))
  }
  
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </ main>
  );
}

export default App;
