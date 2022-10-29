import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './footer/Footer';
import Header from './header/Header';
import HeroContainer from './hero/HeroContainer';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Gabriels Portfolio</title>
			</Head>
			<div
				id='root'
				className='flex flex-col min-h-screen justify-between relative bg-neutral-900 text-neutral-200 '>
				{router.asPath == '/' && <HeroContainer />}

				<div className='flex flex-col flex-grow justify-between '>
					<div className='snap-always snap-start'></div>
					{router.pathname !== '/_error' && <Header />}

					<main className='flex-grow p-2'>{children}</main>

					{router.pathname !== '/_error' && <Footer />}
				</div>
			</div>
		</>
	);
}
