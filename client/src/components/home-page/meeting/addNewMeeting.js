import "./meeting.css";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const AddNewMeeting = () => {
    const [name, setName] = useState();
    const [link, setLink] = useState();
    const [imp, setImp] = useState("Default");
    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    const { updateShowAddMeeting } = useContext(AppContext);

    const addNewMeeting = () => {
        updateShowAddMeeting();
    };

    return (
        <div>
            <form onSubmit={addNewMeeting}>
                <div>
                    <label htmlFor="name">Meeting Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="link">Meeting Link</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="importance">Meeting Importance</label>
                    <select
                        required="required"
                        className="form-control"
                        id="type"
                        value={imp}
                        onChange={(e) => setImp(e.target.value)}
                    >
                        <option value="Defult" hidden>
                            Select One
                        </option>
                        <option value="High">High</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="start-time">Start Time</label>
                        <input
                            type="time"
                            id="start-time"
                            className="form-control"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="end-time">End Time</label>
                        <input
                            type="time"
                            id="end-time"
                            className="form-control"
                            value={end}
                            onChange={(e) => setEnd(e.target.value)}
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    className="btn btn-primary col-12 submit"
                    value="Add Meeting"
                />
            </form>
        </div>
    );
};

export default AddNewMeeting;
