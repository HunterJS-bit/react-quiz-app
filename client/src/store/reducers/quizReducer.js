import * as actions from '../actions/quizActions'

export const initialState = {
    quizList: [],
    userScore: 0,
    maxPoints: 0,
    loading: false,
    hasErrors: false,
}
  
export default function quizReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_USER_SCORE:
        return { ...state, loading: true }
      case actions.SET_USER_SCORE:
        return { ...state, userScore: 0 }
      case actions.UPDATE_USER_SCORE:
        return { 
          ...state, userScore: state.userScore + action.points
        }
      case actions.GET_MAX_POINTS:
        return { ...state };
      case actions.SET_MAX_POINTS:
        return Object.assign({}, state, {
          maxPoints: action.points
        })
      default:
        return state
    }
}