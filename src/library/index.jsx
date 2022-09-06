import React from 'react'
import { useState } from 'react';

const Library = () => {
   const arry=[
    {name:"30/07/2022"},
    {name:"30/07/2022"},
    {name:"30/07/2022"},
    {name:"30/07/2022"}, {name:"30/07/2022"},
    {name:"30/07/2022"},
    {name:"30/07/2022"},
    {name:"30/07/2022"}, {name:"30/07/2022"},
    {name:"30/07/2022"},
    {name:"30/07/2022"},
    {name:"30/07/2022"}, {name:"30/07/2022"},
    {name:"30/07/2022"},
    {name:"30/07/2022"},
    {name:"30/07/2022"},
   
   ]
   const [data,setdata]=useState(arry)
    const handlelib=()=>{
        const a=document.getElementById("text").value;




    }
    
  return (
    <div>
        <div class="form-outline mb-4 mt-4 d-flex m-4" style={{justifyContent:"center",alignItems:"center",height:"50px"}}>
<select name="cars"  style={{width:"100px",height:"100%",outline:"none"}}>
    <option value="volvo">All</option>
    <option value="saab">Stone</option>
    <option value="opel">Metal</option>
    <option value="audi">Wood</option>
  </select>
  <input type="search" class="form-control" id="datatable-search-input" style={{height:"100%"}} />
  <label class="form-label mb-0" for="datatable-sea" style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",background:"royalblue",height:"100%"}}>
  <select name="cars"  style={{width:"200px",height:"100%",outline:"none"}}>
    <option value="volvo">Library</option>
    <option value="saab">View All</option>
    <option value="opel">My Libraries</option>
  </select>
  </label>
</div>
<h1 style={{textAlign:"center"}}>Library</h1>

<div className='col-12 m-2' style={{width:"100%",display:"flex"}}>
    {/* <div className='col-3' >
    <div class="card" style={{width: "18rem",height:"400px",margin:"20px"}}>
        <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",background:"#80808040"}}>
        <input type="text" id='text' placeholder='Library' style={{border:"none",borderBottom:"2px solid",outline:"none",background:"transparent",color:"black"}}/>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px",fontSize:"40px",cursor:"pointer"}}>
        <i class="bi bi-x"></i>
        
        <i class="bi bi-check" onClick={handlelib}></i>
        </div>
        </div>
 
</div>
    </div> */}
    <div className='col-12 d-flex' style={{flexWrap:"wrap"}} >
        {data ? data.map((data,index)=>(
  <div class="card col-3 mb-4">
  <img src="https://cdn.shopify.com/s/files/1/0532/2670/0961/products/product-image-1685268867_1000x.jpg?v=1613669396" class="card-img-top" alt="..." />
  <div class="card-body" key={index}>
    <h5 class="card-title">{data.name}</h5>
    <i class="bi bi-delete" style={{float:"right"}}></i>
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <i class="bi bi-trash3-fill"></i>
    <i class="bi bi-share-fill"></i>
    <a href="https://cdn.shopify.com/s/files/1/0532/2670/0961/products/product-image-1685268867_1000x.jpg?v=1613669396" download="https://cdn.shopify.com/s/files/1/0532/2670/0961/products/product-image-1685268867_1000x.jpg?v=1613669396">
    <i class="bi bi-download"></i>
    </a>
    </div>
  </div>
</div>
        )):
        <div class="card col-4" style={{width: "18rem"}}>
        <img src="https://cdn.shopify.com/s/files/1/0532/2670/0961/products/product-image-1685268867_1000x.jpg?v=1613669396" class="card-img-top" alt="..." />
        <div class="card-body" >
          <h5 class="card-title">not available</h5>
          <i class="bi bi-list" style={{float:"right"}}></i>

        </div>
      </div>
        }
  
    </div>
</div>
    </div>
  )
}

export default Library