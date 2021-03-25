import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import style from './App.css';
import MainScreen from './components/MainScreen/MainScreen'
import TaskPage from './components/TaskPage/TaskPage'
import Create from './components/Create/Create'
import DoneProjects from "./components/DoneProjects/DoneProjects";
import Footer from "./components/Footer/Footer"
import Archive from './components/Archive/Archive'



function App(props) {
  let tascRoute = props.state.dataProject.map(el => {
    return (
      <Route path={"/" + el.id} render ={ () =><TaskPage taskData={el} data={props.state.dataProject}/>} />
    )})
  let doneProjects = props.state.dataProject.filter(task => task.complete)  
  let inProcessProjects = props.state.dataProject.filter(task => !task.complete) 
  

  return (
    <BrowserRouter>
      <div className={style.background}>
        
        <Route exact path={"/"} render ={ () =>< MainScreen data={inProcessProjects}/>}  />
        {tascRoute}
        <Route path={"/create"} render ={ () =><Create newTaskData={props.state.newTaskData} dispatch={props.dispatch}/>}  />
        <Route path={"/done-projects"} render ={ () =><DoneProjects doneProjects={doneProjects} dispatch={props.dispatch}/>}  />
        <Route path={"/archive"} render ={ () =><Archive dispatch={props.dispatch}/>}  />
        
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
