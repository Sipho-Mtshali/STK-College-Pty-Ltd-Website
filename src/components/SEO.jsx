import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  author = 'STK College',
  keywords = '',
  publishedTime,
  modifiedTime,
  robots = 'index, follow',
}) => {
  const siteTitle = 'STK College - IT Training & AI Education';
  const fullTitle = title ? `${title} | STK College` : siteTitle;
  const defaultDescription =
    'STK College offers practical IT training, programming courses, AI learnerships, and career-focused education in South Africa.';
  const metaDescription = description || defaultDescription;
  const siteUrl = 'https://stkcollege.org';
  const defaultImage = `${siteUrl}/images/og-image.jpg`;
  const metaImage = image || defaultImage;

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical || siteUrl} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="STK College" />
      <meta property="og:locale" content="en_ZA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
    </Helmet>
  );
};

export default SEO;