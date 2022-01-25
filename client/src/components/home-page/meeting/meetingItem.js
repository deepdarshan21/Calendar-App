import "./meeting.css";

const MeetingItem = () => {
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
        </div>
    );
};

export default MeetingItem;
