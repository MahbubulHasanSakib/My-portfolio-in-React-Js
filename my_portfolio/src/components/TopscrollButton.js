import React from 'react'

const TopscrollButton = () => {
    const goToTop=()=>
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        
    }
    return (
        <div id="backtoTop">
            <button onClick={goToTop} className="top_scroll"><i className="fa fa-chevron-circle-up" aria-hidden="true"></i></button>
        </div>
    )
}

export default TopscrollButton
