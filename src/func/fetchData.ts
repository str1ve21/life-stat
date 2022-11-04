import IAccountData from "../interfaces/IAccountData";

export function serverURL() {
  let serverURL: string;
  serverURL = "http://0.0.0.0:8000";
  return serverURL;
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

export function getCountersBody() {
  let getCountersBody: RequestInit;
  getCountersBody = {
    credentials: "include",
  };
  return getCountersBody;
}
