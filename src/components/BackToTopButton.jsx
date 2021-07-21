<<<<<<< HEAD
import { useState } from "react";
import backToTopIcon from "../img/backToTopIcon.png";
=======
import { useState } from "react"
import ReactDom from 'react-dom'
import React from 'react'
import backToTopIcon from '../img/backToTopIcon.png'


>>>>>>> f100080bdcd9170c56bece8334526e49547ba565




const BackToTopButton = () => {
<<<<<<< HEAD
  //toggle visibility of scroll

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 50) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 50) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <img
      className="ScrollToTopButton"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
      src={backToTopIcon}
      alt="backToTop button"
    ></img>
  );
};
=======


    //toggle visibility of scroll
    const scrollDiv = document.getElementsByClassName("Scrolllable")
    console.log("this is the DOM:", scrollDiv[0])

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        // if (!showScroll && scrollDiv[0].pageYOffset > 50) {
        //     setShowScroll(true)
        // } else if (showScroll && scrollDiv[0].pageYOffset <= 50) {
        //     setShowScroll(false)
        // }
    };

    const scrollTop = () => {
        scrollDiv[0].scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)
    return (

        <img className="ScrollToTopButton" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'flex' }} src={backToTopIcon} alt="backToTop button"></img>

    );


}


>>>>>>> f100080bdcd9170c56bece8334526e49547ba565

// const BackToTopButton = () => {
//     return (<div>
//         <button className="backToTopButtonContainer"><img style={{display: showScroll ? 'flex' : 'none'}}src={backToTopIcon} alt="backToTop button"></img></button>
//     </div>)

// };

export default BackToTopButton;
