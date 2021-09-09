import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Hero from './Hero'
const Header = () => {
    const [menuOpen, setmenuOpen] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth)
        });
        window.addEventListener('scroll', () => {
            setScrollHeight(window.scrollY)
        });
      

    }, []);
  

    return (
        <section id="header">
            <div className={scrollHeight > 100.0 ? "header fixed-top" : 'header'}>

                <div className="container nav-Bar">
                    <div className="nav_logo">
                        <p><Link className="logo" to="header" smooth={true} duration
                                    ={50} offset={0} spy={true} >m<span className="dot">.</span>hasan</Link></p>
                    </div>
                    {windowSize <= 992 ? <button onClick={() => setmenuOpen(!menuOpen)} className="togglebtn">{!menuOpen ? <span><i class="fa fa-bars" aria-hidden="true"></i></span> :
                        <i class="fa fa-times" aria-hidden="true"></i>}</button>
                        :
                        <div className="nav_links">
                            <ul>
                                <li > <Link to="header" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >Home</Link></li>
                                <li > <Link to="about" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >About</Link></li>
                                <li > <Link to="skills" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >Skills</Link></li>
                                <li > <Link to="services" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >Services</Link></li>
                                <li > <Link to="portfolio" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >Portfolio</Link></li>
                                <li > <Link to="contact" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} > Contact</Link></li>
                            </ul>
                        </div>
                    }
                </div>

                <div className="container  toggle-nav-Bar">
                    {menuOpen && windowSize <= 992 ?
                        <div className="toggle_nav_links">
                            <ul>
                                <li > <Link to="header" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >Home</Link></li>
                                <li > <Link to="about" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >About</Link></li>
                                <li > <Link to="skills" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >Skills</Link></li>
                                <li > <Link to="services" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >Services</Link></li>
                                <li > <Link to="portfolio" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} >Portfolio</Link></li>
                                <li > <Link to="contact" smooth={true} duration
                                    ={50} activeClass="active" offset={0} spy={true} > Contact</Link></li>
                            </ul>
                        </div> : null}


                </div>
            </div>
         
           
            <Hero/>
        
        </section>
    )
}

export default Header
