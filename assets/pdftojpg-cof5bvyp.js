import"./main-DtJ3hseT.js";import{C as b}from"./convertapi-DZtGDAzA.js";import{J as I}from"./jszip.min-529iNPX7.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("dropZone"),c=document.getElementById("file-input"),i=document.getElementById("uploadContent");n.addEventListener("dragover",e=>{e.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",e=>{e.preventDefault(),n.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?p(t):alert("Please select a PDF file.")}),c.addEventListener("change",()=>{const e=c.files[0];e&&p(e)});function p(e){i.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${g(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Conversion Options</h3>
          
          <div class="option-group">
            <label for="imageQuality">Image Quality</label>
            <select id="imageQuality" class="option-select">
              <option value="60">Low (Smaller file size)</option>
              <option value="80" selected>Medium (Balanced)</option>
              <option value="100">High (Best quality)</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="dpi">Resolution (DPI)</label>
            <select id="dpi" class="option-select">
              <option value="72">72 DPI (Screen)</option>
              <option value="150" selected>150 DPI (Web)</option>
              <option value="300">300 DPI (Print)</option>
              <option value="600">600 DPI (High Quality)</option>
            </select>
          </div>

          <div class="option-group">
            <label for="pageRange">Page Range</label>
            <input type="text" id="pageRange" class="option-select" placeholder="e.g., 1-5 or 1,3,5">
            <p class="input-help">Leave empty to convert all pages</p>
          </div>

          <button id="convertButton" class="convert-button">
            <i class="fas fa-image"></i> Convert to JPG
          </button>
        </div>
      </div>
    `,document.getElementById("convertButton").addEventListener("click",()=>{v(e)})}async function v(e){const t=parseInt(document.getElementById("imageQuality").value),l=document.getElementById("dpi").value,a=document.getElementById("pageRange").value;i.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting conversion...</p>
      </div>
    `;try{const r=b.auth("secret_ZbnqhsnKiovC8wpV"),o=r.createParams();o.add("File",e),o.add("StoreFile",!0),o.add("ImageQuality",t),o.add("ImageResolutionH",l),o.add("ImageResolutionV",l),a&&o.add("PageRange",a),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Converting to JPG...";const d=await r.convert("pdf","jpg",o),u=new I;for(let s=0;s<d.files.length;s++){const y=await(await fetch(d.files[s].Url)).blob();u.file(`page_${s+1}.jpg`,y);const h=50+(s+1)/d.files.length*50;document.querySelector(".progress").style.width=`${h}%`,document.querySelector(".progress-text").textContent=`Processing page ${s+1} of ${d.files.length}...`}const f=await u.generateAsync({type:"blob"}),m=URL.createObjectURL(f);i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Complete!</h3>
          <div class="result-buttons">
            <a href="${m}" download="converted_pages.zip" class="download-button">
              <i class="fas fa-download"></i> Download All Pages (ZIP)
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Convert Another File
            </button>
          </div>
        </div>
      `}catch(r){console.error("Conversion error:",r),i.innerHTML=`
        <div class="result-container">
          <h3>Conversion Failed</h3>
          <p>An error occurred during conversion. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function g(e){if(e===0)return"0 Bytes";const t=1024,l=["Bytes","KB","MB","GB"],a=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,a)).toFixed(2))+" "+l[a]}});
