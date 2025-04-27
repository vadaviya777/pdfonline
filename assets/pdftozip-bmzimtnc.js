import"./main-DtJ3hseT.js";import{C as v}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("dropZone"),r=document.getElementById("file-input"),i=document.getElementById("uploadContent");s.addEventListener("dragover",e=>{e.preventDefault(),s.classList.add("drag-over")}),s.addEventListener("dragleave",()=>{s.classList.remove("drag-over")}),s.addEventListener("drop",e=>{e.preventDefault(),s.classList.remove("drag-over");const o=e.dataTransfer.files[0];o&&o.type==="application/pdf"?a(o):alert("Please select a PDF file.")}),r.addEventListener("change",()=>{const e=r.files[0];e&&a(e)});function a(e){i.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${d(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Compression Options</h3>
          
          <div class="option-group">
            <label for="compressionLevel">Compression Level</label>
            <select id="compressionLevel" class="option-select">
              <option value="low">Low (Faster)</option>
              <option value="medium" selected>Medium (Balanced)</option>
              <option value="high">High (Smaller Size)</option>
            </select>
            <p class="input-help">Choose compression level for the ZIP file</p>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-file-archive"></i> Convert to ZIP
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{l(e)})}async function l(e){const o=document.getElementById("compressionLevel").value;i.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const n=v.auth("secret_ZbnqhsnKiovC8wpV"),t=n.createParams();t.add("File",e),t.add("StoreFile",!0),t.add("CompressionLevel",o),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to ZIP...";const c=await n.convert("pdf","compress",t);i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${c.files[0].Url}" download="converted.zip" class="download-button">
              <i class="fas fa-download"></i> Download ZIP File
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Convert Another File
            </button>
          </div>
        </div>
      `}catch(n){console.error("Conversion error:",n),i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>An error occurred during conversion. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function d(e){if(e===0)return"0 Bytes";const o=1024,n=["Bytes","KB","MB","GB"],t=Math.floor(Math.log(e)/Math.log(o));return parseFloat((e/Math.pow(o,t)).toFixed(2))+" "+n[t]}});
