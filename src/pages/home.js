import { useState,useEffect } from "react";
import http from "../http";
import { Link } from 'react-router-dom';
function Home() {
const [subcategories, setSubcategories]=useState([]);

useEffect(() => {
    fetchAllCategories();
}, []);

const fetchAllCategories=()=>{
    http.get('/sub-category').then(res=>{
        setSubcategories(res.data.data);
    })
}

const deleteSubCategory=(id)=>{
    http.delete('/sub-category/'+id).then(res=>{
        fetchAllCategories();
    })
}
console.log(subcategories);
    return (
      <div>
          <h1 className="text-center">Home Page</h1>
          
          <table className="table">
              <thead>
                  <tr>
                      <th>SL No.</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
              {subcategories.map((scategory,index)=>(
                      <tr key={scategory.sub_category_id}>
                        <td>{index+1}</td>
                        <td>{scategory.name}</td>
                        <td>{scategory.description}</td>
                        <td>
                            <Link className="btn btn-info m-2" to={{pathname:"/view/"+scategory.sub_category_id}}>View</Link>
                            <Link className="btn btn-warning m-2" to={{pathname:"/edit/"+scategory.sub_category_id}}>Edit</Link>
                            <button type="button" className='btn btn-danger' onClick={()=>{deleteSubCategory(scategory.sub_category_id)}}>Delete</button>
      
                        </td>
                      </tr>
                     
                  ))}
                 
              </tbody>
          </table>
      </div>
    );
  }
  
  export default Home;