import"./main-DtJ3hseT.js";import{C as p}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("dropZone"),r=document.getElementById("file-input"),a=document.getElementById("uploadContent");s.addEventListener("dragover",e=>{e.preventDefault(),s.classList.add("drag-over")}),s.addEventListener("dragleave",()=>{s.classList.remove("drag-over")}),s.addEventListener("drop",e=>{e.preventDefault(),s.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?l(t):alert("Please select a PDF file.")}),r.addEventListener("change",()=>{const e=r.files[0];e&&l(e)});function l(e){a.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${c(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Grayscale Options</h3>
          
          <div class="option-group">
            <label for="quality">Output Quality</label>
            <select id="quality" class="option-select">
              <option value="draft">Draft (Faster)</option>
              <option value="normal" selected>Normal</option>
              <option value="prepress">High Quality (Print)</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="dpi">Resolution (DPI)</label>
            <select id="dpi" class="option-select">
              <option value="150">150 DPI (Screen)</option>
              <option value="300" selected>300 DPI (Standard)</option>
              <option value="600">600 DPI (High Quality)</option>
            </select>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-adjust"></i> Convert to Grayscale
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{d(e)})}async function d(e){const t=document.getElementById("quality").value,i=document.getElementById("dpi").value;a.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const o=p.auth("secret_ZbnqhsnKiovC8wpV"),n=o.createParams();n.add("File",e),n.add("StoreFile",!0),n.add("ColorModel","grayscale"),n.add("PdfResolutionX",i),n.add("PdfResolutionY",i),n.add("Quality",t),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to grayscale...";const u=await o.convert("pdf","pdf",n);a.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${u.files[0].Url}" download="grayscale.pdf" class="download-button">
              <i class="fas fa-download"></i> Download Grayscale PDF
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
