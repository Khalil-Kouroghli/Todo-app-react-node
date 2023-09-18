import React, { useState } from "react";

const Form = ({handleAdd}) => {
    const [form,setForm]=useState({
        user:"",
        content:""
    })
    const handleFormCHange =(e)=>{

        setForm({...form,[e.target.name]:e.target.value})

    }
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
         User name
        </label>
        <input
        onChange={(e)=>handleFormCHange(e)}
        name="user"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="..ex:Bango"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         Content
        </label>
        <textarea
        onChange={(e)=>handleFormCHange(e)}
        name="content"
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="2"
        ></textarea>
        <button onClick={()=>{handleAdd(form)}} >Submit</button>
      </div>
    </>
  );
};

export default Form;
