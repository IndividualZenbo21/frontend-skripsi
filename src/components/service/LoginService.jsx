import { httpPost } from "../Fragments/apiHelper";
import apiEndPoints from "../Fragments/apiEndPoints";

export const login = (data) => {
    return httpPost(apiEndPoints.LOGIN, data)
    .then(response => response.data)
    .catch(e => console.error(e))
}
