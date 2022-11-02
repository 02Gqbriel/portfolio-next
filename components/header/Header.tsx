import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FaviconImage from '../../public/favicon-96x96.png';

export default function Header() {
	const [activeLink, setActiveLink] = useState(-1);
	const [hoveredLink, setHoveredLink] = useState(-1);

	return (
		<header className='sticky top-0 bg-neutral-900/90 backdrop-blur-sm px-10 py-3 rounded-xl flex justify-between'>
			<Link href={'/'}>
				<div className='relative group flex flex-col items-center h-min'>
					<Image
						src={FaviconImage}
						alt='favicon'
						width={40}
						height={40}
						className='group-hover:scale-110 group-active:scale-90 transition-transform z-10'
					/>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						className='w-5 h-5 z-10 hidden'>
						<path
							fillRule='evenodd'
							d='M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z'
							clipRule='evenodd'
						/>
					</svg>

					<div className='opacity-0 group-hover:opacity-100 transition-all absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-5 h-5 group-hover:w-12 group-hover:h-12 z-0 radial-gradient from-neutral-700 to-neutral-900 blur-sm rounded-full'></div>
				</div>
			</Link>

			<nav className='flex items-center text-md relative gap-10'>
				<Link
					href={'/work'}
					onPointerEnter={() => setHoveredLink(0)}
					onPointerLeave={() => setHoveredLink(-1)}
					onPointerDown={() => setActiveLink(0)}>
					<span
						className={
							'relative slider text-neutral-200 ' +
							(hoveredLink == 0
								? 'slide-in-left before:bg-neutral-100'
								: 'slide-out-right  text-neutral-400')
						}>
						Work
					</span>
				</Link>

				<Link
					href={'/about'}
					onPointerEnter={() => setHoveredLink(1)}
					onPointerLeave={() => setHoveredLink(-1)}
					onPointerDown={() => setActiveLink(1)}>
					<span
						className={
							'relative slider text-neutral-200 ' +
							(hoveredLink == 1
								? 'slide-in-left before:bg-neutral-100'
								: 'slide-out-right  text-neutral-400')
						}>
						About
					</span>
				</Link>

				<Link
					href={'/contact'}
					onPointerEnter={() => setHoveredLink(2)}
					onPointerLeave={() => setHoveredLink(-1)}
					onPointerDown={() => setActiveLink(2)}>
					<span
						className={
							'relative slider text-neutral-200 ' +
							(hoveredLink == 2
								? 'slide-in-left before:bg-neutral-100 tex'
								: 'slide-out-right  text-neutral-400')
						}>
						Contact
					</span>
				</Link>
			</nav>
		</header>
	);
}
