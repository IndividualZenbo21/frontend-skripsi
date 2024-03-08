import {httpPost} from "../Api/apiHelper.jsx";
import apiEndPoints from "../Api/apiEndPoints.jsx";

export const register = (data) => {
  return httpPost(apiEndPoints.REGISTER, data)
      .then(response => response)
      .catch(e => console.error(e))
}
