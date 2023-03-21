
export const nonAlcholicPerfumesAction = (objdata) => {
    return function (dispatch) {
        fetch('https://backend-apis.pasha.org.uk/all-none-alcohlic-perfume',)
            .then((response) => response.json())
            .then((res) => {
                dispatch({
                    type: "NON_ALCHOLIC_ACTION",
                    payload: res
                });
            });
    }
}
