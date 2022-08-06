import "./index.css"

import React ,{useEffect, useRef, useState} from "react";
import ky, { KyResponse } from "ky";

import {ContextData} from "./Types";
import { GET_STUDENT_GRADES } from "./API_ENDPOINTS";
import {Link} from "react-router-dom";
import { StudentsContext } from "./MainMenu";

const StudentGrades = ()=>{

    let studentInfo:ContextData = React.useContext(StudentsContext) as ContextData;
    let studentInfoArr = studentInfo.studentDataArr;
    const [selectedStudentIndex,setSelectedStudentIndex] = useState(-1);
    const [query,setQuery] = useState(''); 
    const [errorMessage,setErrorMessage] = useState(false);
    const [dropdownText,setDropdownText] = useState("Select subject");
    const [noGrades, setNoGrades] = useState(false);
    const [subjectArr,setSubjects] = useState(['none']);
    const [grades,setGrades] = useState([]);
    const [filteredGrades,setFilteredGrades] = useState([]);
    const isMounted = useRef(false);

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
    
    const retriveStudentGrades = async()=>{
        setNoGrades(false);
        let resp;
        if(selectedStudentIndex !=-1)
        {
            try{
                resp = await ky(GET_STUDENT_GRADES,{
                      headers:{
                              firstName:  studentInfoArr[selectedStudentIndex].firstName,
                              lastName:  studentInfoArr[selectedStudentIndex].lastName
                      }
                  
                  }) as KyResponse;
                  
                  const gradesArr:any = await resp.json();
                    if(resp.body)
                    {
                      
                      setGrades(gradesArr);
                      if(gradesArr.length === 0)
                      {
                          setNoGrades(true);
                          return;
                      }
                      const subjects = new Set<string>();
                      for(const subj of gradesArr)
                      {
                          subjects.add(subj["subjectName"]);
                      }
                      
                  const allData:Array<string> = [];
                      subjects.forEach((key,value)=>{
                          allData.push(value);
                      })
                      setSubjects(allData);
      
                    }         
                    
           
              } catch(err:any){
                  if(err.response && err.response.status === 404)
                  {
                      setNoGrades(true);
                      return;
                  }   
                setErrorMessage(true);
              }
        }
      
    }

    const handleSelectStudent = (st:any)=>{
        getSelectedStudent(st.firstName,st.lastName);
        setFilteredGrades([]);
        setGrades([]);
        setSubjects([]);
        setErrorMessage(false); 
        setDropdownText('Select subject'); 
    }

    const handleSetDropdownText = (value:string)=>{
        setDropdownText(value);
        const gradesAfterFilter = grades.filter((gr:any)=>{return gr.subjectName === value});
        setFilteredGrades(gradesAfterFilter);
    }

    useEffect(()=>{
        
         if(isMounted.current === true)
         {
            console.log("I was called");
            retriveStudentGrades();
         }
         else
         {
            isMounted.current = true;
         }

    },[selectedStudentIndex])

    return(
        <div className="grade-student-card">
                <h1 className="card-title">Student Grades</h1>
             <Link to="/" className="link action-btn back-button"> Back to menu</Link>
             
            <div className="search-form">
             <form>
                 <input type="text" onChange={(e)=>{setQuery(e.target.value)}}  className="search-student-input" placeholder="Search for a student"/>
              </form>
            </div>
             <div className="student-info-section">
                <h5>Selected Student</h5>
                <p>{selectedStudentIndex!=-1 && 
                `${studentInfoArr[selectedStudentIndex].firstName} ${studentInfoArr[selectedStudentIndex].lastName} `}</p>
                <div className="dropdown-container">
                    <div className="dropdown">
                        <span>{dropdownText} &darr;</span>
                        <div className="dropdown-content">
                                {subjectArr && subjectArr.map((subj)=>{
                                    return(
                                        <p onClick = {(e)=>{handleSetDropdownText(subj)}} className="dropdown-item">{subj}</p>
                                    )
                                })}
                        </div>
                    </div>
                </div>
               <p>Grades:{filteredGrades.length!=0 && filteredGrades.map((gr:any)=>{
                return(
                    <span>{gr.gradeValue} </span>
                )
               }) }</p>
               {errorMessage && <p>Something went wrong!</p>}
               {noGrades &&<p>THE STUDENT DOES NOT HAVE ANY GRADES!!</p>}
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
                <div className="student-list-record" key={ind} onClick={()=>{ handleSelectStudent(st)}}>
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

export default StudentGrades;