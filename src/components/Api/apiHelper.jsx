import deepMerge from 'deepmerge'
import fetch from 'axios'

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

export function rejectError(response) {
    if (response.data.state == 'SUCCESS') {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response.data.message)
    }
} 
