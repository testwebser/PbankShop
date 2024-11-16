const fs = require('fs');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

// Build full CSS
async function buildCSS() {
    const css = fs.readFileSync('src/input.css', 'utf8');
    const result = await postcss([
        tailwindcss,
        autoprefixer,
        cssnano
    ]).process(css, { from: 'src/input.css', to: 'dist/output.css' });
    
    fs.writeFileSync('dist/output.css', result.css);
}

// Extract critical CSS
async function extractCriticalCSS() {
    // Add logic to extract critical CSS
    // You might want to use tools like critical or criticalcss
}

buildCSS();
extractCriticalCSS(); 