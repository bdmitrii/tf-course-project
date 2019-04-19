export function saveTokensToStorage(accessToken: string, refreshToken: string) {
  window.localStorage.setItem('accessToken', accessToken);
  window.localStorage.setItem('refreshToken', refreshToken);
}

export function removeTokensFromStorage() {
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('refreshToken');
}

export function getRefreshToken() {
  return window.localStorage.getItem('refreshToken') || '';
}
