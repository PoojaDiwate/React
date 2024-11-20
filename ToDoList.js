// import React,{ useState } from "react";

// function ToDoList()
// {
//     const [addTask,setAddTask]=useState('');
//     const [task,setTask]=useState([]); 

//     const getTask=(e)=>{
//         setTask([...task,addTask]);
//         setAddTask('');
//     }

//     const deleteTask=(index)=>{
//         const newTasks= task.filter((_, i) => i !== index); //(_, i) => i !== index: This is an arrow function used as the test function for filter. It takes two parameters:
//         setTask(newTasks);                                 //_: The first parameter represents the current element in the array (not used here, hence the underscore).
//                                                             //i: The second parameter represents the index of the current element.
//                                                             // i !== index: The test function returns true for all elements whose index i is not equal to the index passed to deleteTask. This effectively removes the element at the specified index from the array.
//     }

//     return(
//         <>
//             <h1>To Do List</h1>
//                 <input type="text" value={addTask} onChange={(e)=>setAddTask(e.target.value)}/>
//                 <button onClick={getTask}>
//                     Add Task
//                 </button>
//                 <br/>
//                 <ol>
//                     {task.map((task,index) => (
//                         <li key={index}>
//                             {task}

//                         <button onClick={() => deleteTask(index)}>
//                         Delete Task
//                         </button>
//                         </li>
//                     ))}
//                 </ol>
//            <p>Total Tasks : {task.length}</p>
//         </>
//     )
// }

// export default ToDoList;


import React,{useState} from "react";

function ToDoList()
{
    const [addTask, setAddTask] = useState('');
    const [task,setTask] = useState([]);

    const getTask=(e)=>{
        setTask([...task,addTask]);
        setAddTask('');
    }

    const deleteTask=(index)=>{
        const newTasks=task.filter((_,i)=> i !== index)
        setTask(newTasks);
    }

    return(
        <>
        <h1>To Do List</h1>
        <input type="text" value={addTask} onChange={(e)=> setAddTask(e.target.value)}></input>
        <button onClick={getTask}>Add Task</button>

        <ol>
            {task.map((task,index)=>(
                <li key={index}>{task}
                <button onClick={()=> deleteTask(index)}>Delete Task</button>
                </li>
            ))}
        </ol>
        <p>Total Task:{task.length}</p>
        </>
    )

};

export default ToDoList;