import"./main-DtJ3hseT.js";import{C as y}from"./convertapi-DZtGDAzA.js";import{J as h}from"./jszip.min-529iNPX7.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("dropZone"),r=document.getElementById("file-input"),a=document.getElementById("uploadContent");o.addEventListener("dragover",e=>{e.preventDefault(),o.classList.add("drag-over")}),o.addEventListener("dragleave",()=>{o.classList.remove("drag-over")}),o.addEventListener("drop",e=>{e.preventDefault(),o.classList.remove("drag-over");const n=e.dataTransfer.files[0];n&&n.type==="application/pdf"?d(n):alert("Please select a PDF file.")}),r.addEventListener("change",()=>{const e=r.files[0];e&&d(e)});function d(e){a.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name}
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Conversion Options</h3>
          
          <div class="option-group">
            <label for="dpi">Image Resolution (DPI)</label>
            <select id="dpi" class="option-select">
              <option value="72">72 DPI (Web Quality)</option>
              <option value="150">150 DPI (Good Quality)</option>
              <option value="300" selected>300 DPI (Print Quality)</option>
              <option value="600">600 DPI (High Quality)</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="backgroundColor">Background Color</label>
            <select id="backgroundColor" class="option-select">
              <option value="white" selected>White</option>
              <option value="black">Black</option>
              <option value="transparent">Transparent</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="pageRange">Page Range</label>
            <input type="text" id="pageRange" class="option-select" placeholder="e.g., 1-5 or 1,3,5">
            <p class="input-help">Leave empty to convert all pages</p>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-cog"></i> Convert to PNG
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{u(e)})}async function u(e){const n=document.getElementById("dpi").value,v=document.getElementById("backgroundColor").value,c=document.getElementById("pageRange").value;a.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const i=y.auth("secret_ZbnqhsnKiovC8wpV"),t=i.createParams();t.add("File",e),t.add("StoreFile",!0),t.add("ImageResolutionH",n),t.add("ImageResolutionV",n),t.add("BackgroundColor",v),c&&t.add("PageRange",c),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting PDF to PNG...";const l=await i.convert("pdf","png",t),p=new h;for(let s=0;s<l.files.length;s++){const b=await(await fetch(l.files[s].Url)).blob();p.file(`page_${s+1}.png`,b);const m=50+(s+1)/l.files.length*50;document.querySelector(".progress").style.width=`${m}%`,document.querySelector(".progress-text").textContent=`Processing page ${s+1} of ${l.files.length}...`}const g=await p.generateAsync({type:"blob"}),f=URL.createObjectURL(g);a.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${f}" download="converted_pages.zip" class="download-button">
              <i class="fas fa-download"></i> Download All Pages (ZIP)
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Convert Another File
            </button>
          </div>
        </div>
      `}catch(i){console.error("Conversion error:",i),a.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>An error occurred during conversion. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}});
