import "./HomePage.css";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
const HomePage =()=>{
    return(
        <>


   <Header/>
 <div className="main-layout">
         <div className="home-scroll">
            <div className="content">
               <div className="page-container">
                     <div className="hero-section">
                          <img src="https://vck.codewonders.in/assets/college-banner-Cz0xylpt.png" alt="Vivekanand College Campus" className="hero-image" />
                        <div className="hero-overlay-text">
                            <h1>Welcome to Vivekanand College!</h1>
                            <p>Your journey to excellence starts here.</p>
                            <a href="#" className="btn hero-btn">Apply Now!</a>
                        </div>                                                                         
 
                    </div>
                    <p>
                      **Vivekanand College
                      <b></b>
                        " is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students,
                         empowering them to achieve their full potential."
                    </p>
                    <p>
                         is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students,
                          empowering them to achieve their full potential.
                    </p>
                    <h2>Why Choose Vivekanand College?</h2>
                    <ul>
                        <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                        <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                        <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>  
                        <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>                  
                    </ul>
                    <h2>Campus Life & Facilities</h2>
                    <div className="image-gallery">
                        <img src="/public/images/facilities.jpeg" alt="library" />
                        <img src="/public/images/campus.jpg" alt="campus" />
                    </div>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                    <div className="call-to-action">
                        <p>Ready to explore our courses?</p>
                        <a href="/Courses" className="btn" >Explore Courses</a>
                    </div>

               </div>
             </div>
             
           </div>
    </div>

           <Footer/>

      

        </>


    )
}
export default HomePage;