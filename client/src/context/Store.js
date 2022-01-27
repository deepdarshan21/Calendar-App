const store = {
    dateSelected: new Date(),
    showAddMeeting: false,
    showUpdateMeeting: false,
    showMeetingList: true,
    meetings: [
        {
            date: new Date(),
            meetings: [
                {
                    name: "Name is Deepdarshan",
                    imp: "High",
                    link: "https://meet.com/",
                    start: "14:00",
                    end: "15:00",
                },
                {
                    name: "Name",
                    imp: "High",
                    link: "https://meet.com/",
                    start: "14:00",
                    end: "15:00",
                },
            ],
        },
    ],
};

export default store;
