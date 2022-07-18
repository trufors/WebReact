const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA'


let store = {
    _state: {
        profile : {
            posts: [
                {like: '28', text: 'then', },
                {like: '18', text: 'прием я тут', },
                {like: '34', text: 'машина времени', },
                {like: '45', text: 'юхухуху', },
                {like: '14', text: 'алмывотаиотв', },
            ],
            newPostText: 'ZAWARUDO',
        },
        news : {},
        dialogs : {
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
            newMessageText: 'Hello',
        },
        settings : {},
        music : {},
    },
    getState(){
        return this._state
    },
    callSubscribe(observer){
        this.renerRender = observer
    },
    renerRender(){},
    dispatch(action) {
            if (action.type === 'ADD-POST') {
                let newPost = {
                    like: '0',
                    text: this._state.profile.newPostText,
                    
                }
                this._state.profile.posts.push(newPost)
                this.renerRender(this._state)
                this._state.profile.newPostText = ''
            }
            else if (action.type === 'UPDATE-TEXT-AREA') {
                this._state.profile.newPostText = action.newText  
                this.renerRender(this._state)
            }
            else if (action.type === 'UPDATE-MESSAGE-AREA'){
                this._state.dialogs.newMessageText = action.newMessage
                this.renerRender(this._state)
            }
            else if (action.type === 'ADD-MESSAGE'){
                let newMessage = {
                    id: '0',
                    text: this._state.dialogs.newMessageText,
                
                 }
                this._state.dialogs.messages.push(newMessage)
                this.renerRender(this._state)
                this._state.dialogs.newMessageText = ''
            }
        },
    }

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateTextActionCreator = (text) => ({type: UPDATE_TEXT_AREA, newText: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_AREA, newMessage: text})


export default store


