(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
    <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center max-w-screen-xl w-full lg:order-1">
                <a href="#" class="flex items-center">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">/api-client</span>
                </a>
            </div>
        </nav>
    </header>
  `}function t(){return`
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
  `}function n(){return`
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
    `}function r(){return`
    <div id="body-editor" class="mt-3 flex flex-col rounded-lg border border-black-200 bg-white overflow-hidden shadow-sm">
      <div class="flex items-center justify-between px-3 py-1.5 bg-gray-50 border-b border-black-200 select-none">
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold uppercase tracking-widest">Body</span>
        </div>
        <div class="flex items-center gap-1">
          <button id="btn-clear"
            title="Clear body"
            class="text-xs px-2 py-1 rounded border bg-white hover:bg-gray-100 transition-colors">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
 
      <div class="flex" id="textarea-flex-div">
        <textarea
          id="body-textarea"
          spellcheck="false"
          autocomplete="off"
          placeholder='{ "key": "value" }'
          class="flex-1 resize-none outline-none pt-3 pb-3 pl-3 pr-3 text-gray-800"
        ></textarea>
      </div>
    </div>
  `}function i(){return`
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

      ${t()}
 
      ${r()}
 
    </div>
  `}function a(){return`
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
          <i class="bi bi-chevron-contract"></i>
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
  `}function o(){let e={};return document.querySelectorAll(`#headers-body tr`).forEach(t=>{let n=t.querySelector(`.header-key`),r=t.querySelector(`.header-value`);if(!n||!r)return;let i=n.value.trim(),a=r.value.trim();i&&(e[i]=a)}),Object.keys(e).length?e:null}async function s(e,t){try{let n=await fetch(e,t),r;try{r=await n.json()}catch{r=await n.text()}return{status:n.status,data:r}}catch(e){return{status:0,data:{error:`Network error`,details:String(e)}}}}function c(){document.getElementById(`send`).addEventListener(`click`,l);let e=!0;document.getElementById(`btn-collapse`).addEventListener(`click`,()=>{e=!e,u(e)}),document.getElementById(`btn-clear`).addEventListener(`click`,()=>{document.getElementById(`body-textarea`).value=``}),document.getElementById(`btn-add-header`).addEventListener(`click`,()=>{document.getElementById(`headers-body`).innerHTML+=n()}),document.getElementById(`btn-remove-header`).addEventListener(`click`,()=>{let e=document.getElementById(`headers-table`);e.rows.length>1&&e.deleteRow(e.rows.length-1)})}async function l(){let e=document.getElementById(`url`),t=document.getElementById(`select-http-method`),n=document.getElementById(`body-textarea`),r=document.getElementById(`output`),i=null;try{i=n.value.trim()?JSON.parse(n.value):null}catch{r.textContent=`Invalid JSON`;return}let a=o()??{};i&&typeof i==`object`&&!a[`Content-Type`]&&(a[`Content-Type`]=`application/json`);let c=await s(e.value,{method:t.value,headers:a,body:i?JSON.stringify(i):void 0});r.textContent=JSON.stringify(c,null,2);let l=document.getElementById(`response-status`);l.style.background=`white`,l.classList.remove(`hidden`);let d=c.status;d>=200&&d<300?(l.style.color=`green`,l.innerHTML=`<i class="bi bi-check2-circle"></i> ${d}`):d>=300&&d<400?(l.style.color=`blue`,l.innerHTML=`<i class="bi bi-arrow-repeat"></i> ${d}`):d>=400&&d<500?(l.style.color=`orange`,l.innerHTML=`<i class="bi bi-exclamation-triangle"></i> ${d}`):(d>=500||d===0)&&(l.style.color=`red`,l.innerHTML=`<i class="bi bi-x-circle-fill"></i> ${d}`),u(!0)}function u(e){document.getElementById(`response-collapse`).style.gridTemplateRows=e?`1fr`:`0fr`,document.getElementById(`btn-collapse`).innerHTML=e?`<i class="bi bi-chevron-contract"></i>`:`<i class="bi bi-chevron-expand"></i>`}document.querySelector(`#app`).innerHTML=`
  ${e()}
  
  <div class="max-w-5xl mx-auto p-4 space-y-4">
    ${i()}
  
    ${a()}
  </div>
`,document.addEventListener(`DOMContentLoaded`,()=>{c()});