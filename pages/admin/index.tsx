import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { GetServerSideProps, NextPage } from 'next';
import { FormEvent, useState } from 'react';

interface Props {}

const Admin: NextPage<Props> = ({}) => {
	const [title, setTitle] = useState('');

	const AddWorkItems = async (ev: FormEvent) => {
		ev.preventDefault();

		const res = await fetch(
			`http://${window.location.hostname}:${window.location.port}/work/add?title=${title}&image_link=test`,
			{ method: 'POST' }
		);

		const json = await res.json();

		console.log(json);
	};

	return (
		<div>
			<h1>Admin</h1>

			<form
				onSubmit={AddWorkItems}
				className='flex flex-col max-w-sm mx-auto gap-10'>
				<div className='flex gap-5'>
					<label htmlFor='#title'>title:</label>
					<input
						type='text'
						name='title'
						id='title'
						onInput={ev => setTitle(ev.currentTarget.value)}
						className='text-neutral-800 flex-grow'
					/>
				</div>

				<button type='submit'>submit</button>
			</form>
		</div>
	);
};

export default Admin;
