import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Location.css';


const Location = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/HomePage');
  };

  return (
    <div>
      
      <div className="service-page">
        <header className="location-header">
        </header>
        <div className="left-side">
          <h1 className="service-title">Location</h1>
          <p className="service-description">
            {/* Description can be added here */}
          </p>
         <div className="contact-info">
            <p>Our application provides seamless and accurate location services, ensuring that you can easily find nearby facilities, service centers, and events related to prosthetic care and support. Whether you're looking for the nearest rehabilitation center, a specialized clinic, or a local workshop for maintenance, our app will guide you with real-time directions and detailed information.</p>
            
          </div>
        </div>
        <div className="right-side">
          <iframe
            title="Location Map"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=WXQ5+58F,%20BK%20Pudur,%20Sugunapuram%20East,%20Kuniyamuthur,%20Tamil%20Nadu%20641008+(clearAhhh)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
