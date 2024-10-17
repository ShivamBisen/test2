import React from 'react'
import heroImg from '../assets/hero/hero.png'

const Hero = () => {
  return (
    <div className='hero' >
        <div className="hero_L">
            <h1>
            Welcome to  <br /><span>KodeinKGP</span>
            </h1>
            <p> <span>“The Web as I envisaged it, we have not seen it yet. The future 
                is still so much bigger than the past”</span></p>
            <p>A student-run society that aims to spread awareness 
                and educate students about the potential of Web 3.0 
                and future technologies. We host workshops and hackathons
                 to give students hands-on experience with Blockchain Development 
                 and Artificial Intelligence. Additionally, we use our skills in 
                 web development and blockchain to work on real-world problems 
                 faced by the student community at IIT Kharagpur and beyond. By 
                 joining KodeinKGP, students can gain valuable technical skills and
                  contribute to solving important problems while learning about one of the most exciting and rapidly-evolving technologies of our time.</p>
        </div>
        <div className="">
            <img className='hero_img' src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero