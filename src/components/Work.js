import React from 'react';
import img1 from "./images/edtimes-featured-500x500.jpg";
import img3 from "./images/fca-featured-500x500.jpg";
import img2 from "./images/xppen-featured-500x500.jpg";
import img4 from "./images/brego-featured-500x500.jpg";
import img5 from "./images/mindshift-interactive-featured-500x500.jpg";
import img6 from "./images/sous-featured-500x500.jpg";
import img7 from "./images/karmabites-featured-500x500.jpg";
import img8 from "./images/smittenondesign-featured-500x500.jpg";
import img9 from "./images/themonetadesign-featured-500x500.jpg";
import "./style.css";
const Work = () => {
    return (
      <>
           <section className=" headline pb-5">
        <h1 className="h1">All Our Work</h1>
        <h2 className=" p2 text-center">
        Enjoy our handmade work with love for every detail.
        </h2>   
      </section>
      <div className='d-flex  gap-4 filter-title pt-5 ps-3'>
          <p >ALL</p>
          <p>WEB APP/ANDROID APPLICATION</p>
          <p>WEBSITE</p>
       </div>
<section className='work-section-page'>
<div className='d-flex flex-row justify-content-evenly  '>
    <div className='col-4 p-4 img1 '>
        <img src={img2} /> 
<p>XP-PEN</p>
    </div>
    <div className='col-4 p-4'>
        <img src={img1} />
        <p>ED Times</p>
    </div>
    <div className='col-4 p-4'>
        <img src={img3} />
        <p>FINDCreative | React Website</p>
    </div>
</div>
</section>

<section className='work-section-page'>
<div className='d-flex flex-row justify-content-evenly  '>
    <div className='col-4 p-4 img1 '>
        <img src={img4} /> 
<p>Brego</p>
    </div>
    <div className='col-4 p-4'>
        <img src={img5} />
        <p>MindShift Interactive</p>
    </div>
    <div className='col-4 p-4'>
        <img src={img6} />
        <p>SOUS Online | Fashion Ecommerce</p>
    </div>
</div>
</section>

<section className='work-section-page'>
<div className='d-flex flex-row justify-content-evenly  '>
    <div className='col-4 p-4 img1 '>
        <img src={img7} /> 
<p>Karma Bites</p>
    </div>
    <div className='col-4 p-4'>
        <img src={img8} />
        <p>SmittenOnDesign</p>
    </div>
    <div className='col-4 p-4'>
        <img src={img9} />
        <p>The Moneta Design | Ecommerce</p>
    </div>
</div>
</section>
      <section class="text-center section-3 pt-5">
        <div class="wrapper-work-heading"><h1>LET’S WORK TOGETHER</h1>
          <p class="pb-4">Let’s find out how to work together and create something meaningful
            or valuable</p>
         <a href="/#"><button>GET IN TOUCH</button></a>
        </div>
      </section>
        </>
    );
};

export default Work;