import { NextPage, GetServerSideProps } from 'next';

import { createClient } from '@supabase/supabase-js';

interface Props {
	data: any[] | null;
}

export const getServerSideProps: GetServerSideProps = async ctx => {
	const supabaseUrl = 'https://zifqaoytbvwpliirkqhc.supabase.co';
	const supabaseKey = process.env.SUPABASE_KEY ?? '';
	const supabase = createClient(supabaseUrl, supabaseKey);

	let { data: Work, error } = await supabase.from('Work').select('*');

	return {
		props: {
			data: !error ? Work : null,
		},
	};
};

const Work: NextPage<Props> = ({ data }) => {
	return <div>work {JSON.stringify(data)}</div>;
};

export default Work;
