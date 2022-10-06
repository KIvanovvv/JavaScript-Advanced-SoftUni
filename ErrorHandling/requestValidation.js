function requestValidation(obj) {
  const validMethods = [`GET`, `POST`, `DELETE`, `CONNECT`];
  const validVersion = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`];
  const uriPattern = /^[\w.]+$/g;
  const messageInvalidChar = [`<`, `>`, `\\`, `&`, `'`, `"`];

  if (!obj.hasOwnProperty(`method`)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }
  if (!validMethods.includes(obj.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }
  if (!obj.hasOwnProperty(`uri`)) {
    throw new Error(`Invalid request header: Invalid URI`);
  }
  if (obj.uri !== `*` && !obj.uri.match(uriPattern)) {
    throw new Error(`Invalid request header: Invalid URI`);
  }

  if (!validVersion.includes(obj.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }
  if (!obj.hasOwnProperty(`message`)) {
    throw new Error(`Invalid request header: Invalid Message`);
  }
  for (let chr of obj.message) {
    if (messageInvalidChar.includes(chr)) {
      throw new Error(`Invalid request header: Invalid Message`);
    }
  }
  return obj;
}
requestValidation({
  method: "GET",

  uri: "asd.asd.sad",

  version: "HTTP/1.1",

  message: "adawdwa",
});
