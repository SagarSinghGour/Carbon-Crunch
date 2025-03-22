    import React from 'react'


    export default function Header() {
        return (
            <>
                <nav>
                    <div  className="navbar">
                        <div  className="logo-container">
                            <img src="/CompanyLogo.png" alt="Logo"  className="logo" />
                            <h6  className="brand-name">Carboncrunch</h6>
                        </div>
                        <div  className="nav-links">
                            <div  className="nav-item">Home</div>
                            <div  className="nav-item">Services</div>
                            <div  className="nav-item">Blog</div>
                            <div  className="nav-item">About Us</div>
                            <div  className="nav-item">Contact</div>
                        </div>
                        <div  className="nav-btn">
                            <button  className="Lonig-btn"><b>Login</b></button>
                            <button  className="contact-btn"> <b>Book Demo</b></button>
                        </div>
                    </div>
                </nav>

            </>
        )
    }
