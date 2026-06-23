import logo from '../assets/logo.png';

const links = [
  { label: 'Home',     id: 'home'     },
  { label: 'About',    id: 'about'    },
  { label: 'Products', id: 'products' },
  { label: 'Why GSO',  id: 'whyus'   },
  { label: 'Process',  id: 'process'  },
  { label: 'Contact',  id: 'contact'  },
];

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Column 1 — Brand */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={logo} alt="GSO Logo" className="footer-logo-img" />
            <div>
              <div className="footer-logo-name">GHADGE SEASONED OVERSEAS</div>
              <div className="footer-logo-est">Est. 2011 · Wardha, Maharashtra</div>
            </div>
          </div>
          <p className="footer-desc">
            Premium farm-fresh spices and superfoods exported worldwide. Trusted supplier of
            moringa powder, turmeric, chilli, dhaniya and more — direct from source.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">QUICK LINKS</h4>
          <ul>
            {links.map(({ label, id }) => (
              <li key={id}>
                <button onClick={() => { setPage(id); window.scrollTo({ top: 0 }); }}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">CONTACT</h4>
          <p>3 Vaishnavi Complex, Karla Road,</p>
          <p>Near Somalwar School,</p>
          <p>Wardha, Maharashtra – 442001</p>
          <p style={{ marginTop: '0.8rem' }}>📞 +91 8983388973</p>
          <p>✉ himanshughadge46@gmail.com</p>
          <p style={{ marginTop: '0.8rem', fontSize: '0.78rem', opacity: 0.6 }}>
            Udyam: UDYAM-MH-34-0072785
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © 2026 Ghadge Seasoned Overseas. All rights reserved.
      </div>
    </footer>
  );
}
