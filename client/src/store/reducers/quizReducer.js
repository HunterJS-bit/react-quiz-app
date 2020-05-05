import * as actions from '../actions/quizActions'

export const initialState = {
    quizList: [],
    result: 0,
    loading: false,
    hasErrors: false,
}
  
export default function quizReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_SCORE:
        return { ...state, loading: true }
      case actions.UPDATE_SCORE:
        return { 
            result: state.result + action.points
        }
      default:
        return state
    }
}