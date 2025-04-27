import"./main-DtJ3hseT.js";import{C as p}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("dropZone"),i=document.getElementById("file-input"),r=document.getElementById("uploadContent");s.addEventListener("dragover",e=>{e.preventDefault(),s.classList.add("drag-over")}),s.addEventListener("dragleave",()=>{s.classList.remove("drag-over")}),s.addEventListener("drop",e=>{e.preventDefault(),s.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?l(t):alert("Please select a PDF file.")}),i.addEventListener("change",()=>{const e=i.files[0];e&&l(e)});function l(e){r.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${c(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Conversion Options</h3>
          
          <div class="option-group">
            <label for="preserveImages">Preserve Images</label>
            <select id="preserveImages" class="option-select">
              <option value="true" selected>Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="preserveFormatting">Preserve Formatting</label>
            <select id="preserveFormatting" class="option-select">
              <option value="true" selected>Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-file-powerpoint"></i> Convert to PowerPoint
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{d(e)})}async function d(e){const t=document.getElementById("preserveImages").value==="true",a=document.getElementById("preserveFormatting").value==="true";r.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const o=p.auth("secret_ZbnqhsnKiovC8wpV"),n=o.createParams();n.add("File",e),n.add("StoreFile",!0),n.add("PreserveImages",t),n.add("PreserveFormatting",a),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to PowerPoint...";const v=await o.convert("pdf","pptx",n);r.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${v.files[0].Url}" download="converted.pptx" class="download-button">
              <i class="fas fa-download"></i> Download PowerPoint
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Convert Another File
            </button>
          </div>
        </div>
      `}catch(o){console.error("Conversion error:",o),r.innerHTML=`
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
