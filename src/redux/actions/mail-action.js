export function mailAction() {
    console.log("Triggering Action!")
    return { type: ''}
}

export function sendValue(todoMessage){
    return { type: 'SEND_TODO_MESSAGE', value: todoMessage }
}