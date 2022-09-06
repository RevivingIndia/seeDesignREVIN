import React from 'react'
import Card from '../card'
// import Modal from '../modal'
import Searchbar from '../searchbar'
import "./main.css"
const Main = () => {
  return (
    <>
  
  <div className="background" style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2022/07/19/22/11/wallpaper-7333087_960_720.png")`,backgroundPosition:"center",backgroundSize:"cover"}}>

<div className="container">
		<div className="row">
			<div className="col-lg-12">
			
				<div id="content">
					
					<h1 className='h1-text' style={{color:"#fff"}}>The Little Sweet World</h1>
					<h3 style={{color:"#fff"}}>"All you need is love.</h3>
					<h3 style={{color:"#fff"}}>But a little chocolate now and then doesn't hurt"</h3>
		<Searchbar/>




					<hr/>
					
			</div>
		</div>
	</div>
</div>
</div>
<Card/>
<div class="card text-center">

  <div class="card-body" style={{height:"300px"}}>
    <h2 class="card-title text-primary mt-0" style={{fontSize:"50px"}}>Satisfied customers are our best ads.</h2>
    <p class="card-text text-dark m-full" style={{fontSize:"20px",textAlign:"center"}}>
    To earn the respect (and eventually love) of your customers,<br/> you first have to respect those customers. That is why Golden <br/>Rule behavior is embraced by most of the winning companies."
    </p>
    <a href="#" class="btn btn-primary" style={{borderRadius:"12px"}}>Learn More</a>
  </div>
  <div class="card-footer text-muted" style={{height:"300px",backgroundImage:`url("https://cdn.pixabay.com/photo/2022/06/21/14/32/neon-7275959_960_720.png")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"0px"}}>

  </div>
</div>
{/* <Modal/> */}
    </>
  )
}

export default Main