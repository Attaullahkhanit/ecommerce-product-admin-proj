


const initialData = { dtload: true }

export const nonAlcholicPerfumeReducer = (state = initialData, action) => {
    const { payload, type } = action;
    if (type == "NON_ALCHOLIC_ACTION") {
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