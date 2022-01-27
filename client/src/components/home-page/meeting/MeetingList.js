import "./meeting.css";
import { useContext } from "react";
import MeetingItem from "./meetingItem";
import { AppContext } from "../../../context/AppContext";

const MeetingList = () => {
    const { dateSelected, meetings } = useContext(AppContext);

    const meetingFilter = meetings.filter(
        (meetingsOfDay) =>
            meetingsOfDay.date.setHours(0, 0, 0, 0) === dateSelected.setHours(0, 0, 0, 0)
    );

    return (
        <div>
            {/* {console.log("Check")}
            {console.log(meetings)} */}
            {!meetingFilter.length && <div>No Meeting Scheduled</div>}
            {meetingFilter.length !== 0 &&
                meetingFilter[0].meetings.map(({ name, imp, link, start, end }) => (
                    <MeetingItem name={name} imp={imp} link={link} start={start} end={end} />
                ))}
            {/* <MeetingItem
                name={"Name is Deepdarshan hello"}
                imp={"High"}
                link={"https://meet.com/"}
                start={"14:00"}
                end={"15:00"}
            /> */}
        </div>
    );
};

export default MeetingList;
