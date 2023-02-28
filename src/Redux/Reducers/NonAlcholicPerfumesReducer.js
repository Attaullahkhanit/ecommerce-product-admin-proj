


const initialData = { dtload: true }

export const nonAlcholicPerfumeReducer = (state = initialData, action) => {
        if(action.type == "NONALCHOLICPERFUME") {
            return {
                ...action.payload
            } 
        }else {
            return {
                ...state
            }
        }
}