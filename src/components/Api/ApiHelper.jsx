import axios from 'axios'

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
}

export function httpPost(url, data) {
  return axios.post(url, JSON.stringify(data), {
    headers: DEFAULT_HEADERS,
    withCredentials: true
  }).then(res => res.data)
}

export function httpGet(url) {
  return axios.get(url, {
    withCredentials: true
  }).then(res => res.data)
}