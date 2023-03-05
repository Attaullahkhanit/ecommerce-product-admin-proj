

// const initialData = { dtload: true};

// export const alcholicPerfumesReducer = (state= initialData , action) => {

//     if(action.type == "ALCHOLIC_PERFUMES_ACT"){
//             return {
//                 payload,
//                 ...state,
//                 action: false,
//             }
//         }else{
//             return {
//                 ...state
//             }
//         }
// }

const initialData = { dtload: true }
export const alcholicPerfumesReducer = (state = initialData, action) => {
    const { payload, type } = action;
    if (type == 'ALCHOLIC_PERFUMES_ACT') {
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