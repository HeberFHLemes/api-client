import './style.css'
import header from './ui/header';
import requestForm from './ui/requestForm';
import responseForm from './ui/responseForm';
import { bindEvents } from './ui/events';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  
  <div class="max-w-5xl mx-auto p-4 space-y-4">
    ${requestForm()}
  
    ${responseForm()}
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
});