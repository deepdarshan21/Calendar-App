import "./meeting.css";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const UpdateMeeting = () => {
    const { updateShowUpdateMeeting, updateMeetingDetails, updateMeetingsDetails } =
        useContext(AppContext);

    const { id, name, imp, link, start, end } = updateMeetingDetails[0];

    const [statename, setName] = useState(name);
    const [statelink, setLink] = useState(link);
    const [stateimp, setImp] = useState(imp);
    const [statestart, setStart] = useState(start);
    const [stateend, setEnd] = useState(end);

    const updateMeeting = () => {
        updateShowUpdateMeeting();
        const load = {
            id,
            details: {
                name: statename,
                link: statelink,
                imp: stateimp,
                start: statestart,
                end: stateend,
            },
        };
        updateMeetingsDetails(load);
    };

    return (
        <div>
            <form onSubmit={updateMeeting}>
                <div>
                    <label htmlFor="name">Meeting Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={statename}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="link">Meeting Link</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={statelink}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="importance">Meeting Importance</label>
                    <select
                        required="required"
                        className="form-control"
                        id="type"
                        value={stateimp}
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
                            value={statestart}
                            onChange={(e) => setStart(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="end-time">End Time</label>
                        <input
                            type="time"
                            id="end-time"
                            className="form-control"
                            value={stateend}
                            onChange={(e) => setEnd(e.target.value)}
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    className="btn btn-primary col-12 submit"
                    value="Update Meeting"
                />
            </form>
        </div>
    );
};

export default UpdateMeeting;
