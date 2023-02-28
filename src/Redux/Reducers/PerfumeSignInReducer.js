

const initialData = { dtload: true}

export const perfumeSignInReducer = (state= initialData, action) => {
        if(action.type == "USERSIGNUP"){
            return {
                ...action.payload
            }
        }else{
            return {...state
            }
        }
}