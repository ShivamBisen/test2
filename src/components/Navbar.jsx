import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="logo">
            <img className='logo_img' src="https://kodeinkgp.in/static/media/kik-final-logo.bc34184b7fe2143f59bc.png" alt="" />
            <p>KodeinKGP</p>
        </div>
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>PDS_Bank</li>
                <li>Articles</li>
                <li>Teams</li>
                <li>Events</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar