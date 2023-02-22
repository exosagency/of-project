import Homepage from "./components/homepage";
import ServicesPage from "./components/services";
import "./styles/main.scss";
function App() {
    return (
        <div className="page-wrapper">
            <Homepage />
            <ServicesPage />
        </div>
    );
}

export default App;
