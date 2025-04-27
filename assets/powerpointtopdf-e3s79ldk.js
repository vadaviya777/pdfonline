import"./main-DtJ3hseT.js";import{C as v}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("dropZone"),r=document.getElementById("file-input"),i=document.getElementById("uploadContent");n.addEventListener("dragover",e=>{e.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",e=>{e.preventDefault(),n.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&(t.name.toLowerCase().endsWith(".ppt")||t.name.toLowerCase().endsWith(".pptx"))?l(t):alert("Please select a PowerPoint presentation (PPT or PPTX file).")}),r.addEventListener("change",()=>{const e=r.files[0];e&&l(e)});function l(e){i.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-powerpoint"></i> ${e.name} (${c(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Conversion Options</h3>
          
          <div class="option-group">
            <label for="quality">Output Quality</label>
            <select id="quality" class="option-select">
              <option value="low">Low (Smaller file size)</option>
              <option value="medium" selected>Medium (Balanced)</option>
              <option value="high">High (Best quality)</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="includeNotes">Include Speaker Notes</label>
            <select id="includeNotes" class="option-select">
              <option value="true">Yes</option>
              <option value="false" selected>No</option>
            </select>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-file-pdf"></i> Convert to PDF
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{d(e)})}async function d(e){const t=document.getElementById("quality").value,a=document.getElementById("includeNotes").value==="true";i.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const o=v.auth("secret_ZbnqhsnKiovC8wpV"),s=o.createParams();s.add("File",e),s.add("StoreFile",!0),s.add("Quality",t),s.add("IncludeNotes",a),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to PDF...";const u=await o.convert("ppt","pdf",s);i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${u.files[0].Url}" download="converted.pdf" class="download-button">
              <i class="fas fa-download"></i> Download PDF
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
      `}}function c(e){if(e===0)return"0 Bytes";const t=1024,a=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(2))+" "+a[o]}});
