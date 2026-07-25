import { render } from 'preact';
import { Header } from './header';
import { MinigameWindow } from './minigameWindow.jsx';

import preactLogo from './assets/preact.svg';
import './style.css';
import { MainWindow } from './mainWindow';

export function App() {
	return (
		<>
		<Header />
		<main>
			<MainWindow></MainWindow>
			<MinigameWindow></MinigameWindow>
		</main>
		<footer></footer>
		</>
	);
}

render(<App />, document.getElementById('app'));
