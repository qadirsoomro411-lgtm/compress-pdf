<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Compress PDF to 100KB Online Free - Guaranteed Target Size</title>
  <link rel="stylesheet" href="style.css">
  <!-- PDF.js & jsPDF Engines -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</head>
<body>
  <!-- Header with Logo -->
  <header class="header">
    <div class="container header-inner">
      <a href="#" class="logo">
        <div class="logo-icon">📄</div>
        <span>CompressPDF<span class="logo-badge">100KB</span></span>
      </a>
      <ul class="nav-links">
        <li><a href="#tool">Compress Tool</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#faqs">FAQs</a></li>
      </ul>
    </div>
  </header>

  <!-- Interactive Compressor Tool -->
  <section class="tool-section" id="tool">
    <div class="container">
      <div class="tool-card">
        <!-- Upload Box -->
        <div class="dropzone" id="dropzone">
          <input type="file" id="fileInput" accept=".pdf,application/pdf" style="display: none;">
          <h3>Drag & Drop your PDF file here</h3>
          <p>or click anywhere to browse from your device</p>
          <button type="button" class="btn-select-file">Choose PDF File</button>
        </div>

        <!-- File Settings (Target Size) -->
        <div class="file-view" id="fileView">
          <div class="file-info-header">
            <h4 id="fileNameDisplay">document.pdf</h4>
            <p id="fileMetaDisplay">Size: 1.4 MB</p>
            <button type="button" class="btn-change-file" id="btnChangeFile">Change File</button>
          </div>
          <!-- Presets -->
          <div class="presets-container">
            <button type="button" class="preset-chip" data-kb="50">50 KB</button>
            <button type="button" class="preset-chip active" data-kb="100">100 KB (Recommended)</button>
            <button type="button" class="preset-chip" data-kb="150">150 KB</button>
            <button type="button" class="preset-chip" data-kb="200">200 KB</button>
          </div>
          <!-- Action Button -->
          <button type="button" class="btn-compress-main" id="btnCompressMain">Compress PDF Now</button>
        </div>

        <!-- Progress Bar -->
        <div class="progress-view" id="progressView">
          <div class="spinner"></div>
          <h3 id="progressTitle">Analyzing & Compressing PDF...</h3>
          <p id="progressStatus">Calculating optimal resolution...</p>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" id="progressBarFill"></div>
          </div>
        </div>

        <!-- Download Results -->
        <div class="result-view" id="resultView">
          <div class="result-banner" id="resultBannerMsg"></div>
          <div class="comparison-grid">
            <div class="stat-card"><div class="stat-label">Original</div><div class="stat-value" id="statOriginal">-</div></div>
            <div class="stat-card"><div class="stat-label">Compressed</div><div class="stat-value highlight-green" id="statCompressed">-</div></div>
            <div class="stat-card"><div class="stat-label">Saved</div><div class="stat-value highlight-green" id="statReduction">-</div></div>
          </div>
          <div class="result-buttons">
            <a href="#" class="btn-download" id="btnDownload">Download Compressed PDF</a>
            <button type="button" class="btn-reset" id="btnReset">Compress Another File</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script src="app.js"></script>
</body>
</html>
