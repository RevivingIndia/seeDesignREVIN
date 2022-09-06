import React from 'react'

const ContributorAccount = () => {
  return (
    <div>
        <div className='col-12 d-flex'>
<div className='col-3'>
<div class="navbar mt-4  col-12" style={{height:"auto",boxShadow:"none"}}>
 
 <div style={{marginBottom:"auto",marginTop:"50px"}}>
    <a href='#account'>
 <h6 className='text-dark'>MY PROFILE</h6>
 </a>
 <a href='#info'>
 <h6 className='text-dark'>ADDRESS</h6>
 </a>
 <a href='#lang'>
 <h6 className='text-dark'>EMAIL PREFERENCES</h6> 
 </a>
 <a href='#lang'>
 <h6 className='text-dark'>TAX INFORMATION</h6> 
 </a>
 <a href='#lang'>
 <h6 className='text-dark'>MEMBER ID</h6> 
 </a>
 </div>
 </div>  
    </div>
<div className='col-7 mt-4' style={{height:"100%"}}>
    <div id='account' style={{background:"#fff",height:"200px",paddingTop:"20px"}}>
      
        <table className='m-4  col-8'>
  <tr className='mt-4'>
    <th>Account</th>
    
  </tr>
  <tr className='mt-4 pt-4'>
    <td>Name </td>
    <td>Nitish</td>
  </tr>
  <tr className='mt-4'>
    <td>Last Name </td>
    <td>Kumar</td>
  </tr>
  <tr className='mt-4'>
    <td>Display Name </td>
    <td>Nitish</td>
  </tr>
  </table>
</div>
<div id='account' className='mt-4' style={{background:"#fff",height:"300px",paddingTop:"20px"}}>
      
      <table className='m-4  col-8'>
<tr className='mt-4'>
  <th>ADDRESS</th>
  
</tr>
<tr className='mt-4 pt-4'>
  <td>Address Line 1</td>
  <td></td>
</tr>
<tr className='mt-4'>
  <td>Address Line 2 </td>
  <td></td>
</tr>
<tr className='mt-4'>
  <td>City </td>
  <td>Faridabad</td>
</tr>
<tr className='mt-4'>
  <td>State</td>
  <td>Haryana</td>
</tr>
<tr className='mt-4'>
  <td>Country/Region</td>
  <td>India</td>
</tr>
<tr className='mt-4'>
  <td>Zip/postal code</td>
  <td>India</td>
</tr>
</table>
</div>
<div id='account' className='mt-4' style={{background:"#fff",height:"200px",paddingTop:"20px"}}>
      
      <table className='m-4  col-8'>
<tr className='mt-4'>
  <th>EMAIL PREFERENCES</th>
  
</tr>
<tr className='mt-4 pt-4'>
  <td>Email me:</td>
  <td></td>
</tr>
<tr className='mt-4'>
  <td>
    <input type="radio" checked/>
    Daily moderation updates </td>
  <td></td>
</tr>
<tr className='mt-4'>
  <td>
  <input type="radio" checked/>Daily earnings summary </td>
  <td></td>
</tr>

</table>
</div>
<div id='account' className='mt-4' style={{background:"#fff",height:"200px",paddingTop:"20px"}}>
      
      <table className='m-4  col-8'>
<tr className='mt-4'>
  <th>TAX INFORMATION</th>
  
</tr>
<tr className='mt-4 pt-4'>
  <td>Fill up your tax form! You could avoid up to 30% withholding's on your revenue.</td>
</tr>
<tr className='mt-4'>
  <td>
    <button style={{borderRadius:"13px",backgroundColor:"royalblue",border:"1px solid white",color:"#fff",padding:"3px"}}>Add tax Information</button>
    </td>
  <td></td>
</tr>


</table>
</div>
<div id='account' className='mt-4' style={{background:"#fff",height:"200px",paddingTop:"20px"}}>
      
      <table className='m-4  col-8'>
<tr className='mt-4'>
  <th>MEMBER ID</th>
  
</tr>
<tr className='mt-4 pt-4'>
  <td>211037375</td>
</tr>



</table>
</div>
    </div>
    </div>
    </div>
  )
}

export default ContributorAccount