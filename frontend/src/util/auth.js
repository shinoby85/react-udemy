export function getAuthToken() {
  const token = localStorage.getItem('token');
  return token;
}

export function loaderToken() {
  return getAuthToken();
}