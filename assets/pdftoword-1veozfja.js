import"./main-DtJ3hseT.js";import{C as u}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("dropZone"),l=document.getElementById("file-input"),s=document.getElementById("uploadContent");o.addEventListener("dragover",e=>{e.preventDefault(),o.classList.add("drag-over")}),o.addEventListener("dragleave",()=>{o.classList.remove("drag-over")}),o.addEventListener("drop",e=>{e.preventDefault(),o.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?d(t):alert("Please select a PDF file.")}),l.addEventListener("change",()=>{const e=l.files[0];e&&d(e)});function d(e){s.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${v(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Conversion Options</h3>
          
          <div class="option-group">
            <label for="format">Output Format</label>
            <select id="format" class="option-select">
              <option value="docx" selected>DOCX (Modern Word)</option>
              <option value="doc">DOC (Legacy Word)</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="preserveFormatting">Preserve Formatting</label>
            <select id="preserveFormatting" class="option-select">
              <option value="true" selected>Yes (Best Quality)</option>
              <option value="false">No (Better Editability)</option>
            </select>
          </div>

          <div class="option-group">
            <label for="extractImages">Extract Images</label>
            <select id="extractImages" class="option-select">
              <option value="true" selected>Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-file-word"></i> Convert to Word
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{c(e)})}async function c(e){const t=document.getElementById("format").value,i=document.getElementById("preserveFormatting").value==="true",r=document.getElementById("extractImages").value==="true";s.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const a=u.auth("secret_ZbnqhsnKiovC8wpV"),n=a.createParams();n.add("File",e),n.add("StoreFile",!0),n.add("PreserveFormatting",i),n.add("ExtractImages",r),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to Word...";const p=await a.convert("pdf",t,n);s.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${p.files[0].Url}" download="converted.${t}" class="download-button">
              <i class="fas fa-download"></i> Download Word Document
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
      `}}function v(e){if(e===0)return"0 Bytes";const t=1024,i=["Bytes","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,r)).toFixed(2))+" "+i[r]}});
