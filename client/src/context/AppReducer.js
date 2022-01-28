const AppReducer = (state, action) => {
    switch (action.type) {
        case "SELECT_NEW_DATE":
            return {
                ...state,
                dateSelected: action.payload,
            };
        case "UPDATE_SHOW_ADD_MEETING":
            return {
                ...state,
                showAddMeeting: !state.showAddMeeting,
                showMeetingList: !state.showMeetingList,
            };
        case "UPDATE_SHOW_UPDATE_MEETING":
            return {
                ...state,
                showUpdateMeeting: !state.showUpdateMeeting,
                showMeetingList: !state.showMeetingList,
            };
        case "DISPALY_UPDATE_MEETING_DETAILS":
            return {
                ...state,
                updateMeetingDetails: state.meetings
                    .filter(
                        (dateFilter) =>
                            dateFilter.date.setHours(0, 0, 0, 0) ===
                            state.dateSelected.setHours(0, 0, 0, 0)
                    )[0]
                    .meetings.filter((idFilter) => idFilter.id === action.payload),
            };
        case "UPDATE_MEETING_DETAILS":
            state.meetings.map((meeting) => {
                if (meeting.date.setHours(0, 0, 0, 0) === state.dateSelected.setHours(0, 0, 0, 0)) {
                    meeting.meetings.map((meets) => {
                        if (meets.id === action.payload.id) {
                            meets.name = action.payload.details.name;
                            meets.link = action.payload.details.link;
                            meets.imp = action.payload.details.imp;
                            meets.start = action.payload.details.start;
                            meets.end = action.payload.details.end;
                        }
                    });
                }
            });
            return { ...state };
        case "DELETE_MEETING":
            state.meetings.map((meeting) => {
                if (meeting.date.setHours(0, 0, 0, 0) === state.dateSelected.setHours(0, 0, 0, 0)) {
                    meeting.meetings = meeting.meetings.filter(
                        (meets) => meets.id !== action.payload
                    );
                }
            });
            return { ...state };
        case "ADD_NEW_MEETING_DETAILS":
            let isFound = false;
            let yes = state.meetings.map((meeting) => {
                if (
                    meeting.date.setHours(0, 0, 0, 0) === action.payload.date.setHours(0, 0, 0, 0)
                ) {
                    isFound = true;
                    meeting = {
                        ...meeting,
                        meetings: [...meeting.meetings, action.payload.meeting],
                    };
                }
                return meeting;
            });
            if (!isFound) {
                yes = [
                    ...state.meetings,
                    { date: action.payload.date, meetings: [action.payload.meeting] },
                ];
            }
            return {
                ...state,
                meetings: yes,
            };
        default:
            return state;
    }
};

export default AppReducer;
