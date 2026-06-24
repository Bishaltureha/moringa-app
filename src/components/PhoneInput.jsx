import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const getFlagUrl = (iso) => new URL(`../assets/flag/${iso}.svg`, import.meta.url).href;

const COUNTRIES = [
  { name: 'India',               iso: 'in', code: '+91'  },
  { name: 'Afghanistan',         iso: 'af', code: '+93'  },
  { name: 'Albania',             iso: 'al', code: '+355' },
  { name: 'Algeria',             iso: 'dz', code: '+213' },
  { name: 'Andorra',             iso: 'ad', code: '+376' },
  { name: 'Angola',              iso: 'ao', code: '+244' },
  { name: 'Argentina',           iso: 'ar', code: '+54'  },
  { name: 'Armenia',             iso: 'am', code: '+374' },
  { name: 'Australia',           iso: 'au', code: '+61'  },
  { name: 'Austria',             iso: 'at', code: '+43'  },
  { name: 'Azerbaijan',          iso: 'az', code: '+994' },
  { name: 'Bahrain',             iso: 'bh', code: '+973' },
  { name: 'Bangladesh',          iso: 'bd', code: '+880' },
  { name: 'Belgium',             iso: 'be', code: '+32'  },
  { name: 'Bolivia',             iso: 'bo', code: '+591' },
  { name: 'Brazil',              iso: 'br', code: '+55'  },
  { name: 'Bulgaria',            iso: 'bg', code: '+359' },
  { name: 'Cambodia',            iso: 'kh', code: '+855' },
  { name: 'Cameroon',            iso: 'cm', code: '+237' },
  { name: 'Canada',              iso: 'ca', code: '+1'   },
  { name: 'Chile',               iso: 'cl', code: '+56'  },
  { name: 'China',               iso: 'cn', code: '+86'  },
  { name: 'Colombia',            iso: 'co', code: '+57'  },
  { name: 'Croatia',             iso: 'hr', code: '+385' },
  { name: 'Cuba',                iso: 'cu', code: '+53'  },
  { name: 'Cyprus',              iso: 'cy', code: '+357' },
  { name: 'Czech Republic',      iso: 'cz', code: '+420' },
  { name: 'Denmark',             iso: 'dk', code: '+45'  },
  { name: 'Egypt',               iso: 'eg', code: '+20'  },
  { name: 'Ethiopia',            iso: 'et', code: '+251' },
  { name: 'Finland',             iso: 'fi', code: '+358' },
  { name: 'France',              iso: 'fr', code: '+33'  },
  { name: 'Germany',             iso: 'de', code: '+49'  },
  { name: 'Ghana',               iso: 'gh', code: '+233' },
  { name: 'Greece',              iso: 'gr', code: '+30'  },
  { name: 'Hungary',             iso: 'hu', code: '+36'  },
  { name: 'Iceland',             iso: 'is', code: '+354' },
  { name: 'Indonesia',           iso: 'id', code: '+62'  },
  { name: 'Iran',                iso: 'ir', code: '+98'  },
  { name: 'Iraq',                iso: 'iq', code: '+964' },
  { name: 'Ireland',             iso: 'ie', code: '+353' },
  { name: 'Israel',              iso: 'il', code: '+972' },
  { name: 'Italy',               iso: 'it', code: '+39'  },
  { name: 'Jamaica',             iso: 'jm', code: '+1876'},
  { name: 'Japan',               iso: 'jp', code: '+81'  },
  { name: 'Jordan',              iso: 'jo', code: '+962' },
  { name: 'Kazakhstan',          iso: 'kz', code: '+7'   },
  { name: 'Kenya',               iso: 'ke', code: '+254' },
  { name: 'Kuwait',              iso: 'kw', code: '+965' },
  { name: 'Kyrgyzstan',          iso: 'kg', code: '+996' },
  { name: 'Lebanon',             iso: 'lb', code: '+961' },
  { name: 'Libya',               iso: 'ly', code: '+218' },
  { name: 'Luxembourg',          iso: 'lu', code: '+352' },
  { name: 'Malaysia',            iso: 'my', code: '+60'  },
  { name: 'Maldives',            iso: 'mv', code: '+960' },
  { name: 'Malta',               iso: 'mt', code: '+356' },
  { name: 'Mauritius',           iso: 'mu', code: '+230' },
  { name: 'Mexico',              iso: 'mx', code: '+52'  },
  { name: 'Morocco',             iso: 'ma', code: '+212' },
  { name: 'Mozambique',          iso: 'mz', code: '+258' },
  { name: 'Myanmar',             iso: 'mm', code: '+95'  },
  { name: 'Nepal',               iso: 'np', code: '+977' },
  { name: 'Netherlands',         iso: 'nl', code: '+31'  },
  { name: 'New Zealand',         iso: 'nz', code: '+64'  },
  { name: 'Nigeria',             iso: 'ng', code: '+234' },
  { name: 'Norway',              iso: 'no', code: '+47'  },
  { name: 'Oman',                iso: 'om', code: '+968' },
  { name: 'Pakistan',            iso: 'pk', code: '+92'  },
  { name: 'Philippines',         iso: 'ph', code: '+63'  },
  { name: 'Poland',              iso: 'pl', code: '+48'  },
  { name: 'Portugal',            iso: 'pt', code: '+351' },
  { name: 'Qatar',               iso: 'qa', code: '+974' },
  { name: 'Romania',             iso: 'ro', code: '+40'  },
  { name: 'Russia',              iso: 'ru', code: '+7'   },
  { name: 'Rwanda',              iso: 'rw', code: '+250' },
  { name: 'Saudi Arabia',        iso: 'sa', code: '+966' },
  { name: 'Senegal',             iso: 'sn', code: '+221' },
  { name: 'Serbia',              iso: 'rs', code: '+381' },
  { name: 'Singapore',           iso: 'sg', code: '+65'  },
  { name: 'Slovakia',            iso: 'sk', code: '+421' },
  { name: 'Slovenia',            iso: 'si', code: '+386' },
  { name: 'South Africa',        iso: 'za', code: '+27'  },
  { name: 'Spain',               iso: 'es', code: '+34'  },
  { name: 'Sri Lanka',           iso: 'lk', code: '+94'  },
  { name: 'Sudan',               iso: 'sd', code: '+249' },
  { name: 'Sweden',              iso: 'se', code: '+46'  },
  { name: 'Switzerland',         iso: 'ch', code: '+41'  },
  { name: 'Syria',               iso: 'sy', code: '+963' },
  { name: 'Taiwan',              iso: 'tw', code: '+886' },
  { name: 'Tanzania',            iso: 'tz', code: '+255' },
  { name: 'Thailand',            iso: 'th', code: '+66'  },
  { name: 'Tunisia',             iso: 'tn', code: '+216' },
  { name: 'Turkey',              iso: 'tr', code: '+90'  },
  { name: 'UAE',                 iso: 'ae', code: '+971' },
  { name: 'Uganda',              iso: 'ug', code: '+256' },
  { name: 'Ukraine',             iso: 'ua', code: '+380' },
  { name: 'United Kingdom',      iso: 'gb', code: '+44'  },
  { name: 'United States',       iso: 'us', code: '+1'   },
  { name: 'Uzbekistan',          iso: 'uz', code: '+998' },
  { name: 'Vietnam',             iso: 'vn', code: '+84'  },
  { name: 'Yemen',               iso: 'ye', code: '+967' },
  { name: 'Zambia',              iso: 'zm', code: '+260' },
  { name: 'Zimbabwe',            iso: 'zw', code: '+263' },
];

export default function PhoneInput() {
  const [open, setOpen]     = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(COUNTRIES[0]);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search)
  );

  const select = (c) => { setSelected(c); setOpen(false); setSearch(''); };

  return (
    <div className="phone-wrapper" ref={ref}>
      <div className="phone-input-row">
        <div className="phone-code-btn" onClick={() => setOpen(v => !v)}>
          <img src={getFlagUrl(selected.iso)} alt={selected.name} className="phone-flag-img" />
          <span className="phone-code-text">{selected.code}</span>
          <ChevronDown size={14} />
        </div>
        <input id="phone" type="tel" placeholder="98765 43210" required className="phone-number-input" />
      </div>

      {open && (
        <div className="phone-dropdown">
          <div className="phone-search">
            <Search size={14} />
            <input autoFocus type="text" placeholder="Search country..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <ul>
            {filtered.map(c => (
              <li key={c.iso} onClick={() => select(c)} className={selected.iso === c.iso ? 'active' : ''}>
                <img src={getFlagUrl(c.iso)} alt={c.name} className="phone-flag-img" />
                <span className="phone-country-name">{c.name}</span>
                <span className="phone-country-code">{c.code}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
