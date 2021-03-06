import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import store from "./Store";
// import axios from "axios";

// Create context
const AppContext = createContext(store);

// Provider component
const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, store);

    // Actions
    const selectNewDate = (newDate) => {
        dispatch({
            type: "SELECT_NEW_DATE",
            payload: newDate,
        });
    };
    const updateShowAddMeeting = () => {
        dispatch({
            type: "UPDATE_SHOW_ADD_MEETING",
        });
    };
    const updateShowUpdateMeeting = () => {
        dispatch({
            type: "UPDATE_SHOW_UPDATE_MEETING",
        });
    };
    const addNewMeetingDetails = (newMeetingDetails) => {
        dispatch({
            type: "ADD_NEW_MEETING_DETAILS",
            payload: newMeetingDetails,
        });
    };
    const changeupdateMeetingDetails = (id) => {
        dispatch({
            type: "DISPALY_UPDATE_MEETING_DETAILS",
            payload: id,
        });
    };
    const updateMeetingsDetails = (load) => {
        dispatch({
            type: "UPDATE_MEETING_DETAILS",
            payload: load,
        });
    };
    const deleteMeeting = (id) => {
        dispatch({
            type: "DELETE_MEETING",
            payload: id,
        });
    };

    return (
        <AppContext.Provider
            value={{
                dateSelected: state.dateSelected,
                showAddMeeting: state.showAddMeeting,
                showUpdateMeeting: state.showUpdateMeeting,
                showMeetingList: state.showMeetingList,
                updateMeetingDetails: state.updateMeetingDetails,
                meetings: state.meetings,
                selectNewDate,
                updateShowAddMeeting,
                updateShowUpdateMeeting,
                addNewMeetingDetails,
                changeupdateMeetingDetails,
                updateMeetingsDetails,
                deleteMeeting,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
