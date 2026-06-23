import moringaImg  from '../assets/Moringa-Powder.jpg';
import chilliImg   from '../assets/chilli.jpg';
import turmericImg from '../assets/turmeric.jpg';
import corianderImg from '../assets/Dhaniya-Seed.jpeg';
import spicesImg   from '../assets/spices.jpg';
import milletImg   from '../assets/millet.jpg';

const products = [
  {
    img: moringaImg,
    title: 'Moringa Powder',
    desc: 'Premium organic moringa leaf powder — nutrient-rich, vibrant green, ideal for supplements, health foods and nutraceuticals.',
    tag: 'Best Seller',
  },
  {
    img: chilliImg,
    title: 'Raw Chilli',
    desc: 'Sun-dried raw chillies with intense colour and heat. Available whole, crushed, or powdered in bulk quantities.',
    tag: 'High Demand',
  },
  {
    img: turmericImg,
    title: 'Turmeric',
    desc: 'Farm-fresh turmeric with high curcumin content. Supplied as whole fingers or fine powder for food and pharma use.',
    tag: 'Premium Grade',
  },
  {
    img: corianderImg,
    title: 'Dhaniya (Coriander)',
    desc: 'Aromatic coriander seeds and powder sourced directly from Maharashtra farms. Perfect for spice blends and cooking.',
    tag: 'Farm Fresh',
  },
  {
    img: spicesImg,
    title: 'Raw Spices',
    desc: 'Wide range of raw Indian spices including cumin, pepper, cardamom and more — available in bulk export packaging.',
    tag: 'Bulk Available',
  },
  {
    img: milletImg,
    title: 'Pearl Millet',
    desc: 'Nutritious pearl millet (Bajra) grain sourced from local farms. Rich in protein and minerals, suitable for food manufacturers.',
    tag: 'Wholesale',
  },
];

export default function Products() {
  return (
    <section id="product" className="products-section">
      <p className="section-label">Our Products</p>
      <h2 className="section-title">What We Supply</h2>
      <p className="section-lead">
        Farm-direct spices and superfoods in flexible bulk packaging — ready for global export.
      </p>

      <div className="products-grid">
        {products.map(({ img, title, desc, tag }) => (
          <div key={title} className="product-card">
            <img
              src={img}
              alt={title}
              className="product-img"
            />
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className="product-tag">{tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
