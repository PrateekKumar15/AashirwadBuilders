import { MetadataRoute } from 'next';
import { projectsData } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aashirwadbuilders.com';

  const staticRoutes = [
    '',
    '/terms',
    '/privacy',
    '/cookies',
    '/projects/pawan-putra',
    '/projects/janak-vihar',
    '/projects/ecoworld-5',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.5,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
