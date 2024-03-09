import { httpPost } from "../apiHelper";
import apiEndPoints from "../apiEndPoints";

export const login = (data) => {
    return httpPost(apiEndPoints.LOGIN, data)
    .then(response => response.data)
    .catch(e => console.error(e))
}
