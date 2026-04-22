export default function requestHeaders() {
  return `
    <div id="headers-editor" class="mt-3 flex flex-col rounded-lg border border-black-200 bg-white overflow-hidden shadow-sm">
      <div class="flex items-center justify-between px-3 py-1.5 bg-gray-50 border-b border-gray-200 select-none">
        <div class="flex items-center gap-2">
            <span class="text-xs font-semibold uppercase tracking-widest">Headers</span>
        </div>
        <div class="flex items-center gap-1">
          <button id="btn-add-header"
            title="Add request header"
            class="text-xs px-2 py-1 rounded border bg-white hover:bg-gray-100 transition-colors">
            Add <i class="bi bi-plus-lg"></i>
          </button>
          <button id="btn-remove-header"
            title="Remove last request header"
            class="text-xs px-2 py-1 rounded border bg-white hover:bg-gray-100 transition-colors">
            Remove <i class="bi bi-trash3-fill"></i>
          </button>
        </div>
    </div>

      <table class="w-full text-sm" id="headers-table">
        <thead>
          <tr class="border-b border-t text-xs uppercase tracking-wider bg-gray-100">
            <th class="text-left px-3 py-1.5 font-medium border-r">Key</th>
            <th class="text-left px-3 py-1.5 font-medium">Value</th>
          </tr>
        </thead>
        <tbody id="headers-body">
          <tr></tr>
        </tbody>
      </table>

    </div>
  `;
}

export function row() {
    return `
        <tr class="border-t">
            <td class="px-1 py-1 border-r">
                <input type="text"
                class="header-key w-full outline-none px-2 py-1 placeholder-gray-300 text-sm" />
            </td>
            <td class="px-1 py-1">
                <input type="text"
                class="header-value w-full outline-none px-2 py-1 placeholder-gray-300 text-sm" />
            </td>
        </tr>
    `
}