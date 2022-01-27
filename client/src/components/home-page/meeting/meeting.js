import "./meeting.css";
import { useContext } from "react";
import moment from "moment";
import AddNewMeeting from "./addNewMeeting";
import MeetingList from "./MeetingList";
import { AppContext } from "../../../context/AppContext";

const Meeting = () => {
    const { dateSelected, showAddMeeting, changeShowNewMeeting } = useContext(AppContext);

    const addNewMeeting = () => {
        console.log("Clicked");
        changeShowNewMeeting("deepdarshan");
    };
    return (
        <div className="meeting">
            <div className="display-selected-date">
                <p>{moment(dateSelected).format("dddd, ")}</p>
                <p>{moment(dateSelected).format("MMMM Do YYYY")}</p>
            </div>
            <div className="add-meeting">
                {console.log(showAddMeeting)}
                {showAddMeeting && <AddNewMeeting />}
                <button className="btn btn-primary col-12" onClick={addNewMeeting}>
                    Add new Meeting
                </button>
            </div>

            <div className="meetings-list">
                <MeetingList />
            </div>
        </div>
    );
};

export default Meeting;
