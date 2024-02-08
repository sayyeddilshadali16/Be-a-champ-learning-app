export const saveJob = (job) => {
    return {
        type: 'SAVEJOB',
        payload: job
    }
};

export const removeJob = (job) => {
    return {
        type: 'REMOVEJOB',
        payload: job
    }
};
