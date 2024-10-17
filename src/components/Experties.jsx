import React from 'react'

const Experties = () => {
  return (
    <div className='experties'>
        <h1><span>Our Expertise</span></h1>
        <div className="card_container">
            <div className="card">
                <div className="card_holder">
                <lottie-player
                src="https://lottie.host/ebec7c04-4538-43d4-9445-e8080fc3b08c/WMzeGgTyka.json"
                background="##FFFFFF"
                speed="1"
                style={{ width: '300px', height: '300px' }}
                loop
                    
                autoplay
                direction="1"
                mode="normal"
            ></lottie-player>
                    <div className="card_details">
                        <h1>WEB</h1>
                        <p>Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.</p>
                    </div>
                </div>
            </div>
            <div className="card">
            <div className="card_holder">
                <lottie-player
                src="https://lottie.host/e08c862e-e4aa-48d7-b4b4-a1a7bb19817e/bRbJ58PeOM.json"
                background="##FFFFFF"
                speed="1"
                style={{ width: '300px', height: '300px' }}
                loop
                    
                autoplay
                direction="1"
                mode="normal"
            ></lottie-player>
                    <div className="card_details">
                        <h1>AI & Metaverse</h1>
                        <p>Enter a realm where AI drives immersive Metaverse encounters, pushing boundaries of what's possible.</p>
                    </div>
                </div>
            </div>
            <div className="card">
            <div className="card_holder">
                <lottie-player
                src="https://lottie.host/0816546d-8e7e-485d-a1a4-aed3f3765303/wFGLLPEYEX.json"
                background="##FFFFFF"
                speed="1"
                style={{ width: '300px', height: '300px' }}
                loop
                    
                autoplay
                direction="1"
                mode="normal"
            ></lottie-player>
                    <div className="card_details">
                        <h1>Blockchain</h1>
                        <p>Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experties