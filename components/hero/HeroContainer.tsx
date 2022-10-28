import { useEffect, useState } from 'react';
import throttle from '../../functions/throttle';

export default function HeroContainer() {
	const [deg, setDeg] = useState(100);
	const [inHero, setInHero] = useState(true);
	const [day, setDay] = useState(true);

	function calculateRelativeDegrees(event: MouseEvent) {
		if (event.pageY > innerHeight) return setInHero(false);

		if (!inHero) setInHero(true);

		let center: { x: number; y: number } = {
			x: innerWidth / 2,
			y: innerHeight / 2,
		};

		let mouse: { x: number; y: number } = {
			x: event.pageX,
			y: event.pageY,
		};
		if (inHero) {
			const cursor =
				document.querySelector<HTMLSpanElement>('#cursor') ??
				new HTMLSpanElement();

			cursor.style.left = `${mouse.x}px`;
			cursor.style.top = `${mouse.y}px`;
		}
		if (day != mouse.y < center.y) setDay(mouse.y < center.y);

		setDeg(
			Math.round(
				(Math.atan2(mouse.y - center.y, mouse.x - center.x) * 180) / Math.PI
			) - 90
		);
	}

	useEffect(() => {
		window.onmousemove = throttle(calculateRelativeDegrees, 10);

		//document.querySelector(':root')?.style.setProperty('--title-gradient-rad', `${deg}deg`);

		document.documentElement.style.setProperty(
			'--title-gradient-rad',
			`${deg}deg`
		);

		return () => {
			window.onmousemove = null;
		};
	});

	return (
		<>
			<div className='min-h-screen bg-neutral-100 overflow-hidden relative cursor-none'>
				<span className='text-9xl font-bold absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  tracking-tight whitespace-nowrap text-transparent p-4 bg-clip-text title-gradient from-neutral-50 via-neutral-300 to-neutral-400'>
					Gabriel Egli
				</span>
			</div>

			{inHero && (
				<span
					id='cursor'
					className='absolute -translate-x-[50%] -translate-y-[50%] cursor-none pointer-events-none'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='w-10 h-10 fill-neutral-700'>
						<path d='M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z' />
					</svg>
				</span>
			)}
		</>
	);
}
