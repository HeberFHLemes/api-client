import requestHeaders from "./requestHeaders";
import bodyEditor from "./bodyEditor";

export default function requestForm() {
  return `
    <div id="request-form" class="flex flex-col gap-2">
 
      <div class="flex gap-2 h-10">
        <select id="select-http-method" name="method" class="border rounded px-3 py-2 bg-gray-100 w-auto font-medium">
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>PATCH</option>
          <option>DELETE</option>
          <option>HEAD</option>
          <option>OPTIONS</option>
        </select>
 
        <input
          type="text"
          placeholder="https://api.example.com/users"
          class="flex-1 bg-white border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          id="url"
        />
 
        <button class="bg-blue-600 btn-outline text-white px-4 py-2 rounded hover:bg-blue-700 font-medium" id="send">
          Send
        </button>
      </div>

      ${requestHeaders()}
 
      ${bodyEditor()}
 
    </div>
  `;
}