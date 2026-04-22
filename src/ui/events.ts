import { getHeaders } from "../utils/dom";
import { row } from "./requestHeaders";
import { sendRequest } from "../api/httpClient";

export function bindEvents() {
  document.getElementById("send")!.addEventListener("click", handleSend);
  
  let isOpen = true;
  const btnCollapse = document.getElementById("btn-collapse")!;
  btnCollapse.addEventListener("click", () => {
    isOpen = !isOpen;
    handleTextareaClosing(isOpen);
  });

  document.getElementById("btn-clear")!.addEventListener("click", () => {
    (document.getElementById("body-textarea") as HTMLTextAreaElement).value = "";
  });

  document.getElementById("btn-add-header")!.addEventListener("click", () => {
    document.getElementById("headers-body")!.innerHTML += row();
  })

  document.getElementById("btn-remove-header")!.addEventListener("click", () => {
    const table = (document.getElementById("headers-table")! as HTMLTableElement);
    if (table.rows.length > 1) {
      table.deleteRow(table.rows.length - 1);
    }
  });
}

async function handleSend() {
  const input = document.getElementById("url") as HTMLInputElement;
  const httpMethod = document.getElementById("select-http-method") as HTMLSelectElement;
  const textarea = document.getElementById("body-textarea") as HTMLTextAreaElement;
  const output = document.getElementById("output")!;

  let body = null;

  try {
    body = textarea.value.trim() ? JSON.parse(textarea.value) : null;
  } catch {
    output.textContent = "Invalid JSON";
    return;
  }

  const headers = getHeaders() ?? {};

  const isJson = body && typeof body === "object";

  if (isJson && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  const result = await sendRequest((input as HTMLInputElement).value, {
    method: (httpMethod as HTMLSelectElement).value,
    headers: headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  output.textContent = JSON.stringify(result, null, 2);

  const statusEl = document.getElementById("response-status")!;

  statusEl.style.background = "white";
  statusEl.classList.remove("hidden");

  const status = result.status;

  if (status >= 200 && status < 300) {
    statusEl.style.color = "green";
    statusEl.innerHTML = `<i class="bi bi-check2-circle"></i> ${status}`;
  }
  else if (status >= 300 && status < 400) {
    statusEl.style.color = "blue";
    statusEl.innerHTML = `<i class="bi bi-arrow-repeat"></i> ${status}`;
  }
  else if (status >= 400 && status < 500) {
    statusEl.style.color = "orange";
    statusEl.innerHTML = `<i class="bi bi-exclamation-triangle"></i> ${status}`;
  }
  else if (status >= 500 || status === 0) {
    statusEl.style.color = "red";
    statusEl.innerHTML = `<i class="bi bi-x-circle-fill"></i> ${status}`;
  }

  handleTextareaClosing(true);
}

function handleTextareaClosing(isOpen: boolean) {
    document.getElementById("response-collapse")!.style.gridTemplateRows = isOpen ? "1fr" : "0fr";
    document.getElementById("btn-collapse")!.innerHTML = isOpen 
        ? `<i class="bi bi-chevron-contract"></i>` 
        : `<i class="bi bi-chevron-expand"></i>`;
}