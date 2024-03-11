import { httpPost } from "../Api/apiHelper";
import apiEndPoints from "../Api/apiEndPoints";

export const register = (data) => {
    return httpPost(apiEndPoints.REGISTER, data)
    .then(response => response)
    .catch(e => console.error(e))
}
