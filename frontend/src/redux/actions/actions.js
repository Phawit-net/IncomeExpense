export const ADD_NOTE = 'ADD_NOTE'

export function addNote(date, description, type, category, account, price) {
  return {
    id: new Date().getTime().toString(),
    type: ADD_NOTE,
    date: date,
    description: description,
    type: type,
    category: category,
    account: account,
    price: price
    // status: STATUS_ACTIVE  
  }
}
