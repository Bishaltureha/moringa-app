import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const TABS = [
  { label: 'Home',     id: 'home'     },
  { label: 'About',    id: 'about'    },
  { label: 'Products', id: 'products' },
  { label: 'Why GSO',  id: 'whyus'   },
  { label: 'Process',  id: 'process'  },
  { label: 'Contact',  id: 'contact'  },
];

export default function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setPage(id);
    setOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <nav className="navbar">
        <button className="navbar-logo" onClick={() => go('home')}>
          <img src={logo} alt="GSO Logo" className="nav-logo-img" />
          <span className="nav-logo-label">GHADGE SEASONED OVERSEAS &nbsp;<small>Est. 2011</small></span>
        </button>

        <ul className="navbar-links">
          {TABS.map(({ label, id }) =>
            id === 'contact' ? (
              <li key={id}>
                <button className="nav-cta-btn" onClick={() => go(id)}>
                  Get a Quote
                </button>
              </li>
            ) : (
              <li key={id}>
                <button
                  className={page === id ? 'nav-tab active' : 'nav-tab'}
                  onClick={() => go(id)}
                >
                  {label}
                </button>
              </li>
            )
          )}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <ul>
            {TABS.map(({ label, id }) => (
              <li key={id}>
                <button
                  className={id === 'contact' ? 'mobile-cta-btn' : (page === id ? 'active' : '')}
                  onClick={() => go(id)}
                >
                  {id === 'contact' ? 'Get a Quote' : label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
