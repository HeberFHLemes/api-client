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
  const output = document.getElementById("output")!;
  
  button.addEventListener("click", async () => {
    const result = await sendRequest(
      (input as HTMLInputElement).value,
      "GET",
      null,
      null
    );
    
    output.textContent = JSON.stringify(result, null, 2);
  });
});