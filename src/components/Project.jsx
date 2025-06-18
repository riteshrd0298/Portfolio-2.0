import React, { useEffect } from "react";
import "../main.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Navbar from "./Navbar";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="projects" className="projects section light-background py-5 ms-2">
        <div className="container section-title mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold  text-center" >Projects</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: "-100px" }}>
          <div className="row g-4">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="project-card shadow-lg rounded-4 p-4 h-100 bg-white border border-2 border-primary-subtle" style={{ transition: "transform 0.3s", minHeight: "420px" }}>
                <h3 className="fw-bold text-secondary text-center mb-3">Weather Forecasting</h3>
                <a href="https://weather-forcast-nu.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mb-3 px-4 py-2 rounded-pill fw-semibold shadow-sm">
                  Visit Project
                </a>
                <p>
                  <em>Tech Stack: React.js, React Router, External  Weather  API, Bootstrap, HTML, CSS</em>
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2"><i className="bi bi-cloud-sun text-primary me-2"></i>This Website provides up-to-date and accurate weather information for locations worldwide</li>
                  <li className="mb-2"><i className="bi bi-clock-history text-primary me-2"></i>Implemented features for displaying current weather conditions, hourly, and daily forecasts.</li>
                  <li><i className="bi bi-lightbulb text-primary me-2"></i>Gained valuable experience in State Management, API data Fetching and Binding, and Single Page Application.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="project-card shadow-lg rounded-4 p-4 h-100 bg-white border border-2 border-success-subtle" style={{ transition: "transform 0.3s", minHeight: "420px" }}>
                <h3 className="fw-bold text-secondary text-center mb-3">Grocery Mart </h3>
                <a href="https://github.com/riteshrd0298/Grocery-Mart-.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mb-3 px-4 py-2 rounded-pill fw-semibold shadow-sm">
                  View Code
                </a>
                <p>
                  <em>Tech Stack: React.js, React Router, JSON Server, JavaScript, Bootstrap, AOS, Typed.js, HTML, CSS</em>
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2"><i className="bi bi-cart4 text-success me-2"></i>Designed and developed a grocery shopping website using React and JSON Server to simulate backend APIs. The app includes a product listing page, add-to-cart functionality, and dynamic routing.</li>
                  <li><i className="bi bi-gear text-success me-2"></i>Used React Router for navigation and Bootstrap for responsive UI design. The customer-side functionality is complete, and the Admin Panel (for managing products and orders) is currently under development.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="project-card shadow-lg rounded-4 p-4 h-100 bg-white border border-2 border-info-subtle" style={{ transition: "transform 0.3s", minHeight: "420px" }}>
                <h3 className="fw-bold text-secondary text-center mb-3">Presento </h3>
                <a href="https://presentoritesh.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info mb-3 px-4 py-2 rounded-pill fw-semibold shadow-sm">
                  Visit Portfolio
                </a>
                <p>
                  <em>Tech Stack: React.js, React Router, JavaScript, Bootstrap, AOS, Typed.js, HTML, CSS</em>
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2"><i className="bi bi-person-badge text-info me-2"></i>Developed a responsive and modern personal portfolio inspired by the Presento template using React. Integrated dynamic typing effects with Typed.js, animated scroll effects using AOS, and smooth page navigation with React Router.</li>
                  <li><i className="bi bi-globe text-info me-2"></i>The project showcases professional details, project highlights, and a contact section — all designed with clean UI using Bootstrap and custom CSS. Deployed the website on Vercel for fast, live access.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

export const ProjectHeader = () => {
  return (
    <>
      <div className="layout-wrapper">
        <Navbar/>
       <div className="content-wrapper">
          <Project/>
        </div>
      </div>
    </>
  );
}