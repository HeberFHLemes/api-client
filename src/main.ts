import './style.css'
import { sendRequest } from './api/httpClient'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <input id="url" placeholder="URL" />
  <br>
  <button id="send">Send</button>
  <br>
  <pre id="output"></pre>
`;

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