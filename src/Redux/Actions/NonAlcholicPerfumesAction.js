

export const nonAlcholicPerfumesAction = (objdata) => {
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/users',)
        .then((response)=> response.json())
        .then((res)=> {
            dispatch({
                type: "NON_ALCHOLIC_ACTION",
                payload: res
            });
        });
    }
    
}