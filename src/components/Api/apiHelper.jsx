import deepMerge from 'deepmerge'
import axios from "axios";

const DEFAULT_REQUEST_CONFIG = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export function httpPost(url, data, conf = {}, extra = {}) {
    const config = deepMerge(conf, DEFAULT_REQUEST_CONFIG);
  return fetch(
    url,
    {
        ...config,
        method: 'POST',
        data: JSON.stringify(data),
        withCredentials: true

    },
    {...extra}
  ).then(res => {
    return res.data
  })
}

export function httpGet(url) {
    return axios.get(url, {
        withCredentials: true
    }).then(res => {
        return res.data
    })
} 
