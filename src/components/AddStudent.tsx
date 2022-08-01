import "./index.css";

import {Link} from "react-router-dom";
import React from "react";

const AddStudent = ()=>{
    return(
        <div>
            <h1 className="card-title">Add Student</h1>
            <Link to="/" className="link action-btn back-button"> Back to menu</Link>
            <div className="form-wrapper">
                <form className="form-container">
                    <label htmlFor="text-input-firstName" className="input-tag">First Name</label>
                    <input type="text" id="text-input-firstName" className="text-input-name" />
                    <label htmlFor="text-input-firstName" className="input-tag">Last Name</label>
                    <input type="text" className="text-input-name"/>
                    <input type="text" className="text-input-number" placeholder="Class Number"/>
                    <button className="action-btn">Add Student!</button>
                </form>
            </div>
        </div>
    );

};

export default AddStudent;