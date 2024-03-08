import {httpPost} from "../Api/apiHelper.jsx";
import apiEndPoints from "../Api/apiEndPoints.jsx";

export const login = (data) => {
  return httpPost(apiEndPoints.LOGIN, data)
      .then(response => response)
      .catch(e => console.error(e))
}
