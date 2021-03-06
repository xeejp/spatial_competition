import concatenateReducers from 'redux-concatenate-reducers'
import { handleAction, handleActions } from 'redux-actions'

const initialState = {
  pairs: {},
}

import {
  changeChartTurn,
  fallChartButton,
  intoLoading,
  exitLoading,
} from './actions.js'

const reducer = concatenateReducers([
  handleActions({
    [intoLoading]: ({}) => ({ loading: true }),
    [exitLoading]: ({}) => ({ loading: false }),
    'update contents': (_, { payload }) => payload,
    [changeChartTurn]: (_, { payload }) => ({ chart_turn: payload, chart_button: true}),
    [fallChartButton]: () => ({ chart_button: false}),
  }, initialState),
])

export default reducer
