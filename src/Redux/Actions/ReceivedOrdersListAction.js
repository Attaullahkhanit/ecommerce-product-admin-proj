


export const receivedOrderListAction = (obj) => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users',)
            .then((result) => result.json())
            .then((res) => {
                dispatch({
                    type: 'RECEIVED_ORDER_LIST',
                    payload: res
                })
            })
    }
}