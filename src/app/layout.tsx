import GoogleTagManager from '@/components/SEO/GoogleTagManager';
import { openGraph, twitter } from '@/components/SEO/shared-metadata';
import Navbar from '@/components/navbar/navbar';
import config from '@/libs/config';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL(config.appBaseUrl),
	alternates: {
		canonical: '/',
	},
	title: {
		default: 'Book+',
		template: '%s | Book+',
	},
	description: '',
	applicationName: 'Book+',
	keywords: ['Book website', 'Bookplus', 'Book+'],
	authors: [{ name: 'Bookplus', url: config.appBaseUrl }],
	colorScheme: 'only light',
	creator: 'Bookplus',
	publisher: 'Bookplus',
	formatDetection: {
		email: true,
		address: true,
		telephone: true,
	},
	openGraph: {
		...openGraph,
	},
	twitter: {
		...twitter,
	},
	robots:
		config.appEnv !== 'production'
			? {
					index: true,
					follow: true,
			  }
			: {},
	themeColor: '#df4759',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="vi">
			{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && <GoogleTagManager googleTagManagerId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />}
			<body className={`${inter.className} container bg-[#f5f5fa] pt-[40px]`}>
				<Navbar />
				{children}
				<footer className="py-4 text-center bg-white">
					<p className="mb-0">© 2023 Copyright Book+</p>
				</footer>
			</body>
		</html>
	);
}
