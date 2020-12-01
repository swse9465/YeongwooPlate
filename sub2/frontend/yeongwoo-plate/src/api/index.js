import axios from "axios";

const apiUrl = "/api";

export function fetchStores(params) {
  return axios.get(`${apiUrl}/stores`, {
    params,
  });
}

export function fetchDetailStore(params) {
  return axios.get(`/store/${params.id}`, {
    params,
  });
}

export function fetchDetailReview(params) {
  return axios.get(`/review/${params.id}`, {
    params,
  });
}
