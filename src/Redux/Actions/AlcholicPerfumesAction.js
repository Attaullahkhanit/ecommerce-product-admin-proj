

// const url = process.env.BASE_URL

export const alcholicPerfumesAction = (obj) => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users',)
            .then((result) => result.json())
            .then((res) => {
                return dispatch({
                    type: "ALCHOLIC_PERFUMES_ACT",
                    payload: res
                })
            })
    }
}