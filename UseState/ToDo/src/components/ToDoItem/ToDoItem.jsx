import React, { useState } from "react";

const ToDoItem = ({value, indexNumber, toDo, setToDo}) => {
    let [status, setStatus] = useState(false);
    let deleteRow = () => {
       let finalData = toDo.filter((v, i) => i != indexNumber);
       setToDo(finalData);
    }

    let checkStatus = () => {
        setStatus(!status);
    }

  return (
    <ul>
      <li className={`${status ? 'completeStatus' : ''}`}  onClick={checkStatus} >
        {value} <span onClick={deleteRow}>&times;</span>
      </li>
    </ul>
  );
};

export default ToDoItem;
