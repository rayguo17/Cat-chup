import { useState } from "react"
import backToTopIcon from '../img/backToTopIcon.png'



const BackToTopButton = () => {

    //toggle visibility of scroll

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 50) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 50) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)
    return (

        <img className="ScrollToTopButton" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }} src={backToTopIcon} alt="backToTop button"></img>

    );


}



// const BackToTopButton = () => {
//     return (<div>
//         <button className="backToTopButtonContainer"><img style={{display: showScroll ? 'flex' : 'none'}}src={backToTopIcon} alt="backToTop button"></img></button>
//     </div>)


// };

export default BackToTopButton;