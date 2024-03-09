import { httpPost } from "../Fragments/apiHelper";
import apiEndPoints from "../Fragments/apiEndPoints";

export const register = (data) => {
    return httpPost(apiEndPoints.REGISTER, data)
    .then(response => response.data)
    .catch(e => console.error(e))
}
