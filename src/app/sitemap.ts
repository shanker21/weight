import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.weightgone.co.uk',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.weightgone.co.uk/wegovy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },{
      url: 'https://www.weightgone.co.uk/mounjaro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },{
      url: 'https://www.weightgone.co.uk/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },{
      url: 'https://www.weightgone.co.uk/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}