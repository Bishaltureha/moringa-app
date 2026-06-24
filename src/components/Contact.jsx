import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, BadgeCheck, User } from 'lucide-react';
import PhoneInput from './PhoneInput';

const COUNTRY_CODES = [
  { flag: '🇮🇳', name: 'India',                code: '+91'  },
  { flag: '🇦🇫', name: 'Afghanistan',           code: '+93'  },
  { flag: '🇦🇱', name: 'Albania',               code: '+355' },
  { flag: '🇩🇿', name: 'Algeria',               code: '+213' },
  { flag: '🇦🇩', name: 'Andorra',               code: '+376' },
  { flag: '🇦🇴', name: 'Angola',                code: '+244' },
  { flag: '🇦🇬', name: 'Antigua & Barbuda',     code: '+1268'},
  { flag: '🇦🇷', name: 'Argentina',             code: '+54'  },
  { flag: '🇦🇲', name: 'Armenia',               code: '+374' },
  { flag: '🇦🇺', name: 'Australia',             code: '+61'  },
  { flag: '🇦🇹', name: 'Austria',               code: '+43'  },
  { flag: '🇦🇿', name: 'Azerbaijan',            code: '+994' },
  { flag: '🇧🇸', name: 'Bahamas',               code: '+1242'},
  { flag: '🇧🇭', name: 'Bahrain',               code: '+973' },
  { flag: '🇧🇩', name: 'Bangladesh',            code: '+880' },
  { flag: '🇧🇧', name: 'Barbados',              code: '+1246'},
  { flag: '🇧🇾', name: 'Belarus',               code: '+375' },
  { flag: '🇧🇪', name: 'Belgium',               code: '+32'  },
  { flag: '🇧🇿', name: 'Belize',                code: '+501' },
  { flag: '🇧🇯', name: 'Benin',                 code: '+229' },
  { flag: '🇧🇹', name: 'Bhutan',                code: '+975' },
  { flag: '🇧🇴', name: 'Bolivia',               code: '+591' },
  { flag: '🇧🇦', name: 'Bosnia & Herzegovina',  code: '+387' },
  { flag: '🇧🇼', name: 'Botswana',              code: '+267' },
  { flag: '🇧🇷', name: 'Brazil',                code: '+55'  },
  { flag: '🇧🇳', name: 'Brunei',                code: '+673' },
  { flag: '🇧🇬', name: 'Bulgaria',              code: '+359' },
  { flag: '🇧🇫', name: 'Burkina Faso',          code: '+226' },
  { flag: '🇧🇮', name: 'Burundi',               code: '+257' },
  { flag: '🇨🇻', name: 'Cape Verde',            code: '+238' },
  { flag: '🇰🇭', name: 'Cambodia',              code: '+855' },
  { flag: '🇨🇲', name: 'Cameroon',              code: '+237' },
  { flag: '🇨🇦', name: 'Canada',                code: '+1'   },
  { flag: '🇨🇫', name: 'Central African Rep.',  code: '+236' },
  { flag: '🇹🇩', name: 'Chad',                  code: '+235' },
  { flag: '🇨🇱', name: 'Chile',                 code: '+56'  },
  { flag: '🇨🇳', name: 'China',                 code: '+86'  },
  { flag: '🇨🇴', name: 'Colombia',              code: '+57'  },
  { flag: '🇰🇲', name: 'Comoros',               code: '+269' },
  { flag: '🇨🇬', name: 'Congo',                 code: '+242' },
  { flag: '🇨🇷', name: 'Costa Rica',            code: '+506' },
  { flag: '🇭🇷', name: 'Croatia',               code: '+385' },
  { flag: '🇨🇺', name: 'Cuba',                  code: '+53'  },
  { flag: '🇨🇾', name: 'Cyprus',                code: '+357' },
  { flag: '🇨🇿', name: 'Czech Republic',        code: '+420' },
  { flag: '🇩🇰', name: 'Denmark',               code: '+45'  },
  { flag: '🇩🇯', name: 'Djibouti',              code: '+253' },
  { flag: '🇩🇴', name: 'Dominican Republic',    code: '+1809'},
  { flag: '🇪🇨', name: 'Ecuador',               code: '+593' },
  { flag: '🇪🇬', name: 'Egypt',                 code: '+20'  },
  { flag: '🇸🇻', name: 'El Salvador',           code: '+503' },
  { flag: '🇬🇶', name: 'Equatorial Guinea',     code: '+240' },
  { flag: '🇪🇷', name: 'Eritrea',               code: '+291' },
  { flag: '🇪🇪', name: 'Estonia',               code: '+372' },
  { flag: '🇸🇿', name: 'Eswatini',              code: '+268' },
  { flag: '🇪🇹', name: 'Ethiopia',              code: '+251' },
  { flag: '🇫🇯', name: 'Fiji',                  code: '+679' },
  { flag: '🇫🇮', name: 'Finland',               code: '+358' },
  { flag: '🇫🇷', name: 'France',                code: '+33'  },
  { flag: '🇬🇦', name: 'Gabon',                 code: '+241' },
  { flag: '🇬🇲', name: 'Gambia',                code: '+220' },
  { flag: '🇬🇪', name: 'Georgia',               code: '+995' },
  { flag: '🇩🇪', name: 'Germany',               code: '+49'  },
  { flag: '🇬🇭', name: 'Ghana',                 code: '+233' },
  { flag: '🇬🇷', name: 'Greece',                code: '+30'  },
  { flag: '🇬🇹', name: 'Guatemala',             code: '+502' },
  { flag: '🇬🇳', name: 'Guinea',                code: '+224' },
  { flag: '🇬🇼', name: 'Guinea-Bissau',         code: '+245' },
  { flag: '🇬🇾', name: 'Guyana',                code: '+592' },
  { flag: '🇭🇹', name: 'Haiti',                 code: '+509' },
  { flag: '🇭🇳', name: 'Honduras',              code: '+504' },
  { flag: '🇭🇺', name: 'Hungary',               code: '+36'  },
  { flag: '🇮🇸', name: 'Iceland',               code: '+354' },
  { flag: '🇮🇩', name: 'Indonesia',             code: '+62'  },
  { flag: '🇮🇷', name: 'Iran',                  code: '+98'  },
  { flag: '🇮🇶', name: 'Iraq',                  code: '+964' },
  { flag: '🇮🇪', name: 'Ireland',               code: '+353' },
  { flag: '🇮🇱', name: 'Israel',                code: '+972' },
  { flag: '🇮🇹', name: 'Italy',                 code: '+39'  },
  { flag: '🇯🇲', name: 'Jamaica',               code: '+1876'},
  { flag: '🇯🇵', name: 'Japan',                 code: '+81'  },
  { flag: '🇯🇴', name: 'Jordan',                code: '+962' },
  { flag: '🇰🇿', name: 'Kazakhstan',            code: '+7'   },
  { flag: '🇰🇪', name: 'Kenya',                 code: '+254' },
  { flag: '🇰🇼', name: 'Kuwait',                code: '+965' },
  { flag: '🇰🇬', name: 'Kyrgyzstan',            code: '+996' },
  { flag: '🇱🇦', name: 'Laos',                  code: '+856' },
  { flag: '🇱🇻', name: 'Latvia',                code: '+371' },
  { flag: '🇱🇧', name: 'Lebanon',               code: '+961' },
  { flag: '🇱🇸', name: 'Lesotho',               code: '+266' },
  { flag: '🇱🇷', name: 'Liberia',               code: '+231' },
  { flag: '🇱🇾', name: 'Libya',                 code: '+218' },
  { flag: '🇱🇮', name: 'Liechtenstein',         code: '+423' },
  { flag: '🇱🇹', name: 'Lithuania',             code: '+370' },
  { flag: '🇱🇺', name: 'Luxembourg',            code: '+352' },
  { flag: '🇲🇬', name: 'Madagascar',            code: '+261' },
  { flag: '🇲🇼', name: 'Malawi',                code: '+265' },
  { flag: '🇲🇾', name: 'Malaysia',              code: '+60'  },
  { flag: '🇲🇻', name: 'Maldives',              code: '+960' },
  { flag: '🇲🇱', name: 'Mali',                  code: '+223' },
  { flag: '🇲🇹', name: 'Malta',                 code: '+356' },
  { flag: '🇲🇷', name: 'Mauritania',            code: '+222' },
  { flag: '🇲🇺', name: 'Mauritius',             code: '+230' },
  { flag: '🇲🇽', name: 'Mexico',                code: '+52'  },
  { flag: '🇲🇩', name: 'Moldova',               code: '+373' },
  { flag: '🇲🇨', name: 'Monaco',                code: '+377' },
  { flag: '🇲🇳', name: 'Mongolia',              code: '+976' },
  { flag: '🇲🇪', name: 'Montenegro',            code: '+382' },
  { flag: '🇲🇦', name: 'Morocco',               code: '+212' },
  { flag: '🇲🇿', name: 'Mozambique',            code: '+258' },
  { flag: '🇲🇲', name: 'Myanmar',               code: '+95'  },
  { flag: '🇳🇦', name: 'Namibia',               code: '+264' },
  { flag: '🇳🇵', name: 'Nepal',                 code: '+977' },
  { flag: '🇳🇱', name: 'Netherlands',           code: '+31'  },
  { flag: '🇳🇿', name: 'New Zealand',           code: '+64'  },
  { flag: '🇳🇮', name: 'Nicaragua',             code: '+505' },
  { flag: '🇳🇪', name: 'Niger',                 code: '+227' },
  { flag: '🇳🇬', name: 'Nigeria',               code: '+234' },
  { flag: '🇲🇰', name: 'North Macedonia',       code: '+389' },
  { flag: '🇳🇴', name: 'Norway',                code: '+47'  },
  { flag: '🇴🇲', name: 'Oman',                  code: '+968' },
  { flag: '🇵🇰', name: 'Pakistan',              code: '+92'  },
  { flag: '🇵🇦', name: 'Panama',                code: '+507' },
  { flag: '🇵🇬', name: 'Papua New Guinea',      code: '+675' },
  { flag: '🇵🇾', name: 'Paraguay',              code: '+595' },
  { flag: '🇵🇪', name: 'Peru',                  code: '+51'  },
  { flag: '🇵🇭', name: 'Philippines',           code: '+63'  },
  { flag: '🇵🇱', name: 'Poland',                code: '+48'  },
  { flag: '🇵🇹', name: 'Portugal',              code: '+351' },
  { flag: '🇶🇦', name: 'Qatar',                 code: '+974' },
  { flag: '🇷🇴', name: 'Romania',               code: '+40'  },
  { flag: '🇷🇺', name: 'Russia',                code: '+7'   },
  { flag: '🇷🇼', name: 'Rwanda',                code: '+250' },
  { flag: '🇸🇦', name: 'Saudi Arabia',          code: '+966' },
  { flag: '🇸🇳', name: 'Senegal',               code: '+221' },
  { flag: '🇷🇸', name: 'Serbia',                code: '+381' },
  { flag: '🇸🇱', name: 'Sierra Leone',          code: '+232' },
  { flag: '🇸🇬', name: 'Singapore',             code: '+65'  },
  { flag: '🇸🇰', name: 'Slovakia',              code: '+421' },
  { flag: '🇸🇮', name: 'Slovenia',              code: '+386' },
  { flag: '🇸🇴', name: 'Somalia',               code: '+252' },
  { flag: '🇿🇦', name: 'South Africa',          code: '+27'  },
  { flag: '🇸🇸', name: 'South Sudan',           code: '+211' },
  { flag: '🇪🇸', name: 'Spain',                 code: '+34'  },
  { flag: '🇱🇰', name: 'Sri Lanka',             code: '+94'  },
  { flag: '🇸🇩', name: 'Sudan',                 code: '+249' },
  { flag: '🇸🇷', name: 'Suriname',              code: '+597' },
  { flag: '🇸🇪', name: 'Sweden',                code: '+46'  },
  { flag: '🇨🇭', name: 'Switzerland',           code: '+41'  },
  { flag: '🇸🇾', name: 'Syria',                 code: '+963' },
  { flag: '🇹🇼', name: 'Taiwan',                code: '+886' },
  { flag: '🇹🇯', name: 'Tajikistan',            code: '+992' },
  { flag: '🇹🇿', name: 'Tanzania',              code: '+255' },
  { flag: '🇹🇭', name: 'Thailand',              code: '+66'  },
  { flag: '🇹🇱', name: 'Timor-Leste',           code: '+670' },
  { flag: '🇹🇬', name: 'Togo',                  code: '+228' },
  { flag: '🇹🇹', name: 'Trinidad & Tobago',     code: '+1868'},
  { flag: '🇹🇳', name: 'Tunisia',               code: '+216' },
  { flag: '🇹🇷', name: 'Turkey',                code: '+90'  },
  { flag: '🇹🇲', name: 'Turkmenistan',          code: '+993' },
  { flag: '🇺🇬', name: 'Uganda',                code: '+256' },
  { flag: '🇺🇦', name: 'Ukraine',               code: '+380' },
  { flag: '🇦🇪', name: 'UAE',                   code: '+971' },
  { flag: '🇬🇧', name: 'United Kingdom',        code: '+44'  },
  { flag: '🇺🇸', name: 'United States',         code: '+1'   },
  { flag: '🇺🇾', name: 'Uruguay',               code: '+598' },
  { flag: '🇺🇿', name: 'Uzbekistan',            code: '+998' },
  { flag: '🇻🇪', name: 'Venezuela',             code: '+58'  },
  { flag: '🇻🇳', name: 'Vietnam',               code: '+84'  },
  { flag: '🇾🇪', name: 'Yemen',                 code: '+967' },
  { flag: '🇿🇲', name: 'Zambia',                code: '+260' },
  { flag: '🇿🇼', name: 'Zimbabwe',              code: '+263' },
];

const details = [
  { Icon: User,    label: 'Owner',            value: 'Himanshu Anilrao Ghadge' },
  { Icon: Phone,   label: 'Phone / WhatsApp', value: '+91 8983388973' },
  { Icon: Mail,    label: 'Email',            value: 'himanshughadge46@gmail.com' },
  { Icon: MapPin,  label: 'Address',          value: '3 Vaishnavi Complex, Karla Road, Near Somalwar School, Wardha, Maharashtra – 442001' },
  { Icon: Clock,   label: 'Response Time',    value: 'Within 24–48 business hours' },
];

const quantities = [
  'Sample (under 1 kg)', 'Small (1 – 10 kg)', 'Medium (10 – 100 kg)',
  'Large (100 – 500 kg)', 'Bulk (500 kg+)',
];

const products = [
  'Moringa Powder', 'Raw Chilli', 'Turmeric', 'Dhaniya (Coriander)',
  'Raw Spices', 'Pearl Millet', 'Mixed / Multiple Products',
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <p className="section-label">Contact Us</p>
      <h2 className="section-title">Request a Quote or Sample</h2>
      <p className="section-lead">
        Reach out today — we respond to all serious inquiries within 24–48 hours.
      </p>

      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          {details.map(({ Icon, label, value }) => (
            <div key={label} className="contact-detail">
              <Icon size={18} color="var(--green)" className="detail-icon" />
              <div>
                <span className="detail-label">{label}</span>
                <span>{value}</span>
              </div>
            </div>
          ))}

          <div className="cert-box">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BadgeCheck size={16} color="var(--green)" /> Registrations
            </h4>
            <div className="cert-badges">
              {['Udyam Registered', 'MSME Certified', 'Food & Beverage', 'Micro Enterprise'].map((c) => (
                <span key={c} className="cert-badge">{c}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--gray)', marginTop: '0.6rem' }}>
              Udyam Reg No: UDYAM-MH-34-0072785
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">First Name *</label>
              <input id="fname" type="text" placeholder="John" required />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name *</label>
              <input id="lname" type="text" placeholder="Doe" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Business Email *</label>
            <input id="email" type="email" placeholder="you@company.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone / WhatsApp *</label>
            <PhoneInput />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input id="company" type="text" placeholder="Your Company Ltd." />
            </div>
            <div className="form-group">
              <label htmlFor="product">Product Interested In *</label>
              <select id="product" required defaultValue="">
                <option value="" disabled>Select product...</option>
                {products.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Estimated Quantity Needed</label>
            <select id="quantity" defaultValue="">
              <option value="" disabled>Select quantity...</option>
              {quantities.map((q) => <option key={q}>{q}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message / Requirements</label>
            <textarea id="message" placeholder="Tell us what you need — product specs, intended use, timeline, etc." />
          </div>

          <button type="submit" className="btn-submit" disabled={sent}>
            {sent ? '✓ Inquiry Sent! We will contact you soon.' : 'Send Inquiry →'}
          </button>
          <p className="form-note">
            By submitting, you agree to be contacted regarding your inquiry. We never share your data.
          </p>
        </form>
      </div>
    </section>
  );
}
