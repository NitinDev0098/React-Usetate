import { useState } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem/ToDoItem";

function App() {
  let [toDo, setToDo] = useState([]);


  let savetodoList = (e) => {
    let toDoValue = e.target.todo.value;

    if(!toDo.includes(toDoValue)){
     let finalToDo = [...toDo,toDoValue];
     setToDo(finalToDo);
     e.target.reset(); 
    }else{
      alert('To Do item already Exists....');
    }
    e.preventDefault();
  }

  let list = toDo.map((value, index) => {
    return(
      <ToDoItem value={value} key={index} indexNumber={index} 
        toDo={toDo} 
        setToDo={setToDo} 
      />
    )
  });

  return (
    <>
      <div className="todo_app">
        <h1>My Tasks</h1>
        <form onSubmit={savetodoList}>
          <input type="text" name="todo"/>
          <button>Save</button>
        </form>
        <div className="outerdiv">
            {list}
        </div> 
      </div>
    </>
  );  
}

export default App;
