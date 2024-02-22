import React from 'react';
import './Marquee.css';
import cognizantImage from '../Assets/cognizant.png';
import wiproImage from '../Assets/wipro.png';
import mindtreeImage from '../Assets/mindtree.png';
import ciscoImage from '../Assets/cisco.png';
import zohoImage from '../Assets/zoho.png';
import accentureImage from '../Assets/accenture.png';
import adobeImage from '../Assets/adobe.png';
import avasoftImage from '../Assets/avasoft.png';
import ashokImage from '../Assets/ashok.png';
import vestasImage from '../Assets/vestas.png';
import boschImage from '../Assets/bosch.png';
import mrfImage from '../Assets/mrf.png';
import sunmarImage from '../Assets/sunmar.png';
import RNImage from '../Assets/RN.png';

const MarqueeComponent = () => {
    return (
        <div className="marquee-container">
            <h2 className="marquee-heading" style={{fontSize:'3rem'}}>Our Reputable Recruiters</h2>
            <div className="marquee-content">
                <div className="marquee-item">
                    <img src={cognizantImage} alt="Cognizant" />
                </div>
                <div className="marquee-item">
                    <img src={wiproImage} alt="Wipro" />
                </div>
                <div className="marquee-item">
                    <img src={mindtreeImage} alt="Mindtree" />
                </div>
                <div className="marquee-item">
                    <img src={ciscoImage} alt="Cisco" />
                </div>
                <div className="marquee-item">
                    <img src={zohoImage} alt="Zoho" />
                </div>
                <div className="marquee-item">
                    <img src={accentureImage} alt="Accenture" />
                </div>
                <div className="marquee-item">
                    <img src={adobeImage} alt="Adobe" />
                </div>
                <div className="marquee-item">
                    <img src={avasoftImage} alt="Avasoft" />
                </div>
                <div className="marquee-item">
                    <img src={ashokImage} alt="AshokLeyland" />
                </div>
                <div className="marquee-item">
                    <img src={vestasImage} alt="Vestas" />
                </div>
                <div className="marquee-item">
                    <img src={boschImage} alt="Bosch" />
                </div>
                <div className="marquee-item">
                    <img src={mrfImage} alt="MRF" />
                </div>
                <div className="marquee-item">
                    <img src={sunmarImage} alt="Sunmar" />
                </div>
                <div className="marquee-item">
                    <img src={RNImage} alt="RN" />
                </div>
            </div>
        </div>
    );
};

export default MarqueeComponent;
