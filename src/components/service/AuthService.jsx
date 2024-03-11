import { httpGet } from "../Api/apiHelper";
import apiEndPoints from "../Api/apiEndPoints";

export const auth = (data) => {
    return httpGet(apiEndPoints.AUTH, data)
    .then(response => response)
    .catch(e => console.error(e))
}
