import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import { hero ,about,html,js,css,react,bootstrap,tailwind,node,express,git,redux} from "../img";
import Navbar from "./Navbar";
import "../main.css";
import Resume from "./Resume";
import Contact from "./contact";
import Project from "./Project";

const Home = () => {
  return (
    <>
      <div className="layout-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <Hero />
          <About />
          <Skills />
          <Resume/>
          <Project/>
          <Contact/>
        </div>
      </div>
    </>
  );
};

export default Home;

export const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const typed = new Typed(typedElement.current, {
      strings: ["Web-Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={hero} alt="hero" data-aos="fade-in" className="img-fluid" />

      <div className="container ms-4" data-aos="fade-up" data-aos-delay="100">
        <h2>Ritesh D-Patil</h2>
        <p>
          I'm <span ref={typedElement}></span>
        </p>
      </div>
    </section>
  );
};

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="about " className="about section ms-2">
        <div className="container section-title " data-aos="fade-up">
          <h2>About</h2>
        </div>

        <div className="container " data-aos="fade-up" data-aos-delay="100" style={{ marginTop: "-50px" }}>
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={about} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 content">
              <h2>
                
                <strong>Web Developer</strong>
              </h2>
              <p className="fst-italic py-2">
                Enthusiastic <strong>React Developer</strong> with a solid grasp of <strong>JavaScript</strong>, <strong>React.js</strong>, and modern
                web development practices. Eager to build real-world applications and grow as part of a dynamic development team. Committed to writing
                clean code and continuously learning new tools and frameworks.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master's in Computer Application</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Git-Hub:</strong> <a href="https://github.com/riteshrd0298" className="text-dark">github.com/riteshrd0298</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Website:</strong> <a href="https://weather-forcast-nu.vercel.app" className="text-dark">weather-forcast-nu.vercel.app</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7387236091</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ritesh-dpatil" target="blank" className="linkedin text-dark">www.linkedin.com/in/ritesh-dpatil</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Website:</strong>     <a href="https://presentoritesh.vercel.app/" target="blank" className="text-dark">
                presentoritesh.vercel.app
              </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Website:</strong>  <a href="https://github.com/riteshrd0298/Grocery-Mart-.git" target="blank" className="text-dark">
                riteshrd0298/Grocery-Mart-.git
              </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>riteshddpatil@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-2">
                I am a passionate <strong>React Developer</strong> with hands-on experience in building dynamic and responsive web applications using{" "}
                <strong>React.js</strong>,<strong>JavaScript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Bootstrap</strong>,{" "}
                <strong>Tailwind CSS</strong>, and <strong>Git</strong>. Proficient in creating reusable components, managing state, and integrating
                APIs.
              </p>
              <p>
                Successfully developed <strong>4+</strong> real-world projects, including a <strong>Weather Forecasting Website</strong>, an{" "}
                <strong>E-commerce Grocery Mart</strong>, a <strong>Professional Portfolio (Presento)</strong>, and a{" "}
                <strong>Static Petshop Website UI</strong>. Adept at writing clean code, applying modern design principles Eager to contribute to
                high-impact projects and continuously learn emerging web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const AboutHeader = () => {
  return (
    <>
    <div className="layout-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <About/>
          </div>
        </div>
    </>
  )
}



export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation justify-content-center">
          {[
            { skill: "HTML", logo: html },
            { skill: "CSS", logo: css },
            { skill: "JavaScript", logo: js },
            { skill: "Bootstrap", logo: bootstrap },
            { skill: "Tailwind CSS", logo: tailwind },
            { skill: "React.js", logo: react },
            { skill: "Redux", logo: redux },
            { skill: "Node.js", logo: node },
            { skill: "Express.js", logo: express },
            { skill: "GitHub", logo: git }
          ].map((val, index) => (
            <div className="col-6 col-md-3 col-lg-2 mb-4 d-flex justify-content-center" key={index}>
              <div className="card shadow border-0 text-center skill-card" style={{ width: "200px", height: "200px", borderRadius: "16px", background: "#fff", transition: "transform 0.2s" }}>
                <div className="card-body d-flex flex-column align-items-center p-3">
                  <img
                    src={val.logo}
                    alt={val.skill}
                    style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "12px" }}
                  />
                  <h6 className="card-title mb-0" style={{ fontWeight: 700, fontSize: "25px" }}>{val.skill}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skill-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }
        @media (min-width: 839px) {
          .skills-content .col-lg-2 {
            flex: 0 0 20%;
            max-width: 20%;
          }
        }
      `}</style>
    </section>
  );
};
