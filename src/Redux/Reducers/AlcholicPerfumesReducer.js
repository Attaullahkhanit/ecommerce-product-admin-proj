

const initialData = { dtload: true};

export const alcholicPerfumesReducer = (state= initialData , action) => {
        if(action.type == "ALCHOLICPERFUMES"){
            return {
                ...action.payload
            }
        }else{
            return {
                ...state
            }
        }
}