import { Leaf, Ship, Package, Globe, FlaskConical } from 'lucide-react';

const items = [
  { Icon: Leaf,         text: '100% Natural & Organic' },
  { Icon: Ship,         text: 'International Shipping' },
  { Icon: Package,      text: 'Bulk Orders Available' },
  { Icon: Globe,        text: 'Overseas Export Ready' },
  { Icon: FlaskConical, text: 'Lab Tested' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {items.map(({ Icon, text }) => (
        <div key={text} className="trust-item">
          <Icon size={16} />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
