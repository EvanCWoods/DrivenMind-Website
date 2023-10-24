import React from "react";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Overview from "./Components/overview/Overview";
import FrequentlyAskedQuestions from "./Components/FrequentlyAskedQuestions";
import Footer from "./Components/Footer";
import Platform from "./Components/Platform";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ContactPage from "./Components/contact/ContactPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<Box>
								<Landing />
								<Overview />
								<FrequentlyAskedQuestions />
							</Box>
						}
					/>
					<Route path="/platform" element={<Platform />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
