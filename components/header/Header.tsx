import Link from 'next/link';

export default function Header() {
	return (
		<header className='flex justify-between items-center sticky top-0 bg-neutral-900/50 backdrop-blur left-0 right-0 p-2'>
			<h1 className='tracking-tight text-2xl'>Gabriel Egli</h1>

			<nav>
				<Link href={'/about'}>
					<span>About Me</span>
				</Link>
			</nav>
		</header>
	);
}
