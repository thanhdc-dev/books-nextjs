import Script from 'next/script';
import React from 'react';

type Props = {
	googleTagManagerId: string;
};

const GoogleTagManager: React.FC<Props> = ({ googleTagManagerId }) => (
	<>
		<Script
			src={`https://www.googletagmanager.com/gtag/js?id=${googleTagManagerId}`}
			strategy="afterInteractive"
		/>
		<Script
			id="google-analytics"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${googleTagManagerId}');
				`,
			}}
		/>
	</>
);

export default GoogleTagManager;
