import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

function Create() {
  const navigate=useNavigate();
  const [inputs,setInputs]=useState({});
  const hadleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}))
  }

  const submitForm=()=>{
    console.log(inputs);
    http.post('/sub-category',inputs).then(res=>{
      navigate('/');
  })
  }
    return (
      <div>
          <h1 className="text-center">Create Page</h1>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card p-4">
                  <label>Name</label>
                  <input type="text" className="form-control mb-2" name="name"
                    value={inputs.name||''}
                    onChange={hadleChange}
                  />
                  <label>Description</label>
                  <input type="text" className="form-control mb-2" name="description"
                   value={inputs.description||''}
                   onChange={hadleChange}/>
                <button type="button" onClick={submitForm} className="btn btn-success">Create</button>
                </div>

               </div>
            </div>
          
      </div>
    );
  }
  
  export default Create;