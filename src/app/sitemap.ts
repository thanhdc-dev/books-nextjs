import { MetadataRoute } from 'next';
import config from '../libs/config';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: config.appBaseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
	];
}
