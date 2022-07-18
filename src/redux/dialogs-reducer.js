const initialState = {
    dialog : [
        {id: '1' , name : 'Vlad',},
        {id: '2' , name : 'Арсений',},
        {id: '3' , name : 'Илья',},
        {id: '4' , name : 'Настя',},
        {id: '5' , name : 'Картошка',}
      ],
    messages: [
        {id: '1', text: 'Hello  world!',},
        {id: '2', text: 'какашка',},
        {id: '3', text: 'как дела',},
        {id: '4', text: 'что делаешь',},
        {id: '5', text: 'молодец',}
      ],
    newMessageText: '',
}
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA'
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let body = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, { id: '6', text: body}],
                newMessageText: ''
            }
        case UPDATE_MESSAGE_AREA:
            return {
                ...state,
                newMessageText: action.newMessage
            }   
        default:
            return state
    }    
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_AREA, newMessage: text})