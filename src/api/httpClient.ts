export async function sendRequest(
  url: string,
  options: RequestInit
) {
  try {
    const res = await fetch(url, options);

    let data;
    try {
      data = await res.json();
    } catch {
      data = await res.text();
    }

    return {
      status: res.status,
      data,
    };

  } catch (err) {
    return {
      status: 0,
      data: { error: "Network error", details: String(err) },
    };
  }
}
