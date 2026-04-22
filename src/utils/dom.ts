export function getHeaders(): Record<string, string> | null {
  const headers: Record<string, string> = {};
  document.querySelectorAll('#headers-body tr').forEach(tr => {
    const keyInput = tr.querySelector('.header-key') as HTMLInputElement | null;
    const valueInput = tr.querySelector('.header-value') as HTMLInputElement | null;

    if (!keyInput || !valueInput) return;

    const key = keyInput.value.trim();
    const value = valueInput.value.trim();

    if (key) headers[key] = value;
  });
  return Object.keys(headers).length ? headers : null;
}