// Run this in the browser console to download all files as a zip
const JSZip = window.JSZip || (() => {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
  document.head.appendChild(script);
  return new Promise(resolve => {
    script.onload = () => resolve(window.JSZip);
  });
})();

async function downloadProject() {
  const zip = new JSZip();
  
  // Add all project files
  const files = {
    'package.json': `{
  "name": "joe-kleve-cybersecurity-portfolio",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.8",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3",
    "react-type-animation": "^3.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}`,
    'README.md': `# Joe Kleve - Cybersecurity Portfolio

A modern, cyberpunk-themed portfolio website showcasing cybersecurity expertise, projects, and professional achievements.

## Features

- Modern React with TypeScript
- Cyberpunk/terminal aesthetic
- Responsive design
- Framer Motion animations
- Project showcase
- Certification display

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
\`\`\`

## Deploy

The site is configured for deployment on Netlify with the included \`_redirects\` file.
`
  };
  
  // Add each file to zip
  Object.entries(files).forEach(([path, content]) => {
    zip.file(path, content);
  });
  
  // Generate and download
  const content = await zip.generateAsync({type: "blob"});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(content);
  link.download = 'joe-kleve-portfolio.zip';
  link.click();
}

// Run the download
downloadProject();