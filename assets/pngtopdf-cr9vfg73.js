import"./main-DtJ3hseT.js";import{C as h}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("dropZone"),u=document.getElementById("file-input"),d=document.getElementById("uploadContent");let t=[];i.addEventListener("dragover",e=>{e.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",e=>{e.preventDefault(),i.classList.remove("drag-over");const o=Array.from(e.dataTransfer.files).filter(s=>s.type==="image/png");o.length>0?c(o):alert("Please select PNG files only.")}),u.addEventListener("change",()=>{const e=Array.from(u.files);e.length>0&&c(e)});function c(e){t=[...t,...e],r()}function r(){const e=t.map((s,a)=>`
      <div class="selected-file" draggable="true" data-index="${a}">
        <div class="file-drag-handle">
          <i class="fas fa-grip-vertical"></i>
        </div>
        <div class="file-info">
          <i class="fas fa-image"></i>
          <span class="file-name">${s.name}</span>
          <span class="file-size">(${g(s.size)})</span>
        </div>
        <div class="file-actions">
          <button class="move-up" onclick="moveFile(${a}, 'up')" ${a===0?"disabled":""}>
            <i class="fas fa-arrow-up"></i>
          </button>
          <button class="move-down" onclick="moveFile(${a}, 'down')" ${a===t.length-1?"disabled":""}>
            <i class="fas fa-arrow-down"></i>
          </button>
          <button class="remove-file" onclick="removeFile(${a})">
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
                <input type="file" accept=".png" multiple hidden onchange="addMoreFiles(event)">
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
    `;const o=document.getElementById("convertButton");o&&o.addEventListener("click",()=>{t.length>0?m(t):alert("Please select at least one PNG file to convert.")}),f()}function f(){const e=document.querySelectorAll(".selected-file");let o=null;e.forEach(s=>{s.addEventListener("dragstart",a=>{o=s,a.dataTransfer.effectAllowed="move",s.classList.add("dragging")}),s.addEventListener("dragend",()=>{o.classList.remove("dragging"),o=null}),s.addEventListener("dragover",a=>{a.preventDefault(),a.dataTransfer.dropEffect="move"}),s.addEventListener("drop",a=>{if(a.preventDefault(),o&&o!==s){const n=parseInt(o.dataset.index),l=parseInt(s.dataset.index),v=t[n];t[n]=t[l],t[l]=v,r()}})})}function g(e){if(e===0)return"0 Bytes";const o=1024,s=["Bytes","KB","MB","GB"],a=Math.floor(Math.log(e)/Math.log(o));return parseFloat((e/Math.pow(o,a)).toFixed(2))+" "+s[a]}window.removeFile=e=>{t.splice(e,1),r()},window.moveFile=(e,o)=>{o==="up"&&e>0?[t[e],t[e-1]]=[t[e-1],t[e]]:o==="down"&&e<t.length-1&&([t[e],t[e+1]]=[t[e+1],t[e]]),r()},window.clearFiles=()=>{t=[],r()},window.addMoreFiles=e=>{const o=Array.from(e.target.files);c(o)};async function m(e){const o=document.getElementById("pageSize").value,s=document.getElementById("orientation").value,a=document.getElementById("quality").value;d.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const n=h.auth("secret_ZbnqhsnKiovC8wpV"),l=n.createParams();if(l.add("File",e[0]),e.length>1)for(let p=1;p<e.length;p++)l.add("Files",e[p]);l.add("PageSize",o),l.add("PageOrientation",s),l.add("ImageQuality",a),l.add("StoreFile",!0),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to PDF...";const v=await n.convert("png","pdf",l);d.innerHTML=`
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
      `}catch(n){console.error("Conversion error:",n),d.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>${n.Message||"An error occurred during conversion. Please try again."}</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}});
