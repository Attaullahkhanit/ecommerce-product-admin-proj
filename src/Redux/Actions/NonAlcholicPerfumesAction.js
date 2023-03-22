
const BaseUrl = process.env.REACT_APP_BASE_URL

export const nonAlcholicPerfumesAction = (objdata) => {
    return function (dispatch) {
        fetch('${BaseUrl}/all-none-alcohlic-perfume',)
            .then((response) => response.json())
            .then((res) => {
                dispatch({
                    type: "NON_ALCHOLIC_ACTION",
                    payload: res
                });
            });
    }
}
