export const updateScore = points => ({
    type: 'UPDATE_USER_SCORE',
    points
});

export const setSore = points => ({
    type: 'SET_USER_SCORE',
    points
});

export const getScore = () => ({
    type: 'GET_USER_SCORE',
});

export const getMaxPoints = () => ({
    type: 'GET_MAX_POINTS'
});

export const setMaxPoints = points => ({
    type: 'SET_MAX_POINTS',
    points
});

export const GET_USER_SCORE = 'GET_USER_SCORE';
export const SET_USER_SCORE = 'SET_USER_SCORE';
export const UPDATE_USER_SCORE = 'UPDATE_USER_SCORE';

export const GET_MAX_POINTS = 'GET_MAX_POINTS';
export const SET_MAX_POINTS = 'SET_MAX_POINTS';