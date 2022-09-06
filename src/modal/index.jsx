import React from 'react'
import { NavLink } from 'react-router-dom'
import "./modal.css"
const Modal = () => {
    const data=[
        {imgsrc:"https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         link:"/stone"
    },
        {imgsrc:"https://media.istockphoto.com/photos/different-metal-products-stainless-steel-profiles-and-tubes-picture-id652240904",
        link:"/metal"
    },
        {imgsrc:"https://media-exp2.licdn.com/dms/image/C561BAQEs8-NY-Acpog/company-background_10000/0/1557911497259?e=2147483647&v=beta&t=s0AbGOd0yS51sT4_YZ6ZuKmyNXjy3srNmMFKoZL0EZc",
        link:"/metal"
    },
    
        {imgsrc:"https://i.pinimg.com/originals/d4/63/f2/d463f2743917dbef8f995e7a8873cc8d.jpg",
        link:"/stone"
    },
    
        {imgsrc:"https://previews.123rf.com/images/detseven/detseven0608/detseven060800003/513211-a-group-of-nice-stones.jpg",
        link:"/wood"
    },
    {imgsrc:"https://cdn.shopify.com/s/files/1/0031/8878/5201/t/2/assets/offer_image_2.jpg?v=22372047258222560261621428389",
    link:"/wood"
},
    ]
  return (
    <div className='mt-4'>
<h2 style={{textAlign:"center",fontFamily:"cursive",marginTop:"50px",marginBottom:"50px",color:"royalblue"}}>OUR COLLECTIONS</h2>
     
<div class="container-gallery">
    {data.map((data,index)=>(

<div class={`popup popup-${index+1}`}>
    <NavLink to={data.link}>
<img class="img-responsive" alt="Pop Up Gallety" src={data.imgsrc}  style={{width:"250px",height:"300px",objectFit:"cover",objectPosition:"center"}}/>
</NavLink>
</div>
    ))}
   
 
</div>
    </div>
  )
}

export default Modal