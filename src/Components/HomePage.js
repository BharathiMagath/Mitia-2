import React from 'react';
import '../Styles/HomePage.css';
import { Link } from 'react-router-dom';

// Sample icon URLs for each feature (replace these with your desired icons)
const iconUrls = {
    voiceAssistant: '/voice.png',
    fallPrevention: '/fall.png',
    emergencyAlerts: '/alert.png',
    biometricSensors: '/heartrate.png',
    costReduction: '/money.png',
    homeAutomation: '/smarthome.png',
};

const HomePage = () => {
    return (
        <div className="unique-home-page-container">
            <nav className="unique-home-page-navbar">
                <ul className="unique-navbar-list">
                    <li className="unique-navbar-item"><Link to='/HomePage'>Home</Link></li>
                    <li className="unique-navbar-item">
                    <Link to='/Location'>Location</Link></li>
                    <li className="unique-navbar-item">
                    <Link to='/chatbot'>Chatbot</Link></li>
                </ul>
            </nav>

            <div className="unique-home-page-image-container">
                <img 
                    src="https://cdn.pixabay.com/animation/2023/06/20/07/50/07-50-51-767_512.gif" 
                    alt="Description of the image"
                    className="unique-home-page-image"
                />
            </div>

            {/* Box section positioned below the image */}
            <div className="unique-box-container">
                <div className="unique-box">
                    <img src={iconUrls.voiceAssistant} alt="Voice Assistant Icon" className="unique-box-icon" />
                    <div className="unique-box-content">
                        <h2 className="unique-box-heading">Voice Assistant Support</h2>
                        <p>
                            Users can seek help from a voice assistant for daily activities. 
                            The voice of loved ones can be modified to make users feel emotionally connected.
                        </p>
                    </div>
                </div>

                <div className="unique-box">
                    <img src={iconUrls.fallPrevention} alt="Fall Prevention Icon" className="unique-box-icon" />
                    <div className="unique-box-content">
                        <h2 className="unique-box-heading">Accidental Fall Prevention</h2>
                        <p>
                            Reduces the risk of accidental falls with obstacle detection, 
                            secure automatic locking, and an SOS feature.
                        </p>
                    </div>
                </div>

                <div className="unique-box">
                    <img src={iconUrls.emergencyAlerts} alt="Emergency Alerts Icon" className="unique-box-icon" />
                    <div className="unique-box-content">
                        <h2 className="unique-box-heading">Emergency Alerts</h2>
                        <p>
                            Sends emergency alerts to family and healthcare providers in case of emergencies.
                        </p>
                    </div>
                </div>

                <div className="unique-box">
                    <img src={iconUrls.biometricSensors} alt="Biometric Sensors Icon" className="unique-box-icon" />
                    <div className="unique-box-content">
                        <h2 className="unique-box-heading">Biometric Sensors</h2>
                        <p>
                            Equipped with biometric sensors to measure oxygen levels, 
                            blood pressure, and heart rate.
                        </p>
                    </div>
                </div>

                <div className="unique-box">
                    <img src={iconUrls.costReduction} alt="Cost Reduction Icon" className="unique-box-icon" />
                    <div className="unique-box-content">
                        <h2 className="unique-box-heading">Cost Reduction</h2>
                        <p>
                            Reduces manual labor costs, proving to be a long-term investment.
                        </p>
                    </div>
                </div>

                <div className="unique-box">
                    <img src={iconUrls.homeAutomation} alt="Home Automation Icon" className="unique-box-icon" />
                    <div className="unique-box-content">
                        <h2 className="unique-box-heading">Home Automation</h2>
                        <p>
                            Home automation and automated wheelchairs act as virtual caretakers, 
                            enhancing the quality of life for the elderly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
