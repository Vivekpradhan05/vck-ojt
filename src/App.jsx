// import "./App.css"
// import "./style.css"
import {Route,BrowserRouter as Router, Routes}from "react-router-dom"
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import ApplyNow from "./pages/ApplyNow";
import Footer from "./components/Footer/Footer";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App = ()=>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
   <>
   <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Vivek Datta Pradhan"
          studentPhotoUrl="public/images/vivek.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
   
   <div>     
      
      
       <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/aboutpage" element={<AboutPage/>} />
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/coursespage" element={<CoursesPage/>}/>
            <Route path="/ContactPage" element={<ContactPage/>}/>
            <Route path="/applynow" element={<ApplyNow/>}/>
            <Route path="/" element={<Footer/>}/>
           </Routes>
           <ChatbotComponent/>
       </Router>


       </div>
   </>
    
    

 
  )
}
export default App;