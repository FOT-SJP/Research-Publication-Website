import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Homepage from "./components/homepage";

function App() {
	return (
		<div className="App">
			<link
				href="https://fonts.cdnfonts.com/css/gotham"
				rel="stylesheet"
			/>

			<Homepage />
		</div>
	);
}

export default App;
