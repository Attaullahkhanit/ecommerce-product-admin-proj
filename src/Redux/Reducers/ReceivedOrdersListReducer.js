

const  initialData = {dtload: true}

export const receivedOrdersListReducers = (state= initialData, action) => {
            console.log(action, 'receivedaction')
            const {payload, type} = action
        if(type == "RECEIVED_ORDERS_LIST"){
            return{
                 payload,
                ...state,
                dtload: false  
            }
        }else{
            return{
                ...state
            }
        }
}