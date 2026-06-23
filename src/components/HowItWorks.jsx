const steps = [
  { num: '1', title: 'Send an Inquiry',   desc: 'Fill in the contact form with your requirements — product type, quantity, and destination country.' },
  { num: '2', title: 'Receive a Quote',   desc: 'We respond within 24–48 hours with pricing, minimum order quantities, and shipping options.' },
  { num: '3', title: 'Confirm & Pay',     desc: 'Agree on terms, confirm your order, and complete payment via bank transfer or agreed method.' },
  { num: '4', title: 'We Ship to You',    desc: 'Your order is packed, certified, and dispatched with all required export documentation.' },
];

export default function HowItWorks({ setPage }) {
  return (
    <section id="how" className="how-section">
      <p className="section-label">The Process</p>
      <h2 className="section-title">How to Order From Us</h2>

      <div className="steps-grid">
        {steps.map(({ num, title, desc }) => (
          <div key={num} className="step">
            <div className="step-num">{num}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <button
          className="btn-how-cta"
          onClick={() => { setPage('contact'); window.scrollTo({ top: 0 }); }}
        >
          Get a Quote →
        </button>
      </div>
    </section>
  );
}
