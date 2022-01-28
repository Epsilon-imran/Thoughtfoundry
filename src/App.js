import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InnovationInfo from "./components/InnovationInfo";
import HowItWorks from "./components/HowItWorks";
import TopIdea from "./components/TopIdea";

function App() {
    return (
        <>
            <Header />
            <InnovationInfo />
            <HowItWorks />
            <TopIdea />
            <Footer />
        </>
    );
}

export default App;
