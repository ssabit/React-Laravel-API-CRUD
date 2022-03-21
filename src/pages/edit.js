import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

function Edit() {
  const navigate=useNavigate();
  const [inputs,setInputs]=useState({});
  const {id}=useParams();

  useEffect(() => {
    fetchSubcategory()
  }, []);
  
  const fetchSubcategory=()=>{
    http.get('/sub-category/'+id).then(res=>{
      setInputs({
        name:res.data.data.name,
        description:res.data.data.description,
      });
    });
}

  const hadleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}))
  }

  const submitForm=()=>{
    console.log(inputs);
    http.put('/sub-category/'+id,inputs).then(res=>{
      navigate('/');
  })
  }
    return (
      <div>
          <h1 className="text-center">Edit Page</h1>
            <div className="row">
              <div className="col-sm-6 justify-content-center">
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
                <button type="button" onClick={submitForm} className="btn btn-success">Update</button>
                </div>

               </div>
            </div>
          
      </div>
    );
  }
  
  export default Edit;