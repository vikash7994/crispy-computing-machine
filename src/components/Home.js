import React from 'react';
import "./style.css";
import img1 from "./images/1martin-shreder-5Xwaj9gaR0g-unsplash.jpg";
import img2 from "./images/website-development.png";
import img3 from "./images/mobile-application-development.png";
import img4 from "./images/search-engine-optimization.png";
import img5 from "./images/ecommerce-solutions.png";
import img6 from "./images/aws.png";
import img7 from "./images/upgrade-premium-services-1600x900.jpg";
import img8 from "./images/website-recovery.png";
import img9 from "./images/website-speed-optimization.png";
import img10 from "./images/website-migration.png";
import img11 from "./images/email-migration.png";
import img12 from "./images/wordpress-expert.png";
import img13 from "./images/happy-clients.jpeg";
import img14 from "./images/dentsu.png";
import img15 from "./images/edtimes.png";
import img16 from "./images/xppen.png";
import img17 from "./images/mindshift-interactive.png";
import img18 from "./images/anitadongre.png";
import img19 from "./images/ANDIndia.png";
import img20 from "./images/brego.png";
import img21 from "./images/sous.png";
import img22 from "./images/smittenondesign.png";
import img23 from "./images/sion-hospital-logo.png";
import img24 from "./images/hetero-healthcare.png";

import {FaChevronCircleRight} from "react-icons/fa";

const Home = () => {
    return (
      <>
         <section className=" headline ">
        <p className="fs-sm p1 text-center">
          The world is going digital, why not you?
        </p>
        <h1 className="h1" id="spin">
          
        </h1>
        <h2 className=" p2 text-center">
        
          Join us and groove into the world of possibilities!
        </h2>
      </section>
      <section class="slider-title">       
        <h5>We’ve Got More</h5>
        <p>Take a look at our portfolio <a href="/#" className="circle-icon">
        <FaChevronCircleRight/>
              </a> </p>
      </section>

      <section class="ut-section">
        <div class="d-lg-flex d-md-flex flex-lg-row flex-md-column
          justify-content-around ut-img">
          <div class="col-lg-5 col-md-12 ut-img">
            <h1 class="text-left">WE ARE A DIGITAL MARKETING AGENCY IN MUMBAI</h1>
            <p class="ut-para">Looking for a Digital marketing agency in Mumbai
              to grow your business with proficient Web developers in Mumbai?
              Your quest ends here!</p>
          </div>
          <div class="col-lg-5 col-md-12 ut-para">

            <p>Makemelive Technologies is a Top digital marketing agency in
              Mumbai dedicated to delivering precise result oriented Digital
              Marketing services in Mumbai. We at Make me live Technologies
              comprehend your business essentials, tendencies, delineations, and
              planning. With outstanding working experience of more than 10
              years in this industry, we are here to help you envisage your
              stature in the digital world and advance your business to expand
              and thrive online.</p>
            <p>We ensure you to deliver incomparable web development solutions
              based on your requirements. We solely pool the power of
              innovation, novel technology, target-oriented marketing, digital
              marketing services, and outcome metrics to create unique digital
              makeovers.</p>
          </div>

        </div>
      </section>
      {/* parallax-img  */}
      <section>
        <div class="parallax-img">
          <img src={img1}/>
        </div>
      </section>

      {/*our-Service*/}
      <section class="our-service p-3">
        <div><h1>OUR SERVICES</h1>
          <p>For us, digital marketing services aren’t just about consumer
            involvement; we focus more on delivering our clients something
            exceptional to look at. Our digital experts work day and night to
            create more innovative, ingenious, and expressive techniques to
            expand your business in the digital marketing industry. We provide
            our superior core services for:</p></div>
      </section>

      <section class="py-3 service-section">
        <div class="d-lg-flex d-md-flex flex-lg-row flex-md-column">
          <div class="col-lg-3 col-md-12 service-icon">
            <img src={img2}/>
            <h1>Website Design and Development</h1>
            <p>Your website still needs to be designed in ultimate space where
              you can dive into digitally world and strength your business. At
              Makemelive, the experienced developers are developing the
              top-notch website according to your requirements.</p>
         <a href="/#"><span>Learn More </span><FaChevronCircleRight/></a>
          </div>
          <div class="col-lg-3 col-md-12 service-icon">
            <img src={img3}/>
            <h1>Mobile App Development</h1>
            <p>The app is your business’s face, so it needs to be designed
              accordingly to build your trust and loyalty among the customers.
              Reach out to us to create colorful and powerful apps, make the app
              that your business needs to succeed at Makemelive.</p>
          <a href="/#">  <span>Learn More </span><FaChevronCircleRight/></a>
          </div>
          <div class="col-lg-3 col-md-12 service-icon">
            <img src={img4}/>
            <h1>Search Engine Optimization</h1>
            <p>Search engine optimization is the process in which your website
              ranks on the Google pages to attract your targeted customer. At
              Makemelive, you get in touch with best and experienced technical
              executives who make your website ranks on the 1st page of Google,
              increasing the traffic on your website and bringing valuable
              leads.</p>
           <a href="/#"> <span>Learn More </span><FaChevronCircleRight/></a>
          </div>
          <div class="col-lg-3 col-md-12 service-icon">
            <img src={img5}/>
            <h1>E-Commerce Solutions</h1>
            <p>Enjoy rich, out-of-the-box features, unrestricted customization,
              and integrated third-party integrations that meet the particular
              needs of your company in every sector. With Makemelive you can
              carry your business vision to life and we deliver e-Commerce.</p>
         <a href="/#">   <span>Learn More </span><FaChevronCircleRight/></a>
          </div>
        </div>
      </section>

      {/* upgrade-section */}
      <section class="section2">
        <div class="d-lg-flex d-md-flex flex-lg-row flex-md-column
          justify-content-between">
          <div class="col-lg-5 col-md-12 py-5 px-5 upgrade-section">
            <div class="upgrade-para"> <h1 class="text-left">UPGRADE</h1>
              <p>Help your business evolve with our premium services!
                Cutting-edge solutions that help you enhance your user
                experience & cultivate brand loyalty.</p>
            </div></div>
          <div class="col-lg-6 col-md-12">
            <img src={img7}
              width="100%"
             />
          </div>
        </div>
        <div class="d-lg-flex d-md-flex flex-lg-row flex-md-column
          upgrade-icon-2">
          <div class="col-lg-4 col-md-12 upgrade-icon">
            <img src={img6}/>
            <h1>AWS Architecture Setup</h1>
            <p>At Makemelive, we build a Virtual Private Network (VPC) ecosystem
              with public and private sub-networks where AWS networks and other
              technology can be launched.</p>
              <a href="/#">  <span>Learn More <FaChevronCircleRight/></span></a>
          </div>
          <div class="col-lg-4 col-md-12 upgrade-icon">
            <img src={img8}/>
            <h1>Website Recovery</h1>
            <p>Archive, restore with Makemelive, yes you heard it right. You can
              now quickly recover your website just by scheduling a call with
              us. Our experts are working dedicatedly to get your website back
              on Google and give you the digital presence again.</p>
          <a href="/#">  <span>Learn More <FaChevronCircleRight/></span></a>
          </div>
          <div class="col-lg-4 col-md-12 upgrade-icon">
            <img src={img9}/>
            <h1>Website Speed Optimization</h1>
            <p>Do you have to wait for your website to open? Now you don’t have
              to hustle to load your website! Our developers will optimize your
              website speed and give your audience a speedy experience while
              browsing through your website.</p>
           <a href="/#"> <span>Learn More <FaChevronCircleRight/></span></a>
          </div>

        </div>
        <div class="d-lg-flex d-md-flex flex-lg-row flex-md-column py-3">
          <div class="col-lg-4 col-md-12 upgrade-icon">
            <img src={img10}/>
            <h1>Website Migration</h1>
            <p>It is one of the most special and prominent services that
              Makemelive brings to your website. Website migration directly
              affects your ranking on the engines as it is done by our SEO
              professionals and gives the website the best possible rank!</p>
          <a href="/#">  <span>Learn More <FaChevronCircleRight/></span></a>
          </div>
          <div class="col-lg-4 col-md-12 upgrade-icon">
            <img src={img11}/>
            <h1>Email Migration</h1>
            <p>You are just minutes away from the cloud-based conversion that
              transforms the Email from every provider. We will move the
              schedule, addresses, files, assignments, journals, and notes from
              one device to another. As a full eMail Transfer solution (as
              supported by each system)!</p>
         <a href="/#">   <span>Learn More <FaChevronCircleRight/></span></a>
          </div>
          <div class="col-lg-4 col-md-12 upgrade-icon">
            <img src={img12}/>
            <h1>WordPress Expert Solutions</h1>
            <p>Are you planning to launch a website? Consult with team
              Makemelive, and your WordPress website will be ready. With the
              latest interface and design, we bring you the best WordPress
              expert solutions.</p>
          <a href="/#">  <span>Learn More <FaChevronCircleRight/></span></a>
          </div>

        </div>
      </section>
      <section class="ut-section-brand">
        <div class="d-lg-flex d-md-flex flex-lg-row flex-md-column
          justify-content-between">
          <div class="col-lg-6 col-md-12 px-4 ut-brand">
            <h1 class="text-left">WE'VE DONE IT FOR BRANDS BIG AND SMALL</h1>
            <p>Proven in the Digital Space for over 10+ years, more than 200+
              customers already trust MAKEMELIVE TECHNOLOGIES. We have created
              an incredible amount of over 500+ websites.</p>
          </div>
          <div class="col-lg-5 col-md-12 brand-img">
            <img src={img13}/>
          </div>
        </div>
      </section>
      <div class="space"><hr/></div>

      <section>
        <div class="d-lg-flex d-md-flex flex-lg-row flex-md-column px-3 py-5
          our-client">
          <div class="col-lg-4 col-md-12">
            <p>Our Awesome Clients
            </p></div>
          <div class="col-lg-8 col-md-12 mobile-disable">
            <div class="d-flex flex-row justify-content-around client-icons
              pb-5">
              <div class="col-3">
                <img src={img14}/>
              </div>
              <div class="col-3">
                <img src={img15}/>
              </div>
              <div class="col-3">
                <img src={img16}/>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-around client-icons
              py-5">
              <div class="col-3">
                <img src= {img17}/>
              </div>
              <div class="col-3">
                <img src={img18}/>
              </div>
              <div class="col-3">
                <img src={img19}/>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-around client-icons
              py-5">
              <div class="col-3">
                <img src={img20}/>
              </div>
              <div class="col-3">
                <img src={img21}/>
              </div>
              <div class="col-3">
                <img src={img22}/>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-around client-icons
              py-5">
              <div class="col-3">
                <img src={img23}/>
              </div>
              <div class="col-3">
                <img src={img24} alt="img24" />
              </div>
            </div>
          </div>
          {/* { mobile responsive } */}
          <div class="desktop-disable">
            <div class="d-flex flex-row justify-content-around client-icons
              pb-5">
              <div class="col-5">
                <img src={img14}/>
              </div>
              <div class="col-5">
                <img src={img15}/>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-around client-icons
              py-5">
              <div class="col-3">
                <img src={img16}/>
              </div>
              <div class="col-3">
                <img src={img17}/>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-around client-icons
              py-5">
              <div class="col-3">
                <img src={img18}/>
              </div>
              <div class="col-3">
                <img src={img19}/>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-around client-icons
              py-5">
              <div class="col-3">
                <img src={img20}/>
              </div>
              <div class="col-3">
                <img src={img21}/>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-around client-icons
              py-5">
              <div class="col-3">
                <img src={img22}/>
              </div>
              <div class="col-3">
                <img src={img23}/>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-around client-icons
              py-5">
              <div class="col-3">
                <img src={img24} alt="A" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-center section-3">
        <div class="wrapper-work-heading"><h1>LET’S WORK TOGETHER</h1>
          <p class="pb-4">Let’s find out how to work together and create something meaningful
            or valuable</p>
         <a href="/#"><button>GET IN TOUCH</button></a>
        </div>
      </section>
        </>
    );
};

export default Home;