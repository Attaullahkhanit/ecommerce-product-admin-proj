

export const regUsersListAction = (dataitem) => {
    console.log("checkdata")
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users',)
            .then((response) => response.json())
            .then((res) => {
                console.log("MyReg")
                dispatch({
                    type: "REG_USERLIST",
                    payload: res
                })
            })
    }
}
