import styles from './Header.module.css';
import Link from 'next/link';

interface HeaderProps {
	activePage?: 'Exercises' | 'Workouts';
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
		<nav className={styles.nav}>
			<div className={styles['nav-container']}>
				<div className={styleIfActive('Workouts', activePage)}>
					<Link href="/workouts">
						<a>Workouts</a>
					</Link>
				</div>
				<div className={styleIfActive('Exercises', activePage)}>
					<Link href="/exercises">
						<a>Exercises</a>
					</Link>
				</div>
			</div>
		</nav>
	);
}
