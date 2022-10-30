import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ErrorPage() {
	const router = useRouter();

	useEffect(() => {
		router.prefetch('/');
	});

	const returnToHomepage = () => router.push('/');

	return (
		<div className='flex flex-col items-center justify-center h-screen max-w-xl mx-auto gap-5 md:gap-0'>
			<div className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					className='w-36 md:w-24'>
					<path
						fillRule='evenodd'
						d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z'
						clipRule='evenodd'
					/>
				</svg>

				<div className='flex flex-col items-center md:items-start'>
					<p className='text-2xl md:text-4xl'>Ups something went wrong</p>
					<p>
						error 404 <span className='text-xl font-medium'>·</span> page not
						found
					</p>
				</div>
			</div>

			<button
				onClick={returnToHomepage}
				className='bg-red-300 text-red-700  px-6 py-0.5 rounded-md flex items-center gap-2 self-center md:self-end hover:bg-red-200 active:ring-2 ring-offset-2 ring-red-300 ring-offset-neutral-900'>
				return to landing page
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					className='w-4 h-4'>
					<path
						fillRule='evenodd'
						d='M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
		</div>
	);
}
