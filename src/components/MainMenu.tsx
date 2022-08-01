import "./index.css"

import React , {useState} from "react";
import {Route, Routes} from "react-router"

import AddStudent from "./AddStudent";
import AllStudents from "./AllStudents";
import GradeStudent from "./GradeStudent";
import MainMenuButtons from "./MainMenuButtons";
import StudentGrades from "./StudentGrades";

const MainMenu = ()=>{

    const [validForm, setValidForm] = useState<boolean>(false);

    return(
        <div className="pannel">
            <div className="card">
                <Routes>
                    <Route path="/" element={<MainMenuButtons/>} />
                    <Route path="/all-students" element={<AllStudents/>}/>
                    <Route path="/grade-student" element={<GradeStudent/>}/>
                    <Route path="/student-grades" element={<StudentGrades/>}/>
                    <Route path="/add-student" element={<AddStudent/>}/>
                </Routes>
            </div>
        </div>
     
    )
};

export default MainMenu;