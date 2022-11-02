import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import throttle from '../functions/throttle';
import Footer from './footer/Footer';
import Header from './header/Header';
import HeroContainer from './hero/HeroContainer';
import { Urbanist } from '@next/font/google';

const font = Urbanist({ subsets: ['latin'], preload: true });

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const router = useRouter();

	const scrollSnap = throttle(() => {
		if (scrollY == innerHeight) {
			setTimeout(() => scroll({ top: innerHeight }), 100);
		}
	}, 5);

	useEffect(() => {
		window.addEventListener('scroll', scrollSnap);

		return () => {
			window.removeEventListener('scroll', scrollSnap);
		};
	});

	return (
		<>
			<Head>
				<title>Webdesign · Gabriel Egli</title>
			</Head>
			<div
				id="root"
				className={
					'flex flex-col min-h-screen justify-between relative bg-neutral-900 text-neutral-200 ' +
					font.className
				}
			>
				{router.asPath == '/' && <HeroContainer />}

				<div className="flex flex-col flex-grow justify-between ">
					{router.pathname !== '/404' && router.pathname !== '/500' && <Header />}

					<main className="flex-grow">{children}</main>

					{router.pathname !== '/404' && router.pathname !== '/500' && <Footer />}
				</div>
			</div>
		</>
	);
}
