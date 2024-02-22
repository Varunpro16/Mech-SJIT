import React, { useState, useEffect } from 'react';
import image01 from '../Assets/1.jpg';
import image02 from '../Assets/2.jpg';
import image03 from '../Assets/3.jpg';
import image04 from '../Assets/4.jpg';
import image05 from '../Assets/5.jpg';
import image06 from '../Assets/6.jpeg';
import image07 from '../Assets/7.jpeg';
import image08 from '../Assets/8.JPG';
import image09 from '../Assets/9.jpg';
import image10 from '../Assets/10.jpg';
import image11 from '../Assets/11.jpg';
import image12 from '../Assets/12.jpg';
import image13 from '../Assets/13.jpg';
import image14 from '../Assets/14.jpg';
import image15 from '../Assets/15.jpg';
import image16 from '../Assets/16.jpg';
import image17 from '../Assets/17.jpg';
import image18 from '../Assets/18.jpg';
import image19 from '../Assets/19.jpeg';
import image20 from '../Assets/20.jpg';

const NewSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0); 
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 11);
        setImageOpacity(1); 
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image01,image02,image03,image04,image05,image06,image07,image08,image09,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20];
    return images[index];
  };

  const containerStyle = {
    width:"50%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh'
  };

  const imageStyle = {
    width: 'auto', 
    height: 'auto',
    borderRadius: '10px', 
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
  };

  return (
    <div style={containerStyle}>

      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
    </div>
  );
};

export default NewSlider;