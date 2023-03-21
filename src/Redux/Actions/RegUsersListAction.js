import { redirect } from "react-router-dom";



export const regUsersListAction = (dataitem) => {
    console.log("checkdata")
    return function (dispatch) {
        fetch('https://backend-apis.pasha.org.uk/allusers',)
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

// POST API


 
var raw = JSON.stringify({
    "name": "appl",
    "price": 332222,
    "description": "no desc",
    "imagePath": "/src/path/img.png"
  });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

 export const regUsersListActionPost = (dataitem) => {
    console.log(dataitem, "checkdataitem")
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts/1',
            {   
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(dataitem),
                redirect: 'follow',
            })
            .then((response) => response.text())
            .then((res) => {
                console.log(res, "MyRegActionPostData")
                dispatch({
                    type: "REG_USERLIST_POSTDATA",
                    payload: res
                })
            })
    }
}