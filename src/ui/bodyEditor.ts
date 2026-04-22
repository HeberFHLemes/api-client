export default function bodyEditor(): string {
  return `
    <div id="body-editor" class="mt-3 flex flex-col rounded-lg border border-black-200 bg-white overflow-hidden shadow-sm">
      <div class="flex items-center justify-between px-3 py-1.5 bg-gray-50 border-b border-black-200 select-none">
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold uppercase tracking-widest">Body</span>
        </div>
        <div class="flex items-center gap-1">
          <!-- Clear button -->
          <button id="btn-clear"
            title="Clear body"
            class="text-xs px-2 py-1 rounded border border-gray-200 bg-white hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors">
            x
          </button>
        </div>
      </div>
 
      <div class="flex" id="textarea-flex-div">
        <!-- Textarea -->
        <textarea
          id="body-textarea"
          spellcheck="false"
          autocomplete="off"
          placeholder='{ "key": "value" }'
          class="flex-1 resize-none outline-none pt-3 pb-3 pl-3 pr-3 text-gray-800"
        ></textarea>
      </div>
    </div>
  `;
}