import IAccountData from "../interfaces/IAccountData";

export function serverURL() {
  let serverURL: string;
  if (import.meta.env.DEV) {
    serverURL = "http://0.0.0.0:8000";
    return serverURL;
  }
  return "/api";
}

export function postAccountBody(userData: IAccountData) {
  let postAccountBody: RequestInit;
  postAccountBody = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
  return postAccountBody;
}

export function postCountersBody(store: string) {
  let postCountersBody: RequestInit;
  postCountersBody = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: store,
  };
  return postCountersBody;
}

export function getBody() {
  let getBody: RequestInit;
  getBody = {
    credentials: "include",
  };
  return getBody;
}
