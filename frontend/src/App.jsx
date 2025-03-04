import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServicePage from "./pages/ServicePage";
import ServiceRequestPage from "./pages/ServiceRequestPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PorfolioPage"
import ContactPage from "./pages/ContactPage";
import ElectricalLearnMore from "./pages/services-learn-more/ElectricalLearnMore";
import CCTVLearnMore from "./pages/services-learn-more/CCTVLearnMore";
import NetworkLearnMore from "./pages/services-learn-more/NetworkLearnMore";
import GeneralLearnMore from "./pages/services-learn-more/GeneralLearnMore";
import { ACLearnMore } from "./pages/services-learn-more/ACLearnMore";
import PlumbingLearnMore from "./pages/services-learn-more/PlumbingLearnMore";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/services" element={<ServicePage/>} />
				<Route path="services/electrical" element={<ElectricalLearnMore/>}/>
				<Route path="services/cctv" element={<CCTVLearnMore/>}/>
				<Route path="services/network" element={<NetworkLearnMore/>}/>
				<Route path="services/general" element={<GeneralLearnMore/>}/>
				<Route path="services/ac" element={<ACLearnMore/>}/>
				<Route path="services/plumbing" element={<PlumbingLearnMore/>}/>
				<Route path="/about" element={<AboutPage/>} />
				<Route path="/portfolio" element={<PortfolioPage/>} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/form" element={<ServiceRequestPage />} />
			</Routes>
		</Router>
	)
}

export default App
