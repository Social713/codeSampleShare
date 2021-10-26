const initState = {
    tests:[
        {
            fname: "Hana",
            lname: "Rogers",
            title: "Buddy",
            languages: [],
            description: "",
            hourlyRate: "",
            trialRate: "",
            createdAt: new Date(),
          },
          {
            fname: "Park",
            lname: "Cleveland",
            title: "Buddy",
            languages: [],
            description: "",
            hourlyRate: "",
            trialRate: "",
            createdAt: new Date(),
          }
    ]
}

const testReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TEST_ACTION':
            console.log('tested action', action.project);
            return state;
        case 'TEST_ERROR':
            console.log('test error', action.err);
            return state;
        default: 
        return state
    }
}
export default testReducer