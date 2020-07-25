import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMePage from "./pages/AboutMePage"
import PortfolioPage from "./pages/PortfolioPage"
import SkillsPage from "./pages/SkillsPage"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Route exact path="/" component={AboutMePage} />
      <Route path="/about" component={AboutMePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route exact path="/skills" component={SkillsPage} />
      <Footer />
    </Router >
  );
}

export default App;
