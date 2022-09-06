import React, { useState } from 'react'
import { useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom'

const Uploadedsee = () => {
    const [disable,setDisable]=useState(true);
    const [val,setVal]=useState(1)
    const [img,setimg]=useState('https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png');
    const [preview,setPreview]=useState("https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png")
    const [storage,setStorage]=useState("https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png")
const location=useLocation();
const nav=useNavigate();
useEffect(()=>{
  if(location.state !== null){
  setimg(location.state.name);
  setVal(val+1)
  if(val==='111'){
    setDisable(false)
    }
  }else{
    setimg('https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png')
  }

},[])
const handlework=()=>{

  if (localStorage.getItem("work")) {
    array = JSON.parse(localStorage.getItem("work"));
  } else {
    var array = [];
  }
  array.push(img);
  localStorage.setItem("work",JSON.stringify(array))
  const getImg=localStorage.getItem("work");
  console.log(getImg,"img")
}


// preview image 
const handleimgpreview=(e)=>{
  e.preventDefault();
     const reader=new FileReader();
     console.log(reader)
     
     reader.onload=()=>{
       if(reader.readyState ===2){
        
        e.preventDefault();
        console.log(reader.result,"result")
        setPreview(reader.result)
        setVal(val+1)
    //  nav("/uploadsee",{state:{id:1,name:reader.result,txt:"your uploaded image"}})
        if(val==='111'){
        setDisable(false)
        }
       }
     }
     reader.readAsDataURL(e.target.files[0])
    }




// storage image 
const handleimgstorage=(e)=>{
  e.preventDefault();
     const reader=new FileReader();
     console.log(reader)
     
     reader.onload=()=>{
       if(reader.readyState ===2){
        
        e.preventDefault();
        console.log(reader.result,"result")
        setStorage(reader.result)
        setVal(val+1)
    //  nav("/uploadsee",{state:{id:1,name:reader.result,txt:"your uploaded image"}})
   
    setTimeout(()=>{
      if(val===3){
        setDisable(false)
        }    },500)
   
       }
     }
     reader.readAsDataURL(e.target.files[0])
    }


const submit=()=>{
  nav("/uploadedfiles")
  localStorage.removeItem('first')
  localStorage.removeItem('second')
  localStorage.removeItem('third');
  const images=[img,preview,storage]
  localStorage.setItem("images",JSON.stringify(images));
  
}
  return (
    <div>
        
   

<div class="col-12 mt-0" >
          <div class="card mb-4" style={{minHeight:"600px"}}>
            <div class="card-header pb-0 p-3">
              <h6 class="mb-1">Upload Files</h6>
              <p class="text-sm">Upload Your Files To See Design</p>
            </div>
            <div class="card-body p-3">
              <div class="row">
                <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                  <div class="card card-blog card-plain">
                    <div class="position-relative">
                      <a class="d-block shadow-xl border-radius-xl">
                        <img src={img} alt="img-blur-shadow" class="img-fluid shadow border-radius-xl" />
                      </a>
                    </div>
                    <div class="card-body px-1 pb-0">
                      <p class="text-gradient text-dark mb-2 text-sm">User_image1</p>
                      <a href="#">
                        <h5>
                          Image
                        </h5>
                      </a>
                      <p class="mb-4 text-sm">
                        06-08-2022
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                  <div class="card card-blog card-plain">
                    <div class="position-relative">
                    <label htmlFor="preview">
                      <a class="d-block shadow-xl border-radius-xl">
                    
                        <img src={preview} alt="img-blur-shadow" class="img-fluid shadow border-radius-lg" />
                      </a>
                      </label>
                      <input type="file" id="preview" style={{display:"none"}}  onChange={handleimgpreview}/>

                    </div>
                    <div class="card-body px-1 pb-0">
                    <p class="text-gradient text-dark mb-2 text-sm">User_image2</p>
                      <a href="#">
                        <h5>
                          Image
                        </h5>
                      </a>
                      <p class="mb-4 text-sm">
                        06-08-2022
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                  <div class="card card-blog card-plain">
                    <div class="position-relative">
                    <label htmlFor="storage">
                      <a class="d-block shadow-xl border-radius-xl">
                      
                        <img src={storage} alt="img-blur-shadow" class="img-fluid shadow border-radius-xl" />
                      </a>
                      </label>
                      <input type="file" id="storage" style={{display:"none"}}  onChange={handleimgstorage}/>

                    </div>
                    <div class="card-body px-1 pb-0">
                    <p class="text-gradient text-dark mb-2 text-sm">User_image3</p>
                      <a href="#">
                        <h5>
                          Image
                        </h5>
                      </a>
                      <p class="mb-4 text-sm">
                        06-08-2022
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                      <button type="button" class="btn btn-primary" disabled={disable} onClick={submit}>Submit</button>

                      
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                  <div class="card h-100 card-plain border">
                    <div class="card-body d-flex flex-column justify-content-center text-center">
                      <a href="#">
                        <i class="fa fa-plus text-secondary mb-3"></i>
                        <h5 class=" text-secondary"> New project </h5>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>

            </div>
          </div>
        </div>
      </div>

  
  )
}

export default Uploadedsee