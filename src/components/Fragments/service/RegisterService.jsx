import { httpPost } from "../apiHelper";
import apiEndPoints from "../apiEndPoints";

export const register = (data) => {
    return httpPost(apiEndPoints.REGISTER, data)
    .then(response => response.data)
    .catch(e => console.error(e))
}
