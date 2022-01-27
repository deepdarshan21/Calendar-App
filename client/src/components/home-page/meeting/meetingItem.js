import "./meeting.css";
import { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { AppContext } from "../../../context/AppContext";

const MeetingItem = () => {
    const { updateShowUpdateMeeting } = useContext(AppContext);

    const updateMeeting = () => {
        console.log("Clicked");
        updateShowUpdateMeeting(true);
    };

    return (
        <div className="meeting-item">
            <div className="meeting-item-details">
                <h5>{"Name is Deepdarshan hello"}</h5>
                <p>Importance: {"High"}</p>
                <a href={"https://meet.com/"}>Join Now</a>
            </div>
            <div className="meeting-item-times">
                <p>{"14:00"}</p>
                <p>{"15:00"}</p>
            </div>
            <div className="meeting-item-edit-delete">
                <AiFillEdit size={25} onClick={updateMeeting} />
                <AiFillDelete size={25} />
            </div>
        </div>
    );
};

export default MeetingItem;
