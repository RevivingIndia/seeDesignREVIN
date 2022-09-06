import React from 'react'
import { useLocation } from 'react-router-dom'

const MyLibrary = () => {
    const location=useLocation();
    console.log(location.state.name,"my")
    const metal=[];
  return (
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et esse fuga alias dolorum, neque totam explicabo molestias ut laudantium ducimus optio. Impedit magnam tempora iusto vitae omnis doloribus earum commodi?
         <div style={{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundPosition:"center",backgroundImage:`url("https://masswallpapers.com/wp-content/uploads/2020/10/1-12.jpg")`}}>
            <h2 style={{color:"#fff",fontSize:"50px",textAlign:"center",fontFamily:"fantasy"}}>Metal Gallery</h2>
        </div>


        <div class="row mt-4">
          {metal && metal.map((data,index)=>(
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <div id='imagicon' style={{position:"relative",cursor:"pointer"}}>
    {/* <button type="button" class="btn btn-primary"> */}
    <img id={index+"img"}
      src={data.imgsrc}
      
      class="w-100  shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
      data-bs-toggle="modal" data-bs-target="#exampleModal"
      style={{height:"250px"}}
    />
    {/* </button> */}
   
    
    </div>


  </div>
          ))}
    
          </div>
    </div>
  )
}

export default MyLibrary