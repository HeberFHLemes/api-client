export async function sendRequest(
  url: string,
  httpMethod: string = "GET",
  requestBody: object | null = null,
  requestHeaders: HeadersInit | null = null
) {
  const options: RequestInit = {
    method: httpMethod,
    headers: requestHeaders ?? {
      "Content-Type": "application/json",
    },
  };

  if (requestBody && httpMethod !== "GET") {
    options.body = JSON.stringify(requestBody);
  }

  const res = await fetch(url, options);
  const data = await res.json();

  return {
    status: res.status,
    data,
  };
}
