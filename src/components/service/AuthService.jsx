import {httpGet} from "../Api/ApiHelper.jsx";
import apiEndPoints from "../Api/ApiEndPoints.jsx";

export const auth = () => {
    return httpGet(apiEndPoints.AUTH)
}
