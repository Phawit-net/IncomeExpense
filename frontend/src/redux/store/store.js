import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

let initialState = {
    cardList:[]
}

let cardList =localStorage.getItem('cardList')
if (cardList){
    initialState = JSON.parse(cardList)
}

export default createStore(
  rootReducer , initialState ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);