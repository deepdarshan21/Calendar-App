import "./homepage.css" 
import ShowCalendar from "./calendar/calendar";
import Meeting from "./meeting/meeting";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Deepdarshan</span>
                <button className="btn btn-outline-danger">Logout</button>
            </div>
            <div className="content">
                <ShowCalendar />
                <Meeting />
            </div>
        </div>
    );
};

export default Homepage;
