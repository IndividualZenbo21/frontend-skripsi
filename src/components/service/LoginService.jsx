import {httpPost} from "../Api/ApiHelper.jsx";
import apiEndPoints from "../Api/ApiEndPoints.jsx";

export const login = (data) => {
    return httpPost(apiEndPoints.LOGIN, data)
        .then(response => response)
        .catch(e => console.error(e))
}
