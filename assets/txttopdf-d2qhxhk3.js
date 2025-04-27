import"./main-DtJ3hseT.js";import{C as u}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("dropZone"),l=document.getElementById("file-input"),i=document.getElementById("uploadContent");o.addEventListener("dragover",e=>{e.preventDefault(),o.classList.add("drag-over")}),o.addEventListener("dragleave",()=>{o.classList.remove("drag-over")}),o.addEventListener("drop",e=>{e.preventDefault(),o.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.name.toLowerCase().endsWith(".txt")?d(t):alert("Please select a text file (TXT format).")}),l.addEventListener("change",()=>{const e=l.files[0];e&&d(e)});function d(e){i.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-alt"></i> ${e.name} (${p(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Formatting Options</h3>
          
          <div class="option-group">
            <label for="pageSize">Page Size</label>
            <select id="pageSize" class="option-select">
              <option value="a4" selected>A4</option>
              <option value="letter">Letter</option>
              <option value="legal">Legal</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="fontSize">Font Size</label>
            <select id="fontSize" class="option-select">
              <option value="10">10pt</option>
              <option value="11">11pt</option>
              <option value="12" selected>12pt</option>
              <option value="14">14pt</option>
              <option value="16">16pt</option>
            </select>
          </div>

          <div class="option-group">
            <label for="margins">Margins</label>
            <select id="margins" class="option-select">
              <option value="narrow">Narrow</option>
              <option value="normal" selected>Normal</option>
              <option value="wide">Wide</option>
            </select>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-file-pdf"></i> Convert to PDF
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{c(e)})}async function c(e){const t=document.getElementById("pageSize").value,r=document.getElementById("fontSize").value,s=document.getElementById("margins").value;i.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const a=u.auth("secret_ZbnqhsnKiovC8wpV"),n=a.createParams();n.add("File",e),n.add("StoreFile",!0),n.add("PageSize",t),n.add("FontSize",r),n.add("MarginType",s),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to PDF...";const v=await a.convert("txt","pdf",n);i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${v.files[0].Url}" download="converted.pdf" class="download-button">
              <i class="fas fa-download"></i> Download PDF
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Convert Another File
            </button>
          </div>
        </div>
      `}catch(a){console.error("Conversion error:",a),i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>An error occurred during conversion. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function p(e){if(e===0)return"0 Bytes";const t=1024,r=["Bytes","KB","MB","GB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(2))+" "+r[s]}});
