// src/pages/AboutPage.js
import React from 'react';
import './AboutPage.css'; 
import AboutPageSidebar from '../components/AboutPageSidebar';

// Import PDF file
import resumePDF from '../assets/resume/Charles_Hill_Resume.pdf';

// Import the Image Gallery Component and CSS
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import CharlesHill from '../assets/images/Me.png';
import UTDallasFlag from '../assets/images/UTDallasFriendsFlag.jpg';

// About Me Image Imports

function AboutPage() {

        // CCA Tool Images
        const aboutMeImages = [
            {
                original: CharlesHill,
                thumbnail: CharlesHill,
                thumbnailAlt: 'Thumbnail of Me',
            },
            {
                original: UTDallasFlag,
                thumbnail: UTDallasFlag,
                description: 'UT Dallas flag signed by friends, classmates, and professors during my final semester',
                originalAlt: 'UT Dallas flag signed by friends, classmates, and professors during my final semester',
                thumbnailAlt: 'Thumbnail of signed UT Dallas Flag',
            },
        ];

    return (
        <div className="about-page-container">
            {/* Sidebar Container */}
            <div className="sidebar">
                <AboutPageSidebar />
            </div>

            {/* Main Content */}
            <section className="about-page">
                <section id="Resume" style={{ marginBottom: '10rem' }}>
                    {/* Resume Title */}
                    <h2>Resume</h2>
                    {/* PDF Embedded via iFrame */}
                    <div className="pdf-container">
                        <iframe
                            src={resumePDF}
                            title="Resume"
                            width="125%"
                            height="900px"
                            className="pdf-iframe"
                            loading="lazy"
                        >
                            {/* PDF Failed Download Message */}
                            This browser does not support PDFs. 
                            Please download the PDF to view it: 
                            <a href={resumePDF}>Download PDF</a>
                        </iframe>
                    </div>
                    {/* Education Title */}
                    <p>Education</p>
                    {/* Education Description */}
                    <h3>The University of Texas at Dallas</h3>
                    <h4>Major: Bachelor of Science in Electrical Engineering (BSEE)<br></br>
                    Graduated (3.08 GPA of 4.0 Scale)</h4>
                    <br></br>
                    <h3>Activities</h3>
                    <h4>• Natural Science and Engineering Research Laboratory (NSERL) - Undergraduate Research Assistant<br></br>
                    • Baylor University | National Science Foundation - Radio Spectrum Conference<br></br>
                    • IntelliChoice K-12 Volunteer Tutor (UT Dallas Branch)</h4>
                    <br></br>
                    <br></br>
                    {/* Technical Skills Title */}
                    <p>Technical Skills</p>
                    {/* Technical Skills Description (Languages) */}
                    <h3>Languages</h3>
                    <h4>C# Language • Java • Python<br></br>
                    8051 Assembly Language • VHDL • Verilog Programming • Shell Scripts<br></br>
                    </h4>
                    <br></br>
                    {/* Technical Skills Description (Programs) */}
                    <h3>Programs</h3>
                    <h4>AWR Microwave Office and PathWave ADS • Cadence Allegro PSpice Analysis Utilities Software<br></br>
                    Digilent WaveForms Instrument Suite • Keil MDK-Arm Development Tools<br></br> 
                    KiCAD EDA Suite • MATLAB and MATLAB App Designer<br></br>
                    National Instruments LabVIEW & Design Suite • QT Design Studio<br></br>
                    Onshape and Rhinoceros 3D CAD Software • Xilinx Vivado Design Suite
                    </h4>
                </section>

                <section id="About Me" style={{ marginBottom: '10rem' }}>
                    <h2>About Me</h2>
                    {/* Image Gallery */}
                    <div className="image-gallery-container">
                        <ImageGallery
                            items={aboutMeImages}
                            showThumbnails={false} // Hide Thumbnails
                            showFullscreenButton={true} // Show Fullscreen Button
                            showPlayButton={false} // Hide Autoplay Button
                            showNav={true} // Show Next and Previous Buttons
                            autoPlay={false} // Disable Autoplay
                            lazyLoad={true} // Enable Lazy Loading
                        />
                    </div>
                    <h4><br></br>Hi! My name is Charles, and I recently graduated from The University of Texas at Dallas (Fall 2024) with a degree in Electrical Engineering.<br></br> My interest in this field was inspired by my dad, who is an electrical engineer. Growing up, he would take me to his workplace and show me what he was working on, giving me a glimpse into the exciting and expansive world of electrical engineering.<br></br> I also have a passion for learning and am always eager to expand my horizons in hopes of becoming the best person I can be.<br></br>
                    <br></br>
                    I gained invaluable experience working as an Undergraduate Research Assistant at the Natural Science and Engineering Research Laboratory at The University of Texas at Dallas. During this time, I had the opportunity to assist a PhD student who acted as my mentor, while also helping them with their goal of obtaining a PhD. With this in mind, I worked on a variety of tasks, including 3D modeling & printing, hardware testing, software development, and cost analysis, among other valuable experiences.<br></br>
                    <br></br>
                    My ultimate goal is to apply what I’ve learned by entering the industry and contributing to the development of products and technologies that can improve and help people's lives.
                    Lastly, I enjoy meeting new people and expanding my network, so please feel free to contact me with my LinkedIn link at the bottom of the page!<br></br> 
                    <br></br>
                    Thank you for your time!</h4>
                </section>
            </section>
        </div>
    );
}

export default AboutPage;
