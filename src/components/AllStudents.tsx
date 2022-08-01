import "./index.css";

import {Link} from "react-router-dom";
import React from "react";

const AllStudents = ()=>{

    return(
        <div className="student-list">
            <h1 className="card-title">See all students</h1>
            <Link to="/" className="link action-btn back-button"> Back to menu</Link>            <div className="student-table-container">
                <table className="student-table">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Class</th>
                        </tr>
                        <tr>
                            <td>Hillary</td>
                            <td>Nyakundi</td>
                            <td>tables@mail.com</td>
                        </tr>
                        <tr>
                            <td>Lary</td>
                            <td>Mak</td>
                            <td>developer@mail.com</td>
                        </tr>
                    </table>
            </div>
        </div>
    );
};

export default AllStudents;