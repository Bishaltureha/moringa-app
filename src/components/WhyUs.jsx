import { Leaf, FlaskConical, Ship, Headphones, BadgeDollarSign, FileText } from 'lucide-react';

const reasons = [
  { Icon: Leaf,            title: '100% Organic',       desc: 'Grown without synthetic pesticides or fertilizers. Pure, natural moringa as nature intended.' },
  { Icon: FlaskConical,    title: 'Lab Tested',          desc: 'Every batch is tested for purity, microbiological safety, and nutritional content before export.' },
  { Icon: Ship,            title: 'Reliable Export',     desc: 'Experience with international logistics, customs documentation, and overseas shipping requirements.' },
  { Icon: Headphones,      title: 'Dedicated Support',   desc: 'Personal account management and responsive communication throughout your order.' },
  { Icon: BadgeDollarSign, title: 'Competitive Pricing', desc: 'Direct from source pricing — no unnecessary middlemen. Better margins for your business.' },
  { Icon: FileText,        title: 'Full Documentation',  desc: 'Certificate of origin, phytosanitary certificate, health certificate, and all required export paperwork.' },
];

export default function WhyUs() {
  return (
    <section id="why">
      <p className="section-label">Why Choose Us</p>
      <h2 className="section-title">The Nature&apos;s Moringa Difference</h2>
      <p className="section-lead">We are not just a supplier — we are your long-term export partner.</p>

      <div className="why-grid">
        {reasons.map(({ Icon, title, desc }) => (
          <div key={title} className="why-card">
            <Icon className="why-icon" size={40} color="var(--green)" strokeWidth={1.4} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
