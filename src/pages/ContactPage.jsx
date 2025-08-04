import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import "./ContactPage.css"
import "./HomePage.css";
const ContactPage = ()=> {
    return(

      <>
           <Header/>
<div className="main-layout">  
    <div className="home-scroll">
       <div className="content">
                  <div className="page-container">
                       <h1> Contact us</h1>
                       <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                       <h2>General Enquiries</h2>
                       <p>
                           <strong>Vivekanand College Main Campus</strong>
                           <br />
                           [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                           <br />
                           india

                       </p>
                       <p>
                        Phone: **+91 12345 67890**
                        <br />
                        Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST

                       </p>
                       <h2>Admission office</h2>
                       <p>For all admission-related queries regarding undergraduate or postgraduate programs:
                         <br />
                         Phone: +91 98765 43210
                         <br />
                         Email: admissions@vivekanandcollege.edu


                       </p>

                       <h2>Student Support Service</h2>
                       <p>For current student support, academic advising, or general assistance:
                           <br />
                        Phone: +91 87654 32109
                        <br />
                          Email: studentsupport@vivekanandcollege.edu

                       </p>

                       <p>
                       <h2>Find Us on the Map</h2>
                       "[You can embed a Google Map here later using an iframe or a React map library.]"
                       <br />
                       <a href="https://maps.google.com/?q=vivekanad+Collage" target="blank" rel="noopener noreferrer">View Google Maps</a>
                        </p>  
                       
                       <h2>Send Us a Message</h2>
                       <p>
                         [A contact form with fields for Name, Email, Subject, Message can be added here.] 
                         
                       </p>
                       
                        
                        
                    
                       


                  </div>
              </div>
</div>

</div>
               <Footer/>
      </>
             
    )
}
export default ContactPage;