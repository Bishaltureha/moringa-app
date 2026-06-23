import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, BadgeCheck, User } from 'lucide-react';

const details = [
  { Icon: User,    label: 'Owner',            value: 'Himanshu Anilrao Ghadge' },
  { Icon: Phone,   label: 'Phone / WhatsApp', value: '+91 8983388973' },
  { Icon: Mail,    label: 'Email',            value: 'himanshughadge46@gmail.com' },
  { Icon: MapPin,  label: 'Address',          value: '3 Vaishnavi Complex, Karla Road, Near Somalwar School, Wardha, Maharashtra – 442001' },
  { Icon: Clock,   label: 'Response Time',    value: 'Within 24–48 business hours' },
];

const quantities = [
  'Sample (under 1 kg)', 'Small (1 – 10 kg)', 'Medium (10 – 100 kg)',
  'Large (100 – 500 kg)', 'Bulk (500 kg+)',
];

const products = [
  'Moringa Powder', 'Raw Chilli', 'Turmeric', 'Dhaniya (Coriander)',
  'Raw Spices', 'Pearl Millet', 'Mixed / Multiple Products',
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <p className="section-label">Contact Us</p>
      <h2 className="section-title">Request a Quote or Sample</h2>
      <p className="section-lead">
        Reach out today — we respond to all serious inquiries within 24–48 hours.
      </p>

      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          {details.map(({ Icon, label, value }) => (
            <div key={label} className="contact-detail">
              <Icon size={18} color="var(--green)" className="detail-icon" />
              <div>
                <span className="detail-label">{label}</span>
                <span>{value}</span>
              </div>
            </div>
          ))}

          <div className="cert-box">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BadgeCheck size={16} color="var(--green)" /> Registrations
            </h4>
            <div className="cert-badges">
              {['Udyam Registered', 'MSME Certified', 'Food & Beverage', 'Micro Enterprise'].map((c) => (
                <span key={c} className="cert-badge">{c}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--gray)', marginTop: '0.6rem' }}>
              Udyam Reg No: UDYAM-MH-34-0072785
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">First Name *</label>
              <input id="fname" type="text" placeholder="John" required />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name *</label>
              <input id="lname" type="text" placeholder="Doe" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Business Email *</label>
            <input id="email" type="email" placeholder="you@company.com" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input id="company" type="text" placeholder="Your Company Ltd." />
            </div>
            <div className="form-group">
              <label htmlFor="product">Product Interested In *</label>
              <select id="product" required defaultValue="">
                <option value="" disabled>Select product...</option>
                {products.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Estimated Quantity Needed</label>
            <select id="quantity" defaultValue="">
              <option value="" disabled>Select quantity...</option>
              {quantities.map((q) => <option key={q}>{q}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message / Requirements</label>
            <textarea id="message" placeholder="Tell us what you need — product specs, intended use, timeline, etc." />
          </div>

          <button type="submit" className="btn-submit" disabled={sent}>
            {sent ? '✓ Inquiry Sent! We will contact you soon.' : 'Send Inquiry →'}
          </button>
          <p className="form-note">
            By submitting, you agree to be contacted regarding your inquiry. We never share your data.
          </p>
        </form>
      </div>
    </section>
  );
}
