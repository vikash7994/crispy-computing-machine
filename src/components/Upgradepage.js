import React,{useState} from 'react';
import Serviceapi from './Api/Serviceapi';
const Upgradepage = () => {
    const [workData, setworkData] = useState(Serviceapi);
    console.log(workData);

    return (
      <>
          <section > 
        <div className="d-flex justify-content-between px-4">
          
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className=" col-lg-4 ">
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
           
        </>
    );
};

export default Upgradepage;