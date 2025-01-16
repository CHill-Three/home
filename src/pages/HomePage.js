import React from 'react';
import './HomePage.css'; // Seperate CSS For Page

function HomePage() {
// Main Title and Description
  return (
    <section className="hero" id="home">
      <h2>Electrical Engineer | Passionate about Learning and Helping Others</h2>
      <p>
        Former Undergraduate Research Assistant at <br></br><a href="https://www.utdallas.edu/" target="_blank" rel="noreferrer">The University of Texas at Dallas↗</a><br></br>(Natural Science and Engineering Research Laboratory)<br></br>
        <a href="https://ece.utdallas.edu/research/facilities/minds-micro-nano-devices-and-systems-laboratory/" target="_blank" rel="noreferrer">MiNDs↗</a> (Micro/Nano Devices and Systems Lab)
      </p>
      <p>
        Electrical Engineer – Circuit Design, Embedded Systems <br></br> & Smart Technologies
      </p>
    </section>
  );
}

export default HomePage;
