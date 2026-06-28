const siteUrl = 'https://stkcollege.org';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollegeOrUniversity',
  name: 'STK College',
  url: siteUrl,
  logo: `${siteUrl}/images/campus/STKLogo.png`,
  description:
    'STK College offers practical IT training, programming courses, AI learnerships, in-service training, and internships in South Africa.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '511 Griffiths Mxenge Hwy',
    addressLocality: 'Durban',
    addressRegion: 'KwaZulu-Natal',
    postalCode: '4031',
    addressCountry: 'ZA',
  },
  telephone: '+27763627488',
  email: 'stkcollege@gmail.com',
  openingHours: 'Mon-Fri 08:00-17:00, Sat 09:00-12:00, Sun 09:00-12:00',
  sameAs: [
    'https://www.facebook.com/share/1CCmHaTpaj/',
    'https://www.linkedin.com/in/sipho-mtshali-377784236/',
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-29.8587',
    longitude: '31.0218',
  },
  founder: {
    '@type': 'Person',
    name: 'Sipho Mtshali',
  },
  image: `${siteUrl}/images/campus/STKLogo.png`,
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteUrl,
  name: 'STK College',
  description: organizationSchema.description,
  inLanguage: 'en-ZA',
  publisher: {
    '@type': 'Organization',
    name: 'STK College',
    logo: organizationSchema.logo,
  },
  about: organizationSchema,
};

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const courseSchema = (course) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.description,
  provider: {
    '@type': 'Organization',
    name: 'STK College',
    sameAs: siteUrl,
  },
  duration: course.duration,
  educationalCredentialAwarded: course.certificate || 'Certificate of Completion',
  offers: {
    '@type': 'Offer',
    price: course.price || '0',
    priceCurrency: 'ZAR',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/course/${course.id}`,
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseSchedule: {
      '@type': 'Schedule',
      schedule: course.schedule || 'Flexible',
    },
  },
  occupationalCredential: course.level || 'Beginner',
  category: course.category,
});

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact STK College',
  description: 'Get in touch with STK College for IT courses, AI learnerships, and internship programs.',
  mainEntity: {
    '@type': 'Organization',
    name: 'STK College',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+27763627488',
      email: 'stkcollege@gmail.com',
      contactType: 'sales',
      availableLanguage: ['English'],
    },
  },
};