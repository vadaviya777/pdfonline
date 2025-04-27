import"./main-DtJ3hseT.js";import{C as u}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("dropZone"),r=document.getElementById("file-input"),s=document.getElementById("uploadContent");n.addEventListener("dragover",e=>{e.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",e=>{e.preventDefault(),n.classList.remove("drag-over");const o=e.dataTransfer.files[0];o&&o.type==="application/pdf"?c(o):alert("Please select a PDF file.")}),r.addEventListener("change",()=>{const e=r.files[0];e&&c(e)});function c(e){s.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${p(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Conversion Options</h3>
          
          <div class="option-group">
            <label for="resolution">Resolution (DPI)</label>
            <select id="resolution" class="option-select">
              <option value="72">72 DPI (Screen)</option>
              <option value="150">150 DPI (Web)</option>
              <option value="300" selected>300 DPI (Print)</option>
              <option value="600">600 DPI (High Quality)</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="compression">Compression</label>
            <select id="compression" class="option-select">
              <option value="none">None (Best Quality)</option>
              <option value="lzw" selected>LZW (Balanced)</option>
              <option value="jpeg">JPEG (Smaller Size)</option>
            </select>
          </div>

          <div class="option-group">
            <label for="colorSpace">Color Space</label>
            <select id="colorSpace" class="option-select">
              <option value="rgb" selected>RGB Color</option>
              <option value="cmyk">CMYK Color</option>
              <option value="grayscale">Grayscale</option>
            </select>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-cog"></i> Convert to TIFF
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{d(e)})}async function d(e){const o=document.getElementById("resolution").value,l=document.getElementById("compression").value,i=document.getElementById("colorSpace").value;s.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const a=u.auth("secret_ZbnqhsnKiovC8wpV"),t=a.createParams();t.add("File",e),t.add("StoreFile",!0),t.add("ImageResolutionH",o),t.add("ImageResolutionV",o),t.add("Compression",l),t.add("ColorSpace",i),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to TIFF...";const v=await a.convert("pdf","tiff",t);s.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${v.files[0].Url}" download="converted.tiff" class="download-button">
              <i class="fas fa-download"></i> Download TIFF
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Convert Another File
            </button>
          </div>
        </div>
      `}catch(a){console.error("Conversion error:",a),s.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>An error occurred during conversion. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function p(e){if(e===0)return"0 Bytes";const o=1024,l=["Bytes","KB","MB","GB"],i=Math.floor(Math.log(e)/Math.log(o));return parseFloat((e/Math.pow(o,i)).toFixed(2))+" "+l[i]}});
