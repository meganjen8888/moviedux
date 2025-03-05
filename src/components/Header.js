//these are the components of our site.
//first...
import React from 'react'
import '../styles.css'//we add one more dot because we're in components folder.

export default function Header() {
    return (
        <div className='header'>
            <img className='logo' src='logo.png' alt="fat nuts">
            </img>
            <h2 className='app-subtitle'>fat juicy nuts :)</h2>
        </div>

    );
}
//you should not have anything inside <img></img> tags or it'll return an error.