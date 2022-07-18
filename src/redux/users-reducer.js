
let initialState = {
    users: [
        {id: '1', followed: true, name: 'BILLY HERRINGTON', country : 'CumLAndrew', status: 'I AM BOSS OF THE GYM'},
        {id: '2', followed: false, name: 'Pidors Landser', country : 'USA', status: 'I eat shit'},
        {id: '3', followed: false, name: 'BILY HERRTON', country : 'Russia', status: 'Bear Vodka and BALALAIka'},
        {id: '4', followed: true, name: 'TON BITCOIN', country : 'Dubai', status: 'I AM BOSS '}
    ]
}

export const usersReducer = (state = initialState, action) => {
    return state
}