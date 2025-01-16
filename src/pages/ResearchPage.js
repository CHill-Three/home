// src/pages/ResearchPage.js
import React from 'react';
import './ResearchPage.css'; // Seperate CSS For Page
import ResearchSidebar from '../components/ResearchSidebar';

// Import the Image Gallery Component and CSS
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// NSERL 3D Modeling (Micropumps) Image Imports
import PumpDesignI from '../assets/images/PumpDesignI.PNG';
import PumpDesignI_2 from '../assets/images/PumpDesignI_2.PNG';
import PumpDesignI_3 from '../assets/images/PumpDesignI_3.PNG';
import PumpDesignIV from '../assets/images/PumpDesignIV.PNG';
import PumpDesignIV_2 from '../assets/images/PumpDesignIV_2.PNG';
import PumpMoldI from '../assets/images/PumpMoldI.PNG';

function ResearchPage() {

// NSERL 3D Modeling (Micropumps) Images
const NSERLModelingImages = [
  {
    original: PumpDesignI,
    thumbnail: PumpDesignI,
  },
  {
    original: PumpDesignI_2,
    thumbnail: PumpDesignI_2,
  },
  {
    original: PumpDesignI_3,
    thumbnail: PumpDesignI_3,
  },
  {
    original: PumpDesignIV,
    thumbnail: PumpDesignIV,
  },
  {
    original: PumpDesignIV_2,
    thumbnail: PumpDesignIV_2,
  },
  {
    original: PumpMoldI,
    thumbnail: PumpMoldI,
  },
];
      
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
    {/* Sidebar Container */}
      <div className="sidebar">
        <ResearchSidebar />
      </div>

    <section className="research-page">
      <h2>Research</h2>
      <section id="NSERL Research" style={{ marginBottom: '10rem' }}>
              {/* Title */}
              <h3>Natural Science and Engineering Research Laboratory - Micro/Nano Devices and Systems Lab</h3>
              {/* Image Gallery */}
              <div className="-NSERL-image-gallery-container">
              <ImageGallery
                  items={NSERLModelingImages}
                  showThumbnails={true} // Thumbnails
                  showFullscreenButton={true} // Show Fullscreen Button
                  showPlayButton={false} // Hide Autoplay Button
                  showNav={true} // Show Next and Previous Buttons
                  autoPlay={false} // Disable Autoplay
                  lazyLoad={true} // Enable Lazy Loading
               />
              </div>
                    
            {/* Project Description */}
            <br></br>
            <h3>Description</h3>
            {/* Project Description */}
            <h4>
            The Micro/Nano Devices and Systems Laboratory (MiNDs) at UT Dallas specializes in developing micro- and submicron-scale devices for biomedical applications and sensing photonics.
            <br></br>
            <br></br>
            During my time in the lab, I help contributed to the design and development of a wireless implantable micropump and pressure sensing system aimed at treating osteoporosis and help with the testing and development of various strain sensors. 
            <br></br>
            Pictured above are some of the designs and molds I created for testing.
            <br></br>
            <br></br>
            With this in mind, I undertook a variety of responsibilities, including coordinating material procurement with UT Dallas vendors to ensure the timely acquisition of essential components, analyzing experimental data, and generating reports to support informed decision-making and project advancement. 
            Additionally, I developed firmware for Texas Instruments (TI) and Arduino microcontrollers to achieve precise control of the micropump and sensing systems. I also designed and 3D printed various pump models for experimental testing, facilitating iterative improvements and design validation. 
            <br></br>
            <br></br>
            Beyond these mentioned tasks, I took on numerous additional lab responsibilities as needed for each project (device testing and troubleshooting, work with reliability/maintainability/testability analysis tools and software/firmware development and implementation), 
            demonstrating flexibility and a strong commitment to supporting our research objectives.
            <br></br>
            <br></br>
            Lastly, I worked closely with a PhD student to support and advance his research goals, 
            <br></br>
            an experience I thoroughly enjoyed and am extremely thankful for!
            <br></br>
            This collaboration allowed me to make meaningful contributions to his research while further developing my skills as an electrical engineer!
           </h4>
        </section>

      </section>
    </div>
  );
}

export default ResearchPage;
