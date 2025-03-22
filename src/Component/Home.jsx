import React from 'react'
import Header from './Header'
 

export default function Home() {

    return (
        <>
            <div className='header'>

                <Header />
            </div>
            {/* <div className='main'>
                <div style={{ display: "flex", gap: "11px" }}>
                    <div >
                        <p style={{ background: 'black', width: '30%', padding: '10px', borderRadius: '20px', color: 'white', fontSize: '16px', marginBottom: '10px' }}>
                            👋 Let's Save our Environment
                        </p>

                        <p style={{ fontSize: '64px', marginBottom: '10px' }}>
                            <b>Optimize your eco reporting with</b>
                        </p>

                        <p style={{ fontFamily: 'Aeonik TRIAL', fontSize: '64px', background: '#FEAB4F', color: 'white', padding: '10px', borderRadius: '40px', textAlign: 'center', width: '85%', marginBottom: '10px' }}>
                            <b>CARBON CRUNCH</b>
                        </p>

                        <p style={{ fontFamily: 'DM Sans', fontSize: '24px', marginBottom: '0' }}>
                            <span style={{ color: 'green' }}>95%</span> Accurate Carbon Calculations Trusted by Industry Leaders
                        </p>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <p style={{ fontSize: "20px", color: "#28B30E" }}><b>Free Calculator</b></p>
                            <button className='Book-btn'><b>Book Demo</b></button>
                        </div>
                    </div>

                </div>
                <div >
                    <img src="/Rectangle.png" alt="" />
                </div> */}

{/* 
            </div> */}
            <div class="main-container">
  <div class="header-section">
    <header></header>
  </div>
  <div class="main-section">
    <div class="text-content-wrapper">
      <div class="top-message">
        👋 Let's Save our Environment
      </div>
      <div class="main-heading">
        <b>Optimize your eco reporting with</b>
      </div>
      <div class="highlighted-heading">
        <b>CARBON CRUNCH</b>
      </div>
      <div class="supporting-text">
        <span class="green-text">95%</span> Accurate Carbon Calculations Trusted by
        Industry Leaders
      </div>
      <div class="action-buttons">
        <div class="free-calculator">
          <b>Free Calculator</b>
        </div>
        <button class="book-demo-btn">
          <b>Book Demo</b>
        </button>
      </div>
    </div>
    <div class="image-wrapper">
      <img src="/Rectangle.png" alt="" class="main-image" />
    </div>
  </div>
</div>
         
            <div className="container">
                <div className="stat-box">
                    <h2>98%</h2>
                    <p>Of CEOs Agree Sustainability Is Their Responsibility</p>
                </div>
                <div className="stat-box">
                    <h2>3X</h2>
                    <p>ESG High Performers Deliver A Higher Total Shareholder Return</p>
                </div>
                <div className="stat-box">
                    <h2>37%</h2>
                    <p>Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track</p>
                </div>
                <div className="stat-box">
                    <h2>18%</h2>
                    <p>Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050</p>
                </div>
            </div>


            <div className="features-container">
                <h2 style={{ color: "#239C0C", marginLeft: "30px" }}>FEATURES</h2>
                <h1 className="features-title"><span style={{ color: "#FEAB4F" }}>Why</span> Carbon Crunch?</h1>
                <div className="feature-row">
                    <div className="feature-box">
                        <div className='ab'>

                            <img src="/fluent_data-line-20-filled.png" alt="Automated Data Collection" className="feature-icon" />
                        </div>
                        <h2>Automated Data Collection</h2>
                        <p>Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.</p>
                    </div>
                    <div className="feature-box">
                        <div className='ab'>

                            <img src="/ion_binoculars.png" alt="Monitoring & Reporting" className="feature-icon" />
                        </div>
                        <h2>Monitoring & Reporting</h2>
                        <p>Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.</p>
                    </div>
                    <div className="feature-box">
                        <div className='ab'>

                            <img src="/ion_binoculars.png" alt="Monitoring & Reporting" className="feature-icon" />
                        </div>
                        <h2>Monitoring & Reporting</h2>
                        <p>Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.</p>
                    </div>
                </div>
                <div className="feature-row">
                    <div className="feature-box">
                        <div className='ab'>

                            <img src="/uim_process.png" alt="Simplified Certification Process" className="feature-icon" />
                        </div>
                        <h2>Simplified Certification Process</h2>
                        <p>Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.</p>
                    </div>
                    <div className="feature-box">
                        <div className='ab'>

                            <img src="/streamline_artificial-intelligence-spark-solid.png" alt="AI-Driven Insights" className="feature-icon" />
                        </div>
                        <h2>AI-Driven Insights</h2>
                        <p>Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.</p>
                    </div>
                    <div className="feature-box">
                        <div className='ab'>

                            <img src="/streamline_artificial-intelligence-spark-solid.png" alt="AI-Driven Insights" className="feature-icon" />
                        </div>
                        <h2>AI-Driven Insights</h2>
                        <p>Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.</p>
                    </div>
                </div>
            </div>

            
            <div className='last'>
                <div className='computer'>
                    <img src="/3d-rendering-computer-desk 1.png" alt="Computer with Plants" /> </div>

                <div class="services-container">
                    <div class="services-header">
                        <h2 style={{ fontSize: "20px" }}>OUR SERVICES</h2>
                        <h1 style={{ fontSize: "60px" }}><b>What do <span style={{ color: "#FEAB4F" }}>we do</span>?</b></h1>
                    </div>

                    <div class="service-card">
                        <div class="service-content">
                            <h3 style={{ fontSize: "48px" }}><b>GHG Accounting</b></h3>
                            <p style={{ fontSize: "16px" }}>We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</p>
                            <button class="see-details-btn">See More Details</button>
                        </div>
                    </div>

                    <div class="service-card">

                        <div class="service-content">
                            <h3 style={{ fontSize: "48px" }}><b>GHG Accounting</b></h3>
                            <p style={{ fontSize: "16px" }}>We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</p>
                            <button class="see-details-btn">See More Details</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
