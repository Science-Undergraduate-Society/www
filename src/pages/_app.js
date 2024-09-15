import '../styles/globals.css'; // Import the global CSS file
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
        <meta property="og:image" content="/faviconBlue.png" key="ogimage" />
        <meta property="og:url" content="https://www.susubc.org" key="ogurl" />
        <meta property="og:type" content="website" key="ogtype" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Science Undergraduate Society | University of British Columbia" />
        <meta 
          name="twitter:description" 
          content="The Science Undergraduate Society (SUS) at UBC represents science students, offering resources, events, and opportunities to get involved."
        />
        <meta name="twitter:image" content="/faviconBlue.png" />
        <meta name="twitter:url" content="https://www.susubc.org" />

        <link rel="icon" href="/faviconBlue.png" />
        <link rel="canonical" href="https://www.susubc.org" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
