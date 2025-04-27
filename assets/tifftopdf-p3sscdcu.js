import"./main-DtJ3hseT.js";import{C as h}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const l=document.getElementById("dropZone"),f=document.getElementById("file-input"),d=document.getElementById("uploadContent");let t=[];l.addEventListener("dragover",e=>{e.preventDefault(),l.classList.add("drag-over")}),l.addEventListener("dragleave",()=>{l.classList.remove("drag-over")}),l.addEventListener("drop",e=>{e.preventDefault(),l.classList.remove("drag-over");const o=Array.from(e.dataTransfer.files).filter(a=>a.type==="image/tiff"||a.name.toLowerCase().endsWith(".tiff")||a.name.toLowerCase().endsWith(".tif"));o.length>0?c(o):alert("Please select TIFF files only.")}),f.addEventListener("change",()=>{const e=Array.from(f.files);e.length>0&&c(e)});function c(e){t=[...t,...e],r()}function r(){const e=t.map((a,s)=>`
      <div class="selected-file" draggable="true" data-index="${s}">
        <div class="file-drag-handle">
          <i class="fas fa-grip-vertical"></i>
        </div>
        <div class="file-info">
          <i class="fas fa-image"></i>
          <span class="file-name">${a.name}</span>
          <span class="file-size">(${g(a.size)})</span>
        </div>
        <div class="file-actions">
          <button class="move-up" onclick="moveFile(${s}, 'up')" ${s===0?"disabled":""}>
            <i class="fas fa-arrow-up"></i>
          </button>
          <button class="move-down" onclick="moveFile(${s}, 'down')" ${s===t.length-1?"disabled":""}>
            <i class="fas fa-arrow-down"></i>
          </button>
          <button class="remove-file" onclick="removeFile(${s})">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    `).join("");d.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-files-container">
          <div class="files-header">
            <h3>Selected Files (${t.length})</h3>
            <div class="file-actions-global">
              <button onclick="clearFiles()" class="clear-all-button">
                <i class="fas fa-trash"></i> Clear All
              </button>
              <label class="add-more-button">
                <i class="fas fa-plus"></i> Add More Files
                <input type="file" accept=".tiff,.tif" multiple hidden onchange="addMoreFiles(event)">
              </label>
            </div>
          </div>
          <div class="file-list">
            ${e}
          </div>
        </div>

        <div class="detailed-options">
          <h3 class="options-title">PDF Settings</h3>
          
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
              <option value="portrait" selected>Portrait</option>
              <option value="landscape">Landscape</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="quality">Image Quality</label>
            <select id="quality" class="option-select">
              <option value="low">Low (Smaller file size)</option>
              <option value="medium" selected>Medium (Balanced)</option>
              <option value="high">High (Best quality)</option>
            </select>
          </div>
        </div>
        
        <button id="convertButton" class="convert-button" ${t.length===0?"disabled":""}>
          <i class="fas fa-file-pdf"></i> Convert to PDF
        </button>
      </div>
    `;const o=document.getElementById("convertButton");o&&o.addEventListener("click",()=>{t.length>0?m(t):alert("Please select at least one TIFF file to convert.")}),p()}function p(){const e=document.querySelectorAll(".selected-file");let o=null;e.forEach(a=>{a.addEventListener("dragstart",s=>{o=a,s.dataTransfer.effectAllowed="move",a.classList.add("dragging")}),a.addEventListener("dragend",()=>{o.classList.remove("dragging"),o=null}),a.addEventListener("dragover",s=>{s.preventDefault(),s.dataTransfer.dropEffect="move"}),a.addEventListener("drop",s=>{if(s.preventDefault(),o&&o!==a){const i=parseInt(o.dataset.index),n=parseInt(a.dataset.index),v=t[i];t[i]=t[n],t[n]=v,r()}})})}function g(e){if(e===0)return"0 Bytes";const o=1024,a=["Bytes","KB","MB","GB"],s=Math.floor(Math.log(e)/Math.log(o));return parseFloat((e/Math.pow(o,s)).toFixed(2))+" "+a[s]}window.removeFile=e=>{t.splice(e,1),r()},window.moveFile=(e,o)=>{o==="up"&&e>0?[t[e],t[e-1]]=[t[e-1],t[e]]:o==="down"&&e<t.length-1&&([t[e],t[e+1]]=[t[e+1],t[e]]),r()},window.clearFiles=()=>{t=[],r()},window.addMoreFiles=e=>{const o=Array.from(e.target.files);c(o)};async function m(e){const o=document.getElementById("pageSize").value,a=document.getElementById("orientation").value,s=document.getElementById("quality").value;d.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const i=h.auth("secret_ZbnqhsnKiovC8wpV"),n=i.createParams();if(n.add("File",e[0]),e.length>1)for(let u=1;u<e.length;u++)n.add("Files",e[u]);n.add("PageSize",o),n.add("PageOrientation",a),n.add("ImageQuality",s),n.add("StoreFile",!0),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to PDF...";const v=await i.convert("tiff","pdf",n);d.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${v.files[0].Url}" download="converted.pdf" class="download-button">
              <i class="fas fa-download"></i> Download PDF
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Convert More Files
            </button>
          </div>
        </div>
      `}catch(i){console.error("Conversion error:",i),d.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>${i.Message||"An error occurred during conversion. Please try again."}</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}});
