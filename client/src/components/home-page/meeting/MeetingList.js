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
            {!meetingFilter.length && <div>No Meeting Scheduled</div>}
            {meetingFilter.length !== 0 &&
                meetingFilter[0].meetings.map(({ id, name, imp, link, start, end }) => (
                    <MeetingItem
                        key={id}
                        id={id}
                        name={name}
                        imp={imp}
                        link={link}
                        start={start}
                        end={end}
                    />
                ))}
        </div>
    );
};

export default MeetingList;
