// import './App.css';
import Login from './login';
// import Signin from './signup';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './signup';
import Profile from './profile';
import Homepage from './homepage';
import Searchimg from './searchimg';
import Dashboard from './dashbord';
import Forgotpassword from './forgotpassword';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Metal from './metal';
import Stone from './stone';
import Wood from './wood';
import Library from './library';
import Passwordset from './passwordset';
import Firstscreen from './firstscreen';
import DashbordSee from './dashbordsee';
import Uploadedsee from './uploadedsee';
import Insight from './insight';
import Upload from './upload';
import ContributorAccount from './contributoraccount';
import Customize from './customize';
import UploadedFiles from './uploadedfiles';
import Designer from './designer';
import MyLibrary from './comp/mylibrary';
import OrderUpload from './orderupload';
import PaintingTool from './paintingTool';
import PaintingTools from './paintingTool';
import SpringLightBox from './springlightbox';
// import Googlelogin from './googlelogin';
function App() {
  return (
   <>
   <Router>
     <Header/>
     <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/cateogry" element={<Homepage/>}/>
       <Route path='/search' element={<Searchimg/>}/>
       <Route path="/dashbord" element={<Dashboard/>}/>
       <Route path="/forgot" element={<Forgotpassword/>}/>
       <Route path="/passwordset" element={<Passwordset/>}/>

       <Route path="/main" element={<Main/>}/>
       <Route path="/m" element={<SpringLightBox/>}/>

       <Route path="/metal" element={<Metal/>}/>
       <Route path="/stone" element={<Stone/>}/>
       <Route path="/wood" element={<Wood/>}/>
       <Route path='/library' element={<Library/>}/>
       <Route path='/' element={<Firstscreen/>}/>
       <Route path='/customize' element={<Customize/>}/>

       <Route path='/upload' element={<Upload/>}/>
       {/* <Route path='/mygallery' element={<Mygallery/>}/> */}
       {/* <Route path='/payment' element={<Payment/>}/> */}
       <Route path='/dashbordsee' element={<DashbordSee/>}/>
       <Route path='/uploadsee' element={<Uploadedsee/>}/>
       <Route path='/uploadedfiles' element={<UploadedFiles/>}/>
       <Route path='/insightsee' element={<Insight/>}/>
       <Route path='/designer' element={<Designer/>}/>
       <Route path='/contributoraccount' element={<ContributorAccount/>}/>
       <Route path='/mylibrary'element={<MyLibrary/>}/>
       <Route path='/order'element={<OrderUpload/>}/>
       <Route path='/paintingTool'element={<PaintingTools/>}/>

 
       
       {/* <Googlelogin/> */}


     </Routes>
     <Footer/>
   </Router>
   {/* <Signin/> */}
   </>
  );
}

export default App;
