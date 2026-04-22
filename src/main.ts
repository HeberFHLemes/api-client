import './style.css'
import { sendRequest } from './api/httpClient'
import header from './ui/header';
import requestForm from './ui/requestForm';
import responseForm from './ui/responseForm';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  
  <div class="max-w-5xl mx-auto p-4 space-y-4">
    ${requestForm()}
  
    ${responseForm()}
  </div>
`;


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("send")!;
  const input = document.getElementById("url")!;
  const httpMethod = document.getElementById("select-http-method")!; 

  const bodyTextarea = document.getElementById("body-textarea");

  const output = document.getElementById("output")!;
  const responseDiv = document.getElementById("response-div")!;
  
  const collapse = document.getElementById("response-collapse")!;
  const btnCollapse = document.getElementById("btn-collapse")!;

  let isOpen = true;

  btnCollapse.addEventListener("click", () => {
    isOpen = !isOpen;
    collapse.style.gridTemplateRows = isOpen ? "1fr" : "0fr";
    btnCollapse.textContent = isOpen ? "-" : "+";
  });

  button.addEventListener("click", async () => {
    const bodyRaw = (bodyTextarea as HTMLTextAreaElement).value.trim();
    
    let body: object | null = null;
    try {
      body = bodyRaw ? JSON.parse(bodyRaw) : null;
    } catch {
      output.textContent = "Invalid JSON in request body";
      responseDiv.classList.remove("hidden");
      return;
    }

    const result = await sendRequest(
      (input as HTMLInputElement).value,
      (httpMethod as HTMLSelectElement).value,
      body,
      null
    );

    output.textContent = JSON.stringify(result, null, 2);
    responseDiv.classList.remove("hidden");

    isOpen = true;
    collapse.style.gridTemplateRows = "1fr";
    btnCollapse.textContent = "-";
    responseDiv.classList.remove("hidden");
  });

  document.getElementById("btn-clear")!.addEventListener("click", () => {
    (bodyTextarea as HTMLTextAreaElement).value = "";
  });
});