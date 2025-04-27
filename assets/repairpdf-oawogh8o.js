import"./main-DtJ3hseT.js";import{C as p}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("dropZone"),n=document.getElementById("file-input"),s=document.getElementById("uploadContent");r.addEventListener("dragover",e=>{e.preventDefault(),r.classList.add("drag-over")}),r.addEventListener("dragleave",()=>{r.classList.remove("drag-over")}),r.addEventListener("drop",e=>{e.preventDefault(),r.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?i(t):alert("Please select a PDF file.")}),n.addEventListener("change",()=>{const e=n.files[0];e&&i(e)});function i(e){s.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${l(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Repair Options</h3>
          
          <div class="option-group">
            <label for="repairMode">Repair Mode</label>
            <select id="repairMode" class="option-select">
              <option value="auto" selected>Auto-detect Issues</option>
              <option value="structure">Fix Structure Only</option>
              <option value="content">Recover Content</option>
              <option value="full">Full Recovery</option>
            </select>
            <p class="input-help">Choose the appropriate repair mode based on the type of damage</p>
          </div>

          <button id="repairButton" class="convert-button">
            <i class="fas fa-wrench"></i> Repair PDF
          </button>
        </div>
      </div>
    `,document.getElementById("repairButton").addEventListener("click",()=>{d(e)})}async function d(e){const t=document.getElementById("repairMode").value;s.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting repair process...</p>
      </div>
    `;try{const a=p.auth("secret_ZbnqhsnKiovC8wpV"),o=a.createParams();o.add("File",e),o.add("StoreFile",!0),o.add("RepairMode",t),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Repairing PDF...";const c=await a.convert("pdf","repair",o);s.innerHTML=`
        <div class="result-container">
          <h3>Repair Complete!</h3>
          <div class="result-buttons">
            <a href="${c.files[0].Url}" download="repaired.pdf" class="download-button">
              <i class="fas fa-download"></i> Download Repaired PDF
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Repair Another File
            </button>
          </div>
        </div>
      `}catch(a){console.error("Repair error:",a),s.innerHTML=`
        <div class="result-container">
          <h3>Repair Failed</h3>
          <p>An error occurred during repair. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function l(e){if(e===0)return"0 Bytes";const t=1024,a=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(2))+" "+a[o]}});
