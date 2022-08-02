import "./index.css";

import {Link} from "react-router-dom"
import React from "react";

const MainMenuButtons = ()=>{
    return(
        <div>
        <h1 className="card-title">Student Management</h1>
            <div className="card-section">
                   <Link to='/all-students'  className="link action-btn">See All Students</Link> 
                    <Link to='/grade-student'  className="link action-btn ">Grade a student</Link>
                    <Link to='/student-grades' className="link action-btn ">See Grades of a student</Link>
                    <Link to='/add-student' className="link action-btn ">Add a student</Link>
            </div> 
        </div>
    );
}

export default MainMenuButtons;