import { NextPage } from 'next';
import Header from '../../components/Header';

export type WorkoutProps = {};

const Home: NextPage<WorkoutProps> = (props: WorkoutProps) => {
	return (
		<div>
			<Header activePage={'Home'} />
			Home page.
		</div>
	);
};

export default Home;
