import { httpPost } from "../Api/apiHelper";
import apiEndPoints from "../Api/apiEndPoints";

export const login = (data) => {
    return httpPost(apiEndPoints.LOGIN, data)
    .then(response => response)
    .catch(e => console.error(e))
}
