import "./meeting.css"
import { useContext } from "react";
import moment from "moment";
import { AppContext } from "../../../context/AppContext";

const Meeting = () => {
    const { dateSelected } = useContext(AppContext);
    return (
        <div className="meeting">
            <p>
                Selected Date: <b>{moment(dateSelected).format("dddd, MMMM Do YYYY")}</b>
            </p>
        </div>
    );
};

export default Meeting;
