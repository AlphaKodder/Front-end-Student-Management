import "./index.css";

import React, { useEffect, useState } from "react";

import { ALL_STUDENTS } from "./API_ENDPOINTS";
import { ContextData } from "./Types";
import {Link} from "react-router-dom";
import StudentGrades from "./StudentGrades";
import { StudentsContext } from "./MainMenu";

const AllStudents = ()=>{
    
    let studentInfo:ContextData = React.useContext(StudentsContext) as ContextData;

    return(
        <div className="student-list">
            <h1 className="card-title">See all students</h1>
            <Link to="/" className="link action-btn back-button"> Back to menu</Link>            
            <div className="student-table-container">
                <table className="student-table">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Class</th>
                        </tr>
                        {studentInfo.studentDataArr.length>0 && studentInfo.studentDataArr.map((st:any)=>{
                            return(
                            <tr>
                                <td>{st.firstName}</td>
                                <td>{st.lastName}</td>
                                <td>{st.classNumber}</td>
                            </tr>
                            )
                        })}
                    </table>
            </div>
        </div>
    );
};

export default AllStudents;