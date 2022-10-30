import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className='snap-y snap-proximity' lang='en-US'>
			<Head>
				<link
					rel='preload'
					href='/font/okine/OkineSans-Medium.otf'
					as='font'
					type='font/otf'
				/>
				<link
					rel='preload'
					href='/font/okine/OkineSans-Regular.otf'
					as='font'
					type='font/otf'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
