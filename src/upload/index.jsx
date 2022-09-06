import React from 'react'
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const nav=useNavigate()
  const handleimg=(e)=>{
    e.preventDefault();
       const reader=new FileReader();
       console.log(reader)
       
       reader.onload=()=>{
         if(reader.readyState ===2){
          
          e.preventDefault();
          console.log(reader.result,"result")
       nav("/uploadsee",{state:{id:1,name:reader.result,txt:"your uploaded image"}})
 
         }
       }
       reader.readAsDataURL(e.target.files[0])
      }
  return (
    <div>
         <section class="hh " style={{backgroundColor: "#eee",height:"100vh"}}>
  <div class="container ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-5 col-md-5 col-xl-5 mt-4">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

                <p class=" h2  mb-5  mt-4">Your File To SeeDesign</p>
                <label htmlFor='upload' className='mb-0' style={{border:"1px solid",borderRadius:"3px",borderStyle:"dotted"}}>
                  <img src="https://iconarchive.com/download/i83800/pelfusion/flat-folder/Upload-Folder.ico" alt="" />
                </label>

               
               <input type="file"  id='upload' style={{display:"none"}} onChange={(e)=>handleimg(e)}/>

              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Upload