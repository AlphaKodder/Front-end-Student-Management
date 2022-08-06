import "./index.css"

import React , {useContext, useEffect, useState} from "react";
import {Route, Routes} from "react-router"
import ky, { KyResponse } from "ky";

import { ALL_STUDENTS } from "./API_ENDPOINTS";
import AddStudent from "./AddStudent";
import AllStudents from "./AllStudents";
import { ContextData } from "./Types";
import GradeStudent from "./GradeStudent";
import MainMenuButtons from "./MainMenuButtons";
import StudentGrades from "./StudentGrades";

export const StudentsContext = React.createContext<ContextData|null>(null);

const MainMenu = ()=>{
    const [validForm, setValidForm] = useState<boolean>(false);
    let [studentsData,setStudentsData] = useState([]);
  
    const getAllStudents = async ()=>{
        try{
            const resp = await ky.get(ALL_STUDENTS) as KyResponse;
            const bodyres:any  = await resp.json();
            if(resp.status === 200)
            {
                setStudentsData(bodyres);
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