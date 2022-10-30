import Link from 'next/link';

export default function Header() {
	return (
		<header className='sticky top-0 bg-neutral-900/90 backdrop-blur-sm px-10 py-3 rounded-xl flex justify-between'>
			<Link href={'/'}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					className='w-5 h-5'>
					<path
						fillRule='evenodd'
						d='M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z'
						clipRule='evenodd'
					/>
				</svg>
			</Link>

			<nav className='flex items-center gap-5'>
				<Link href={'/about'}>
					<span>About</span>
				</Link>

				<span>·</span>

				<Link href={'/about'}>
					<span>Work</span>
				</Link>

				<span>·</span>

				<Link href={'/about'}>
					<span>Contact</span>
				</Link>
			</nav>
		</header>
	);
}
