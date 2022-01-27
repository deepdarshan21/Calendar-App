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
    const changeShowNewMeeting = (load) => {
        dispatch({
            type: "UPDATE_SHOW_NEW_MEETING",
            payload: load,
        });
    };

    return (
        <AppContext.Provider
            value={{
                dateSelected: state.dateSelected,
                showAddMeeting: state.showAddMeeting,
                selectNewDate,
                changeShowNewMeeting,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
