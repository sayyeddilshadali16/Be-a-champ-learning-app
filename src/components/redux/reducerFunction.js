const initialState = [];

const saveJobs = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVEJOB':
            return [
                ...state,
                action.payload
            ];
        case 'REMOVEJOB':
            return state.filter((x) => x.id !== action.payload.id);

        default:
            return state;
    }
}

export default saveJobs;
