import"./main-DtJ3hseT.js";import{C as u}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("dropZone"),r=document.getElementById("file-input"),i=document.getElementById("uploadContent");o.addEventListener("dragover",e=>{e.preventDefault(),o.classList.add("drag-over")}),o.addEventListener("dragleave",()=>{o.classList.remove("drag-over")}),o.addEventListener("drop",e=>{e.preventDefault(),o.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&(t.name.toLowerCase().endsWith(".xls")||t.name.toLowerCase().endsWith(".xlsx"))?d(t):alert("Please select an Excel file (XLS or XLSX format).")}),r.addEventListener("change",()=>{const e=r.files[0];e&&d(e)});function d(e){i.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-excel"></i> ${e.name} (${v(e.size)})
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
          </div>
          
          <div class="option-group">
            <label for="orientation">Page Orientation</label>
            <select id="orientation" class="option-select">
              <option value="portrait">Portrait</option>
              <option value="landscape" selected>Landscape</option>
            </select>
          </div>

          <div class="option-group">
            <label for="scaling">Scaling</label>
            <select id="scaling" class="option-select">
              <option value="fitToWidth">Fit to Width</option>
              <option value="fitToHeight">Fit to Height</option>
              <option value="fitToPage" selected>Fit to Page</option>
              <option value="actualSize">Actual Size</option>
            </select>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-file-pdf"></i> Convert to PDF
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{c(e)})}async function c(e){const t=document.getElementById("pageSize").value,l=document.getElementById("orientation").value,a=document.getElementById("scaling").value;i.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const s=u.auth("secret_ZbnqhsnKiovC8wpV"),n=s.createParams();n.add("File",e),n.add("StoreFile",!0),n.add("PageSize",t),n.add("PageOrientation",l),n.add("ScalingMode",a),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to PDF...";const p=await s.convert("xls","pdf",n);i.innerHTML=`
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
      `}catch(s){console.error("Conversion error:",s),i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>An error occurred during conversion. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function v(e){if(e===0)return"0 Bytes";const t=1024,l=["Bytes","KB","MB","GB"],a=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,a)).toFixed(2))+" "+l[a]}});
