import { errText } from "./console";

export default function counterStorage(): string {
  if (localStorage.getItem("Username")) {
    return `All Counters (${localStorage.getItem("Username")})`;
  }
  console.error(errText("setStorage", "if", "No username in storage"));
  return "All Counters";
}
