import React, { useEffect } from "react";
import "../main.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "./Navbar";
import { resume } from "../img";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume; // Replace with the actual path to your resume
    link.download = "Ritesh_D-patil_Resume.pdf"; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="resume" className="resume section ms-4">
      <div className="container section-title " data-aos="fade-up">
        <h2>Resume</h2>
      </div>

      <div className="container" style={{ marginTop: "-20px" }}>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Sumary</h3>

            <div className="resume-item pb-0">
              <h4>Ritesh D-patil</h4>
              <p>
                <em>
                  Enthusiastic <strong>React Developer</strong> with a solid grasp of <strong>JavaScript</strong>, <strong>React.js</strong>, and
                  modern web development practices. Eager to build real-world applications and grow as part of a dynamic development team. Committed
                  to writing clean code and continuously learning new tools and frameworks.
                </em>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Computer Application</h4>

              <p>
                <em>
                  <strong>D.Y.Patil Agriculture &amp; Technical University , Kolhapur </strong>
                </em>{" "}
                <sub>2022-2024</sub>
              </p>
              <p>
                <b>SGPA : 7.5</b>
              </p>
            </div>

            <div className="resume-item">
              <h4>Bachelor of Science</h4>
              <p>
                <em>
                  <strong>Gopal Krishna Gokhale Collage , Kolhapur </strong>
                </em>{" "}
                <sub>2019-2022</sub>
              </p>
              <p>
                <b>SGPA : 7.0</b>
              </p>
            </div>
            <div className="resume-item">
              <h4>HSC</h4>
              <p>
                <em>
                  <strong>Shahu Collage , Kagal</strong>
                </em>{" "}
                <sub>2016-2018</sub>
              </p>
              <p>
                <b>Percentage : 55%</b>
              </p>
            </div>
            <div className="resume-item">
              <h4>SSC</h4>
              <p>
                <em>
                  <strong>Shrimant Jaysingrao Ghatge Highschool , Kagal</strong>
                </em>{" "}
                <sub>2015</sub>
              </p>
              <p>
                <b>Percentage : 70%</b>
              </p>
            </div>

            <h3 className="resume-title">Experience</h3>

            <div className="resume-item pb-0">
              <h4> Internship</h4>
              <p>
                <em>
                  <strong>Speed Up Infotech – Pune </strong>
                </em>
              </p>
              <p style={{ marginTop: "-10px" }}>
                <strong>React Developer Intern</strong>
              </p>

              <p>
                Worked on building responsive and interactive front-end applications using <strong>React.js</strong>. Gained practical experience with
                <strong> component-based architecture, React Router, hooks, and state management .</strong>
                <br />
                Collaborated with backend developers to integrate REST APIs and improve user experience. Followed clean coding practices and version
                control using <strong>Git</strong>.
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
              <h4>Weather Forecasting</h4>
              <a href="https://weather-forcast-nu.vercel.app" target="blank" className="fw-bold">
                Click Me . . .
              </a>
              <p>
                <em>Tech Stack: React.js, React Router, External Api, Bootstrap, HTML, CSS, Git </em>
              </p>
              <ul>
                <li>This Website provides up-to-date and accurate weather information for locations worldwide</li>
                <li>Implemented features for displaying current weather conditions, hourly, and daily forecasts.</li>
                <li>Gained valuable experience in State Management, API data Fetching and Binding, and Single Page Application.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>
                Grocery Mart <sub>( E-commerce Web App )</sub>
              </h4>
              <a href="https://github.com/riteshrd0298/Grocery-Mart-.git" target="blank" className="fw-bold">
                Click Me . . .
              </a>
              <p>
                <em>Tech Stack: React.js, React Router, JSON Server, JavaScript, Bootstrap, AOS, Typed.js, HTML, CSS, Git</em>
              </p>
              <ul>
                <li>
                  Designed and developed a grocery shopping website using React and JSON Server to simulate backend APIs. The app includes a product
                  listing page, add-to-cart functionality, and dynamic routing.
                </li>
                <li>
                  Used React Router for navigation and Tailwind CSS for responsive UI design. The customer-side functionality is complete, and the
                  Admin Panel (for managing products and orders) is currently under development.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>
                Presento <sub>( Professional Portfolio Website )</sub>
              </h4>
              <a href="https://presentoritesh.vercel.app/" target="blank" className="fw-bold">
                Click Me . . .
              </a>
              <p>
                <em>Tech Stack: React.js, React Router, Bootstrap, AOS, Typed.js, HTML, CSS, Git</em>
              </p>
              <ul>
                <li>
                  Developed a responsive and modern personal portfolio inspired by the Presento template using React. Integrated dynamic typing
                  effects with Typed.js, animated scroll effects using AOS, and smooth page navigation with React Router.
                </li>
                <li>
                  The project showcases professional details, project highlights, and a contact section — all designed with clean UI using Bootstrap
                  and custom CSS. Deployed the website on Vercel for fast, live access.
                </li>
              </ul>
            </div>
            <button className="btn btn-primary" onClick={handleDownloadResume} style={{margin: "auto", display: "block"}}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

export const ResumeHeader = () => {
  return (
    <>
      <div className="layout-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <Resume />
        </div>
      </div>
    </>
  );
};
