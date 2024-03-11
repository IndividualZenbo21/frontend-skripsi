import { httpGet } from "../Api/apiHelper";
import apiEndPoints from "../Api/apiEndPoints";

export const auth = () => {
    return httpGet(apiEndPoints.AUTH)
}
