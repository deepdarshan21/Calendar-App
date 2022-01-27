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
        case "ADD_NEW_MEETING_DETAILS":
            console.log(action.payload);
            let isFound = false;
            let yes = state.meetings.map((meeting) => {
                // console.log("no");
                if (
                    meeting.date.setHours(0, 0, 0, 0) === action.payload.date.setHours(0, 0, 0, 0)
                ) {
                    console.log("Found");
                    isFound = true;
                    // console.log(meeting);
                    meeting = {
                        ...meeting,
                        meetings: [...meeting.meetings, action.payload.meeting],
                    };
                    // console.log(meeting);
                    //     meeting.meetings = [...meeting.meetings, action.payload.meeting];
                }
                return meeting;
            });
            console.log(isFound);
            if (!isFound) {
                console.log(isFound);
                console.log("Check");
                yes = [
                    ...state.meetings,
                    { date: action.payload.date, meetings: [action.payload.meeting] },
                ];
            }
            console.log("Please");
            console.log(yes);
            console.log(state);
            return {
                ...state,
                meetings: yes,
            };
        default:
            return state;
    }
};

export default AppReducer;
