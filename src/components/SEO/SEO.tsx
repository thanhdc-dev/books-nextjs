import Head from 'next/head';
import { usePathname } from 'next/navigation';

import config from '@libs/config';

import FacebookPixel from './FacebookPixel';
import { SEOProps } from './SEO.type';
import Image from 'next/image';

const SEO = (props: SEOProps) => {
	const pathname = usePathname();

	const defaultOgp: SEOProps = {
		url: `${config.appBaseUrl}${pathname}`,
		title: 'Weddingplus | Home',
		description: 'Wedding+ | Chia sẻ yêu thương, kỷ niệm đáng nhớ',
		image: `${config.appBaseUrl}/ogp/ogp-general-image.jpg`,
		locale: 'vi_VN',
		type: 'website',
		noIndex: false,
	};
	const {
		title = defaultOgp.title,
		description = defaultOgp.description,
		image = defaultOgp.image,
		locale = defaultOgp.locale,
		type = defaultOgp.type,
		url = defaultOgp.url,
		noIndex = defaultOgp.noIndex,
	} = props;

	return (
		<>
			<Head>
				<title>{`${title}`}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
				{/* meta description */}
				<meta name="description" content={description} />
				{(config.appEnv !== 'production' || noIndex) && (
					<meta name="robots" content="noindex,nofollow" />
				)}
				{/* OGP */}
				<meta property="og:type" content={type} />
				<meta property="og:title" content={title} />
				<meta property="og:url" content={url} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				<meta property="og:locale" content={locale} />
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				{/* OGP Facebook */}
				<meta name="facebook-domain-verification" content="w2e4yurb7mrdot630wyb3y1vho5uk2" />
				<noscript>
					<Image
						height={1}
						width={1}
						alt=""
						style={{display: 'none'}}
						src="https://www.facebook.com/tr?id=669432428486943&ev=PageView&noscript=1"
					/>
				</noscript>
				{/* <!-- End Meta Pixel Code --> */}
				{/* <meta property="fb:app_id" content="App-ID" />
      <meta property="fb:admins" content="adminID" /> */}
			</Head>
			<FacebookPixel />
		</>
	);
};

export default SEO;
