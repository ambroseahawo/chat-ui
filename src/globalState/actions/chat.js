import { FETCH_ALL, CREATE_MESSAGE } from '../constants/actionTypes'

export const createMessage =(messageData) => async(dispatch) =>{
    try{
        if (localStorage.getItem('messages')){
            const allMessages = JSON.parse(localStorage.getItem('messages'))
            allMessages.push(messageData)
            localStorage.setItem('messages', JSON.stringify(allMessages))
            dispatch({ type: CREATE_MESSAGE, payload: allMessages })
        } else {
            const messagesArray = []
            messagesArray.push(messageData)
            localStorage.setItem('messages', JSON.stringify(messagesArray))
            dispatch({ type: CREATE_MESSAGE, payload: messagesArray })
        }
    } catch(error){
        console.log(error.message)
    }
}

export const getMessages = () => async(dispatch) =>{
    try{
        const allMessages = JSON.parse(localStorage.getItem('messages'))
        console.log("ALL MESSAGES: ", allMessages)
        dispatch({ type: FETCH_ALL, payload: allMessages})
    }catch(error){
        console.log(error.message)
    }
}
