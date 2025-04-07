import React, { useState, useEffect } from "react";

import { FaAngleDoubleUp } from 'react-icons/fa';  

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.button}>
         <FaAngleDoubleUp className="FaAngleDoubleUp"/>
        </button>
      )}
    </div>
  );
};

const styles = {  
    button: {  
        position: 'fixed',  
        bottom: '10px',  
        right: '10px',  
        zIndex: 1111,  
        borderRadius: '50%',  
        border: '0',  
        outline: '0',  
        background: '#ff9800',  
        cursor: 'pointer',  
        width: '30px',  
        height: '30px',  
        color: '#000',  
        fontSize: '18px',  
        lineHeight: '35px',  
    },  
};  

export default ScrollToTopButton;
