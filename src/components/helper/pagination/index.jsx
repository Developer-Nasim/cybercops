import React  from "react";

import './style.css'; 

function Pagination() {
    
 

    return(
        <div className="pgnt"> 
            <ul>
                <li>
                    <a href="#" className="prev"> 
                        Priview 
                    </a>
                </li> 
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#" className="active">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">. . . . . . </a></li>
                <li><a href="#">6</a></li> 
                <li>
                    <a href="#" className="nxt">
                        Next  
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;