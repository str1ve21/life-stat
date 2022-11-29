import { errText } from "./console";
import { getBody, serverURL } from "./fetchData";

export default function counterStorage(): string {
  if (localStorage.getItem("Username")) {
    return `All Counters (${localStorage.getItem("Username")})`;
  }
  return "All Counters (no username)";
}
