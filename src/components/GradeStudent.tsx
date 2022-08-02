import "./index.css"

import React, { useState } from "react";

import {ContextData} from "./Types";
import { GRADE_STUDENT } from "./API_ENDPOINTS";
import {Link} from "react-router-dom";
import { StudentsContext } from "./MainMenu";
import axios from "axios";

const GradeStudent = ()=>{

  let studentInfo:ContextData = React.useContext(StudentsContext) as ContextData;
  let studentInfoArr = studentInfo.studentDataArr;
  const [selectedStudentIndex,setSelectedStudentIndex] = useState(-1);
  const [query,setQuery] = useState(''); 
  const [subject,setSubject] = useState('');
  const [gradeValue,setGradeValue] = useState('');
  const [requestSuccessMessage,setReqSuccessMessage] = useState(false);
  const [errorMessage,setErrorMessage] = useState(false);
  const [wasOptionSelected,setWasOptionSelected] = useState(false);

  const checkAndSetGradeValue = (data:string)=>{
        setReqSuccessMessage(false);
        setErrorMessage(false);
        let num = Number(data);
        if(data.length === 0)
        {
                setGradeValue('');
        }
        if(isNaN(num))
        {       
                return;
        }
      
        if(num<1 || num>10)
        {
                return;
        }

        
        setGradeValue(num.toString());
  }

  const getSelectedStudent = (firstName:string,lastName:string)=>{
        for(let i=0;i<studentInfoArr.length;i++)
        {
                if(firstName === studentInfoArr[i].firstName && lastName === studentInfoArr[i].lastName )
                {
                        setSelectedStudentIndex(i);
                        return;
                }
        }
  }

  const postStudentGrade = async ()=>{

        try{
          const resp = await axios.post(GRADE_STUDENT,{
             
                     firstName:studentInfoArr[selectedStudentIndex].firstName,
                     lastName:studentInfoArr[selectedStudentIndex].lastName,
                     grade:parseInt(gradeValue),
                     subjectName:subject   
                }
              
          );
        
        
          if(resp.status === 200)
          {
                  setReqSuccessMessage(true);
          }

        } catch(err){
                console.log(err);
                setErrorMessage(true);
        }
  };

    return(
        <div className="grade-student-card">
                
                <h1 className="card-title">Grade student</h1>
                <Link to="/" className="link action-btn back-button"> Back to menu</Link>             
            <div className="search-form">
             <form>
                 <input type="text" onChange={(e)=>{setQuery(e.target.value)}} className="search-student-input" placeholder="Search for a student"/>
                 
              </form>
            </div>
           
             <div className="student-info-section">
             
                <h5>Selected Student</h5>
                <p>{selectedStudentIndex!=-1 && 
                `${studentInfoArr[selectedStudentIndex].firstName} ${studentInfoArr[selectedStudentIndex].lastName} `}</p>
                <div>
                    <input type="text" className="text-input-name" onChange ={(e)=>{setSubject(e.target.value); setErrorMessage(false); setReqSuccessMessage(false);}} placeholder="Insert Subject"/>
                    <input type="text" className="text-input-name" value={gradeValue} onChange={(e)=>{checkAndSetGradeValue(e.target.value)}} placeholder="Insert Grade"/>
                </div>
                <button onClick ={()=>{postStudentGrade()}} className={`grade-btn${!(gradeValue.length ===0 || subject.length === 0 || wasOptionSelected===false )? '' : '-disabled' }`} disabled={gradeValue.length ===0 || subject.length === 0 ||  wasOptionSelected===false }>Grade!</button>
               {requestSuccessMessage && <p>Upload Successful!</p>} 
               {errorMessage && <p>Something went wrong !</p>}

             </div> 
            
            
        <div className="result-list-container">

        <div className="student-result-list">
        {studentInfoArr.length>0 && 
        studentInfoArr.filter(studentSearched=>{
                const studentSearchedFullName = studentSearched.firstName+" "+studentSearched.lastName;
                if(query === '')
                {
                        return studentSearched;
                } else if (studentSearchedFullName.toLowerCase().includes(query.toLowerCase()))
                {
                        return studentSearched;
                }

        })
        .map((st:any,ind:number)=>{
                return(
                <div className="student-list-record" key={ind} onClick={()=>{setWasOptionSelected(true); getSelectedStudent(st.firstName,st.lastName)}}>
                    <div>
                        <p>{st.firstName} {st.lastName}</p>
                    </div>
                    <div className="description-container">
                                <p>Class:{st.classNumber}</p>
                    </div>
                </div>
                );
                 })}
            </div>  
        </div>
           
         
        </div>
    );
};

export default GradeStudent;