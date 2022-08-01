import "./index.css"

import {Link} from "react-router-dom";
import React from "react";

const GradeStudent = ()=>{

    return(
        <div className="grade-student-card">
                <h1 className="card-title">Grade student</h1>
                <Link to="/" className="link action-btn back-button"> Back to menu</Link>             
            <div className="search-form">
             <form>
                 <input type="text" className="search-student-input" placeholder="Search for a student"/>
                 <button className="search-btn" placeholder="Search for a student">Search</button>
              </form>
            </div>
           
             <div className="student-info-section">
                <h5>Selected Student</h5>
                <p>Stanculescu Daniel</p>
                <div>
                    <input type="text" className="text-input-name" placeholder="Insert Subject"/>
                    <input type="text" className="text-input-name" placeholder="Insert Grade"/>
                </div>
                <button className="grade-btn">Grade!</button>
             </div> 
            
            
        <div className="result-list-container">
        <div className="student-result-list">
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>

                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
                <div className="student-list-record">
                    <div>
                            <p>Nume Prenume</p>
                    </div>
                    <div>
                            <p>Class:</p>
                    </div>
                </div>
            </div>  
        </div>
           
         
        </div>
    );
};

export default GradeStudent;