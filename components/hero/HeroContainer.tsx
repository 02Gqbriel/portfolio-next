import { useCallback, useEffect, useState } from 'react';
import clamp from '../../functions/clamp';
import mapToRange from '../../functions/mapToRange';
import throttle from '../../functions/throttle';
import HeroBackgroundImage from './HeroBackgroundImage';
import MobileHint from './MobileHint';
import ScrollDownButton from './ScrollDownButton';

export default function HeroContainer() {
	const [pastHero, setPastHero] = useState(false);

	const calculateLigthing = throttle((event: PointerEvent) => {
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

		setProperty('--background-gradient-left', `${getPosition('x', innerWidth)}%`);

		setProperty('--background-gradient-top', `${getPosition('y', innerHeight)}%`);

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
	}, 10);

	const calculateSize = useCallback(() => {
		const container = document.documentElement;

		document.documentElement.style.setProperty(
			'--title-size',
			`${mapToRange(
				clamp(container.scrollTop, 0, innerHeight),
				[0, innerHeight],
				[1, 3]
			)}`
		);

		document.documentElement.style.setProperty(
			'--title-opacity',
			`${mapToRange(
				clamp(container.scrollTop, 0, innerHeight),
				[0, innerHeight],
				[1, -1]
			)}`
		);

		document.documentElement.style.setProperty(
			'--title-top',
			`${mapToRange(
				clamp(container.scrollTop, 0, innerHeight),
				[0, innerHeight],
				[50, 100]
			)}vh`
		);
	}, []);

	useEffect(() => {
		setPastHero(innerHeight <= scrollY);

		if (pastHero) {
			if (innerWidth < 640) {
				window.removeEventListener('pointerdown', calculateLigthing);
			} else {
				window.removeEventListener('pointermove', calculateLigthing);
			}
		} else {
			if (innerWidth < 640) {
				window.addEventListener('pointerdown', calculateLigthing);
			} else {
				window.addEventListener('pointermove', calculateLigthing);
			}

			document.addEventListener('scroll', calculateSize);
			calculateSize();
		}

		return () => {
			if (innerWidth < 640) {
				window.removeEventListener('pointerdown', calculateLigthing);
			} else {
				window.removeEventListener('pointermove', calculateLigthing);
			}

			document.removeEventListener('scroll', calculateSize);
		};
	}, [calculateLigthing, calculateSize, pastHero]);

	return (
		<>
			<div
				id="hero-container"
				className="overflow-hidden relative h-screen background-gradient from-neutral-800/60 to-neutral-900/95 z-10"
			>
				<MobileHint />

				<span className="title-text absolute left-[50vw] subpixel-antialiased text-8xl md:text-9xl tracking-tighter select-none text-transparent bg-clip-text title-gradient from-neutral-100/90 to-neutral-900 pb-5 text-center md:whitespace-nowrap !font-semibold">
					Gabriel Egli
				</span>

				{/** Fade out Container */}
				<div className="w-screen h-10 absolute bottom-0 bg-gradient-to-b from-neutral-900/0 via-neutral-900/0 to-neutral-900" />

				<ScrollDownButton />
			</div>

			<HeroBackgroundImage />
		</>
	);
}
