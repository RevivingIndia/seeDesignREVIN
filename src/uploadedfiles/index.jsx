import React, { useState } from 'react'
import { useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { NavLink } from 'react-router-dom';
import "./upload.css"
const UploadedFiles = () => {
    const a=localStorage.getItem("images");
    const [img,setimg]=useState(JSON.parse(a));
    const [preview,setPreview]=useState("https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png")
    const [storage,setStorage]=useState("https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png")
    const [state,setState]=useState({  photoIndex: 0,
        isOpen: false,})
  const [num,setNum]=useState(0);
useEffect(()=>{
    const a=localStorage.getItem("images");
    console.log(img,"koijihj");
   
   
},[])

const arr=[
  {imgsrc:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
   name:"abc.jpg"},
   {imgsrc:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
   name:"abc.jpg"},
   {imgsrc:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
   name:"abc.jpg"},
   {imgsrc:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
   name:"abc.jpg"},
]
const { photoIndex, isOpen } = state;
let clip = document.querySelectorAll(".vid")
console.log(clip,'hhh')

const handlevid=(e)=>{
  console.log(e.target.id)
  document.getElementById(e.target.id).play();
}
const handlediv2=(e)=>{
  console.log(e.target.id)
  document.getElementById(e.target.id).pause();
}
  return (
    <div>



<main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb" className='w-100'>
          {/* <ol class="breadcrumb1 bg-transparent mb-0 pb-0 pt-0 px-0  me-5" style={{display:"flex",justifyContent:"space-around"}}>
          <a class="btn bg-gradient-primary mt-0 w-20" type="button" onClick={()=>setSideBar(true)}>Upload Files</a>
          <button class="btn bg-gradient-primary mt-0 w-20" type="button" onClick={handleRevision}>Send to revision</button>

          </ol> */}
        <ul style={{listStyle:"none",display:"flex",justifyContent:"start",width:"500px"}}>
        {/* <li>File types:
            <select>
                <option value="a">ALL</option>
              
            </select>
        </li> */}
        <li>Sort by:
            <select>
                <option value="a">Upload date</option>
                <option value="a">Submission Status</option>
               
            </select>
        </li>
    </ul>
    
        </nav>
       
      </div>
    </nav>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <h6>Files table</h6>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        <h6>
                        Preview
                        </h6>
                        </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      <h6>
                      File
                        </h6>
                        </th>
                     
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        <h6>
                        status
                        </h6>
                        </th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        <h6>
                        Date
                        </h6>
                       </th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr && arr.map((data,index)=>(
  <tr>
  
    <td>
      <div class="d-flex px-2 py-1">

        <div id='video'>
          <img src={data.imgsrc} class="avatar  me-3" alt="user1" style={{width:"100px",height:"100px",position:"absolute"}} />
          <video src=
"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4" muted class="vid avatar  me-3"  id={index}
        loop style={{height:"100px", width: "100px",position:"relative",objectFit:"cover"}} onMouseOver={(e)=>handlevid(e)} onMouseOut={(e)=>handlediv2(e)}>
    </video>
        </div>
       
      </div>
    </td>
    <td>
      <p class="text-xs font-weight-bold mb-0">{data.name}</p>
    </td>

   
   
    <td class="align-middle text-center">
      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Ok
      </a>
    </td>
    <td class="align-middle text-center">
      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        13/8/2022
      </a>
    </td>
  </tr>
                    ))}
                  
                  
                  </tbody>
                </table>
              </div>
            </div>
            <nav aria-label="Page navigation example">
  <ul class="pagination" style={{justifyContent:"center"}}>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
              </div>
            </div>
      </div>
      <div class="modal-body" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        
        
      </div>
     </div>
   


y







    




</main>    
      </div>




    
  )
}

export default UploadedFiles