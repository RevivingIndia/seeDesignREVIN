import React from 'react'
import "./card.css"
import stone from "./stone1.jpg"
import wood from "./wood1.jpg"
import metal from "./metal1.jpg"
import Searchbar from '../searchbar'
import { NavLink, useNavigate } from 'react-router-dom'
const Card = () => {
    const data=[
        {
            imgsrc:"https://stylesatlife.com/wp-content/uploads/2019/10/latest-house-door-designs-in-india.jpg.webp",
            title:"2D Doors Gallery",
            para:"6k+ images",
            name:"2D Doors Gallery",
            path:"/stone"
        },
        {
            imgsrc:"https://thumbs.dreamstime.com/b/chinese-door-14798876.jpg",
            title:"2.5D Doors",
            para:"6k+ images",
            name:"2.5D Doors",
            path:"/stone"
        },
        {
            imgsrc:"https://5.imimg.com/data5/NN/OM/MY-32149207/decorative-wooden-door-250x250.jpg",
            title:"3D Doors",
            para:"6k+ images",
            name:"3D Doors",
            path:"/stone"
        },
        {
            imgsrc:"https://media.istockphoto.com/photos/white-double-classic-door-picture-id1073774566?k=20&m=1073774566&s=612x612&w=0&h=MXuBA5cJa1reEyOAbEI7uxnhKeZmLYllQ3AC1m8REDw=",
            title:"Side Mouldingsy",
            para:"6k+ images",
            name:"Side Mouldings",
            path:"/stone"
        },
        {
            imgsrc:"https://4.imimg.com/data4/LF/CN/ANDROID-64598513/product-500x500.jpeg",
            title:"Kitchen Cabinets",
            para:"6k+ images",
            name:"Kitchen Cabinets",
            path:"/stone"
        },
        {
            imgsrc:"https://img.staticmb.com/mbcontent//images/uploads/2021/7/wardrobe-design_1627390902114.jpg",
            title:"Wardrobe Designs",
            para:"6k+ images",
            name:"Wardrobe Designs",
            path:"/stone"
        },
        {
            imgsrc:"https://m.media-amazon.com/images/I/618wR7BOjML._AC_SL1000_.jpg",
            title:"2D Wall Art",
            para:"6k+ images",
            name:"2D Wall Art",
            path:"/stone"
        },
        {
            imgsrc:"https://5.imimg.com/data5/SELLER/Default/2021/1/JX/VE/VI/27413479/hd-wallpaper-500x500.jpg",
            title:"3D Wall Art",
            para:"6k+ images",
            name:"3D Wall Art",
            path:"/stone"
        },
        {
            imgsrc:"https://cdn.exoticindia.com/images/products/original/homeandliving/hlb431_a07.jpg",
            title:"Grill Board/Eaves",
            para:"6k+ images",
            name:"Grill Board/Eaves",
            path:"/stone"
        },
        {
            imgsrc:"https://cdn.decorpad.com/photos/2018/07/23/white-and-brown-staircase-colors.jpg",
            title:"Staircase/Posts/Railings",
            para:"6k+ images",
            name:"Staircase/Posts/Railings",
            path:"/stone"
        },
        {
            imgsrc:"https://static.wixstatic.com/media/f75c25_865ed72af477443382812b2a16208b1b~mv2.png/v1/fill/w_3724,h_1716,al_c/f75c25_865ed72af477443382812b2a16208b1b~mv2.png",
            title:"2D Bed Design",
            para:"6k+ images",
            name:"2D Bed Design",
            path:"/stone"
        },
        {
            imgsrc:"https://1.bp.blogspot.com/-UqI-Tc9HFMc/YOqbuasA4II/AAAAAAAACUY/1JXWVKjKLFAP5YdPq1-RGAcd94SUrztOQCLcBGAsYHQ/s1920/Cover.gif",
            title:"2.5D Bed Design",
            para:"6k+ images",
            name:"2.5D Bed Design",
            path:"/stone"
        },
        {
            imgsrc:"https://i0.wp.com/cncindia.in/wp-content/uploads/2021/07/3DBED-1001-Bed-CNC-Design-Artcam-3D-Model-CNCindia.IN-2.jpg?fit=800%2C800&ssl=1",
            title:"3D Bad Design",
            para:"6k+ images",
            name:"3D Bad Design",
            path:"/stone"
        },
    ]
    const nav=useNavigate();
    const dataget=(e)=>{
        console.log(e,"id")
        fetch("../database/database.json").then(res=>{
         return res.json();
        }).then((data)=>{
          console.log(data.cateogry[0].title);
         const aa= data.cateogry.filter((data1,index)=>{
            if(data1.title===e){
              return data1
      
            }
          })
          console.log(aa,"abjbjb")
          nav("/stone",{state:{data:aa}})
        })
      }
  return (
    <div>
  
<h5 style={{textAlign:"center",color:"black",marginTop:"50px"}}>CURATED ASSET COLLECTIONS</h5>
<p style={{textAlign:"center",color:"black",margin:"auto",fontSize:"30px",fontFamily:"monospace"}}>Explore diverse collections of our most<br/> incredible high-resolution, royalty-free, stock<br/> assets</p>
  
  <main class="gallery gallery__content--flow " style={{padding:"10px",marginTop:"0px"}}>
{data.map((data,index)=>(
    <div  style={{textDecoration:"none",margin:"10px"}}  onClick={()=>dataget(data.name)}>
    <figure >
        <img class="imgg" src={data.imgsrc}
            alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
            title="Photo by Giacomo Lucarini for Unsplash" />
        <figcaption class="header__caption" role="presentation">
            <h1 class="title title--primary">{data.title}</h1>
            <h2 class="title title--secondary">{data.para}</h2>
        </figcaption>
    </figure>
    <h4 style={{textAlign:"center",textDecoration:"none",fontSize:"20px",color:"black"}}>{data.name}</h4>
    </div>
))}
    </main>
    </div>
  )
}

export default Card