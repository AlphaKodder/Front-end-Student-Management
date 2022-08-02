import "./index.css"

import React , {useContext, useEffect, useState} from "react";
import {Route, Routes} from "react-router"

import { ALL_STUDENTS } from "./API_ENDPOINTS";
import AddStudent from "./AddStudent";
import AllStudents from "./AllStudents";
import { ContextData } from "./Types";
import GradeStudent from "./GradeStudent";
import MainMenuButtons from "./MainMenuButtons";
import StudentGrades from "./StudentGrades";
import axios from "axios";

export const StudentsContext = React.createContext<ContextData|null>(null);

const MainMenu = ()=>{

    const [validForm, setValidForm] = useState<boolean>(false);
    let [studentsData,setStudentsData] = useState([]);
  

    const getAllStudents = async ()=>{
        try{
            const resp = await axios.get(ALL_STUDENTS);
            if(resp.status === 200)
            {
                setStudentsData(resp.data);
            }
            
        } catch(err)
        {
            console.log(err);
        }
       
    };

    const studentsFullData :ContextData= {
        studentDataArr:studentsData,
        retrieveStudents:getAllStudents
    }

    useEffect(()=>{
        getAllStudents();
    },[])

    return(
        <div className="pannel">
            <div className="card">
             <StudentsContext.Provider value={{studentDataArr:studentsData,retrieveStudents:getAllStudents}}>

            
                <Routes>
                    <Route path="/" element={<MainMenuButtons/>} />
                    <Route path="/all-students" element={<AllStudents/>}/>
                    <Route path="/grade-student" element={<GradeStudent/>}/>
                    <Route path="/student-grades" element={<StudentGrades/>}/>
                    <Route path="/add-student" element={<AddStudent/>}/>
                </Routes>

                </StudentsContext.Provider> 
            </div>
        </div>
     
    )
};

export default MainMenu;