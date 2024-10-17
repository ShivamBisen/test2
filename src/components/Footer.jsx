import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo_footer">
            <img className='logo_img' src="https://kodeinkgp.in/static/media/kik-final-logo.bc34184b7fe2143f59bc.png" alt="" />
            <p>KodeinKGP</p>
            <p>Indian Institute of Technology Kharagpur,West Bengal - 721302</p>

        </div>
        <div className="skill">
            <p><span>Blockchain</span></p>
            <p>freeCodeCamp</p>
            <p>Code Eater</p>
            <p>Whiteboard Crypto</p>
            <p>Finematics</p>
        </div>
        <div className="skill">
            <p><span>Machine Learning</span></p>
            <p>DeepLearningAI</p>
            <p>Siraj Raval</p>
            <p>sentdex</p>
            <p>Corey Schafer</p>
        </div>
        <div className="skill">
            <p><span>Web Development</span></p>
            <p>CodeWithHarry</p>
            <p>Apna College</p>
            <p>net ninja</p>
            <p>Traversy Media</p>
        </div>

    </div>
  )
}

export default Footer