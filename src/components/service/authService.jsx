import {httpGet} from "../Api/apiHelper.jsx";
import apiEndPoints from "../Api/apiEndPoints.jsx";

export const auth = () => {
  return httpGet(apiEndPoints.AUTH)
}
