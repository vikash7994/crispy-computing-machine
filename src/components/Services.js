import React from 'react';
import "./style.css";

import img1 from "./images/brush-seperator-1.jpg";
import Button from "./Button";
const Services = () => {
    return (
      <>
           <section className=" headline ">
        
        <h1 className="h1">Services</h1>
        <h2 className=" p2 text-center">
        
        Enjoy our handmade work with love for every detail.
        </h2>   
        <img className="pt-4 pb-5" src={img1} />
      </section>
      <section class="service-ut-section ">
        <div class="d-lg-flex d-md-flex flex-lg-row flex-md-column
           ut-img">
          <div class="col-lg-6 col-md-12 service-ut text-center">
            <h1 >Website Design and Development</h1>
            <p>Your website still needs to be designed in ultimate space where you can dive into digitally world and strength your business. At Makemelive, the experienced developers are developing the top- notch website according to your requirements.</p>
      <Button/>
          </div>
          <div class="col-lg-6 col-md-12 ">
           <img className='img-section-1' />
          </div>
        </div>
      </section>
      <section class="service-ut-section ">
        <div class="d-lg-flex d-md-flex flex-row-reverse 
           ut-img">
          <div class="col-lg-6 col-md-12 service-ut text-center">
            <h1 >Mobile App Development</h1>
            <p>The app is your business’s face, so it needs to be designed accordingly to build your trust and loyalty among the customers. Reach out to us to create colorful and powerful apps, make the app that your business needs to succeed at Makemelive.</p>
      <Button/>
          </div>
          <div class="col-lg-6 col-md-12 ">
          <img className='img-section-2' />
          </div>
        </div>
      </section>
      <section class="service-ut-section ">
        <div class="d-lg-flex d-md-flex flex-lg-row flex-md-column
           ut-img">
          <div class="col-lg-6 col-md-12 service-ut text-center">
            <h1 >Search Engine Optimization</h1>
            <p>Search engine optimization is the process in which your website ranks on the Google pages to attract your targeted customer. At Makemelive, you get in touch with best and experienced technical executives who make your website ranks on the 1st page of Google, increasing the traffic on your website and bringing valuable leads.</p>
      <Button/>
          </div>
          <div class="col-lg-6 col-md-12 ">
           <img className='img-section-3' />
          </div>
        </div>
      </section>
      <section class="service-ut-section ">
        <div class="d-lg-flex d-md-flex flex-row-reverse 
           ut-img">
          <div class="col-lg-6 col-md-12 service-ut text-center">
            <h1 >E-Commerce Solutions</h1>
            <p>Enjoy rich, out-of-the-box features, unrestricted customization, and integrated third-party integrations that meet the particular needs of your company in every sector. With Makemelive you can carry your business vision to life and we deliver e-Commerce.</p>
      <Button/>
          </div>
          <div class="col-lg-6 col-md-12 ">
          <img className='img-section-4' />
          </div>
        </div>
      </section>
      <section class="text-center section-3 service-work-together">
        <div class="wrapper-work-heading"><h1>LET’S WORK TOGETHER</h1>
          <p class="pb-4">Let’s find out how to work together and create something meaningful
            or valuable</p>
         <a href="/#"><button>GET IN TOUCH</button></a>
        </div>
      </section>
        </>
    );
};

export default Services;