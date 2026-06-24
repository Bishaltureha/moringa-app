import { MapPin, Leaf, Sparkles, CheckCircle, FlaskConical } from 'lucide-react';
import moringaImg   from '../assets/Moringa-Powder.jpg';
import chilliImg    from '../assets/chilli.jpg';
import turmericImg  from '../assets/turmeric.jpg';
import corianderImg from '../assets/Dhaniya-Seed.jpeg';
import spicesImg    from '../assets/spices.jpg';
import milletImg    from '../assets/millet.jpg';

const products = [
  {
    img: moringaImg,
    tag: 'Best Seller',
    title: 'Moringa Powder',
    subtitle: 'Organic Leaf Powder',
    origin: 'Wardha, Maharashtra',
    details: [
      { icon: Leaf,        label: 'Quality',    value: '100% Organic, Vibrant Green' },
      { icon: Sparkles,    label: 'Processing', value: 'Cold-dried & finely milled' },
      { icon: CheckCircle, label: 'Cleanliness', value: 'Free from pesticides & additives' },
      { icon: FlaskConical,label: 'Variety',    value: 'Single origin leaf powder' },
    ],
    desc: 'Nutrient-dense moringa leaf powder packed with Vitamin C, Iron, Calcium & Protein. Ideal for supplements, health foods, smoothies and nutraceuticals.',
    trust: ['Organic', 'Lab Tested', 'Export Ready'],
  },
  {
    img: chilliImg,
    tag: 'High Demand',
    title: 'Raw Chilli',
    subtitle: '3 Premium Varieties Available',
    origin: 'Vidarbha Region, Maharashtra',
    details: [
      { icon: Leaf,        label: 'Quality',    value: 'Sun-dried, bright colour' },
      { icon: Sparkles,    label: 'Processing', value: 'Whole, crushed or powdered' },
      { icon: CheckCircle, label: 'Cleanliness', value: 'Dust-free, sorted & graded' },
      { icon: FlaskConical,label: 'Variety',    value: '3 types — see below' },
    ],
    desc: 'Premium Indian chillies sourced from the best farms in Maharashtra. Available in bulk export packaging.',
    varieties: [
      { name: 'Bhivapuri', badge: '🇮🇳 India\'s Favourite', desc: 'India\'s most popular variety — bold colour, strong aroma, and intense heat. Widely used in masalas and food processing.' },
      { name: 'Chapata',   badge: '🌶 Less Spicy',         desc: 'Specially known for its exceptionally bright red colour with mild heat — perfect for colour extraction, paprika, and food colouring industries.' },
      { name: 'C5',        badge: '🔥 Medium Heat',        desc: 'Medium spicy with a deep dark red colour. Preferred by exporters and spice manufacturers for consistent quality and appearance.' },
    ],
    trust: ['Farm Direct', 'Lab Tested', 'Bulk Ready'],
  },
  {
    img: turmericImg,
    tag: 'Premium Grade',
    title: 'Turmeric',
    subtitle: '2 Certified Varieties',
    origin: 'Wardha & Sangli, Maharashtra',
    details: [
      { icon: Leaf,        label: 'Quality',    value: 'High curcumin content' },
      { icon: Sparkles,    label: 'Processing', value: 'Whole fingers or fine powder' },
      { icon: CheckCircle, label: 'Cleanliness', value: 'Machine cleaned & sorted' },
      { icon: FlaskConical,label: 'Variety',    value: '2 types — see below' },
    ],
    desc: 'Farm-fresh Indian turmeric with natural curcumin — supplied to food, pharma, cosmetic and nutraceutical industries worldwide.',
    varieties: [
      { name: 'Shallam (Sellem)', badge: '🎨 High Colour', desc: 'Known for its rich golden-orange colour with high colour value. Preferred for colour extraction, cosmetics, and food colouring — less emphasis on medicinal benefits.' },
      { name: 'Waigaon',         badge: '⭐ Pure & Potent',  desc: 'Pure turmeric with complete medicinal benefits and high curcumin content. Well-known in the Indian market for its authentic quality and strong healing properties.' },
    ],
    trust: ['High Curcumin', 'Lab Tested', 'Export Ready'],
  },
  {
    img: corianderImg,
    tag: 'Farm Fresh',
    title: 'Dhaniya (Coriander)',
    subtitle: 'Seeds & Powder',
    origin: 'Wardha, Maharashtra',
    details: [
      { icon: Leaf,        label: 'Quality',    value: 'Aromatic, bold seed' },
      { icon: Sparkles,    label: 'Processing', value: 'Cleaned seeds or ground powder' },
      { icon: CheckCircle, label: 'Cleanliness', value: 'Sorted, cleaned & packed' },
      { icon: FlaskConical,label: 'Variety',    value: 'Whole seeds & powder' },
    ],
    desc: 'Aromatic coriander seeds with strong essential oils — sourced directly from Maharashtra farms. Perfect for spice blends, curries, and food manufacturing.',
    trust: ['Organic', 'Farm Direct', 'Bulk Ready'],
  },
  {
    img: spicesImg,
    tag: 'Bulk Available',
    title: 'Raw Spices',
    subtitle: 'Cumin, Pepper, Cardamom & More',
    origin: 'Maharashtra & Gujarat',
    details: [
      { icon: Leaf,        label: 'Quality',    value: 'Premium grade selection' },
      { icon: Sparkles,    label: 'Processing', value: 'Cleaned, dried & sorted' },
      { icon: CheckCircle, label: 'Cleanliness', value: 'Dust-free bulk packaging' },
      { icon: FlaskConical,label: 'Variety',    value: 'Multiple spice types' },
    ],
    desc: 'Wide range of raw Indian spices — cumin, black pepper, cardamom, cloves and more. Available in 1 kg to 500 kg+ bulk export packaging.',
    trust: ['Farm Direct', 'Export Ready', 'Lab Tested'],
  },
  {
    img: milletImg,
    tag: 'Wholesale',
    title: 'Pearl Millet',
    subtitle: 'Bajra — Whole Grain',
    origin: 'Vidarbha, Maharashtra',
    details: [
      { icon: Leaf,        label: 'Quality',    value: 'Rich in protein & minerals' },
      { icon: Sparkles,    label: 'Processing', value: 'Cleaned whole grain' },
      { icon: CheckCircle, label: 'Cleanliness', value: 'Machine cleaned & graded' },
      { icon: FlaskConical,label: 'Variety',    value: 'Whole grain (Bajra)' },
    ],
    desc: 'Nutritious pearl millet (Bajra) grain — high in protein, iron, and dietary fibre. Suitable for food manufacturers, flour mills, and health food brands.',
    trust: ['Organic', 'Farm Direct', 'Bulk Ready'],
  },
];

export default function Products() {
  return (
    <section id="product" className="products-section">
      <p className="section-label">Our Products</p>
      <h2 className="section-title">What We Supply</h2>
      <p className="section-lead">
        Farm-direct spices and superfoods — traceable origin, lab tested, export-ready in bulk.
      </p>

      <div className="products-list">
        {products.map(({ img, tag, title, subtitle, origin, details, desc, varieties, trust }) => (
          <div key={title} className="product-detail-card">

            {/* Image */}
            <div className="pdc-img-wrap">
              <img src={img} alt={title} className="pdc-img" />
              <span className="pdc-tag">{tag}</span>
            </div>

            {/* Content */}
            <div className="pdc-content">
              <div className="pdc-header">
                <div>
                  <h3 className="pdc-title">{title}</h3>
                  <p className="pdc-subtitle">{subtitle}</p>
                </div>
                <div className="pdc-origin">
                  <MapPin size={13} /> {origin}
                </div>
              </div>

              <p className="pdc-desc">{desc}</p>

              {/* Detail grid */}
              <div className="pdc-details">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="pdc-detail-item">
                    <Icon size={15} color="var(--green)" />
                    <div>
                      <span className="pdc-detail-label">{label}</span>
                      <span className="pdc-detail-value">{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Varieties */}
              {varieties && (
                <div className="pdc-varieties">
                  <p className="pdc-varieties-title">Available Varieties</p>
                  <div className="pdc-variety-list">
                    {varieties.map(v => (
                      <div key={v.name} className="pdc-variety">
                        <div className="pdc-variety-header">
                          <strong>{v.name}</strong>
                          <span className="pdc-variety-badge">{v.badge}</span>
                        </div>
                        <p>{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trust badges */}
              <div className="pdc-trust">
                {trust.map(t => (
                  <span key={t} className="pdc-trust-badge">✓ {t}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
