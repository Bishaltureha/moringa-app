import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const TABS = [
  { label: 'Home',     id: 'hero'    },
  { label: 'About',    id: 'about'   },
  { label: 'Products', id: 'product' },
  { label: 'Why GSO',  id: 'why'     },
  { label: 'Process',  id: 'how'     },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <button className="navbar-logo" onClick={() => scroll('hero')}>
          <img src={logo} alt="GSO Logo" className="nav-logo-img" />
          <span className="nav-logo-label">GHADGE SEASONED OVERSEAS &nbsp;<small>Est. 2011</small></span>
        </button>

        <ul className="navbar-links">
          {TABS.map(({ label, id }) => (
            <li key={id}>
              <button className="nav-tab" onClick={() => scroll(id)}>{label}</button>
            </li>
          ))}
          <li>
            <button className="nav-cta-btn" onClick={() => scroll('contact')}>Get a Quote</button>
          </li>
        </ul>

        <button className="nav-hamburger" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <ul>
            {TABS.map(({ label, id }) => (
              <li key={id}>
                <button onClick={() => scroll(id)}>{label}</button>
              </li>
            ))}
            <li>
              <button className="mobile-cta-btn" onClick={() => scroll('contact')}>Get a Quote</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
