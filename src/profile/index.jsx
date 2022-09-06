import React, { useEffect, useState } from "react";
import "./profile.css";
import { NavLink, useNavigate } from 'react-router-dom';
// import "./header.css";
import  Axios  from "axios";
import Navbar from "../comp/navbar";
const Profile = () => {
  const [general, setGeneral] = useState("block");
  const [order, setOrder] = useState("none");
  const [add, setAdd] = useState("none");
  const [pay, setpay] = useState("none");
  const [edit,setedit]=useState(true);
  const nav=useNavigate();
    const url = "http://127.0.0.1:8000/updateprofile/";
const [value,setvalue]=useState({
  username_id:"",
  email:"",
  mobile:"",
  zipcode:"",
  gst:"",
  first_name:"",
  last_name:""
})
  // const [data, setData] = useState({
  //   name:"",
  //   primary_email: "",
  //   mobile:"",
  //   country:"",
  //   secondary_email:"",
  //   First_language:"",
  //   Second_language:"",

  const token=localStorage.getItem("token");
    
  // });
 
  // const email=document.getElementById('typeEmailX')|| "";
  // const pass=document.getElementById('typePasswordX') || "";
  const submitdata=(e)=>{
    
    // e.preventDefault();
    fetch(url,{
      method:"POST",
      headers:{
       'Content-Type': 'application/json',
       "Authorization":`Token ${token}`
      },
      body:JSON.stringify({
      //  username_id:value.username_id,
       email:value.email,
       mobile:value.mobile,
       zipcode:value.zipcode,
       gst:value.gst,
       first_name:value.first_name,
       last_name:value.last_name
       })
      })
      .then((res) => {
        console.log(res,"sucess");
        // setmsg(res.data.message)
        // setModal("show-modal1")
        // if(res.data.message==="Login Successful"){
        //   setTimeout(
        //     ()=>{
        //       nav("/")
        //     },5000
        //   )
        // }

       
        
      })
      .catch((error) => {
        console.error(error);
        // setmsg(error.message)
      });
  }
  function handle(e) {
    const newData = { ...value };
    newData[e.target.id] = e.target.value;
    setvalue(newData);
    console.log(newData,"data available");
  }
 console.log("token",token)
  // const newtoken="51272d6ad7880abd893e910202299263a0edc678";
  const dataget=()=>{
    Axios.get("http://127.0.0.1:8000/getprofile/",{
      // method:"GET",
      headers:{
        'Content-Type': 'application/json',
        "Authorization":`Token ${token}`
      }, 
    }).then(data=>{
      console.log(data.data.data,"getdata")
      setvalue(data.data.data);
    }).catch(err=>{
      console.log(err)
    })
  }
  const handleinfo = () => {
    setGeneral("block");
    setOrder("none");
    setAdd("none");
    setpay("none");
  };
  const handleorder = () => {
    setGeneral("none");
    setOrder("block");
    setAdd("none");
    setpay("none");
  };
  const handleaddress = () => {
    setGeneral("none");
    setOrder("none");
    setAdd("block");
    setpay("none");
  };
  const handlepayment = () => {
    setGeneral("none");
    setOrder("none");
    setAdd("none");
    setpay("block");
  };
  // console.log(value,"value");
  useEffect(()=>{
    dataget();
  },[]);
  return (
    <>
    <Navbar/>
    {false &&
      <div class="main-content">
        <div class="container2 mt-1">
          {/* <!-- Table --> */}
          {/* <h2 class="mb-5">My Account Card</h2> */}
          <div class="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <div class=" order-xl-1">
              <div class="card bg-secondary shadow" style={{ width: "100%" }}>
                <div class="card-header bg-white border-0">
                  <div class="row align-items-center" style={{display:"flex",justifyContent:"space-between"}}>
                    <div class="col-6">
                      <h3 class="mb-0">My account</h3>
                    </div>
                    <div class="col-6 text-right" style={{display:"flex",justifyContent:"end"}}>
                      <a
                        href="#!"
                        class="btn btn-sm btn-primary"
                        style={{ background: "#1d1678" }}
                        onClick={()=>setedit(false)}
                      >
                      <i class="bi bi-pencil-square"></i>
                        Edit Profile
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="card-body"
                  style={{ background: "rgb(212, 214, 231)", display: "flex" }}
                >
                  <div style={{width:"30%",  margin: "10px",cursor:"pointer" }}>
                    <div
                      onClick={handleinfo}
                      style={{
                        width: "100%",
                        height: "100px",
                        border: "1px solid",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"space-around",
                        background: "#fff",
                        color: "black",
                      }}
                    >
                      
                     <i class="bi bi-info-circle" style={{fontSize:"30px"}}></i>
                      <div>
                        <h4>General Info</h4>
                        {/* <p>Edit your information</p> */}
                      </div>
                    </div>
                    <div
                      onClick={handleorder}
                      style={{
                        width: "100%",
                        height: "100px",
                        border: "1px solid",
                        borderRadius: "12px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent:"space-around",
                        alignItems: "center",
                        background: "#fff",
                        color: "black",
                      }}
                    >
                     <i class="bi bi-clipboard-minus" style={{fontSize:"30px"}}></i>
                      <div>
                        <h4>Your Order</h4>
                        {/* <p>Track,return,or buy things again</p> */}
                      </div>
                    </div>
                    <div
                      onClick={handleaddress}
                      style={{
                        width: "100%",
                        height: "100px",
                        border: "1px solid",
                        borderRadius: "12px",
                        display: "flex",
                        justifyContent:"space-around",
                        alignItems: "center",
                        background: "#fff",
                        color: "black",
                      }}
                    >
                    <i class="bi bi-house-door" style={{fontSize:"30px"}}></i>
                      <div>
                        <h4>Your Address</h4>
                        {/* <p>Edit or add your address</p> */}
                      </div>
                    </div>
                    <div
                      onClick={handlepayment}
                      style={{
                        width: "100%",
                        height: "100px",
                        border: "1px solid",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        background: "#fff",
                        color: "black",
                        justifyContent:"space-around",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    >
                     <i class="bi bi-credit-card" style={{fontSize:"30px"}}></i>
                      <div>
                        <h4>Payment Options</h4>
                        {/* <p>Edit or add payment methods</p> */}
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "80%" }}>
                    <div
                      class="container rounded bg-white  mb-5"
                      id="general"
                      style={{ display: `${general}` }}
                    >
                      <div class="row">
                        <div class="col-md-12 border-right">
                          <div class="p-3 ">
                           
                            <form onSubmit={(e)=>submitdata(e)} >
                            <div className="col-md-12 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right" style={{ }}>
                  Profile Settings
                </h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels" style={{color:"black"}}>Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    id="username_id"
                    disabled
                    value={value.username_id}
                    onChange={(e)=>handle(e)}
                  />
                </div>
                {/* <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname"/></div> */}
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels" style={{color:"black"}}>Primary Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="enter email id"
                    id="email"
                    value={value.email}
                    onChange={(e) => handle(e)}
                    disabled={edit}
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels" style={{color:"black"}}>Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    id="mobile"
                    value={value.mobile}
                    onChange={(e) => handle(e)}
                    disabled={edit}

                  />
                </div>
                {/* <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value=""/></div> */}
                {/* <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                {/* <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                <div className="col-md-12">
                  <label className="labels" style={{color:"black"}}>ZipCode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zipcode"
                    
                    id="zipcode"
                    value={value.zipcode}
                    onChange={(e) => handle(e)}
                    disabled={edit}

                  />
                </div>
                {/* <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                <div className="col-md-12">
                  <label className="labels" style={{color:"black"}}>GST</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="gst"
                    id="gst"
                    value={value.gst}
                    onChange={(e) => handle(e)}
                    disabled={edit}

                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels" style={{color:"black"}}> Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    
                    id="first_name"
                    value={value.first_name}
                    onChange={(e) => handle(e)}
                    disabled={edit}

                  />
                </div>
                {/* <div className="col-md-12">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    
                    id="first_name"
                    value={value.last_name}
                    onChange={(e) => handle(e)}
                  />
                </div> */}
              </div>
            
              <div className="mt-5 text-center">
                <input
                  className="btn btn-primary profile-button"
                  type="submit"
                  value="save profile"
                />
                 
              </div>
            </div>
          </div>
                              {/* <div class="row mt-3">
                                <div class="col-md-6">
                                  <label class="labels">Country</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="country"
                                    value=""
                                  />
                                </div>
                                <div class="col-md-6">
                                  <label class="labels">State/Region</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    value=""
                                    placeholder="state"
                                  />
                                </div>
                              </div> */}
                              {/* <div class="mt-5 text-center">
                                <input 
                                  class="btn btn-primary profile-button"
                                  type="submit"
                                value="save profile"
                                /> */}
                                
                              {/* </div> */}
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        class="container rounded bg-white  mb-5"
                        id="order"
                        style={{ display: `${order}` }}
                      >
                        <div class="row">
                          <div class="col-md-12 border-right">
                            <div class="p-3 ">
                              <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Your order</h4>
                              </div>
                              <div>
                                <div
                                  className="main_menu_area"
                                  style={{ background: "white" }}
                                >
                                  <div className="container">
                                    <div className="row justify-content-center">
                                      <div className="col-lg-12 col-md-12">
                                        <div className="main_menu menu_position">
                                          <nav>
                                            <ul
                                              style={{
                                                display: "flex",
                                                justifyContent: "space-around",
                                                listStyle:"none"
                                              }}
                                            >
                                              <li>
                                                <NavLink
                                                  to="/"
                                                  style={{ color: "black" }}
                                                >
                                                  Orders
                                                </NavLink>
                                              </li>
                                              <li>
                                                <NavLink
                                                  to="/"
                                                  style={{ color: "black" }}
                                                >
                                                  Buy Again
                                                </NavLink>
                                              </li>

                                              <li>
                                                <NavLink
                                                  className="active"
                                                  to="/products"
                                                  style={{ color: "black" }}
                                                >
                                                  Not yet Shipped{" "}
                                                </NavLink>
                                              </li>

                                              <li>
                                                <NavLink
                                                  className="active"
                                                  to="/products"
                                                  style={{ color: "black" }}
                                                >
                                                  Cancelled
                                                </NavLink>
                                              </li>
                                            </ul>
                                          </nav>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="container rounded bg-white  mb-5"
                        id="address"
                        style={{ display: `${add}` }}
                      >
                        <div class="row">
                          <div class="col-md-12 border-right">
                            <div class="p-3 ">
                              <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Your Address</h4>
                              
                              </div>
                              <form onSubmit={(e)=>submitdata(e)} style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                                <div class="single-acc-field" style={{display:"flex",flexDirection:"column"}}>
                          <label for="email">Address Type</label>
                          <input
                            type="text"
                            id="address_type"
                            // value={address.address_type}
                            // onChange={(e)=>handledata1(e)}
                            placeholder="Enter Address Type"
                          />
                          <label for="email">Enter Your Nickname</label>
                          <input
                            type="text"
                            id="address_nickname"
                            // value={address.address_nickname}
                            // onChange={(e)=>handledata1(e)}
                            placeholder="Enter your Nickname"
                          />
                           <label for="email">Enter your Address</label>
                          <input
                            type="text"
                            id="address"
                            // value={address.address}
                            // onChange={(e)=>handledata1(e)}
                            placeholder="Address"
                          />
                         
                        </div>
                        <div class="single-acc-field">
                          <button type="submit">Add Address</button>
                        </div>
                                </form>
                              <div>
                                <div
                                  className="main_menu_area flex-wrap"
                                  style={{
                                    background: "white",
                                    display: "flex",
                                    justifyContent: "space-around",
                                  }}
                                >
                                
                                  <div
                                    style={{
                                      width: "300px",
                                      height: "100%",
                                      border: "1px solid",
                                      borderRadius: "9px",
                                      textAlign: "center",
                                      padding:"10px",

                                    }}
                                  >
                                    <h4>NITISH KUMAR</h4>
                                    <h6>
                                      HOUSE 12-B NANGLA ENCLAVE PART-2
                                      faridabad, HARYANA 121005 India Phone
                                      number: ‪8287049939‬
                                    </h6>
                                  </div>
                                  {/* <div
                                    style={{
                                      width: "300px",
                                      height: "100%",
                                      border: "1px solid",
                                      borderRadius: "9px",
                                      textAlign: "center",
                                      padding:"10px"
                                    }}
                                  >
                                    <h4>NITISH KUMAR</h4>
                                    <h6>
                                      HOUSE 12-B NANGLA ENCLAVE PART-2
                                      faridabad, HARYANA 121005 India Phone
                                      number: ‪8287049939‬
                                    </h6>
                                  </div>
                                  <div
                                    style={{
                                      width: "300px",
                                      height: "100%",
                                      border: "1px solid",
                                      borderRadius: "9px",
                                      textAlign: "center",
                                      padding:"10px"
                                    }}
                                  >
                                    <h4>NITISH KUMAR</h4>
                                    <h6>
                                      HOUSE 12-B NANGLA ENCLAVE PART-2
                                      faridabad, HARYANA 121005 India Phone
                                      number: ‪8287049939‬
                                    </h6>
                                  </div>
                                  <div
                                    style={{
                                      width: "300px",
                                      height: "100%",
                                      border: "1px solid",
                                      borderRadius: "9px",
                                      textAlign: "center",
                                      padding:"10px"
                                    }}
                                  >
                                    <h4>NITISH KUMAR</h4>
                                    <h6>
                                      HOUSE 12-B NANGLA ENCLAVE PART-2
                                      faridabad, HARYANA 121005 India Phone
                                      number: ‪8287049939‬
                                    </h6>
                                  </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          class="container pl-0 pr-0"
                          id="payment"
                          style={{ display: `${pay}` }}
                        >
                          <div class="row">
                            <div class="col-lg-4 mb-lg-0 mb-3">
                              <div class="card p-3">
                                <div class="img-box">
                                  <img
                                    src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
                                    style={{ width: "60px", height: "50px" }}
                                    alt=""
                                  />
                                </div>
                                <div class="number">
                                  <label class="fw-bold" for="">
                                    ** ** ** 1060
                                  </label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                  <small>
                                    <span class="fw-bold">Expiry date:</span>
                                    <span>10/16</span>
                                  </small>
                                  <small>
                                    <span class="fw-bold">Name:</span>
                                    <span>Kumar</span>
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4 mb-lg-0 mb-3">
                              <div class="card p-3">
                                <div class="img-box">
                                  <img
                                    src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                                    alt=""
                                    style={{ width: "60px", height: "50px" }}
                                  />
                                </div>
                                <div class="number">
                                  <label class="fw-bold">
                                    ** ** ** 1060
                                  </label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                  <small>
                                    <span class="fw-bold">Expiry date:</span>
                                    <span>10/16</span>
                                  </small>
                                  <small>
                                    <span class="fw-bold">Name:</span>
                                    <span>Kumar</span>
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4 mb-lg-0 mb-3">
                              <div class="card p-3">
                                <div class="img-box">
                                  <img
                                    src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                                    alt=""
                                    style={{ width: "60px", height: "50px" }}
                                  />
                                </div>
                                <div class="number">
                                  <label class="fw-bold">
                                    ** ** ** 1060
                                  </label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                  <small>
                                    <span class="fw-bold">Expiry date:</span>
                                    <span>10/16</span>
                                  </small>
                                  <small>
                                    <span class="fw-bold">Name:</span>
                                    <span>Kumar</span>
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 mt-4">
                              <div class="card p-3">
                                <p class="mb-0 fw-bold h4">Payment Methods</p>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="card p-3">
                                <div class="card-body border p-0">
                                  <p>
                                    <a
                                      class="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                                      data-bs-toggle="collapse"
                                      href="#collapseExample"
                                      role="button"
                                      aria-expanded="true"
                                      aria-controls="collapseExample"
                                    >
                                      <span class="fw-bold">PayPal</span>
                                      <span class="fab fa-cc-paypal"></span>
                                    </a>
                                  </p>
                                  <div
                                    class="collapse p-3 pt-0"
                                    id="collapseExample"
                                  >
                                    <div class="row">
                                      <div class="col-8">
                                        <p class="h4 mb-0">Summary</p>
                                        <p class="mb-0">
                                          <span class="fw-bold">Product:</span>
                                          <span class="c-green">
                                            : Name of product
                                          </span>
                                        </p>
                                        <p class="mb-0">
                                          <span class="fw-bold">Price:</span>
                                          <span class="c-green">:$452.90</span>
                                        </p>
                                        <p class="mb-0">
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit. Atque
                                          nihil neque quisquam aut repellendus,
                                          dicta vero? Animi dicta cupiditate,
                                          facilis provident quibusdam ab quis,
                                          iste harum ipsum hic, nemo qui!
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="card-body border p-0">
                                  <p>
                                    <a
                                      class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                      data-bs-toggle="collapse"
                                      href="#collapseExample"
                                      role="button"
                                      aria-expanded="true"
                                      aria-controls="collapseExample"
                                    >
                                      <span class="fw-bold">Credit Card</span>
                                      <span class="">
                                        <span class="fab fa-cc-amex"></span>
                                        <span class="fab fa-cc-mastercard"></span>
                                        <span class="fab fa-cc-discover"></span>
                                      </span>
                                    </a>
                                  </p>
                                  <div
                                    class="collapse show p-3 pt-0"
                                    id="collapseExample"
                                  >
                                    <div class="row">
                                      <div class="col-lg-5 mb-lg-0 mb-3">
                                        <p class="h4 mb-0">Summary</p>
                                        <p class="mb-0">
                                          <span class="fw-bold">Product:</span>
                                          <span class="c-green">
                                            : Name of product
                                          </span>
                                        </p>
                                        <p class="mb-0">
                                          <span class="fw-bold">Price:</span>
                                          <span class="c-green">:$452.90</span>
                                        </p>
                                        <p class="mb-0">
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit. Atque
                                          nihil neque quisquam aut repellendus,
                                          dicta vero? Animi dicta cupiditate,
                                          facilis provident quibusdam ab quis,
                                          iste harum ipsum hic, nemo qui!
                                        </p>
                                      </div>
                                      <div class="col-lg-7">
                                        <form action="" class="form">
                                          <div class="row">
                                            <div class="col-12">
                                              <div class="form__div">
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                  placeholder=" "
                                                />
                                                <label
                                                  for=""
                                                  class="form__label"
                                                >
                                                  Card Number
                                                </label>
                                              </div>
                                            </div>

                                            <div class="col-6">
                                              <div class="form__div d-flex justifyContent">
                                                <input
                                                  type="text"
                                                  class="form-control col-6"
                                                  placeholder=" "
                                                />
                                               
                                                
                                              </div>
                                              <label
                                                  for=""
                                                  class="form__label"
                                                >
                                                  MM / yy
                                                </label>
                                            </div>

                                            <div class="col-6">
                                              <div class="form__div">
                                                <input
                                                  type="password"
                                                  class="form-control"
                                                  placeholder=" "
                                                />
                                                <label
                                                  for=""
                                                  class="form__label"
                                                >
                                                  cvv code
                                                </label>
                                              </div>
                                            </div>
                                            <div class="col-12">
                                              <div class="form__div">
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                  placeholder=" "
                                                />
                                                <label
                                                  for=""
                                                  class="form__label"
                                                >
                                                  name on the card
                                                </label>
                                              </div>
                                            </div>
                                            <div class="col-12">
                                              <div class="btn btn-primary w-100">
                                                Submit
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-12"
                              style={{ display: "flex", justifyContent: "end" }}
                            >
                              <div class="btn btn-primary mt-2 float-end payment">
                                Make Payment
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
};

export default Profile;