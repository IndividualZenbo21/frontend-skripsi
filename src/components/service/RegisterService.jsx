import {httpPost} from "../Api/ApiHelper.jsx";
import apiEndPoints from "../Api/ApiEndPoints.jsx";

export const register = (data) => {
    return httpPost(apiEndPoints.REGISTER, data)
        .then(response => response)
        .catch(e => console.error(e))
}
