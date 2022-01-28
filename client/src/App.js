import Homepage from "./components/home-page/homepage";
import Login from "./components/login-page/login";
import { AppProvider } from "./context/AppContext";

function App() {
    return (
        <div className="App">
            <AppProvider>
                {/* <Homepage /> */}
                <Login />
            </AppProvider>
        </div>
    );
}

export default App;
