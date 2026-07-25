const fs = require('fs');
const path = require('path');

const SITE_URL = "https://kambaimports.com";

const filesToUpdate = [
  {
    path: 'src/pages/productos/Relojes.tsx',
    name: 'Relojes',
    slug: 'relojes'
  },
  {
    path: 'src/pages/productos/Bebidas.tsx',
    name: 'Bebidas Premium',
    slug: 'bebidas'
  },
  {
    path: 'src/pages/productos/Camaras.tsx',
    name: 'Cámaras Fotográficas',
    slug: 'camaras'
  },
  {
    path: 'src/pages/productos/CelularesNotebooks.tsx',
    name: 'Celulares y Notebooks',
    slug: 'celulares-notebooks'
  },
  {
    path: 'src/pages/productos/Consolas.tsx',
    name: 'Consolas',
    slug: 'consolas'
  },
  {
    path: 'src/pages/productos/HardwareMineria.tsx',
    name: 'Hardware & Minería',
    slug: 'hardware-mineria'
  }
];

filesToUpdate.forEach(fileInfo => {
  const filePath = path.join(__dirname, fileInfo.path);
  let content = fs.readFileSync(filePath, 'utf8');

  const breadcrumbScript = `        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": SITE_URL
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Productos",
                "item": \`\${SITE_URL}/productos\`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "${fileInfo.name}",
                "item": \`\${SITE_URL}/productos/${fileInfo.slug}\`
              }
            ]
          })}
        </script>
`;

  // Find the exact canonical link line
  const canonicalRegex = /(<link rel="canonical" href=\{`\$\{SITE_URL\}\/productos\/[^`]+`\} \/>\n)/;
  if (canonicalRegex.test(content) && !content.includes("BreadcrumbList")) {
    content = content.replace(canonicalRegex, `$1${breadcrumbScript}`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${fileInfo.path}`);
  } else {
    console.log(`Failed or already updated ${fileInfo.path}`);
  }
});
