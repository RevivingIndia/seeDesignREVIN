import React, { useState } from 'react'

const Designer = () => {
    const [sideBar,setSideBar]=useState(false);
    const [sideBar1,setSideBar1]=useState(false);
    const [sideBar2,setSideBar2]=useState(false);



    const [arr,setArr]=useState([]);
    const [img,setImg]=useState('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');
    const [img1,setImg1]=useState('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');
    const [img2,setImg2]=useState('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');

    const handleimgpreview=(e)=>{
      e.preventDefault();
         const reader=new FileReader();
       
          reader.onload=()=>{
            if(reader.readyState ===2){
             
             e.preventDefault();
             console.log(reader.result,"result")
             if(reader.result){
              setImg('https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png')

             }else{
              setImg('https://cdn-icons-png.flaticon.com/512/59/59836.png')

             }
          console.log(e.target.files[0].name,"nnn")
 console.log(img)
       
          }
         }
        
         reader.readAsDataURL(e.target.files[0])
        }


        const handleimgpreview1=(e)=>{
          e.preventDefault();
             const reader=new FileReader();
           
              reader.onload=()=>{
                if(reader.readyState ===2){
                 
                 e.preventDefault();
                 console.log(reader.result,"result")
                //  setImg1(reader.result)
              console.log(e.target.files[0].name,"nnn")
              if(reader.result){
                setImg1('https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png')
  
               }else{
                setImg1('https://cdn-icons-png.flaticon.com/512/59/59836.png')
  
               }
                 
              
                }
              }
            
             reader.readAsDataURL(e.target.files[0])
            }

            const handleimgpreview2=(e)=>{
              e.preventDefault();
                 const reader=new FileReader();
               
                  reader.onload=()=>{
                    if(reader.readyState ===2){
                     
                     e.preventDefault();
                    //  console.log(reader.result,"result")
                     setImg2(reader.result)
                  console.log(e.target.files[0].name,"nnn")
         
                  if(reader.result){
                    setImg2('https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png')
      
                   }else{
                    setImg2('https://cdn-icons-png.flaticon.com/512/59/59836.png')
      
                   }
                   
                    }
                  }
                
                 reader.readAsDataURL(e.target.files[0])
                }

        const handleRevision=()=>{
        const Designer_Data=[{
          type:"Image File",
          Img:img,
        },{
          type:"Image File",
          Img:img1,
        },{
          type:"Design File",
          Img:img2,
        }]
        if(img && img1 && img2){
          console.log(Designer_Data,"Designer_Data")

        }
        }
      
  return (
    <div>
      


      <div class="modal fade" id="exampleModalTogglescreenname122" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Successfully Uploaded !</p>

      <div className='d-flex' style={{justifyContent:"space-around"}}>
      
      </div>
      </div>
     
    </div>
  </div>
</div>



      <div class="modal fade" id="exampleModalTogglescreenname" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
      <p>Are Want To Sure Upload Images ?</p>

      <div className='d-flex' style={{justifyContent:"space-around"}}>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4">No</button>
      <button class="btn btn-success btn-md bg-primary btn-block mt-4" data-bs-target="#exampleModalTogglescreenname1" data-bs-toggle="modal" data-bs-dismiss="modal">Yes</button>

      </div>
      </div>
     
    </div>
  </div>
</div>




<div class="modal fade" id="exampleModalTogglescreenname1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1" >
  <div class="modal-dialog modal-dialog-centered" style={{paddingRight:"0px",minWidth:"1250px"}}>
    <div class="modal-content">
      <div class="modal-header" style={{borderBottom:"0px"}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
    
      <div style={{minHeight:"500px"}} >
   <form>
   <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
    
     <div class="container-fluid py-4">
       <div class="row">
         <div class="col-12">
           <div class="card mb-0">
           
             <div class="card-body px-0 pt-0 ">
             <h4>Upload Your Design </h4>

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
                     
             </th>
                       <th class="text-secondary opacity-7"></th>
                     </tr>
                   </thead>
                   <tbody>
   <tr>
  
     <td>
       <div class="d-flex px-2 py-1" style={{justifyContent:"center"}}>
 
         <div>
           <img src={img} class="avatar  me-3" alt="user1" style={{width:"100px",height:"100px"}} />
         </div>
         
       </div>
     </td>
     <td>
       <p class="text-xs font-weight-bold mb-0">Image File</p>
     </td>
    
    
     <td class="align-middle text-center">
       <div>
       
         <label htmlFor="file" class="btn bg-gradient-primary " >
         Upload
         </label>
         <input type="file" id="file" style={{display:"none"}} onChange={handleimgpreview} required/>
       </div>
       
     </td>
   </tr>
   <tr>
   
     <td>
       <div class="d-flex px-2 py-1" style={{justifyContent:"center"}}>
 
         <div>
           <img src={img1} class="avatar  me-3" alt="user1" style={{width:"100px",height:"100px"}} />
         </div>
         
       </div>
     </td>
     <td>
       <p class="text-xs font-weight-bold mb-0">Preview File</p>
     </td>
    
    
     <td class="align-middle text-center">
     <div>
       
       <label htmlFor="file1" class="btn bg-gradient-primary " >
       Upload
       </label>
       <input type="file" id="file1" style={{display:"none"}} onChange={handleimgpreview1} required/>
     </div>
     </td>
   </tr>
   <tr>
  
     <td>
       <div class="d-flex px-2 py-1" style={{justifyContent:"center"}}>
 
         <div>
           <img src={img2} class="avatar  me-3" alt="user1" style={{width:"100px",height:"100px"}} />
         </div>
         
       </div>
     </td>
     <td>
       <p class="text-xs font-weight-bold mb-0">Design File</p>
     </td>
    
    
     <td class="align-middle text-center">
     <div>
       
       <label htmlFor="file2" class="btn bg-gradient-primary " >
       Upload
       </label>
       <input type="file" id="file2" style={{display:"none"}} onChange={handleimgpreview2} required/>
     </div>
     </td>
   </tr>
   
                   
                   
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
         </div>
       </div>
     
     </div>
     <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
       <div class="container-fluid py-1 px-3">
         <nav aria-label="breadcrumb" className='w-100'>
           <ol class="breadcrumb1 bg-transparent mb-0 pb-0 pt-0 px-0  me-5" style={{display:"flex",justifyContent:"center"}}>
           
           <button class="btn bg-gradient-primary mt-0 w-20" type="submit" onClick={handleRevision}   data-bs-target="#exampleModalTogglescreenname122" data-bs-toggle="modal" data-bs-dismiss="modal">Submit</button>
 
           </ol>
         
         </nav>
        
       </div>
     </nav>
     </main>
   </form>
     </div>
      </div>
     
    </div>
  </div>
</div>











<div class="container-fluid px-4 py-5  text-center" style={{backgroundImage:`url("https://images.ctfassets.net/hrltx12pl8hq/1fR5Y7KaK9puRmCDaIof7j/09e2b2b9eaf42d450aba695056793607/vector1.jpg")`,height:"300px",display:"flex",alignItems:"center",justifyContent:"center"}}>
	<div class="lc-block d-block mx-auto mb-4 w-100">
	<h2 style={{color:"white",textAlign:"center"}}>Upload Your Files For Sell</h2>
	</div>
	<div class="lc-block">
		
	</div>
	

	
</div>
   
<div class="container-fluid px-4 py-5  text-center" >
	<div class="lc-block d-block mx-auto mb-4 w-100" data-bs-target="#exampleModalTogglescreenname" data-bs-toggle="modal" data-bs-dismiss="modal" style={{cursor:"pointer",backgroundImage:`url("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg")`,height:"300px",display:"flex",alignItems:"center",justifyContent:"center",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
	<h2 style={{color:"white",textAlign:"center"}}>Click Here To Browse Your Files</h2>
	</div>
	<div class="lc-block">
		
	</div>
	

	
</div>
</div>
  )
}

export default Designer