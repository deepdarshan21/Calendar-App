import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import { useContext } from "react";
import Calendar from "react-calendar";
import { AppContext } from "../../../context/AppContext";

const ShowCalendar = () => {
    const { dateSelected, selectNewDate } = useContext(AppContext);

    return (
        <div className="calendar">
            <Calendar
                className="calendar"
                value={dateSelected}
                onChange={(e) => {
                    selectNewDate(e);
                }}
            />
        </div>
    );
};

export default ShowCalendar;
