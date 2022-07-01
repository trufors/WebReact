let reRender = ()=>{}


let state = {
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
          ]
    },
    settings : {},
    music : {},
};

export const addPost = (postMessage) => {
    let newPost = {
        like: '0',
        text: postMessage,
        
    }
    state.profile.posts.push(newPost)
    reRender(state)
    state.profile.newPostText = ''

}

export const updateTextArea = (newText) => {
    state.profile.newPostText = newText
    console.log(newText)  
    reRender(state)
}

export const subscribe = (observer) =>{
    reRender = observer


}


 export default state

