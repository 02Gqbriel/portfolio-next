import { useEffect, useState } from 'react';
import throttle from '../../functions/throttle';

function ScrollDownButton() {
	const [scroll, setScroll] = useState(0);

	function scrollDown() {
		window.scroll({ top: innerHeight, behavior: 'smooth' });
	}

	useEffect(() => {
		document.addEventListener(
			'scroll',
			throttle(() => setScroll(document.documentElement.scrollTop), 10)
		);

		return () => {
			document.removeEventListener(
				'scroll',
				throttle(() => setScroll(document.documentElement.scrollTop), 10)
			);
		};
	});

	return scroll < 200 ? (
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
	) : (
		<></>
	);
}

export default ScrollDownButton;
