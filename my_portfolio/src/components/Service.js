import React from 'react'

const Service = () => {
    return (
        <section id="services">
            <div className="container service_section">
                <h1 data-aos="fade-left">Services</h1>
                <div className="all_services">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-4">

                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-desktop" aria-hidden="true"></i></span>
                            <h5>Web Development</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-4" >
                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-code" aria-hidden="true"></i></span>
                            <h5>Software Development</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-4">
                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-codepen" aria-hidden="true"></i></span>
                            <h5>Web Design</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-6">
                            <div className=" service_item app_dev" data-aos="fade-down">
                            <span className="icons"><i className="fa fa-apple" aria-hidden="true"></i></span>
                            <h5>App Development</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-12 col-lg-12 col-xl-6">
                            <div className=" service_item" data-aos="fade-down">
                            <span className="icons"><i className="fa fa-cubes" aria-hidden="true"></i></span>
                            <h5>Micro-services</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
