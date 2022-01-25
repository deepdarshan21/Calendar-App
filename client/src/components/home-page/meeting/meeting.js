import "./meeting.css";
import { useContext } from "react";
import moment from "moment";
import AddNewMeeting from "./addNewMeeting";
import MeetingList from "./MeetingList";
import { AppContext } from "../../../context/AppContext";

const Meeting = () => {
    const { dateSelected } = useContext(AppContext);
    return (
        <div className="meeting">
            <div className="display-selected-date">
                <p>{moment(dateSelected).format("dddd, ")}</p>
                <p>{moment(dateSelected).format("MMMM Do YYYY")}</p>
            </div>
            <div className="add-meeting">
                <AddNewMeeting />
                <button className="btn btn-primary col-12">Add new Meeting</button>
                <MeetingList />
            </div>
            <div className="meetings-list"></div>
        </div>
    );
};

export default Meeting;
