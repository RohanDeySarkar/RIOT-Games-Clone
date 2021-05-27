import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <h3>!!! THIS IS NOT FOR COMMERCIAL USE !!!</h3>

            <div className="footerDetails">
                <p onClick={() => window.open("https://rohandeysarkar.github.io/Portfolio/", '_blank')}>Build by Rohan Dey Sarkar</p>
                <p onClick={() => window.open("https://rohandeysarkar.github.io/Portfolio/", '_blank')}>Click here to see more!!</p>
            </div>
        </div>
    )
}

export default Footer