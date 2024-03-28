import React from 'react';

export default function EditTask(props) {
    return (
        <li key={props.task.id}>
            <span>{props.task.id}</span>
            <input type="text"
                    name="modifiedTaskName"
                    value={props.modifiedTaskName}
                    placeholder="Enter new description"
                    onChange={(event) =>
                    props.setModifiedTaskName(event.target.value)}
            /> 
            <button onClick={()=> {props.updateTask(props.task.id);
                                    props.setTaskBeingEdited(0);
                                    props.setModifiedTaskName('');}}
            >Confirm</button>
            <button onClick={()=> props.deleteTask(props.task.id)}>
                Delete
            </button>
        </li>
    )
}