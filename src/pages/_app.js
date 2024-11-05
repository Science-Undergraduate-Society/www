import { CartProvider } from '@/shop-components/CartContext';
import '../styles/globals.css'; // Import the global CSS file
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="M2p1N_BbdWjYtlSgRDv4P07F_THR2ed5xD4dcESjBz4" />
        <title>Science Undergraduate Society</title>
        <meta
          name="description"
          content="The Science Undergraduate Society is a student-led organization for science students at the University of British Columbia in Vancouver."
        />
        <meta 
          name="keywords" 
          content="SUS UBC, Science Undergraduate Society, UBC Science, Science Society, UBC Student Society, UBC Vancouver, Student Organization"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Meta Tags */}
        <meta 
          property="og:title" 
          content="Science Undergraduate Society | University of British Columbia" 
          key="ogtitle" 
        />
        <meta 
          property="og:description" 
          content="The Science Undergraduate Society (SUS) is the official representative body for science students at UBC. Learn about events, resources, and ways to get involved."
          key="ogdescription" 
        />
        <meta 
          property="og:image" 
          content="https://www.susubc.ca/faviconBlue.png" 
          key="ogimage" 
        />
        <meta property="og:url" content="https://www.susubc.ca" key="ogurl" />
        <meta property="og:type" content="website" key="ogtype" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Science Undergraduate Society | University of British Columbia" />
        <meta 
          name="twitter:description" 
          content="The Science Undergraduate Society (SUS) at UBC represents science students, offering resources, events, and opportunities to get involved."
        />
        <meta 
          name="twitter:image" 
          content="https://www.susubc.ca/faviconBlue.png" 
        />
        <meta name="twitter:url" content="https://www.susubc.ca" />

        {/* Favicon */}
        <link rel="icon" href="/faviconBlue.png" />
        <link rel="canonical" href="https://www.susubc.ca" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://www.susubc.ca",
          "logo": "https://www.susubc.ca/faviconBlue.png",
          "name": "Science Undergraduate Society",
          "sameAs": [
            "https://www.facebook.com/susubc",
            "https://x.com/susubc",
            "https://www.instagram.com/susubc"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "604-822-4235",
            "contactType": "Abdul Ladha Front Desk"
          }
        }`}
        </script>
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
};
