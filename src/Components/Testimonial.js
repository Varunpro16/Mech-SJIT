import React, { useState, useEffect } from 'react';
import image01 from '../Assets/31.png';
import image02 from '../Assets/32.png';
import image03 from '../Assets/33.png';
import image04 from '../Assets/34.png';
import image05 from '../Assets/35.png';
import image06 from '../Assets/36.png';
import image07 from '../Assets/37.png';


const Testimonial = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 7);
        setImageOpacity(1);
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image01, image02,image03,image04,image05,image06,image07];
    return images[index];
  };

  const containerStyle = {
    position:"relative",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'auto',
    marginTop: '5vh',
  };

  const imageStyle = {
    width: '50%', 
    height: 'auto',
    borderRadius: '10px',
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
    marginTop: '5vh'
  };

  const detailsStyle = {
    position:"absolute",
    bottom:0,
    left:"25%",
    width:"50%",
    marginTop: '10px',
    backgroundColor:"black",
    color:"white",
    
    height:"5%"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '3rem', marginTop: '7vh', background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', }}>Testimonials</h2>
      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
     
    </div>
  );
};

export default Testimonial;