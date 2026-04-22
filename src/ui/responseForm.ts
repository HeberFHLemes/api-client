export default function responseForm() {
  return `
    <div id="response-div" class="mt-3 flex flex-col rounded-lg bg-dark dark:bg-gray-800 overflow-hidden shadow-sm">
      
      <div class="flex items-center justify-between px-3 py-2 border border-gray-100 select-none" 
           style="background: inherit;">
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold uppercase tracking-widest text-white">Response</span>
          <span id="response-status" class="text-xs px-2 py-0.5 rounded-full font-medium hidden"></span>
        </div>
        <button id="btn-collapse" title="Toggle response"
          class="text-white text-xs px-2 py-0.5 rounded hover:bg-white/10 transition-colors select-none"
          style="font-size:16px; line-height:1;">
          -
        </button>
      </div>

      <div id="response-collapse"
           style="display:grid; grid-template-rows: 1fr; transition: grid-template-rows 250ms ease;">
        <div style="overflow:hidden;">
          <textarea
            id="output"
            readonly
            rows="16"
            class="flex-1 w-full resize-none outline-none pt-3 pb-3 pl-3 pr-3 text-white border-x border-b border-gray-100 h-auto"
            style="background:inherit;"
          ></textarea>
        </div>
      </div>

    </div>
  `;
}