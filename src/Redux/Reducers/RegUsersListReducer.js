

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


// POST API

const initialPostData = { dtload: true }
export const regUsersListReducerPostData = (state = initialPostData, action) => {
    console.log(action, 'actionvaluepost')
    const { payload, type } = action
    if (type == "REG_USERLIST_POSTDATA") {
        console.log( type, 'REG_USERLIST_POSTDATA')
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