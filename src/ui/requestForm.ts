export default function requestForm() {
    return `
    <div id="request-form" class="flex gap-2 h-10">
        <select name="method" class="border rounded px-3 py-2 bg-gray-100 w-auto font-medium">
            <option class="bg-green-100 text-green-700">GET</option>
            <option class="bg-blue-100 text-blue-700">POST</option>
            <option class="bg-yellow-100 text-yellow-700">PUT</option>
            <option class="bg-purple-100 text-purple-700">PATCH</option>
            <option class="bg-red-100 text-red-700">DELETE</option>
            <option>HEAD</option>
            <option>OPTIONS</option>
        </select>

        <input 
            type="text" 
            placeholder="https://api.example.com/users"
            class="flex-1 bg-white border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            id="url"
        />

        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium" id="send">
            Send
        </button>
    </div>
`;
}