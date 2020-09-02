import { NextPage } from 'next';
import Header from '../../components/Header';

export type WorkoutProps = {};

const Progress: NextPage<WorkoutProps> = (props: WorkoutProps) => {
	return (
		<div>
			<Header activePage={'Progress'} />
			Progress page.
		</div>
	);
};

export default Progress;
