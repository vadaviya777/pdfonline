import"./main-DtJ3hseT.js";import{C as f}from"./convertapi-DZtGDAzA.js";document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("dropZone"),d=document.getElementById("file-input"),l=document.getElementById("uploadContent");i.addEventListener("dragover",e=>{e.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",e=>{e.preventDefault(),i.classList.remove("drag-over");const t=e.dataTransfer.files[0];t&&t.type==="application/pdf"?p(t):alert("Please select a PDF file.")}),d.addEventListener("change",()=>{const e=d.files[0];e&&p(e)});function p(e){l.innerHTML=`
      <div class="conversion-options-wrapper">
        <div class="selected-file">
          <i class="fas fa-file-pdf"></i> ${e.name} (${r(e.size)})
        </div>
        <div class="detailed-options">
          <h3 class="options-title">Compression Options</h3>
          
          <div class="option-group">
            <label for="compressionPreset">Compression Level</label>
            <select id="compressionPreset" class="option-select">
              <option value="none">Custom Settings</option>
              <option value="text">Text (Smallest Size)</option>
              <option value="web" selected>Web (Balanced)</option>
              <option value="ebook">E-book Quality</option>
              <option value="printer">Print Quality</option>
            </select>
            <p class="input-help">Choose a preset or customize settings below</p>
          </div>
          
          <div class="option-group">
            <label for="imageResolution">Image Resolution (DPI)</label>
            <select id="imageResolution" class="option-select">
              <option value="72">72 DPI (Screen)</option>
              <option value="150" selected>150 DPI (Web)</option>
              <option value="300">300 DPI (Print)</option>
              <option value="600">600 DPI (High Quality)</option>
            </select>
          </div>
          
          <div class="option-group">
            <label for="imageQuality">Image Quality</label>
            <select id="imageQuality" class="option-select">
              <option value="60">60% (Maximum Compression)</option>
              <option value="80" selected>80% (Recommended)</option>
              <option value="90">90% (High Quality)</option>
              <option value="100">100% (Original Quality)</option>
            </select>
          </div>

          <button id="compressButton" class="convert-button">
            <i class="fas fa-compress-arrows-alt"></i> Compress PDF
          </button>
        </div>
      </div>
    `,document.getElementById("compressButton").addEventListener("click",()=>{v(e)});const t=document.getElementById("compressionPreset"),s=document.getElementById("imageResolution"),o=document.getElementById("imageQuality");t.addEventListener("change",()=>{switch(t.value){case"text":s.value="72",o.value="60";break;case"web":s.value="150",o.value="80";break;case"ebook":s.value="300",o.value="90";break;case"printer":s.value="600",o.value="100";break}})}async function v(e){const t=document.getElementById("compressionPreset").value,s=document.getElementById("imageResolution").value,o=document.getElementById("imageQuality").value;l.innerHTML=`
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" style="width: 0%"></div>
        </div>
        <p class="progress-text">Starting compression...</p>
      </div>
    `;try{const a=f.auth("secret_ZbnqhsnKiovC8wpV"),n=a.createParams();n.add("File",e),n.add("StoreFile",!0),t!=="none"?n.add("CompressionPreset",t):(n.add("ImageResolution",parseInt(s)),n.add("ImageQuality",parseInt(o))),document.querySelector(".progress").style.width="50%",document.querySelector(".progress-text").textContent="Compressing PDF...";const u=await a.convert("pdf","compress",n),c=e.size,m=u.files[0].FileSize,g=((c-m)/c*100).toFixed(1);l.innerHTML=`
        <div class="result-container">
          <h3>PDF Compressed Successfully!</h3>
          <p>Original size: ${r(c)}</p>
          <p>Compressed size: ${r(m)}</p>
          <p>Reduced by ${g}%</p>
          <div class="result-buttons">
            <a href="${u.files[0].Url}" download="compressed.pdf" class="download-button">
              <i class="fas fa-download"></i> Download Compressed PDF
            </a>
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Compress Another File
            </button>
          </div>
        </div>
      `}catch(a){console.error("Compression error:",a),l.innerHTML=`
        <div class="result-container">
          <h3>Compression Failed</h3>
          <p>An error occurred during compression. Please try again.</p>
          <div class="result-buttons">
            <button onclick="location.reload()" class="start-over-button">
              <i class="fas fa-redo"></i> Try Again
            </button>
          </div>
        </div>
      `}}function r(e){if(e===0)return"0 Bytes";const t=1024,s=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,o)).toFixed(2))+" "+s[o]}});
