import styles from './Header.module.css';
import Link from 'next/link';

interface HeaderProps {
	activePage?: 'Exercises' | 'Workouts' | 'Home' | 'Progress';
}

function styleIfActive(match: string, test: string) {
	let style = styles.link;
	if (test === match) {
		style += ` ${styles['link-active']}`;
	}
	return style;
}

export default function Header({ activePage }: HeaderProps) {
	return (
		<div>
			<img
				className={styles.logo}
				src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/1916086_202653352583_4240749_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=Ur16CfpXl7YAX8hJqwY&_nc_ht=scontent.fmkc1-1.fna&oh=3f599a411e1620aacce2c115410ea3a1&oe=5F709DE2"
			/>
			<div className={styles.nav}>
				<h1>South Platte Wellness Program</h1>
			</div>
			<nav className={styles.nav}>
				<div className={styles['nav-container']}>
					<div className={styleIfActive('Home', activePage)}>
						<Link href="/home">
							<a>Home</a>
						</Link>
					</div>
					<div className={styleIfActive('Workouts', activePage)}>
						<Link href="/workouts">
							<a>Workouts</a>
						</Link>
					</div>
					<div className={styleIfActive('Progress', activePage)}>
						<Link href="/progress">
							<a>Progress</a>
						</Link>
					</div>
					<div className={styleIfActive('Exercises', activePage)}>
						<Link href="/exercises">
							<a>Exercises</a>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
}
