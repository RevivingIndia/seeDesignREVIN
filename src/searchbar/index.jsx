import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./searchbar.css"
const Searchbar = () => {
  const [display,setDisplay]=useState(false)
  const handle=(e)=>{
    e.preventDefault();
    setDisplay(!display)
  }
  const [img,setimg]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvXhghObjtNsjtk1I86YJOQNPj0TFT80TVw&usqp=CAU");
  const nav=useNavigate();
 
  const handleimg=(e)=>{
   e.preventDefault();
   const imgdata=document.getElementById("file").value;
   console.log(imgdata,"imgpath")

      const reader=new FileReader();
      
      reader.onload=()=>{
        if(reader.readyState ===2){
         setimg(reader.result)
         e.preventDefault();
         console.log(reader,"result")
      nav("/dashbord",{state:{id:1,name:reader.result,txt:"your uploaded image",localpath:imgdata}})

        }
      }
      reader.readAsDataURL(e.target.files[0])
      console.log(img,"img")
     }
  return (
    <>



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-dark" id="exampleModalLabel">Find Similar Images</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='box' style={{marginTop:"10%",width:"100%"}}>
           
            <div className='drag'>
           <label htmlFor='file' style={{backgroundImage:`url(${img})`}} id="img-upld"          >

                <div className='drag-img' style={{
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat"
                }}>
                    
                </div>
            </label>

            </div>
            <input type="file" id="file" style={{display:"none"}} onChange={(e)=>handleimg(e)}/>
        </div>
      </div>
      <div class="modal-footer">
       
      </div>
    </div>
  </div>
</div>
<form className="search_bar larger" style={{width:"700px"}} >
  <div className="search_dropdown"  onClick={handle}>
  <select name="cars"  style={{width:"100px",height:"100%",outline:"none",border:"none"}}>
  <option value="volvo">All</option>
    <option value="saab">2D Doors</option>
    <option value="opel">2.5D Doors</option>
    <option value="audi">3D Doors</option>
    <option value="audi">Side Mouldings</option>
    <option value="audi">Kitchen Cabinets</option>
    <option value="audi">Wardrobe Design</option>
    <option value="audi">2D Wall Art</option>
    <option value="audi">3D Wall Art</option>
    <option value="audi">Grill Board/Eaves</option>
    <option value="audi">Staircase/Posts/Railings</option>
  </select>
  </div>
  {/* <button type="submit" value="Search" >Search</button> */}

  <input type="text" placeholder="Search for anything" style={{color:"black",marginLeft:"100px"}} />
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  
</button>
</form>


    </>
  )
}

export default Searchbar