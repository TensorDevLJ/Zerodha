import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row mt-3 border-top' style={{padding:'6rem'}}>
                <h1 className='fs-3 text-center'>Developer</h1>
            </div>

            <div className='row fs-6' style={{paddingBottom:'6rem',lineHeight:'1.8',fontSize:'1.2rem'}}>
                <div className='col-6 text-center'>
                    <img src='media/image.png' alt='education1' style={{width:'60%', borderRadius:"50%"}}/>
                    <h4 className='mt-3'>Likhitha J</h4>
                    <h5 className='fs-6'>Full-Stack Developer, Web and AIML enthusiast</h5>
                </div>
                <div className='col'>
                    <p> I am a passionate Web Developer and AI/ML Enthusiast dedicated to building intuitive, responsive, and intelligent digital solutions. With expertise in HTML, CSS, JavaScript, and modern frameworks, I transform creative ideas into high-performing, user-friendly web applications.

Alongside web development, <br/> I have a growing interest in Artificial Intelligence and Machine Learning, exploring how technologies like data-driven insights, predictive models, and intelligent automation can enhance user experiences and optimize performance.

Driven by a love for clean design, efficient algorithms, and innovation, I aim to bridge the gap between front-end creativity and AI-powered functionality — delivering smart, seamless, and impactful digital experiences</p>
                    <p>Connect on <a href='https://github.com/TensorDevLJ'>Github</a> / <a href='https://www.linkedin.com/in/likhitha-j-362a0925b/'>LinkedIn</a> / <a href='likhithajlikhi@gmail.com'>Gmail</a></p>
                </div>
            </div>
        </div>     
     );
}

export default Team;