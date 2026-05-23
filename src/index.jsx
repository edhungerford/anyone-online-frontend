import { render } from 'preact';
import { Header } from './header';

import preactLogo from './assets/preact.svg';
import './style.css';
import { MainWindow } from './mainWindow';

export function App() {
	return (
		<>
		<Header />
		<main>
			<MainWindow></MainWindow>
			<div><a>thing</a></div>
		</main>
		</>
	);
}

render(<App />, document.getElementById('app'));
