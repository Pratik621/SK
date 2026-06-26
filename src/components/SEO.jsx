import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.skengineering.in';
const SITE_NAME = 'SK ENGINEERING';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const TWITTER_HANDLE = '@skengineering';
const PHONE = '+91-74991-65461';
const EMAIL = 'skengg.129@gmail.com';

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
  schema = null,
  breadcrumbs = null,
}) {
  const fullTitle = title
    ? `${title} | SK ENGINEERING — CNC & VMC Machining, Bhosari Pune`
    : 'SK ENGINEERING | Precision CNC & VMC Machining, Shaft Manufacturing — Bhosari, Pune';

  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.path}`,
        })),
      }
    : null;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: '2016',
    description:
      'SK ENGINEERING is a leading precision engineering and CNC manufacturing company in Bhosari, Pune, specializing in CNC turning, VMC machining, shaft manufacturing, grinding, broaching, CMM, electroplating, and hardening services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Landge Nagar, Indrayani Nagar, Bhosari',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411039',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
    sameAs: [
      'https://www.facebook.com/skengineering',
      'https://www.linkedin.com/company/skengineering',
    ],
    areaServed: ['Pune', 'Maharashtra', 'India'],
    knowsAbout: [
      'CNC Machining',
      'VMC Machining',
      'Precision Engineering',
      'Shaft Manufacturing',
      'Grinding Services',
      'Broaching',
      'CMM Inspection',
      'Electroplating',
      'Heat Treatment',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: DEFAULT_IMAGE,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    priceRange: '$$',
    description:
      'Precision CNC & VMC machining company in Bhosari MIDC, Pune. Services include CNC turning, VMC machining, shaft manufacturing, grinding, broaching, CMM, electroplating, and hardening.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Landge Nagar, Indrayani Nagar, Bhosari',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411039',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.6298,
      longitude: 73.8567,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    hasMap: 'https://maps.google.com/?q=Bhosari,Pune,Maharashtra',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, UPI',
    areaServed: ['Pune', 'Pimpri Chinchwad', 'MIDC Bhosari', 'Chakan MIDC', 'Maharashtra', 'India'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      {/* ── Basic ── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      <link rel="canonical" href={fullCanonical} />

      {/* ── Keywords (Local SEO) ── */}
      <meta
        name="keywords"
        content="CNC machining Pune, VMC machining Pune, precision engineering Bhosari, CNC turning Pune, shaft manufacturing Pune, grinding services Pune, surface grinding Pune, cylindrical grinding Pune, die manufacturer Pune, broaching machine Pune, CMM inspection Pune, electroplating Pune, heat treatment Pune, MIDC Bhosari, Chakan MIDC, Pimpri Chinchwad, industrial components Pune, automobile components Pune, SK Engineering, precision machining Maharashtra"
      />

      {/* ── Geo & Local ── */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Bhosari, Pune, Maharashtra, India" />
      <meta name="geo.position" content="18.6298;73.8567" />
      <meta name="ICBM" content="18.6298, 73.8567" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — Precision CNC & VMC Machining, Bhosari Pune`} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — Precision CNC & VMC Machining, Bhosari Pune`} />

      {/* ── JSON-LD Schemas ── */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
