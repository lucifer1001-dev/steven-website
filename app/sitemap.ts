import { MetadataRoute } from 'next'
import { toAbsoluteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: toAbsoluteUrl('/'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: toAbsoluteUrl('/about'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl('/skills'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl('/experience'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl('/contact'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
