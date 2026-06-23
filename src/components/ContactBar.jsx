import { Phone, Mail } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="contact-bar">
      <a href="tel:+918983388973" className="contact-bar-btn call">
        <Phone size={20} />
        <div>
          <span className="cb-label">Call Us</span>
          <span className="cb-value">+91 8983388973</span>
        </div>
      </a>

      <a
        href="https://wa.me/918983388973?text=Hello!%20I%20am%20interested%20in%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="contact-bar-btn whatsapp"
      >
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor">
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.75.72 5.35 1.98 7.6L.5 31.5l8.18-2.14A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.27 18.37c-.4-.2-2.36-1.16-2.72-1.3-.37-.13-.63-.2-.9.2-.26.4-1.02 1.3-1.25 1.56-.23.27-.46.3-.85.1-.4-.2-1.67-.62-3.18-1.96-1.18-1.05-1.97-2.34-2.2-2.74-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.7.2-.23.26-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.9-2.16-1.23-2.96-.32-.78-.65-.67-.9-.68h-.76c-.27 0-.7.1-1.06.5-.37.4-1.4 1.36-1.4 3.32s1.43 3.85 1.63 4.12c.2.26 2.82 4.3 6.83 6.03.95.41 1.7.66 2.28.84.96.3 1.83.26 2.52.16.77-.12 2.36-.97 2.7-1.9.33-.94.33-1.74.23-1.9-.1-.18-.36-.28-.76-.48z"/>
        </svg>
        <div>
          <span className="cb-label">WhatsApp</span>
          <span className="cb-value">Chat with us</span>
        </div>
      </a>

      <a href="mailto:himanshughadge46@gmail.com" className="contact-bar-btn email">
        <Mail size={20} />
        <div>
          <span className="cb-label">Email Us</span>
          <span className="cb-value">himanshughadge46@gmail.com</span>
        </div>
      </a>
    </div>
  );
}
