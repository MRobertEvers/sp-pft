import { NextPage } from 'next';
import Header from '../../components/Header';

export type WorkoutProps = {};

const Workout: NextPage<WorkoutProps> = (props: WorkoutProps) => {
	return (
		<div>
			<Header activePage={'Workouts'} />
			Workouts page.
		</div>
	);
};

export default Workout;
