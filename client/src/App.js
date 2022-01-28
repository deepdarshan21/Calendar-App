import Homepage from "./components/home-page/homepage";
import Login from "./components/login-page/login";
import Register from "./components/register-page/register";
import { AppProvider } from "./context/AppContext";

function App() {
    return (
        <div className="App">
            <AppProvider>
                {/* <Homepage /> */}
                {/* <Login /> */}
                <Register />
            </AppProvider>
        </div>
    );
}

export default App;
