import "./meeting.css";
import { useContext } from "react";
import moment from "moment";
import AddNewMeeting from "./addNewMeeting";
import UpdateMeeting from "./updateMeeting";
import MeetingList from "./MeetingList";
import { AppContext } from "../../../context/AppContext";

const Meeting = () => {
    const {
        dateSelected,
        showAddMeeting,
        showUpdateMeeting,
        showMeetingList,
        updateShowAddMeeting,
    } = useContext(AppContext);

    const addNewMeeting = () => {
        updateShowAddMeeting();
    };
    return (
        <div className="meeting">
            <div className="display-selected-date">
                <p>{moment(dateSelected).format("dddd, ")}</p>
                <p>{moment(dateSelected).format("MMMM Do YYYY")}</p>
            </div>
            <div className="add-meeting">
                {showAddMeeting && <AddNewMeeting />}
                {/* {console.log("Value  of showUpdateMeeting: " + showUpdateMeeting)} */}
                {showUpdateMeeting && <UpdateMeeting />}
                {showMeetingList && (
                    <button className="btn btn-primary col-12" onClick={addNewMeeting}>
                        Add new Meeting
                    </button>
                )}
            </div>
            <div className="meetings-list">{showMeetingList && <MeetingList />}</div>
        </div>
    );
};

export default Meeting;
