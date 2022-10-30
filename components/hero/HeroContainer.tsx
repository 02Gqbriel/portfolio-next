import { useEffect } from 'react';
import clamp from '../../functions/clamp';
import mapToRange from '../../functions/mapToRange';
import throttle from '../../functions/throttle';
import MobileHint from './MobileHint';
import ScrollDownButton from './ScrollDownButton';

export default function HeroContainer() {
	function calculateLigthing(event: PointerEvent) {
		if (innerHeight - scrollY <= 0 || innerHeight < scrollY + event.y) return;

		let center: { x: number; y: number } = {
			x: innerWidth / 2,
			y: innerHeight / 2,
		};

		let mouse: { x: number; y: number } = {
			x: event.pageX,
			y: event.pageY,
		};

		const getPosition = (key: 'x' | 'y', containerReference: number) =>
			(100 / containerReference) * mouse[key];

		const setProperty = (key: string, value: string) =>
			document.documentElement.style.setProperty(key, value);

		setProperty('--title-gradient-left', `${getPosition('x', innerWidth)}%`);

		setProperty('--title-gradient-top', `${getPosition('y', innerHeight)}%`);

		setProperty(
			'--background-gradient-left',
			`${getPosition('x', innerWidth)}%`
		);

		setProperty(
			'--background-gradient-top',
			`${getPosition('y', innerHeight)}%`
		);

		const calcSize = (key: 'x' | 'y', conRef: number) =>
			clamp(
				(100 / center[key]) *
					(mouse[key] < center[key] ? mouse[key] : conRef - mouse[key]),
				30,
				50
			) - 29;

		setProperty(
			'--title-gradient-size',
			`${(calcSize('x', innerWidth) + calcSize('y', innerHeight)) / 2}%`
		);
	}

	function calculateSize() {
		const container = document.documentElement;

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
			`${mapToRange(
				container.scrollTop,
				[0, innerHeight],
				[1, innerWidth < 640 ? -1.75 : -0.5]
			)}`
		);

		document.documentElement.style.setProperty(
			'--title-top',
			`${mapToRange(container.scrollTop, [0, innerHeight], [50, 100])}vh`
		);
	}

	useEffect(() => {
		if (innerWidth < 640) {
			window.addEventListener('pointerdown', calculateLigthing);
		} else {
			window.addEventListener('pointermove', throttle(calculateLigthing, 15));
		}

		document.addEventListener('scroll', calculateSize);
		calculateSize();

		return () => {
			if (innerWidth < 640) {
				window.removeEventListener('pointerdown', calculateLigthing);
			} else {
				window.removeEventListener(
					'pointermove',
					throttle(calculateLigthing, 10)
				);
			}

			document.removeEventListener('scroll', calculateSize);
		};
	});

	return (
		<>
			<div
				id='hero-container'
				className='overflow-hidden relative h-screen background-gradient from-neutral-700 to-neutral-900 shadow-neutral-900'>
				<MobileHint />

				<div>
					<span className='title-text select-none text-transparent bg-clip-text title-gradient from-neutral-100 to-neutral-900 pb-3 text-center md:whitespace-nowrap sm:font-medium'>
						Gabriel Egli
					</span>
				</div>

				<div className='w-screen h-10  absolute bottom-0 bg-gradient-to-b from-neutral-900/0 via-neutral-900/70 to-neutral-900/100' />

				<ScrollDownButton />
			</div>
		</>
	);
}
