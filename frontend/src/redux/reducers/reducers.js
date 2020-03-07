import { ADD_NOTE } from '../actions/actions'

const initialState = {
  cardList: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            date: action.date,
            orders:[
              {
                description: action.description,
                type: action.type,
                category : action.category,
                account : action.account,
                price : action.price
              }
            ]
          }
        ]
      }

    default:
      return state
  }
}

export default rootReducer
