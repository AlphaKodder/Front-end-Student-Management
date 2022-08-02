import "./index.css";

import React,{useState} from "react";

import { ADD_STUDENT } from "./API_ENDPOINTS";
import {ContextData} from "./Types";
import {Link} from "react-router-dom";
import { StudentsContext } from "./MainMenu";
import axios from "axios";

const AddStudent = ()=>{

    let studentInfo:ContextData = React.useContext(StudentsContext) as ContextData;
    const [firstNameText,setFirstNameText] = useState('');
    const [lastNameText, setLastNameText] = useState('');
    const [classNumber,setClassNumber] = useState('');
    const [showErrorMsg,setShowErrorMsg] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const isFormValid = classNumber.length!=0 && lastNameText.length!=0 && firstNameText.length!=0;
    const classNumberCheckAndHandle = (value:string)=>{
        const data = Number(value);
        if(value.length === 0)
        {
            setClassNumber('');
        }
        if(isNaN(data))
        {
            return;
        }
        if(data<1 || data>13)
        {
            return;
        }
        setClassNumber(data.toString());
    }
    
    const addStudentReq = async(e:any)=>{
        e.preventDefault();
        try{
            const resp = await axios.post(ADD_STUDENT,{
                firstName:firstNameText,
                lastName:lastNameText,
                classNumber:parseInt(classNumber)
            });
            console.log(resp);
            if(resp.status === 200)
            {
                setShowSuccessMsg(true);
                studentInfo.retrieveStudents();
            }
            ///daca requestul a avut success nu uita sa faci request sa iei din nou lista 
            /// de studenti din db!

        } catch(err){
            console.log(err);
            setShowErrorMsg(true);
        }
    }

    return(
        <div>
            <h1 className="card-title">Add Student</h1>
            <Link to="/" className="link action-btn back-button"> Back to menu</Link>
            <div className="form-wrapper">
                <form className="form-container">
                    <label htmlFor="text-input-firstName" className="input-tag">First Name</label>
                    <input type="text" id="text-input-firstName" onChange={(e)=>{setShowErrorMsg(false); setShowSuccessMsg(false); setFirstNameText(e.target.value)}} className="text-input-name" />
                    <label htmlFor="text-input-lastName" className="input-tag">Last Name</label>
                    <input type="text" id="text-input-lastName" onChange={(e)=>{setShowErrorMsg(false); setShowSuccessMsg(false); setLastNameText(e.target.value)}} className="text-input-name"/>
                    <input type="text" className="text-input-number" value={classNumber} onChange={(e)=>{classNumberCheckAndHandle(e.target.value); setShowErrorMsg(false); setShowSuccessMsg(false);}} placeholder="Class Number (1-13)"/>
                    {showSuccessMsg && <p>Student was successfully added!!</p>}
                    {showErrorMsg && <p>Error occured while adding student! Please try again later!</p>}
                    <button disabled={!isFormValid} onClick={(e)=>{addStudentReq(e)}} className={`action-btn${isFormValid? ' ' : '-disabled'}`}>Add Student!</button>
                </form>
            </div>
        </div>
    );

};

export default AddStudent;