import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import MainScreen from './components/MainScreen/MainScreen'
import TaskPage from './components/TaskPage/TaskPage'
import Create from './components/Create/Create'
import DoneProjects from "./components/DoneProjects/DoneProjects";
import Footer from "./components/Footer/Footer"
import Archive from './components/Archive/Archive'



function App(props) {
  let tascRoute = props.state.dataProject.map(el => {
    return (
      <Route key={Math.random()} path={"/" + el.id} render ={ () =><TaskPage taskData={el} data={props.state.dataProject}/>} />
    )})
  let doneProjects = props.state.dataProject.filter(task => task.complete && !task.isArchive)  
  let inProcessProjects = props.state.dataProject.filter(task => !task.complete  && !task.isArchive) 
  let archivProjects = props.state.dataProject.filter(task => !task.complete && task.isArchive)
  

  return (
    <BrowserRouter>
      <div>
        
        <Route exact path={"/"} render ={ () =>< MainScreen data={inProcessProjects} dispatch={props.dispatch}/>}  />
        {tascRoute}
        <Route path={"/create"} render ={ () =><Create newTaskData={props.state.newTaskData} dispatch={props.dispatch}/>}  />
        <Route path={"/done-projects"} render ={ () =><DoneProjects doneProjects={doneProjects} dispatch={props.dispatch}/>}  />
        <Route path={"/archive"} render ={ () =><Archive dispatch={props.dispatch} archivProjects={archivProjects} />}  />
        
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
