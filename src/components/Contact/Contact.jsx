import { MdEmail, MdLocationOn, MdPublic } from 'react-icons/md';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Interested in my work?</h2>
        <a href="mailto:tu@email.com" className="contact-button">
          <MdEmail className="button-icon" />
          <span>Contáctame</span>
        </a>
        
        <div className="location-info">
          <div className="location-item">
            <MdLocationOn className="location-icon" />
            <span>MADRID</span>
          </div>
          <div className="location-item">
            <MdPublic className="location-icon" />
            <span>Available to work <strong>On-Site</strong> anywhere</span>
          </div>
        </div>
      </div>
    </section>
  );
}