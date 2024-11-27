import {redirect} from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem('token');
  return token;
}

export function loaderToken() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/auth');
  }
}