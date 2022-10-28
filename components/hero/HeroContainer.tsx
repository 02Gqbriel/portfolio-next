import { useEffect, useState } from 'react';
import throttle from '../../functions/throttle';

export default function HeroContainer() {
	const [deg, setDeg] = useState(100);

	function calculateRelativeDegrees(event: MouseEvent) {
		setDeg(Math.round((Math.atan2(event.clientY, event.clientX) * 180) / Math.PI));
	}

	useEffect(() => {
		window.onmousemove = throttle(calculateRelativeDegrees, 100);

		document
			.querySelector(':root')
			?.style.setProperty('--title-gradient-rad', `${deg}deg`);

		return () => {
			window.onmousemove = null;
		};
	}, [deg]);

	return (
		<div className="min-h-screen bg-slate-800 overflow-hidden flex justify-center items-center">
			<span className="text-9xl font-bold tracking-tight whitespace-nowrap text-transparent p-4 bg-clip-text title-gradient from-white via-gray-300 to-gray-900">
				Gabriel Egli
			</span>
		</div>
	);
}
