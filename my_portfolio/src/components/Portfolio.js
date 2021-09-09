import React from 'react'
import p1 from '../images/p1.JPG';
import p2 from '../images/p2.JPG';
import p3 from '../images/p3.JPG';
import p4 from '../images/p4.JPG';
import p5 from '../images/p5.JPG';
import p6 from '../images/p6.JPG';
import p7 from '../images/p7.JPG';
import p8 from '../images/p8.JPG';

const Portfolio = () => {
    const projects = [
        {
            name: "Library Management System",
            img: p2,
            languageOrFramwork: "C#.NET",
            link: "https://github.com/MahbubulHasanSakib/Library-Management-System"
        },
        {
            name: "Virtual Classroom",
            img: p1,
            languageOrFramwork: "NODE JS,EXPRESS JS",
            link: "https://virtual-class-app.herokuapp.com/"
        },
        {
            name: "Restaurant Management System",
            img: p3,
            languageOrFramwork: "C++,QT",
            link: "https://github.com/MahbubulHasanSakib/Restaurant-Management-System"
        },
        {
            name: "IT Solution Provider",
            img: p4,
            languageOrFramwork: "HTML,CSS,JS,PHP",
            link: "https://github.com/MahbubulHasanSakib/IT-solution-provider-project"
        },
        {
            name: "Chatbot Interface",
            img: p5,
            languageOrFramwork: "HTML,CSS,JS",
            link: "https://github.com/MahbubulHasanSakib/Chatbot-Interface"
        },
        {
            name: "Tour Web App using ReactJs Context API excluding props drilling",
            img: p6,
            languageOrFramwork: "React JS",
            link: "https://github.com/MahbubulHasanSakib/Tour-web-app-using-React-js-state-management-with-ContextAPI-excluding-props-drilling"
        },
        {
            name: "Shopping Cart using ReactJs Context API and State hooks",
            img: p7,
            languageOrFramwork: "React JS",
            link: "https://github.com/MahbubulHasanSakib/Shopping-Cart-Update-using-React-Context-API"
        },
        {
            name: "Food Menu Web app using React Js useState hooks",
            img: p8,
            languageOrFramwork: "React JS",
            link: "https://github.com/MahbubulHasanSakib/Food-Menu-Web-App-using-React-useState-hook"
        }
    ];
    return (
        <section id="portfolio">
            <div className="container portfolio_section">
                <h1 data-aos="fade-left">Portfolio</h1>
                <div className="all_works row">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className="col-lg-6 col-xl-6 ">
                                    <div data-aos="fade-right" className="singlework">
                                        <img src={project.img} alt="project_img"/>
                                        <div className="overlay">
                                            <div className="work_link">
                                                <p className="project_name">Project: {project.name}</p>
                                                <p className="languages">Language/Framework: {project.languageOrFramwork}</p>
                                                <a target="_blank" rel="noreferrer" href={project.link}>{index === 0 ? 'Preview Link' : 'Github Link'}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



            </div>

        </section>
    )
}

export default Portfolio
