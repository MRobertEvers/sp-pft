import Header from '../Header';

export default function Page({ children }: React.PropsWithChildren<{}>) {
	return (
		<div>
			<Header activePage="Exercises" />
			{children}
		</div>
	);
}
