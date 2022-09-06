import React, { useState } from 'react'
import "./search.css"
// import camera from "./camera.png"
import { useNavigate } from 'react-router-dom';
const Searchimg = () => {
    const [modal,setmodal]=useState('none');
    const [img,setimg]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvXhghObjtNsjtk1I86YJOQNPj0TFT80TVw&usqp=CAU");
    const nav=useNavigate();
    const handlemodal=()=>{
setmodal('block')
    }
    const handleimg=(e)=>{
        const reader=new FileReader();
        console.log(reader)
        
        reader.onload=()=>{
          if(reader.readyState ===2){
           setimg(reader.result)
           console.log(reader.result,"result")
        nav("/dashbord",{state:{id:1,name:reader.result,txt:"your image uploaded"}})

          }
        }
        reader.readAsDataURL(e.target.files[0])
        console.log(img,"img")
       }
  return (
    <>
    <div  className="main" style={{width:"100vw",height:"100vh", backgroundImage:`url("https://wallpaper.dog/large/5521906.jpg")`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundPosition:"cover"}}>
        <h2 style={{color:"black",fontSize:"66px",marginTop:"10px"}}>Search Similar Images</h2>
        <div className='search-container' style={{marginTop:"100px"}}>
            <input type="search" placeholder='search here....' className='search-btn'/>
            {/* <input type="file" id='file'/> */}
            <label  id='bg-label' onClick={handlemodal}>
            <i class='fas fa-camera' style={{fontSize:"35px",color:"black",marginTop:"5px"}}></i>
            </label>
        </div>
        {/* <img src="./camera.png" alt="" /> */}
    </div>
    <div className='modal-container' style={{display:`${modal}`}}>
        <div className='box'>
            <div className='up-section'>
                <p style={{marginRight:"20px",fontSize:"30px"}}>Find Similar Images</p>
                <p style={{marginRight:"20px",fontSize:"30px",cursor:"pointer"}} onClick={()=>setmodal("none")}>x</p>
            </div>
            <div className='drag'>
           <label htmlFor='file' style={{backgroundImage:`url(${img})`}} id="img-upld">

                <div className='drag-img' style={{
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat"
                }}>
                    
                </div>
            </label>

            </div>
            <input type="file" id="file" style={{display:"none"}} onChange={handleimg}/>
        </div>
    </div>
    </>
  )
}

export default Searchimg