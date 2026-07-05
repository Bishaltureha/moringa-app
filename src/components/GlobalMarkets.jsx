import { CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

const MARKETS = ['EU', 'USA', 'UAE', 'Japan', 'China'];
const MARKET_FLAGS = { EU: '🇪🇺', USA: '🇺🇸', UAE: '🇦🇪', Japan: '🇯🇵', China: '🇨🇳' };

// acc: true = clear, false = caution
const products = [
  { name: 'Black Pepper',        demand: 'Very High', acc: [1,1,1,1,1], note: null },
  { name: 'Cardamom',            demand: 'Very High', acc: [1,1,1,1,1], note: null },
  { name: 'Ginger (Dry)',        demand: 'Very High', acc: [1,1,1,1,1], note: null },
  { name: 'Moringa Powder',      demand: 'High',      acc: [1,1,1,1,1], note: null },
  { name: 'Clove',               demand: 'High',      acc: [1,1,1,1,1], note: null },
  { name: 'Cinnamon',            demand: 'High',      acc: [1,1,1,1,1], note: 'EU: Coumarin level check required' },
  { name: 'Fenugreek',           demand: 'High',      acc: [1,1,1,1,1], note: null },
  { name: 'Star Anise',          demand: 'Medium',    acc: [1,1,1,1,1], note: null },
  { name: 'Fennel Seeds',        demand: 'Medium',    acc: [1,1,1,1,1], note: null },
  { name: 'Nutmeg / Mace',       demand: 'Medium',    acc: [1,1,1,1,1], note: null },
  { name: 'Turmeric',            demand: 'High',      acc: [0,1,1,1,1], note: 'EU: Ethylene oxide residue — Organic cert removes this' },
  { name: 'Dhaniya (Coriander)', demand: 'Medium',    acc: [0,1,1,1,1], note: 'EU: MRL violations common — pesticide control needed' },
  { name: 'Red Chilli',          demand: 'High',      acc: [0,1,1,1,1], note: 'EU: Aflatoxin & MRL strict — farm control required' },
  { name: 'Pearl Millet',        demand: 'Medium',    acc: [1,1,1,1,1], note: null },
];

const demandColor = { 'Very High': '#22c55e', 'High': '#3b82f6', 'Medium': '#f59e0b' };

const certs = [
  { name: 'FSSAI License',             desc: 'Mandatory food safety license — India side' },
  { name: 'APEDA Registration',        desc: 'Agricultural & Processed Food Export Development Authority' },
  { name: 'Spices Board Certificate',  desc: 'Mandatory for any spice export from India' },
  { name: 'Phytosanitary Certificate', desc: 'Plant health clearance per shipment' },
  { name: 'Certificate of Origin',     desc: 'Required by most countries for duty benefits' },
  { name: 'Lab Test Reports',          desc: 'Pesticide, aflatoxin, heavy metals, microbiology' },
];

export default function GlobalMarkets() {
  return (
    <section id="markets" className="gm-section">
      <p className="section-label">Export Markets</p>
      <h2 className="section-title">Where Our Products Go</h2>
      <p className="section-lead">
        Farm-direct spices with traceable origin, low rejection risk, and compliance-ready documentation.
      </p>

      {/* ── Desktop: table ─────────────────────── */}
      <div className="gm-table-wrap gm-desktop-only">
        <table className="gm-table">
          <thead>
            <tr>
              <th className="gm-th-product">Product</th>
              <th>Demand</th>
              {MARKETS.map(m => <th key={m} className="gm-th-market">{MARKET_FLAGS[m]} {m}</th>)}
            </tr>
          </thead>
          <tbody>
            {products.map(({ name, demand, acc, note }) => (
              <tr key={name}>
                <td className="gm-product">
                  {name}
                  {note && <span className="gm-note-inline" title={note}>*</span>}
                </td>
                <td>
                  <span className="gm-demand" style={{ background: demandColor[demand] + '22', color: demandColor[demand] }}>
                    {demand}
                  </span>
                </td>
                {acc.map((v, i) => (
                  <td key={i} className="gm-cell">
                    {v ? <CheckCircle size={17} color="#22c55e" /> : <AlertTriangle size={17} color="#f59e0b" />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="gm-footnote">
          <AlertTriangle size={13} color="#f59e0b" /> = Exportable with strict quality compliance.
          &nbsp; EU has the world's strictest MRL standards — organic certification removes this barrier.
        </p>
      </div>

      {/* ── Mobile: cards ─────────────────────── */}
      <div className="gm-mobile-only">
        <p className="gm-mobile-header-note">
          <AlertTriangle size={13} color="#f59e0b" style={{ verticalAlign: 'middle' }} />
          &nbsp; = Needs strict quality compliance in that market
        </p>
        <div className="gm-card-list">
          {products.map(({ name, demand, acc, note }) => (
            <div key={name} className="gm-product-card">
              <div className="gm-pc-top">
                <span className="gm-pc-name">{name}</span>
                <span className="gm-demand" style={{ background: demandColor[demand] + '22', color: demandColor[demand] }}>
                  {demand}
                </span>
              </div>
              <div className="gm-pc-markets">
                {MARKETS.map((m, i) => (
                  <div key={m} className={`gm-pc-market ${acc[i] ? 'ok' : 'warn'}`}>
                    <span className="gm-pc-flag">{MARKET_FLAGS[m]}</span>
                    <span className="gm-pc-mname">{m}</span>
                    {acc[i]
                      ? <CheckCircle size={13} color="#22c55e" />
                      : <AlertTriangle size={13} color="#f59e0b" />}
                  </div>
                ))}
              </div>
              {note && <p className="gm-pc-note">{note}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* ── Best starters ─────────────────────── */}
      <div className="gm-starters">
        <h3>Our Strongest Export Products</h3>
        <p>Cleared in all 5 major import destinations — globally liquid markets.</p>
        <div className="gm-starter-cards">
          {[
            { name: 'Black Pepper', desc: "World's most traded spice — accepted everywhere, consistent high margin." },
            { name: 'Cardamom',     desc: 'India produces 80% of world supply — strong premium in Middle East & EU.' },
            { name: 'Ginger (Dry)', desc: 'Very high demand in EU, USA & Middle East for food, pharma & beverages.' },
          ].map(({ name, desc }) => (
            <div key={name} className="gm-starter-card">
              <strong>{name}</strong>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Compliance checklist ──────────────── */}
      <div className="gm-certs">
        <div className="gm-certs-header">
          <ShieldCheck size={22} color="var(--green)" />
          <h3>Export Compliance Checklist</h3>
        </div>
        <p className="gm-certs-sub">Every GSO shipment is backed by full export documentation.</p>
        <div className="gm-cert-grid">
          {certs.map(({ name, desc }) => (
            <div key={name} className="gm-cert-item">
              <CheckCircle size={16} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong>{name}</strong>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Organic banner ────────────────────── */}
      <div className="gm-organic-banner">
        <strong>Organic Certification = 2x to 4x Price</strong>
        <p>
          India Organic / USDA Organic / EU Organic certified products command premium pricing
          and bypass EU's strict MRL checks entirely. GSO actively supports farmers moving to organic.
        </p>
      </div>
    </section>
  );
}
