import React from "react"; 
import './style.css';



function Users(props) {
    return(
        <div className="users">
            {props.children}
            <span>{props.Nums}</span>
        </div>
    )
}

export default Users;