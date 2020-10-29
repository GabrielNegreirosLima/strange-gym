import api from ".";

export function signIn(username: string, password: string) {
  return api.post("auth/signin", { username, password });
}

export function signUp(params: any) {
  return api.post("auth/signup", { ...params });
}
