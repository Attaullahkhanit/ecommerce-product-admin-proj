

const initialData = { dtload: true }
export const recOrderListRedux = (state = initialData, action) => {
    const { payload, type } = action

    if (type == 'RECEIVED_ORDER_LIST') {
        console.log(payload, 'recRdcr')
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