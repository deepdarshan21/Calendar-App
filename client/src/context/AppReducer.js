const AppReducer = (state, action) => {
    switch (action.type) {
        case "SELECT_NEW_DATE":
            return {
                ...state,
                dateSelected: action.payload,
            };
        case "UPDATE_SHOW_NEW_MEETING":
            return {
                ...state,
                showAddMeeting: action.payload,
            };
        default:
            return state;
    }
};

export default AppReducer;
