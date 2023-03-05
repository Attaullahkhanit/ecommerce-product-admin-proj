import { Action } from "@remix-run/router"


const initialData = { dtload: true }
export const regUsersListReducer = (state = initialData, action) => {
    console.log(action, 'actionvalue')
    const { payload, type } = action
    if (type == "REG_USERLIST") {
        console.log('UserREg')
        return {
            payload,
            ...state,
            dtload: false,
        }
    } else {
        return {
            ...state
        }
    }
}