import './App.css';
import profileImage from './profile2.png'; 
import projectImage from './project.png';
import tabIconImage from './tab-icon.png';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">

      <Helmet>
        <title> Dhan's Portfolio </title>
      </Helmet>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>


      <nav className={"nav-bar"}>
        <img src={tabIconImage} alt="Tab Icon" className="tab-icon-image" />

        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      <main>
        <section id="home" className="content-section">
          <div className="content-left">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <div className="content-right">
            <h2 className="name">DHAN</h2>
            <p className="title">FRONTEND DEVELOPER</p>
          </div>
        </section>


        <section id="about" className="about-section">
          <div className="about-title">
            <h2 className="about-title-text">GET TO KNOW ME</h2>
            <p className="about-text">I am Dhaniel Bolaños, a beginner frontend developer currently studying IT at STI College Alabang, specializing in Mobile App and Web Development. I enjoy creating the visual elements and layout for both web and mobile apps. I'm passionate about developing user-friendly interfaces that not only look great but also function well. Additionally, I have a keen interest in graphic design, which I creatively incorporate into my projects. I am always eager to learn and improve, embracing new technologies to enhance user experiences.</p>
          </div>

          <h2 className="skills-title-text">MY FIELD OF EXPERTISE</h2>

          <section class="skills-circle-section">
            <div class="circle-container">
                <div class="circle">
                  <div className="icon-wrapper">
                    <i className="fas fa-code"></i>
                  </div>              
                </div>
                <h3>PROGRAMMING</h3>
                <p>Basic knowledge in HTML, XML, CSS, Java, JavaScript, SQL, and ReactJS programming.</p>
            </div>
            
            <div class="circle-container">
                <div class="circle">
                  <div className="icon-wrapper">
                    <i className="fas fa-globe"></i>
                  </div>  
                </div>
                <h3>APP & WEB DESIGN</h3>
                <p>I enjoy creating user interfaces with unique and minimalistic designs.</p>
            </div>

            <div class="circle-container">
                <div class="circle">
                  <div className="icon-wrapper">
                    <i className="fas fa-palette"></i>
                  </div>  
                </div>
                <h3>GRAPHIC DESIGN</h3>
                <p>I have a passion for creating and designing digital artwork, particularly in graphic design.</p>
            </div>
          </section>

        </section>



        <section id="projects" className="project-section">

          <div className='line'></div>

          <h2 className="project-title-text">PREVIOUS PROJECTS</h2>

          <div className="project-container">
            
            <div className="project-text-container">
              <h2 className="project-title-text-2">STI MASA App</h2>
              <p className="project-text">This is one of my previous projects, a mobile announcement system application developed in Android Studio, serving as a convenient platform for sharing announcements and notices within the school community.</p>
            </div>
            <a href="https://drive.google.com/drive/folders/16qDE2VueC4VGMeHPy_2HxoC3g1GDi195?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src={projectImage} alt="Project" className="project-image" />
            </a>
          </div>
        </section>


        <section id="contact" className="contact-section">
          <div className="contact-container">

          <div className='contact-info-container'>
            <h3>
              <a href="https://www.facebook.com/dhanbolanos" target="_blank" rel="noopener noreferrer">
              <i id='fb-logo' className="fab fa-facebook-square"></i>
              </a>
            </h3>
          </div>

          <div className='contact-info-container'>
            <h3>
              <a href="mailto:blnsdhn@gmail.com">
              <i id='fb-logo' className="fas fa-envelope"></i>
              </a>
            </h3>
          </div>


          </div>
        </section>


      </main>
    </div>
  );
}

export default App;
