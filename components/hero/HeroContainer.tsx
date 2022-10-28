import { useEffect, useState } from 'react';
import clamp from '../../functions/clamp';
import mapToRange from '../../functions/mapToRange';
import throttle from '../../functions/throttle';

export default function HeroContainer() {
	const [inHero, setInHero] = useState(true);

	function calculateRelativeDegrees(event: MouseEvent) {
		if (event.pageY > innerHeight) return setInHero(false);

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

		mapToRange((sizeX + sizeY) / 2, [10, 35], [100, 150]);

		if (inHero) {
			const cursor =
				document.querySelector<HTMLSpanElement>('#cursor') ??
				new HTMLSpanElement();

			cursor.style.left = `${mouse.x}px`;
			cursor.style.top = `${mouse.y}px`;
			cursor.style.transform = `scale(${mapToRange(
				(sizeX + sizeY) / 2,
				[10, 35],
				[100, 250]
			)}%)`;
		} else {
			setInHero(true);
		}

		const xRot =
			((100 / center.x) *
				(mouse.x > center.x ? mouse.x : innerWidth - mouse.x)) /
				100 -
			1;

		const yRot =
			((100 / center.y) *
				(mouse.y > center.y ? mouse.y : innerHeight - mouse.y)) /
				100 -
			1;

		document.documentElement.style.setProperty(
			'--title-x-rotation',
			(mouse.x < center.x ? yRot : -yRot) + ''
		);
		document.documentElement.style.setProperty(
			'--title-y-rotation',
			(mouse.y < center.y ? xRot : -xRot) + ''
		);

		const rotationY = mapToRange(
			(mouse.y < center.y ? innerHeight - mouse.y : mouse.y) - innerHeight / 2,
			[0, innerHeight / 2],
			[0, 20]
		);

		const rotationX = mapToRange(
			(mouse.x < center.x ? innerWidth - mouse.x : mouse.x) - innerWidth / 2,
			[0, innerWidth / 2],
			[0, 20]
		);

		document.documentElement.style.setProperty(
			'--title-rotation-deg',
			((rotationX / 10 + rotationY / 10) / 2) * 10 + 'deg'
		);

		console.log((rotationX + rotationY) / 2);
	}

	useEffect(() => {
		window.onpointermove = throttle(calculateRelativeDegrees, 10);

		return () => {
			window.onmousemove = null;
		};
	});

	return (
		<>
			<div className='min-h-screen  overflow-hidden relative cursor-none background-gradient from-neutral-800 to-neutral-900'>
				<span className='title-text text-transparent p-4 bg-clip-text title-gradient from-neutral-300 to-neutral-900 rotate3d'>
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
						className='w-10 h-10 fill-neutral-200'>
						<path d='M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z' />
					</svg>
				</span>
			)}
		</>
	);
}
