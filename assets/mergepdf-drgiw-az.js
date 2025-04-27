import"./main-DtJ3hseT.js";import{C as m}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("dropZone"),c=document.getElementById("file-input"),i=document.getElementById("uploadContent");let s=[];n.addEventListener("dragover",e=>{e.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",e=>{e.preventDefault(),n.classList.remove("drag-over");const t=Array.from(e.dataTransfer.files).filter(a=>a.type==="application/pdf");t.length>0?d(t):alert("Please select PDF files only.")}),c.addEventListener("change",()=>{const e=Array.from(c.files);e.length>0&&d(e)});function d(e){s=[...s,...e],o()}function o(){const e=s.map((a,l)=>`
      <div class="selected-file" draggable="true" data-index="${l}">
        <div class="file-drag-handle">
          <i class="fas fa-grip-vertical"></i>
        </div>
        <div class="file-info">
          <i class="fas fa-file-pdf"></i>
          <span class="file-name">${a.name}</span>
          <span class="file-size">(${u(a.size)})</span>
        </div>
        <div class="file-actions">
          <button class="move-up" onclick="moveFile(${l}, 'up')" ${l===0?"disabled":""}>
            <i class="fas fa-arrow-up"></i>
          </button>
          <button class="move-down" onclick="moveFile(${l}, 'down')" ${l===s.length-1?"disabled":""}>
            <i class="fas fa-arrow-down"></i>
          </button>
          <button class="remove-file" onclick="removeFile(${l})">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    `).join("");i.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-files-container">
          <div class="files-header">
            <h3>Selected Files (${s.length})</h3>
            <div class="file-actions-global">
              <button onclick="clearFiles()" class="clear-all-button">
                <i class="fas fa-trash"></i> Clear All
              </button>
              <label class="add-more-button">
                <i class="fas fa-plus"></i> Add More Files
                <input type="file" accept=".pdf" multiple hidden onchange="addMoreFiles(event)">
              </label>
            </div>
          </div>
          <div class="file-list">
            ${e}
          </div>
        </div>
        
        <button id="mergeButton" class="convert-button" ${s.length<2?"disabled":""}>
          <i class="fas fa-object-group"></i> Merge ${s.length} PDFs
        </button>
      </div>
    `;const t=document.getElementById("mergeButton");t&&t.addEventListener("click",()=>{s.length>=2?g(s):alert("Please select at least 2 PDF files to merge.")}),v()}function v(){const e=document.querySelectorAll(".selected-file");let t=null;e.forEach(a=>{a.addEventListener("dragstart",l=>{t=a,l.dataTransfer.effectAllowed="move",a.classList.add("dragging")}),a.addEventListener("dragend",()=>{t.classList.remove("dragging"),t=null}),a.addEventListener("dragover",l=>{l.preventDefault(),l.dataTransfer.dropEffect="move"}),a.addEventListener("drop",l=>{if(l.preventDefault(),t&&t!==a){const r=parseInt(t.dataset.index),f=parseInt(a.dataset.index),p=s[r];s[r]=s[f],s[f]=p,o()}})})}function u(e){if(e===0)return"0 Bytes";const t=1024,a=["Bytes","KB","MB","GB"],l=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,l)).toFixed(2))+" "+a[l]}window.removeFile=e=>{s.splice(e,1),o()},window.moveFile=(e,t)=>{t==="up"&&e>0?[s[e],s[e-1]]=[s[e-1],s[e]]:t==="down"&&e<s.length-1&&([s[e],s[e+1]]=[s[e+1],s[e]]),o()},window.clearFiles=()=>{s=[],o()},window.addMoreFiles=e=>{const t=Array.from(e.target.files);d(t)};async function g(e){i.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting merge process...</p>
      </div>
    `;try{const t=m.auth("secret_ZbnqhsnKiovC8wpV"),a=t.createParams();for(let r=0;r<e.length;r++)a.add("Files",e[r]);document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Merging PDF files...";const l=await t.convert("pdf","merge",a);i.innerHTML=`
        <div class="result-container">
          <h3>PDFs Merged Successfully!</h3>
          <div class="result-buttons">
            <a href="${l.files[0].Url}" download="merged.pdf" class="download-button">
              <i class="fas fa-download"></i> Download Merged PDF
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Merge More Files
            </button>
          </div>
        </div>
      `}catch(t){console.error("Merge error:",t),i.innerHTML=`
        <div class="result-container">
          <h3>Merge Failed</h3>
          <p>An error occurred while merging the files. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}});
