import { CREATE_MESSAGE, FETCH_ALL } from "../constants/actionTypes";

export const Chat = (messages=[], action) => {
    switch (action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE_MESSAGE:
            return [...messages, action.payload]
        
        default:
            return messages
    }
}
