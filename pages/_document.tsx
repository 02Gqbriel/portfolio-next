import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en-US'>
			<Head>
				<meta charSet='UTF-8' />
				<meta content='text/html;charset=utf-8' http-equiv='Content-Type' />

				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='keywords'
					content='Webdesign, Zuerich, Zürich, Schweiz, Switzerland, Websites, Website, Online, Agency, Freelancer'
				/>
				<meta name='author' content='Gabriel Egli' />
				<meta
					name='description'
					content='Ich biete mit schönem Design und zahlreiche Features Onlinepräsenz für Firmen oder Einzelpersonen an. Bei Interesse können sie mich sofort kontaktieren.'
				/>

				<meta property='og:image' content='' />
				<meta property='og:title' content='Webdesign · Gabriel Egli' />
				<meta
					property='og:description'
					content='Ich biete mit schönem Design und zahlreiche Features Onlinepräsenz für Firmen oder Einzelpersonen an. Bei Interesse können sie mich sofort kontaktieren.'
				/>
				<meta property='og:url' content='https://www.gabriel-egli.ch' />
				<meta property='og:type' content='website' />

				<link
					rel='preload'
					href='/font/okine/OkineSans-Medium.otf'
					as='font'
					type='font/otf'
					crossOrigin='use-credentials'
				/>
				<link
					rel='preload'
					href='/font/okine/OkineSans-Regular.otf'
					as='font'
					type='font/otf'
					crossOrigin='use-credentials'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
