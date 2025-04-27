import"./main-DtJ3hseT.js";import{C as p}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("dropZone"),a=document.getElementById("file-input"),r=document.getElementById("uploadContent");n.addEventListener("dragover",e=>{e.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",e=>{e.preventDefault(),n.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?l(t):alert("Please select a PDF file.")}),a.addEventListener("change",()=>{const e=a.files[0];e&&l(e)});function l(e){r.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${i(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Unlock Options</h3>
          
          <div class="option-group">
            <label for="pdfPassword">PDF Password</label>
            <input type="password" id="pdfPassword" class="option-select" placeholder="Enter PDF password">
            <p class="input-help">Enter the password required to open the PDF file</p>
          </div>

          <button id="unlockButton" class="convert-button">
            <i class="fas fa-unlock"></i> Unlock PDF
          </button>
        </div>
      </div>
    `,document.getElementById("unlockButton").addEventListener("click",()=>{d(e)})}async function d(e){const t=document.getElementById("pdfPassword").value;if(!t){alert("Please enter the PDF password");return}r.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting unlock process...</p>
      </div>
    `;try{const o=p.auth("secret_ZbnqhsnKiovC8wpV"),s=o.createParams();s.add("File",e),s.add("StoreFile",!0),s.add("Password",t),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Unlocking PDF...";const c=await o.convert("pdf","unprotect",s);r.innerHTML=`
        <div class="result-container">
          <h3>PDF Unlocked Successfully!</h3>
          <div class="result-buttons">
            <a href="${c.files[0].Url}" download="unlocked.pdf" class="download-button">
              <i class="fas fa-download"></i> Download Unlocked PDF
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Unlock Another File
            </button>
          </div>
        </div>
      `}catch(o){console.error("Unlock error:",o),r.innerHTML=`
        <div class="result-container">
          <h3>Unlock Failed</h3>
          <p>${o.Message||"An error occurred while unlocking the file. Please check your password and try again."}</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function i(e){if(e===0)return"0 Bytes";const t=1024,o=["Bytes","KB","MB","GB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(2))+" "+o[s]}});
