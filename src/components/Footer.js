//these are the components of our site.
//first...
import React from 'react'
import '../styles.css'//we add one more dot because we're in components folder.

export default function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className='footer'>
            <p className='footer-text'>
            © {currentYear} fat nuts donut steel


            </p>
        </footer>
    );
}