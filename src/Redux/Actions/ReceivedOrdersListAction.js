

export const receivedOrdersListAction= (dataitem) => {
        return function (dispatch){
            fetch('https://jsonplaceholder.typicode.com/users',)
            .then((result)=> result.json())
            .then((res)=>{
            dispatch({
                    type: "RECEIVED_ORDERS_LIST",
                    payload: res
                })
            }
            )}   
}