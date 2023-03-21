

// const url = process.env.BASE_URL

export const alcholicPerfumesAction = (obj) => {
    return function (dispatch) {
        fetch('https://backend-apis.pasha.org.uk/all-alcohlic-perfume',)
            .then((result) => result.json())
            .then((res) => { 
                return dispatch({
                    type: "ALCHOLIC_PERFUMES_ACT",
                    payload: res
                })
            })
    }
}