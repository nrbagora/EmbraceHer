import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome styles
import './Resources.css'; // Import the CSS file for styling

const Resources = () => {
  return (
    <div className="resources-page">
      <h2>
        <i className="fa fa-book" style={{ marginRight: '10px' }}></i> {/* Icon next to title */}
        Helpful Resources
      </h2>
      
      <div className="resources-list">
        <div className="resource-item">
          <h3>
            <i className="fa fa-heart" style={{ marginRight: '10px' }}></i> {/* Icon for mental health */}
            Resource 1: Mental Health Support
          </h3>
          <p>Find support and guidance for mental health challenges.</p>
          <a href="https://www.mentalhealth.gov" target="_blank" rel="noopener noreferrer" className="resource-link">
            <i className="fa fa-external-link" style={{ marginRight: '5px' }}></i>Visit Resource
          </a>
        </div>

        <div className="resource-item">
          <h3>
            <i className="fa fa-search" style={{ marginRight: '10px' }}></i> {/* Icon for therapist finder */}
            Resource 2: Therapist Finder
          </h3>
          <p>Search for licensed therapists in your area.</p>
          <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer" className="resource-link">
            <i className="fa fa-external-link" style={{ marginRight: '5px' }}></i>Find a Therapist
          </a>
        </div>

        <div className="resource-item">
          <h3>
            <i className="fa fa-phone" style={{ marginRight: '10px' }}></i> {/* Icon for crisis helpline */}
            Resource 3: Crisis Helpline
          </h3>
          <p>If you're in crisis, reach out for immediate assistance.</p>
          <a href="https://www.suicidepreventionlifeline.org" target="_blank" rel="noopener noreferrer" className="resource-link">
            <i className="fa fa-external-link" style={{ marginRight: '5px' }}></i>Call the Lifeline
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
