import ProjectSidebar from "./components/ProjectSidebar.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, projects: [], tasks: []
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text,
        projectId: projectState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

  function handleCancelAddProject() {
    setProjectState(prevState => ({
      ...prevState, selectedProjectId: undefined,
    }))
  }

  function handleDeleteProject() {
    setProjectState(prevState => ({
      ...prevState,
      projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
      selectedProjectId: undefined
    }))
  }

  function handleSelectProject(id) {
    setProjectState(prevState => ({
      ...prevState, selectedProjectId: id,
    }))
  }

  function handleStartAddProject() {
    setProjectState(prevState => ({
      ...prevState, selectedProjectId: null,
    }))
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData, id: projectId,
      }
      return {
        ...prevState, selectedProjectId: undefined, projects: [...prevState.projects, newProject]
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  const selectedTasks = projectState.tasks.filter(task => task.projectId === selectedProject.id);
  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={selectedTasks}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}/>
  );
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCloseAdd={handleCancelAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }

  return (<main className="h-screen my-8 flex gap-8">
    <ProjectSidebar
      onStartAddProject={handleStartAddProject}
      projects={projectState.projects}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectState.selectedProjectId}
    />
    {content}
  </ main>);
}

export default App;
