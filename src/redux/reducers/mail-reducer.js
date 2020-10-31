const initialValue = {
    mailBox: []
}
export default function mailReducer(state = initialValue, action) {
    console.log('Triggering Reducer', action)
    switch(action.type){
        case 'SEND_TODO_MESSAGE':
            return {...state, mailBox: [...state.mailBox, action.value]};
        default:
            return state;
    }
}