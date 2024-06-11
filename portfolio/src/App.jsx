import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
