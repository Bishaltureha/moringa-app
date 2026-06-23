import { Check } from 'lucide-react';
import farmImg from '../assets/farm.jpg';

const benefits = [
  { title: 'Farm Direct',         desc: 'Sourced directly from our own farms in Maharashtra' },
  { title: 'Quality Assured',     desc: 'Every batch tested for purity and quality before dispatch' },
  { title: 'Bulk Supply Ready',   desc: 'Custom packaging from 1 kg to 500 kg+' },
  { title: 'MSME Registered',     desc: 'Udyam Reg No: UDYAM-MH-34-0072785' },
  { title: 'Export Experience',   desc: 'Trusted supplier since 2011 with global reach' },
];

export default function About() {
  return (
    <section id="about">
      <p className="section-label">About Us</p>
      <h2 className="section-title">Who We Are</h2>
      <p className="section-lead">
        GHADGE SEASONED OVERSEAS is a Maharashtra-based exporter of premium farm-fresh spices
        and superfoods, led by Himanshu Anilrao Ghadge since 2011.
      </p>

      <div className="about-grid">
        <div className="about-img-box">
          <img
            src={farmImg}
            alt="Farm cultivation"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius)' }}
          />
        </div>

        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Our Story</h3>
          <p style={{ color: 'var(--gray)' }}>
            Based in Wardha, Maharashtra, we cultivate and export premium quality moringa powder,
            turmeric, raw chilli, dhaniya, and more. With over 13 years of farm cultivation
            experience, we provide bulk-packed, export-ready products directly from source to
            global buyers.
          </p>
          <ul className="about-list">
            {benefits.map((b) => (
              <li key={b.title}>
                <div className="check-icon">
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <strong>{b.title}</strong> — {b.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
