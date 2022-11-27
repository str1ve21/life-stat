export function logText(component: string, from: string, body: any) {
  return `[LOG]: ${component}, (${from}). Info: ${body}`;
}

export function logResponse(
  component: string,
  type: string,
  from: string,
  code?: number,
  body?: any
) {
  return `[LOG]: ${component}, ${type}, (${from}). ${
    code ? "Response code: " + code + "." : ""
  } ${body ? "Info: " + body : ""}`;
}

export function warnText(component: string, from: string, body: any) {
  return `[WARN]: ${component}, (${from}). Info: ${body}`;
}

export function warnResponse(
  component: string,
  type: string,
  from: string,
  code?: number,
  body?: any
) {
  return `[WARN]: ${component}, ${type}, (${from}). ${
    code ? "Response code: " + code + "." : ""
  } ${body ? "Info: " + body : ""}`;
}

export function errText(component: string, from: string, body: any) {
  return `[ERROR]: ${component}, (${from}). Info: ${body}`;
}

export function errResponse(
  component: string,
  type: string,
  from: string,
  code?: number,
  body?: any
) {
  return `[ERROR]: ${component}, ${type}, (${from}). ${
    code ? "Response code: " + code + "." : ""
  } ${body ? "Info: " + body : ""}`;
}
