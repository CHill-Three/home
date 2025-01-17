// src/pages/ProjectsPage.js
import React from 'react';
import './ProjectsPage.css'; // Separate CSS For Page
import ProjectsSidebar from '../components/ProjectsSidebar';

// Import the Image Gallery Component and CSS
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// CCA Tool FINAL Image Imports (Part I)
import ccaToolMain from '../assets/images/ccaToolMain.PNG';
import ccaToolReview from '../assets/images/ccaToolReview.PNG';
import ccaToolResults from '../assets/images/ccaToolResults.PNG';
import ccaToolResultDouble from '../assets/images/CCAToolPosterCutout.png';
import ccaTool_ngSpice from '../assets/images/ngSPICE.PNG';

// CCA Tool Concept Image Imports (Part II)
import ccaToolConceptFirst from '../assets/images/CCAToolUIFirstConcept.png';
import ccaToolConceptPreview from '../assets/images/CCAToolPreviewConcept.PNG';
import ccaToolConceptPreviewII from '../assets/images/CCAToolPreviewConceptII.PNG';
import ccaToolConceptQTDesigner from '../assets/images/CCAToolQTDesignerConcept.png';
import ccaToolExcelResults from '../assets/images/ccaToolExcelResults.PNG';

// CCA Tool Expo Image Imports (Part III)
import TeamCharterLogo from '../assets/images/TeamCharterLogo.png';
import ccaToolSlide from '../assets/images/ccaToolSlide.png';
import ccaToolPoster from '../assets/images/ccaToolPoster.png';

// RF Amp Image Imports
import RFLumpedElementsFinal from '../assets/images/AWRLEPRJ.png';
import RFDistributedElementsFinal from '../assets/images/AWRLEPRJ_Work.PNG';
import RFLE_FinalResults from '../assets/images/AWRLE_Final.PNG';
import RFDE_FinalResults from '../assets/images/AWRDE_Final.png';
import RF_SmithChart from '../assets/images/AWRLEPRJ_SmithChartWork.PNG';
import FinalCompMatrixRF from '../assets/images/AWR_ComplianceMatrix.PNG';

// Full-Wave Image Imports
import FullWavePCBMainCircuit_1 from '../assets/images/FullWavePCBMainCircuit_1.png';
import FullWavePCBMainCircuit_Exported from '../assets/images/FullWavePCBMainCircuit_Exported.png';
import FullWavePCBMainPSpiceSim from '../assets/images/FullWavePCBMainPSpiceSim.png';
import FullWavePCBMainCircuit_PCBFootprint from '../assets/images/FullWavePCBMainCircuit_PCBFootprint.png';
import FullWavePCBMainCircuit_Status from '../assets/images/FullWavePCBMainCircuit_Status.png';
import FullWavePCBRatsNestExample from '../assets/images/FullWavePCBRatsNestExample.png';

// FSM Mealy Image Imports
import FSM_Mealy from '../assets/images/1010_FSM_Mealy.png';
import FSM_Logic from '../assets/images/1010_FSM_Logic.PNG';
import FSM_Results from '../assets/images/1010_Mealy_FSM.png';

function ProjectsPage() {

    // CCA Tool Final Images (Part I)
    const ccaToolFinalImages = [
        {
            original: ccaToolMain,
            thumbnail: ccaToolMain,
            description: 'Filled in Selection Type Tab of the Capacitive Coupling Analyzer (Final)',
            originalAlt: 'Filled in Selection Type Tab of the Capacitive Coupling Analyzer (Final)',
            thumbnailAlt: 'Thumbnail of Filled in Selection Type Tab (CCA Tool)',
        },
        {
            original: ccaToolReview,
            thumbnail: ccaToolReview,
            description: 'Final Selected Sim Settings Review Screen of the Capacitive Coupling Analyzer (Final)',
            originalAlt: 'Final Selected Sim Settings Review Screen of the Capacitive Coupling Analyzer (Final)',
            thumbnailAlt: 'Thumbnail of Final Selected Sim Settings Review Screen',
        },
        {
            original: ccaToolResults,
            thumbnail: ccaToolResults,
            description: 'Final Graph Results Display of the Given Circuit & Settings (Linearization Analysis Type Chosen)',
            originalAlt: 'Final Graph Results Display of the Given Circuit & Settings (Linearization Analysis Type Chosen)',
            thumbnailAlt: 'Thumbnail of Final Graph Results Display of the Given Circuit & Settings',
        },
        {
            original: ccaToolResultDouble,
            thumbnail: ccaToolResultDouble,
            description: 'Final Graph Results Compared (Fourier Series: Left | Linearization: Right)',
            originalAlt: 'Final Graph Results Compared (Fourier Series: Left | Linearization: Right)',
            thumbnailAlt: 'Thumbnail of Final Graph Results Compared (Fourier Series: Left | Linearization: Right)',
        },
        {
            original: ccaTool_ngSpice,
            thumbnail: ccaTool_ngSpice,
            description: 'NGSPICE: Same Circuit & Settings Comparison (Note: NGSPICE needs added Resistor to Run (Real Impedance), Thus Decay)',
            originalAlt: 'NGSPICE: Same Circuit & Settings Comparison (Note: NGSPICE needs added Resistor to Run (Real Impedance), Thus Decay)',
            thumbnailAlt: 'Thumbnail of NGSPICE: Same Circuit & Settings Comparison (Note: NGSPICE needs added Resistor to Run (Real Impedance), Thus Decay)',
        }
    ];

    // CCA Tool Concept Images (Part II)
    const ccaToolConceptImages = [
        {
            original: ccaToolConceptFirst,
            thumbnail: ccaToolConceptFirst,
            description: 'MS Paint Early Concept of CCA Tool',
            originalAlt: 'MS Paint Early Concept of CCA Tool',
            thumbnailAlt: 'Thumbnail of MS Paint Early Concept of CCA Tool',
        },
        {
            original: ccaToolConceptPreview,
            thumbnail: ccaToolConceptPreview,
            description: 'Early QT Designer CCA Tool User Interface (Part One)',
            originalAlt: 'Early QT Designer CCA Tool User Interface (Part One)',
            thumbnailAlt: 'Thumbnail of Early QT Designer CCA Tool User Interface (Part One)',
        },
        {
            original: ccaToolConceptPreviewII,
            thumbnail: ccaToolConceptPreviewII,
            description: 'Early QT Designer CCA Tool User Interface (Part Two)',
            originalAlt: 'Early QT Designer CCA Tool User Interface (Part Two)',
            thumbnailAlt: 'Thumbnail of Early QT Designer CCA Tool User Interface (Part Two)',
        },
        {
            original: ccaToolConceptQTDesigner,
            thumbnail: ccaToolConceptQTDesigner,
            description: 'Early QT Designer CCA Tool User Interface Work',
            originalAlt: 'Early QT Designer CCA Tool User Interface Work',
            thumbnailAlt: 'Thumbnail of Early QT Designer CCA Tool User Interface Work',
        },
        {
            original: ccaToolExcelResults,
            thumbnail: ccaToolExcelResults,
            thumbnailAlt: 'Thumbnail of CCA Tool Testing Results'
        },
        ];

    // CCA Tool Expo Images (Part III)
    const ccaToolExpoImages = [
        {
            original: TeamCharterLogo,
            thumbnail: TeamCharterLogo,
            description: 'UTDesign Team 2023 (Logo)',
            originalAlt: 'UTDesign Team 2023 (Logo)',
            thumbnailAlt: 'Thumbnail of UTDesign Team 2023 (Logo)',
        },
        {
            original: ccaToolSlide,
            thumbnail: ccaToolSlide,
            description: 'UTDesign II Expo (Slide)',
            originalAlt: 'UTDesign II Expo (Slide)',
            thumbnailAlt: 'Thumbnail of UTDesign II Expo (Slide)',
        },
        {
            original: ccaToolPoster,
            thumbnail: ccaToolPoster,
            description: 'UTDesign II Expo (Poster)',
            originalAlt: 'UTDesign II Expo (Poster)',
            thumbnailAlt: 'Thumbnail of UTDesign II Expo (Poster)',
        },
    ];

        // RF AWR Project Images
        const rfAWRProjectImages = [
        {
            original: RFLumpedElementsFinal,
            thumbnail: RFLumpedElementsFinal,
            description: 'Single-Stage RF Amplifiers: Lumped Elements Design',
            originalAlt: 'Single-Stage RF Amplifiers: Lumped Elements Design',
            thumbnailAlt: 'Single-Stage RF Amplifiers: Lumped Elements Design',
        },
        {
            original: RFDistributedElementsFinal,
            thumbnail: RFDistributedElementsFinal,
            description: 'Single-Stage RF Amplifiers: Distributed TX Lines Design',
            originalAlt: 'Single-Stage RF Amplifiers: Distributed TX Lines Design',
            thumbnailAlt: 'Single-Stage RF Amplifiers: Distributed TX Lines Design',
        },
        {
            original: RFLE_FinalResults,
            thumbnail: RFLE_FinalResults,
            description: 'Lumped Elements Design: RF Performance Graph',
            originalAlt: 'Lumped Elements Design: RF Performance Graph',
            thumbnailAlt: 'Lumped Elements Design: RF Performance Graph',
        },
        {
            original: RFDE_FinalResults,
            thumbnail: RFDE_FinalResults,
            description: 'Distributed TX Lines Design: RF Performance Graph',
            originalAlt: 'Distributed TX Lines Design: RF Performance Graph',
            thumbnailAlt: 'Distributed TX Lines Design: RF Performance Graph',
        },
        {
            original: RF_SmithChart,
            thumbnail: RF_SmithChart,
            description: 'Fujitsu S-Parameters: Smith Chart',
            originalAlt: 'Fujitsu S-Parameters: Smith Chart',
            thumbnailAlt: 'Fujitsu S-Parameters: Smith Chart',
        },
        {
            original: FinalCompMatrixRF,
            thumbnail: FinalCompMatrixRF
        },
    ];

         // Full Wave PCB Final Images
        const fullWavePCBFinalImages = [
        {
        original: FullWavePCBMainCircuit_1,
        thumbnail: FullWavePCBMainCircuit_1,
        description: 'PSpice: Full-Wave Rectifier Circuit: The Input measured is the Sinusoidal Voltage Source and the Output is measured ACROSS the Capacitor (C1).',
        originalAlt: 'PSpice: Full-Wave Rectifier Circuit: The Input measured is the Sinusoidal Voltage Source and the Output is measured ACROSS the Capacitor (C1).',
        thumbnailAlt: 'PSpice: Full-Wave Rectifier Circuit: The Input measured is the Sinusoidal Voltage Source and the Output is measured ACROSS the Capacitor (C1).',
        },
        {
        original: FullWavePCBMainPSpiceSim,
        thumbnail: FullWavePCBMainPSpiceSim,
        description: 'Input(Red) / Output(Green) of the Simulated Rectifier Circuit',
        originalAlt: 'Input(Red) / Output(Green) of the Simulated Rectifier Circuit',
        thumbnailAlt: 'Input(Red) / Output(Green) of the Simulated Rectifier Circuit',
        },
        {
        original: FullWavePCBMainCircuit_Exported,
        thumbnail: FullWavePCBMainCircuit_Exported,
        description: 'Exported PCB Board',
        originalAlt: 'Exported PCB Board',
        thumbnailAlt: 'Exported PCB Board',
        },
        {
        original: FullWavePCBMainCircuit_PCBFootprint,
        thumbnail: FullWavePCBMainCircuit_PCBFootprint,
        description: 'PCB Board Footprint',
        originalAlt: 'PCB Board Footprint',
        thumbnailAlt: 'PCB Board Footprint',
        },
        {
        original: FullWavePCBMainCircuit_Status,
        thumbnail: FullWavePCBMainCircuit_Status,
        description: 'Final Display Status Check',
        originalAlt: 'Final Display Status Check',
        thumbnailAlt: 'Final Display Status Check',
        }
    ];

        // FSM Mealy Final Images
        const fsmMealyImages = [
        {
        original: FSM_Mealy,
        thumbnail: FSM_Mealy,
        description: '‘1010’ Mealy Finite State Machine used to observe different state changes (with overlap)',
        originalAlt: '‘1010’ Mealy Finite State Machine used to observe different state changes (with overlap)',
        thumbnailAlt: '‘1010’ Mealy Finite State Machine used to observe different state changes (with overlap)',
        },
        {
        original: FSM_Logic,
        thumbnail: FSM_Logic,
        description: 'Diagram displaying logic of a Mealy Finite State Machine',
        originalAlt: 'Diagram displaying logic of a Mealy Finite State Machine',
        thumbnailAlt: 'Diagram displaying logic of a Mealy Finite State Machine',
        },
        {
        original: FSM_Results,
        thumbnail: FSM_Results,
        description: 'Recorded ‘1010’ Mealy Finite State Machine Behavioral Simulation',
        originalAlt: 'Recorded ‘1010’ Mealy Finite State Machine Behavioral Simulation',
        thumbnailAlt: 'Recorded ‘1010’ Mealy Finite State Machine Behavioral Simulation',
        }
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar Container */}
            <div className="sidebar">
                <ProjectsSidebar />
            </div>

            {/* Main Content (Centered) */}
            <section
                className="projects-page"
                style={{
                    margin: '0 auto', // Center Horizontally
                    textAlign: 'center',
                }}
            >
                <section id="Professional Development Projects" style={{ marginBottom: '3rem' }}>
                    <h2>Professional Development Projects</h2>
                </section>

                {/* CCA Tool - Project */}
                <section id="The CCA Tool" style={{ marginBottom: '10rem' }}>
                    {/* Title */}
                    <h3>The Capacitive Coupling Analyzer Tool (UTDesign Project) | Python 3.11, PySide6 & QT Designer</h3>
                    {/* Image Gallery */}
                    <div className="-ccaTool_One-image-gallery-container">
                        <ImageGallery
                            items={ccaToolFinalImages}
                            showThumbnails={true} // Thumbnails
                            showFullscreenButton={true} // Show Fullscreen Button
                            showPlayButton={false} // Hide Autoplay Button
                            showNav={true} // Show Next and Previous Buttons
                            autoPlay={false} // Disable Autoplay
                            lazyLoad={true} // Enable Lazy Loading
                        />
                    </div>
                    
                    {/* Project Abstract */}
                    <br></br>
                    <h3>Abstract</h3>
                    {/* Project Abstract */}
                    <h4>
                    The semiconductor design process can be long and complex, and several tests need to be 
                    conducted to verify that the chip operates as designed. Before the final top-level design layout, 
                    analyzing the impact of noisy signals on sensitive circuit networks due to capacitive coupling is 
                    essential. 
                    <br></br>
                    Existing analysis tools, such as SPICE, can evaluate how input signals impact 
                    components like capacitors within a given circuit, but they often operate slower than desired.
                    <br></br>

                    <br></br>
                    To address this challenge, UTDesign Team 2023 has developed the Capacitive Coupling Analyzer (CCA Tool), a 
                    Python-based program designed to streamline this analysis. It accepts a top-level circuit layout in 
                    .CSV format, allowing users to specify which nodes and capacitors they wish to analyze within 
                    the given circuit. Once the input signal and circuit selections are made, the tool generates a graph 
                    illustrating the impact of input signals on the circuit and its components. This capability enables 
                    top-level designers to effectively assess the influence of noisy signals on their circuit designs.
                    <br></br>
                    <br></br>
                    By utilizing The CCA Tool, designers can enhance their workflow efficiency and ensure higher 
                    reliability in their final circuit layouts.
                    <br></br><br></br>
                    </h4>

                    {/* Image Gallery */}
                    <div className="-ccaTool_Two-image-gallery-container">
                        <ImageGallery
                            items={ccaToolConceptImages}
                            showThumbnails={true} // Thumbnails
                            showFullscreenButton={true} // Show Fullscreen Button
                            showPlayButton={false} // Hide Autoplay Button
                            showNav={true} // Show Next and Previous Buttons
                            autoPlay={false} // Disable Autoplay
                            lazyLoad={true} // Enable Lazy Loading
                        />
                    </div>

                    {/* Project Role */}
                    <br></br>
                    <h3>Project Role</h3>
                    {/* Role Description */}
                    <h4>
                    As the Project Lead for the CCA Tool (UTDesign Team 2023), I led a diverse team of six engineering majors, 
                    including four electrical and two computer engineers.
                    My main goal was to foster collaboration by leveraging each member’s unique skills and maintain strong 
                    communication with our corporate sponsors through regular weekly updates and strategic discussions.
                    <br></br>
                    <br></br>
                    Additionally, I also took on the responsibility of designing and programming the user interface using Python, 
                    creating an intuitive and user-friendly experience modeled on current SPICE products available on the market.
                    <br></br>
                    <br></br>
                    As a team, we developed a tool that outperformed SPICE for circuits with over 1,000 capacitors while achieving 
                    comparable accuracy. We accomplished this by implementing two different analysis methods: the Linearization 
                    approach and the Fourier Series approach. Of the two, the Fourier Series approach was the fastest, enhancing speed, 
                    while the Linearization approach provided the highest accuracy, achieving nearly a 1:1 comparability with SPICE. 
                    Users could choose between the analysis methods after inputting their designed circuit file (.csv) into the program.
                    <br></br><br></br>
                    </h4>

                    {/* Image Gallery */}
                    <div className="-ccaTool_Three-image-gallery-container">
                        <ImageGallery
                            items={ccaToolExpoImages}
                            showThumbnails={true} // Thumbnails
                            showFullscreenButton={true} // Show Fullscreen Button
                            showPlayButton={false} // Hide Autoplay Button
                            showNav={true} // Show Next and Previous Buttons
                            autoPlay={false} // Disable Autoplay
                            lazyLoad={true} // Enable Lazy Loading
                        />
                    </div>

                    {/* Reflections & Future Direction */}
                    <br></br>
                    <h3>Reflections & Future Direction</h3>
                    {/* Reflections & Future Direction Description */}
                    <h4>
                    Ultimately, I believe that serving in this role improved my leadership, communication, and technical design skills. 
                    <br></br>
                    These improvements enabled me to effectively oversee complex projects and drive innovation within engineering teams.
                    <br></br>
                    Lastly, collaborating with a diverse group of team members fostered a strong sense of teamwork, allowing us to 
                    successfully achieve our objectives together.
                    </h4>
                    
                </section>

                <section id="Single-Stage RF Amplifiers" style={{ marginBottom: '10rem' }}>
                    {/* Title */}
                    <h3>Single-Stage RF Amplifiers (Lumped Element & Distributed TX Lines) | AWR Microwave Office</h3>
                    {/* Image Gallery */}
                    <div className="-RF-AWR-image-gallery-container">
                        <ImageGallery
                            items={rfAWRProjectImages}
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
                    This Project focuses on two separate Single-Stage Radio Frequency Amplifiers: one designed using Lumped-Element components
                    <br></br>(Inductors and Capacitors) and the other using Distributed (Series and Shunt) transmission lines. 
                    <br></br>
                    <br></br>
                    This design process involves hand-drawn Smith chart conjugate matching for both the input and output to achieve a simulataneous conjugate match.
                    <br></br>
                    <br></br>
                    Once the simultaneous conjugate match is achieved, the component values and microstrip lengths can be entered using an internal calculator known as TXLine. 
                    AWR Microwave Office can then predict RF performance across the 1-26 GHz frequency range. 
                    <br></br>
                    <br></br>This specific project is designed to optimize RF performance using a Fujitsu transistor at 20 GHz.
                    <br></br>
                    Finally, the gain (|S21| in dB), Input Return Loss (|S11| in dB), Output Return Loss (|S22| in dB), and the "low" and "high" frequencies at the -3 dB points (below the gain peak at fo) are plotted.
                    <br></br>
                    </h4>
                </section>

                <section id="Full-Wave Bridge Rectifier PCB Design" style={{ marginBottom: '10rem' }}>
                    {/* Title */}
                    <h3>Full-Wave Bridge Rectifier PCB Design | Cadence Allegro PSpice PCB Design</h3>
                    {/* Image Gallery */}
                    <div className="-Full-Wave-image-gallery-container">
                        <ImageGallery
                            items={fullWavePCBFinalImages}
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
                    This Project involves designing a Full-Wave Bridge Rectifier Circuit to convert AC signals into DC signals. 
                    The process begins by creating the Rectifier and conducting a Transient Simulation using a 3V Peak-to-Peak, 1 kHz Sine Wave Input. 
                    Both the Input and Output Signals are included in the Simulation. 
                    The anticipated outcome is an output that stabilizes around a consistent DC voltage, although it may not be perfectly smooth.
                    <br></br>
                    <br></br>
                    Once satisfactory simulation results are obtained, the design is transferred to a PCB layout. 
                    Specific Components are selected, including Diodes D1 through D4 (DO35), Capacitor C1 (Cap196), and Headers J1 and J2 (Jumper2). 
                    Each component's footprint is carefully adjusted, followed by a Design Rule Check (DRC) to verify that the Design complies with both Physical and Electrical Standards.
                    <br></br>
                    <br></br>
                    After completing the PCB Layout, a Netlist is generated from the PSpice design, and components are strategically placed on the PCB. 
                    The routing process is executed meticulously on the bottom layer of the board, avoiding 90-degree angles to ensure optimal performance. 
                    <br></br>
                    <br></br>
                    Finally, the completed PCB design undergoes a status check to confirm its correctness and functionality, resulting in a fully designed and simulated bridge rectifier ready for implementation.
                    </h4>

                </section>

                <section id="FPGA Mealy Designed FSM" style={{ marginBottom: '10rem' }}>
                    {/* Title */}
                    <h3>FPGA Moore Designed Finite State Machine | Xilinx Vivado (Artix-7 FPGA Family), Verilog</h3>
                    {/* Image Gallery */}
                    <div className="-FSM-Mealy-image-gallery-container">
                        <ImageGallery
                            items={fsmMealyImages}
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
                    This Project involves designing a Mealy State Machine with one input and one output to detect the input sequence '1010' and output a '1' upon its recognition. 
                    The process begins by determining the next state of the finite state machine based on the input data sequence. 
                    Using Xilinx Vivado and Verilog HDL, the Mealy finite state machine is created and simulated to ensure accurate state transitions and output behavior.
                    <br></br>
                    <br></br>
                    Once the state machine design is finalized, the Verilog source file is developed to implement the sequence recognition logic. 
                    The design includes defining state transitions and output conditions that respond to the input sequence '1010'. 
                    A testbench is then created to simulate the circuit, supplying the necessary input sequences and verifying that the output correctly responds with a '1' when the sequence is detected.
                    <br></br>
                    <br></br>
                    After successful simulation, the design is synthesized and implemented within Xilinx Vivado. 
                    The finite state machine's functionality is validated through behavioral simulations, ensuring that the output stabilizes correctly after detecting the specified input sequence. 
                    The final implementation demonstrates a reliable Mealy state machine capable of recognizing the '1010' input pattern and producing the desired output.
                    <br></br>
                    <br></br>
                    Finally, the project results are documented, showcasing the synchronous state changes and the accurate detection of the input sequence through the simulation outputs. 
                    </h4>
                    
                </section>

            </section>
        </div>
    );

}

export default ProjectsPage;
