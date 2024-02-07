import Script from 'next/script';

const FacebookPixel: React.FC = () => (
  <Script
    id='meta-pixel-tag'
    strategy='lazyOnload'
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '{your-pixel-id-goes-here}');
          fbq('track', 'PageView');
    `,
    }}
  />
);

export default FacebookPixel;
