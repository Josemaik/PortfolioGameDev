import { MdLocationOn, MdPublic } from 'react-icons/md';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill all fields.' });
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus({ type: 'warning', message: 'Please enter a valid email address.' });
      return;
    }

    // Prepare FormData and submit to Web3Forms
    try {
      setStatus({ type: 'loading', message: 'Sending...' });
      const formData = new FormData(event.target);

      // TODO: replace with your real access key
      formData.append('access_key', '312580f7-b5bc-45b1-b7f7-796ecaf01fce');

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      }).then((r) => r.json());

      if (res.success) {
        setStatus({ type: 'success', message: 'Message sent — I will reply soon!' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: res.message || 'Send failed. Try again later.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Send failed. Try again later.' });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Interested in my work?</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          </div>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" />
          <button type="submit" className={`contact-submit ${status?.type === 'success' ? 'sended' : ''}`}>
            {status?.type === 'success' ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sended
              </>
            ) : 'Submit'}
          </button>
          {status && <div className={`form-status ${status.type}`}>{status.message}</div>}
        </form>

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