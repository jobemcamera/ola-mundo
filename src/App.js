import { BrowserRouter, Route, Routes } from "react-router-dom"; // npm install react-router-dom localforage match-sorter sort-by
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<Inicio/>} />
				<Route path="/sobremim" element={<SobreMim/>} />
				<Route path="*" element={<div>Página não encontrada</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
