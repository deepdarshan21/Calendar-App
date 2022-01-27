import "./meeting.css";
import { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { AppContext } from "../../../context/AppContext";

const MeetingItem = ({ name, imp, link, start, end }) => {
    const { updateShowUpdateMeeting } = useContext(AppContext);

    const updateMeeting = () => {
        updateShowUpdateMeeting(true);
    };

    return (
        <div className="meeting-item">
            <div className="meeting-item-details">
                <h5>{name}</h5>
                <p>Importance: {imp}</p>
                <a href={link}>Join Now</a>
            </div>
            <div className="meeting-item-times">
                <p>{start}</p>
                <p>{end}</p>
            </div>
            <div className="meeting-item-edit-delete">
                <AiFillEdit size={25} onClick={updateMeeting} />
                <AiFillDelete size={25} />
            </div>
        </div>
    );
};

export default MeetingItem;
