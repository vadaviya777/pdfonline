import"./main-DtJ3hseT.js";import{C as p}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("dropZone"),a=document.getElementById("file-input"),i=document.getElementById("uploadContent");s.addEventListener("dragover",e=>{e.preventDefault(),s.classList.add("drag-over")}),s.addEventListener("dragleave",()=>{s.classList.remove("drag-over")}),s.addEventListener("drop",e=>{e.preventDefault(),s.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?l(t):alert("Please select a PDF file.")}),a.addEventListener("change",()=>{const e=a.files[0];e&&l(e)});function l(e){i.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${c(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Conversion Options</h3>
          
          <div class="option-group">
            <label for="includeImages">Include Images</label>
            <select id="includeImages" class="option-select">
              <option value="true" selected>Yes</option>
              <option value="false">No</option>
            </select>
            <p class="input-help">Choose whether to include images in the HTML output</p>
          </div>
          
          <div class="option-group">
            <label for="responsive">Responsive Design</label>
            <select id="responsive" class="option-select">
              <option value="true" selected>Yes</option>
              <option value="false">No</option>
            </select>
            <p class="input-help">Make the HTML output responsive for different screen sizes</p>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-code"></i> Convert to HTML
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{d(e)})}async function d(e){const t=document.getElementById("includeImages").value==="true",r=document.getElementById("responsive").value==="true";i.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const o=p.auth("secret_ZbnqhsnKiovC8wpV"),n=o.createParams();n.add("File",e),n.add("StoreFile",!0),n.add("IncludeImages",t),n.add("Responsive",r),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to HTML...";const v=await o.convert("pdf","html",n);i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${v.files[0].Url}" download="converted.html" class="download-button">
              <i class="fas fa-download"></i> Download HTML File
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
