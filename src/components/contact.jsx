import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../main.css'
import emailjs from '@emailjs/browser'
import { serviceid, templateid, publickey } from '../img'
import Navbar from './Navbar'

const Contact = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  },[])

  const form =useRef(null)
  const handelsubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm(serviceid, templateid, form.current, publickey)
    .then ((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message, please try again later.");
    })
  }

  return (
    <section id="contact" className="contact section ms-2">

     
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-5">

            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Kolhapur, Maharashtra</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 7387236091</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>riteshddpatil@gmail.com</p>
                </div>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.7940067038!2d74.15646593654023!3d16.70845223341661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1750142875360!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <form ref={form} className="email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={handelsubmit}>
              <div className="row gy-4">

                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required=""/>
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" required=""/>
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact

export const ContactHeader= ()=>{
  return(
    <>
     <div className="layout-wrapper">
           <Navbar/>
           <div className="content-wrapper">
             <Contact/>
            </div>
          </div>
    </>
  )
}