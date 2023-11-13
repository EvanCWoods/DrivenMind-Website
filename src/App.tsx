import React from "react";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import PlatformOverview from "./Components/overview/PlatformOverview";
import FrequentlyAskedQuestions from "./Components/FrequentlyAskedQuestions";
import Footer from "./Components/Footer";
import Platform from "./Components/Platform";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ContactPage from "./Components/contact/ContactPage";
import TrainingOverview from "./Components/overview/TrainingOverview";
import AITraining from "./Components/AITraining";
import Partners from "./Components/partners/Partners";

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
								<PlatformOverview />
								<TrainingOverview />
								<Partners />
								<FrequentlyAskedQuestions />
							</Box>
						}
					/>
					<Route path="/platform" element={<Platform />} />
					<Route path="/ai-training" element={<AITraining />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
