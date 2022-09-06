import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
import stone from "./stone.jpg"
import metal from "./metal1.jpg"
import wood from "./wood.jpg"
const Homepage = () => {
  
  return (
    <>
   
    <div className='home-container'>
    <h1 style={{textAlign:"center",marginTop:"100px",color:"white"}}>CHOOSE CATEOGRY HERE </h1>
    <div className="container-fluid">
  <div className="row">
    <div className="col-6 col-lg-3 mb-4">
      <div className="flip-container">
        <div className="flip flipPreview">
          <div className="card bg-primary text-white text-center flip-front">
            <div className="card-body d-flex flex-column justify-content-center">
              <p>
                <NavLink to="/search">
                <img src={stone} alt="" style={{width:"200px",height:"200px",borderRadius:"50%"}} />
                </NavLink>
              </p>
              <h5 className="card-title">STONE</h5>
            </div>
          </div>

          <div className="card text-center flip-back">
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">Lorem Ipsum</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div>
              <NavLink to='/search' className="btn btn-outline-secondary">Explore</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-6 col-lg-3 mb-4">
      <div className="flip-container">
        <div className="flip">
          <div className="card bg-danger text-white text-center flip-front">
            <div className="card-body d-flex flex-column justify-content-center">
              <p>
              <NavLink to="/search">
              <img src={wood} alt="" style={{width:"200px",height:"200px",borderRadius:"50%"}} />   
              </NavLink>           </p>
              <h5 className="card-title">WOOD</h5>
            </div>
          </div>

          <div className="card text-center flip-back">
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">Lorem Ipsum</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div>
                <NavLink to='/search' className="btn btn-outline-secondary">Explore</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-6 col-lg-3 mb-4">
      <div className="flip-container">
        <div className="flip">
          <div className="card bg-warning text-white text-center flip-front">
            <div className="card-body d-flex flex-column justify-content-center">
              <p>
              <NavLink to="/search">
              <img src={metal} alt="" style={{width:"200px",height:"200px",borderRadius:"50%"}} />   
              </NavLink>           </p>
              <h5 className="card-title">METAL</h5>
            </div>
          </div>

          <div className="card text-center flip-back">
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">Lorem Ipsum</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div>
              <NavLink to='/search' className="btn btn-outline-secondary">Explore</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
    </>
  )
}

export default Homepage