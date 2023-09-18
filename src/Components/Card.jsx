import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
const Card = ({todo,handledelete,handleToggle})=> {

    return ( 
        <div className={!todo.completed?"card w-75 mb-3 bg-danger":"card w-75 mb-3 bg-success"}>
        <div className="card-body">
          <h5 className="card-title">{todo.user}</h5>
          <p className="card-text">{todo.content}</p>
          {/* <a href="#" className="btn btn-primary">Button</a> */}
          <i className="bi bi-trash3" onClick={()=>handledelete(todo._id)} ></i>
        </div>
        <label className="switch">
        <input type="checkbox" checked={todo.completed}
        
        onChange={(e)=>handleToggle(todo._id,e.target.checked)}/>
        <span className="slider round"></span>
</label>
      </div>

     );
}

export default Card ;