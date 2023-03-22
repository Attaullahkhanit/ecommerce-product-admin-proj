
const BaseUrl = process.env.REACT_APP_BASE_URL

export const alcholicPerfumesAction = (obj) => {
    return function (dispatch) {
        fetch('${BaseUrl}/all-alcohlic-perfume',)
            .then((result) => result.json())
            .then((res) => {
                return dispatch({
                    type: "ALCHOLIC_PERFUMES_ACT",
                    payload: res
                })
            })
    }
}
