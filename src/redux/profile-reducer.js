const initialState = {
    posts: [
        {like: '28', text: 'then', },
        {like: '18', text: 'прием я тут', },
        {like: '34', text: 'машина времени', },
        {like: '45', text: 'юхухуху', },
        {like: '14', text: 'алмывотаиотв', },
    ],
    newPostText: 'ZAWARUDO',
}
const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA'
export const profileReducer = (state = initialState, action) => { 
    switch (action.type) {
       
        case ADD_POST:
            let body = state.newPostText
            return {
                ...state,
                posts: [...state.posts,{like: '0', text: body}],
                newPostText: ''  
            }
            
        case UPDATE_TEXT_AREA:
            return {
                ...state,
                newPostText: action.newText
            }
         
        default:
            return state
    }    
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateTextActionCreator = (text) => ({type: UPDATE_TEXT_AREA, newText: text})