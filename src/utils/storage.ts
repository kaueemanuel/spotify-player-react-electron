export const getSessionStorage = (key: string) => {
  const data = window.sessionStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
};

export const setSessionStorage = (key: string, value: any) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const data = window.localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
};

export const setLocalStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const clearStorages = () => {
  window.sessionStorage.clear();
  window.localStorage.clear();
};
