import React from 'react'
import AboutImg from '../images/mhsakib1.jpg'
const About = () => {
   
    return (
        <section id="about">
            <div className="container about_me">
            <div data-aos="fade-right" className="about_top">
                <h1>About Me</h1>
                <p>I am passionate at web development,software development with writing elegant code.I enjoy
                    problem solvings to develop my programming skills and love to read blogs,listening to podcasts
                    to keep me up to date.
                </p>
                <div className="line"></div>
            </div>
            <div className="about_bottom">
                <div data-aos="fade-right" className="about_bottom_left">
                    <img src={AboutImg} alt="about_image" />
                </div>
                <div data-aos="fade-left" className="about_bottom_right">
                    <h2>Sports Programmer and Web Developer</h2>
                    <div className="about_details">
                        <div className="about_details_left">
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Birthday:</span> 4 August,1998</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Website:</span> https://mhsakib.cf</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Phone:</span> 01812346095</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>City:</span> Chittagong, Bangladesh</p>
                        </div>
                        <div className="about_details_right">
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Age:</span> 22</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Degree:</span> BSC Engineering(CSE)</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Email:</span> mahbubulhasan179@gmail.com</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Freelance:</span> Partly Available</p>
                        </div>
                    </div>
                    <p>I also love to work on machine learning,NLP,Deep Learning as well as AI related 
                        technology.I like to build applications that will solve real life problems
                        for making the world easier.
                    </p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About
