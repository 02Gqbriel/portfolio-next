import { useContext, useEffect, useState } from 'react';
import clamp from '../../functions/clamp';
import mapToRange from '../../functions/mapToRange';
import throttle from '../../functions/throttle';

export default function HeroContainer() {
	const [scroll, setScroll] = useState(0);
	const [mobile, setMobile] = useState(false);

	function calculateLigthing(event: PointerEvent) {
		let center: { x: number; y: number } = {
			x: innerWidth / 2,
			y: innerHeight / 2,
		};

		let mouse: { x: number; y: number } = {
			x: event.pageX,
			y: event.pageY,
		};

		const left = (100 / innerWidth) * mouse.x;
		document.documentElement.style.setProperty(
			'--title-gradient-left',
			`${left}%`
		);

		const top = (100 / innerHeight) * mouse.y;
		document.documentElement.style.setProperty(
			'--title-gradient-top',
			`${top}%`
		);

		const bleft = (100 / document.documentElement.clientWidth) * mouse.x;
		document.documentElement.style.setProperty(
			'--background-gradient-left',
			`${bleft}%`
		);

		const btop =
			(100 / innerHeight) * (mouse.y + document.documentElement.scrollTop);
		document.documentElement.style.setProperty(
			'--background-gradient-top',
			`${btop}%`
		);

		const sizeX =
			clamp(
				Math.round(
					(100 / center.x) *
						(mouse.x < center.x ? mouse.x : innerWidth - mouse.x)
				),
				30,
				50
			) - 29;

		const sizeY =
			clamp(
				Math.round(
					(100 / center.y) *
						(mouse.y < center.y ? mouse.y : innerHeight - mouse.y)
				),
				30,
				50
			) - 29;

		document.documentElement.style.setProperty(
			'--title-gradient-size',
			`${(sizeX + sizeY) / 2}%`
		);
	}

	function calculateSize() {
		const container = document.documentElement;

		setScroll(container.scrollTop);

		document.documentElement.style.setProperty(
			'--title-size',
			`${mapToRange(
				container.scrollTop,
				[0, innerHeight],
				[innerWidth < 640 ? 4 : 8, 35]
			)}rem`
		);

		document.documentElement.style.setProperty(
			'--title-opacity',
			`${mapToRange(container.scrollTop, [0, innerHeight], [1, -0.5])}`
		);

		document.documentElement.style.setProperty(
			'--title-top',
			`${mapToRange(container.scrollTop, [0, innerHeight], [50, 100])}vh`
		);
	}

	function scrollDown() {
		window.scroll({ top: innerHeight, behavior: 'smooth' });
	}

	useEffect(() => {
		if (innerWidth < 640) {
			window.onpointerdown = calculateLigthing;
			setMobile(true);
		} else {
			window.onpointermove = throttle(calculateLigthing, 10);
		}

		document.body.onscroll = throttle(calculateSize, 10);
		calculateSize();

		return () => {
			window.onmousemove = null;
			document.body.onscroll = null;
		};
	}, [mobile]);

	return (
		<>
			<div
				id='hero-container'
				className='overflow-hidden relative sticky-scroll-container h-screen background-gradient from-neutral-800 to-neutral-900'>
				{mobile && (
					<div className='flex absolute top-1 left-[50%] -translate-x-[50%] w-max gap-1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-4 h-4 fill-neutral-500'>
							<path
								fillRule='evenodd'
								d='M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z'
								clipRule='evenodd'
							/>
						</svg>

						<span className='text-xs font-light text-neutral-500'>
							Tap screen to change lighting angle
						</span>
					</div>
				)}

				<div>
					<span className='title-text select-none text-transparent bg-clip-text title-gradient from-neutral-100 to-neutral-900 pb-3 text-center md:whitespace-nowrap sm:font-medium'>
						Gabriel Egli
					</span>
				</div>
				{scroll < 200 && (
					<span
						onClick={scrollDown}
						className='absolute bottom-10 left-[50%] -translate-x-[50%] cursor-pointer p-2 active:scale-125 transition-transform group'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-5 h-5 fill-neutral-400 animate-bounce group-active:fill-neutral-200'>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z'
								clipRule='evenodd'
							/>
						</svg>
					</span>
				)}
			</div>
		</>
	);
}
