const fs = require('fs');
const path = require('path');

const scriptContent = fs.readFileSync(
  path.join(__dirname, '..', 'public', 'dashboard-console-capture.js'),
  'utf8'
);

const scriptTag = `<script>${scriptContent}</script>`;

function injectScript(htmlPath) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  if (html.includes('dashboard-console-capture')) {
    return;
  }
  
  html = html.replace('</head>', `${scriptTag}</head>`);
  fs.writeFileSync(htmlPath, html);
  console.log(`Injected console capture into ${htmlPath}`);
}

const outDir = path.join(__dirname, '..', '.next', 'server', 'pages');

function findHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

findHtmlFiles(outDir);