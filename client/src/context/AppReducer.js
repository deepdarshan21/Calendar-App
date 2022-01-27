const AppReducer = (state, action) => {
    switch (action.type) {
        case "SELECT_NEW_DATE":
            return {
                ...state,
                dateSelected: action.payload,
            };
        case "UPDATE_SHOW_NEW_MEETING":
            console.log("Load is commit in reducer: " + action.payload);
            return {
                ...state,
                showAddMeeting: action.payload,
            };
        default:
            return state;
    }
};

export default AppReducer;
