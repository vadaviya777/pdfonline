import"./main-DtJ3hseT.js";import{C as h}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("dropZone"),l=document.getElementById("file-input"),i=document.getElementById("uploadContent");s.addEventListener("dragover",e=>{e.preventDefault(),s.classList.add("drag-over")}),s.addEventListener("dragleave",()=>{s.classList.remove("drag-over")}),s.addEventListener("drop",e=>{e.preventDefault(),s.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?a(t):alert("Please select a PDF file.")}),l.addEventListener("change",()=>{const e=l.files[0];e&&a(e)});function a(e){i.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${g(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Protection Options</h3>
          
          <div class="option-group">
            <label for="userPassword">User Password (Required to Open)</label>
            <input type="password" id="userPassword" class="option-select" placeholder="Enter password">
            <p class="input-help">Users will need this password to open the PDF</p>
          </div>
          
          <div class="option-group">
            <label for="ownerPassword">Owner Password (Required for Full Access)</label>
            <input type="password" id="ownerPassword" class="option-select" placeholder="Enter owner password">
            <p class="input-help">Required for changing permissions or removing protection</p>
          </div>

          <div class="option-group">
            <label>Document Permissions</label>
            <div style="margin-top: 0.5rem;">
              <label style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <input type="checkbox" id="allowPrinting" checked> Allow Printing
              </label>
              <label style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <input type="checkbox" id="allowModifying" checked> Allow Modifying
              </label>
              <label style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" id="allowCopying" checked> Allow Copying Content
              </label>
            </div>
          </div>

          <button id="protectButton" class="convert-button">
            <i class="fas fa-lock"></i> Protect PDF
          </button>
        </div>
      </div>
    `,document.getElementById("protectButton").addEventListener("click",()=>{const t=document.getElementById("userPassword").value,n=document.getElementById("ownerPassword").value;if(!t&&!n){alert("Please enter at least one password to protect the PDF.");return}u(e,t,n)})}async function u(e,t,n){i.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting protection process...</p>
      </div>
    `;try{const o=h.auth("secret_ZbnqhsnKiovC8wpV"),r=o.createParams();r.add("File",e),r.add("UserPassword",t),r.add("OwnerPassword",n||t);const d=document.getElementById("allowPrinting"),c=document.getElementById("allowModifying"),p=document.getElementById("allowCopying"),f=d?!!d.checked:!1,v=c?!!c.checked:!1,m=p?!!p.checked:!1,w=JSON.stringify({PrintDocument:f,ModifyDocument:v,CopyContent:m});r.add("Permissions",w),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Protecting PDF...";const y=await o.convert("pdf","protect",r);i.innerHTML=`
        <div class="result-container">
          <h3>PDF Protected Successfully!</h3>
          <div class="result-buttons">
            <a href="${y.files[0].Url}" download="protected.pdf" class="download-button">
              <i class="fas fa-download"></i> Download Protected PDF
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Protect Another File
            </button>
          </div>
        </div>
      `}catch(o){console.error("Protection error:",o),i.innerHTML=`
        <div class="result-container">
          <h3>Protection Failed</h3>
          <p>An error occurred while protecting the file. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function g(e){if(e===0)return"0 Bytes";const t=1024,n=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(2))+" "+n[o]}});
