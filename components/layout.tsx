import Footer from './footer/Footer';
import Header from './header/Header';
import HeroContainer from './hero/HeroContainer';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<div id="root" className="flex flex-col min-h-screen justify-between">
			<HeroContainer />

			<div className="flex flex-col flex-grow justify-between p-2">
				<Header />

				<main className="flex-grow">{children}</main>

				<Footer />
			</div>
		</div>
	);
}
