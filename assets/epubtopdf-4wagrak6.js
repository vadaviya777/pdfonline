import"./main-DtJ3hseT.js";import{C as v}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("dropZone"),r=document.getElementById("file-input"),a=document.getElementById("uploadContent");n.addEventListener("dragover",e=>{e.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",e=>{e.preventDefault(),n.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.name.toLowerCase().endsWith(".epub")?l(t):alert("Please select an EPUB file.")}),r.addEventListener("change",()=>{const e=r.files[0];e&&l(e)});function l(e){a.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-book"></i> ${e.name} (${c(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Conversion Options</h3>
          
          <div class="option-group">
            <label for="pageSize">Page Size</label>
            <select id="pageSize" class="option-select">
              <option value="a4" selected>A4</option>
              <option value="letter">Letter</option>
              <option value="legal">Legal</option>
            </select>
            <p class="input-help">Choose the output PDF page size</p>
          </div>
          
          <div class="option-group">
            <label for="margins">Margins</label>
            <select id="margins" class="option-select">
              <option value="default" selected>Default</option>
              <option value="narrow">Narrow</option>
              <option value="wide">Wide</option>
            </select>
            <p class="input-help">Set page margins for the PDF output</p>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-file-pdf"></i> Convert to PDF
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{d(e)})}async function d(e){const t=document.getElementById("pageSize").value,i=document.getElementById("margins").value;a.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const o=v.auth("secret_ZbnqhsnKiovC8wpV"),s=o.createParams();s.add("File",e),s.add("StoreFile",!0),s.add("PageSize",t),s.add("MarginType",i),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to PDF...";const p=await o.convert("epub","pdf",s);a.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${p.files[0].Url}" download="converted.pdf" class="download-button">
              <i class="fas fa-download"></i> Download PDF
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Convert Another File
            </button>
          </div>
        </div>
      `}catch(o){console.error("Conversion error:",o),a.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>An error occurred during conversion. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function c(e){if(e===0)return"0 Bytes";const t=1024,i=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(2))+" "+i[o]}});
