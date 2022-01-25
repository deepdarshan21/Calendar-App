// import './App.css';
import Homepage from "./components/home-page/homepage";
import { AppProvider } from "./context/AppContext";

function App() {
    return (
        <div className="App">
            <AppProvider>
                <Homepage />
            </AppProvider>
        </div>
    );
}

export default App;
