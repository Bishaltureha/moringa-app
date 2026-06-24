import { Leaf, Globe } from 'lucide-react';

export default function Hero() {
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-badge">
          <Leaf size={13} style={{ marginRight: '0.35rem', verticalAlign: 'middle' }} />
          Premium Export Quality
        </div>
        <h1 className="hero-title">
          Pure Organic <em>Moringa Powder</em><br />Exported Overseas
        </h1>
        <p className="hero-desc">
          We supply premium-grade, 100% organic moringa powder directly from source —
          ideal for overseas wholesalers, health brands, and distributors worldwide.
        </p>
        <div className="hero-btns">
          <a
            href="#contact"
            className="btn-white"
            onClick={(e) => { e.preventDefault(); scroll('contact'); }}
          >
            Request a Quote
          </a>
          <a
            href="#product"
            className="btn-ghost"
            onClick={(e) => { e.preventDefault(); scroll('product'); }}
          >
            View Products
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <span className="stat-num">100%</span>
            <span className="stat-label">Organic</span>
          </div>
          <div>
            <span className="stat-num"><Globe size={32} strokeWidth={1.5} /></span>
            <span className="stat-label">Overseas Export</span>
          </div>
          <div>
            <span className="stat-num">Bulk</span>
            <span className="stat-label">Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
