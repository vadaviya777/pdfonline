import"./main-DtJ3hseT.js";import{C as u}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("dropZone"),a=document.getElementById("file-input"),i=document.getElementById("uploadContent");n.addEventListener("dragover",e=>{e.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",e=>{e.preventDefault(),n.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?l(t):alert("Please select a PDF file.")}),a.addEventListener("change",()=>{const e=a.files[0];e&&l(e)});function l(e){i.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${c(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Conversion Options</h3>
          
          <div class="option-group">
            <label for="encoding">Text Encoding</label>
            <select id="encoding" class="option-select">
              <option value="utf-8" selected>UTF-8 (Recommended)</option>
              <option value="ascii">ASCII</option>
              <option value="iso-8859-1">ISO-8859-1</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="preserveLayout">Preserve Layout</label>
            <select id="preserveLayout" class="option-select">
              <option value="true" selected>Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-file-alt"></i> Convert to TXT
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{d(e)})}async function d(e){const t=document.getElementById("encoding").value,r=document.getElementById("preserveLayout").value==="true";i.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const o=u.auth("secret_ZbnqhsnKiovC8wpV"),s=o.createParams();s.add("File",e),s.add("StoreFile",!0),s.add("Encoding",t),s.add("PreserveLayout",r),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to TXT...";const v=await o.convert("pdf","txt",s);i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${v.files[0].Url}" download="converted.txt" class="download-button">
              <i class="fas fa-download"></i> Download Text File
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Convert Another File
            </button>
          </div>
        </div>
      `}catch(o){console.error("Conversion error:",o),i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>An error occurred during conversion. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function c(e){if(e===0)return"0 Bytes";const t=1024,r=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(2))+" "+r[o]}});
