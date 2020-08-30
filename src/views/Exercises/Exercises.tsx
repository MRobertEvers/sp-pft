import { NextPage, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Header from '../../components/Header';

export type HomeProps = {};

const Exercises: NextPage<HomeProps> = (props: HomeProps) => {
	return (
		<div>
			<Header activePage={'Exercises'} />
			Exercises
		</div>
	);
};

export default Exercises;
