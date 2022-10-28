import '../styles/main.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Analytics />
		</>
	);
}
