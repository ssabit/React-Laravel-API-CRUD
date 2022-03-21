import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../http";

function View() {
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

    return (
      <div>
          <h1 className="text-center">View Page</h1>
            <div className="row">
              <div className="col-sm-6 justify-content-center">
                <h4>Name</h4>
                <p>{inputs.name}</p>
                <h4>Description</h4>
                <p>{inputs.description}</p>
               </div>
            </div>
          
      </div>
    );
  }
  
  export default View;