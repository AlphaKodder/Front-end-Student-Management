import "./index.css"

import React ,{useState} from "react";

import {Link} from "react-router-dom";

const StudentGrades = ()=>{

    const [dropdownText,setDropdownText] = useState("Select subject");

    const handleSetDropdownText = (value:string)=>{
        setDropdownText(value);
    }

    return(
        <div className="grade-student-card">
                <h1 className="card-title">Student Grades</h1>
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
                <div className="dropdown-container">
                    <div className="dropdown">
                        <span>{dropdownText} &darr;</span>
                        <div className="dropdown-content">
                                <p onClick = {(e)=>{handleSetDropdownText("History")}} className="dropdown-item">History</p>
                                <p onClick = {(e)=>{handleSetDropdownText("Geography")}} className="dropdown-item">Geography</p>
                                <p className="dropdown-item" onClick = {(e)=>{handleSetDropdownText("Math")}}>Math</p>
                        </div>
                    </div>

                </div>
               <p>Grade:<span></span></p>
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

export default StudentGrades;