#!/usr/bin/env node
/**
 * Script para exportar la guía de usuario de QGroundControl a PDF
 *
 * Uso: node export-user-guide-pdf.js
 *
 * Este script combina todos los archivos Markdown de la guía de usuario
 * y los convierte a un único PDF usando pandoc o wkhtmltopdf.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DOCS_DIR = path.join(__dirname, 'en');
const ASSETS_DIR = path.join(__dirname, 'assets');
const OUTPUT_MD = path.join(__dirname, 'QGroundControl-User-Guide.md');
const OUTPUT_HTML = path.join(__dirname, 'QGroundControl-User-Guide.html');
const OUTPUT_PDF = path.join(__dirname, 'QGroundControl-User-Guide.pdf');

// Orden de los documentos basado en SUMMARY.md (solo user-guide)
const documentOrder = [
  'qgc-user-guide/index.md',
  'qgc-user-guide/getting_started/quick_start.md',
  'qgc-user-guide/getting_started/download_and_install.md',
  'qgc-user-guide/support/support.md',
  'qgc-user-guide/fly_view/fly_view.md',
  'qgc-user-guide/fly_view/fly_view_toolbar.md',
  'qgc-user-guide/fly_view/fly_tools.md',
  'qgc-user-guide/fly_view/instrument_panel.md',
  'qgc-user-guide/fly_view/hud.md',
  'qgc-user-guide/fly_view/camera_tools.md',
  'qgc-user-guide/fly_view/video.md',
  'qgc-user-guide/fly_view/video_overlay.md',
  'qgc-user-guide/fly_view/replay_flight_data.md',
  'qgc-user-guide/custom_actions/custom_actions.md',
  'qgc-user-guide/viewer_3d/viewer_3d.md',
  'qgc-user-guide/plan_view/plan_view.md',
  'qgc-user-guide/plan_view/plan_geofence.md',
  'qgc-user-guide/plan_view/plan_rally_points.md',
  'qgc-user-guide/plan_view/pattern.md',
  'qgc-user-guide/plan_view/pattern_survey.md',
  'qgc-user-guide/plan_view/pattern_structure_scan_v2.md',
  'qgc-user-guide/plan_view/pattern_corridor_scan.md',
  'qgc-user-guide/plan_view/pattern_fixed_wing_landing.md',
  'qgc-user-guide/plan_view/pattern_presets.md',
  'qgc-user-guide/setup_view/setup_view.md',
  'qgc-user-guide/setup_view/firmware.md',
  'qgc-user-guide/setup_view/airframe.md',
  'qgc-user-guide/setup_view/airframe_ardupilot.md',
  'qgc-user-guide/setup_view/airframe_px4.md',
  'qgc-user-guide/setup_view/radio.md',
  'qgc-user-guide/setup_view/sensors.md',
  'qgc-user-guide/setup_view/sensors_ardupilot.md',
  'qgc-user-guide/setup_view/sensors_px4.md',
  'qgc-user-guide/setup_view/flight_modes.md',
  'qgc-user-guide/setup_view/flight_modes_ardupilot.md',
  'qgc-user-guide/setup_view/flight_modes_px4.md',
  'qgc-user-guide/setup_view/power.md',
  'qgc-user-guide/setup_view/motors.md',
  'qgc-user-guide/setup_view/motors_ardusub.md',
  'qgc-user-guide/setup_view/safety.md',
  'qgc-user-guide/setup_view/safety_ardupilot.md',
  'qgc-user-guide/setup_view/tuning.md',
  'qgc-user-guide/setup_view/tuning_ardupilot.md',
  'qgc-user-guide/setup_view/tuning_arducopter.md',
  'qgc-user-guide/setup_view/tuning_ardusub.md',
  'qgc-user-guide/setup_view/tuning_px4.md',
  'qgc-user-guide/setup_view/camera.md',
  'qgc-user-guide/setup_view/joystick.md',
  'qgc-user-guide/setup_view/parameters.md',
  'qgc-user-guide/settings_view/settings_view.md',
  'qgc-user-guide/settings_view/general.md',
  'qgc-user-guide/settings_view/csv.md',
  'qgc-user-guide/settings_view/offline_maps.md',
  'qgc-user-guide/settings_view/mavlink.md',
  'qgc-user-guide/settings_view/console_logging.md',
  'qgc-user-guide/settings_view/virtual_joystick.md',
  'qgc-user-guide/analyze_view/index.md',
  'qgc-user-guide/analyze_view/log_download.md',
  'qgc-user-guide/analyze_view/geotag_images.md',
  'qgc-user-guide/analyze_view/mavlink_console.md',
  'qgc-user-guide/analyze_view/mavlink_inspector.md',
  'qgc-user-guide/releases/index.md',
  'qgc-user-guide/releases/release_notes.md',
  'qgc-user-guide/releases/release_note_stable_v4.md',
  'qgc-user-guide/releases/release_note_stable_v3.md',
  'qgc-user-guide/releases/daily_builds.md',
  'qgc-user-guide/releases/daily_build_new_features.md',
  'qgc-user-guide/releases/privacy_policy.md',
  'qgc-user-guide/troubleshooting/index.md',
  'qgc-user-guide/troubleshooting/qgc_setup.md',
  'qgc-user-guide/troubleshooting/qgc_usage.md',
  'qgc-user-guide/troubleshooting/vehicle_connection.md',
  'qgc-user-guide/troubleshooting/parameter_download.md',
  'qgc-user-guide/troubleshooting/plan_upload_download.md',
  'qgc-user-guide/troubleshooting/resume_mission.md',
];

function fixImagePaths(content, docPath) {
  const docDir = path.dirname(docPath);

  // Patrón para imágenes markdown: ![alt](path)
  content = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, imgPath) => {
    if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
      return match;
    }

    let absolutePath;
    if (imgPath.startsWith('/')) {
      // Ruta absoluta desde raíz de docs
      absolutePath = path.join(__dirname, imgPath);
    } else if (imgPath.startsWith('../')) {
      // Ruta relativa hacia arriba
      absolutePath = path.resolve(docDir, imgPath);
    } else {
      absolutePath = path.resolve(docDir, imgPath);
    }

    if (fs.existsSync(absolutePath)) {
      return `![${alt}](file://${absolutePath})`;
    }

    // Buscar en assets
    const imgName = path.basename(imgPath);
    const possiblePaths = [
      path.join(ASSETS_DIR, imgName),
      path.join(ASSETS_DIR, 'qgc-user-guide', imgName),
      path.join(__dirname, 'public', imgName),
    ];

    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        return `![${alt}](file://${p})`;
      }
    }

    console.log(`    Imagen no encontrada: ${imgPath}`);
    return match;
  });

  return content;
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : null;
}

function combineMarkdownFiles() {
  console.log('Combinando archivos Markdown...\n');

  let combinedContent = `# QGroundControl User Guide

**Versión**: ${new Date().toISOString().split('T')[0]}

---

## Tabla de Contenidos

`;

  // Generar tabla de contenidos
  let tocEntries = [];
  for (const docPath of documentOrder) {
    const fullPath = path.join(DOCS_DIR, docPath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const title = extractTitle(content) || path.basename(docPath, '.md');
      tocEntries.push(`- ${title}`);
    }
  }
  combinedContent += tocEntries.join('\n') + '\n\n---\n\n';

  let filesProcessed = 0;
  let filesSkipped = 0;

  for (const docPath of documentOrder) {
    const fullPath = path.join(DOCS_DIR, docPath);

    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf-8');

      // Remover frontmatter YAML
      content = content.replace(/^---[\s\S]*?---\n*/m, '');

      // Arreglar rutas de imágenes
      content = fixImagePaths(content, fullPath);

      // Agregar separador y contenido
      combinedContent += '\n\n<div style="page-break-after: always;"></div>\n\n';
      combinedContent += content;
      combinedContent += '\n';

      filesProcessed++;
      console.log(`  ✓ ${docPath}`);
    } else {
      filesSkipped++;
      console.log(`  ✗ ${docPath} (no encontrado)`);
    }
  }

  fs.writeFileSync(OUTPUT_MD, combinedContent);
  console.log(`\n✓ Archivo Markdown combinado: ${OUTPUT_MD}`);
  console.log(`  - Archivos procesados: ${filesProcessed}`);
  console.log(`  - Archivos omitidos: ${filesSkipped}`);

  return OUTPUT_MD;
}

function convertToPdfWithPandoc(markdownFile) {
  console.log('\nConvirtiendo a PDF con pandoc...');

  try {
    const cmd = `pandoc "${markdownFile}" -o "${OUTPUT_PDF}" ` +
      `--from markdown ` +
      `--to pdf ` +
      `-V geometry:margin=2cm ` +
      `-V fontsize=11pt ` +
      `--toc ` +
      `--toc-depth=2 ` +
      `-V colorlinks=true ` +
      `-V linkcolor=blue ` +
      `--highlight-style=tango`;

    execSync(cmd, { stdio: 'inherit', cwd: __dirname });
    console.log(`\n✓ PDF generado: ${OUTPUT_PDF}`);
    return true;
  } catch (error) {
    console.log('Pandoc PDF falló (puede necesitar LaTeX)');
    return false;
  }
}

function convertToHtmlThenPdf(markdownFile) {
  console.log('\nConvirtiendo a HTML y luego a PDF con wkhtmltopdf...');

  try {
    // Primero convertir a HTML con pandoc
    const htmlCmd = `pandoc "${markdownFile}" -o "${OUTPUT_HTML}" ` +
      `--from markdown ` +
      `--to html5 ` +
      `--standalone ` +
      `--toc ` +
      `--toc-depth=2 ` +
      `--metadata title="QGroundControl User Guide" ` +
      `--css=- ` +
      `--embed-resources`;

    // CSS inline para mejor formato
    const css = `
<style>
  body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
  h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
  h2 { color: #34495e; margin-top: 30px; }
  h3 { color: #7f8c8d; }
  code { background-color: #f4f4f4; padding: 2px 6px; border-radius: 3px; }
  pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
  img { max-width: 100%; height: auto; }
  table { border-collapse: collapse; width: 100%; margin: 20px 0; }
  th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
  th { background-color: #3498db; color: white; }
  a { color: #3498db; }
  blockquote { border-left: 4px solid #3498db; margin: 0; padding-left: 20px; color: #666; }
</style>`;

    execSync(`pandoc "${markdownFile}" -o "${OUTPUT_HTML}" --from markdown --to html5 --standalone --toc --toc-depth=2 --metadata title="QGroundControl User Guide"`, {
      stdio: 'inherit',
      cwd: __dirname
    });

    // Inyectar CSS en el HTML
    let htmlContent = fs.readFileSync(OUTPUT_HTML, 'utf-8');
    htmlContent = htmlContent.replace('</head>', css + '\n</head>');
    fs.writeFileSync(OUTPUT_HTML, htmlContent);

    console.log(`  ✓ HTML generado: ${OUTPUT_HTML}`);

    // Convertir HTML a PDF con wkhtmltopdf
    const pdfCmd = `wkhtmltopdf ` +
      `--enable-local-file-access ` +
      `--page-size A4 ` +
      `--margin-top 20mm ` +
      `--margin-bottom 20mm ` +
      `--margin-left 15mm ` +
      `--margin-right 15mm ` +
      `--footer-center "[page] / [topage]" ` +
      `--footer-font-size 9 ` +
      `"${OUTPUT_HTML}" "${OUTPUT_PDF}"`;

    execSync(pdfCmd, { stdio: 'inherit', cwd: __dirname });

    console.log(`\n✓ PDF generado: ${OUTPUT_PDF}`);
    return true;
  } catch (error) {
    console.error('Error al convertir:', error.message);
    return false;
  }
}

// Main
console.log('═'.repeat(55));
console.log('  Exportador de Guía de Usuario QGroundControl a PDF');
console.log('═'.repeat(55));
console.log('');

const markdownFile = combineMarkdownFiles();

// Intentar primero con pandoc directo a PDF
if (!convertToPdfWithPandoc(markdownFile)) {
  // Si falla, usar wkhtmltopdf
  convertToHtmlThenPdf(markdownFile);
}

console.log('\n' + '═'.repeat(55));
console.log('  Proceso completado');
console.log('═'.repeat(55));
console.log(`\nArchivos generados en: ${__dirname}`);
console.log(`  - Markdown: QGroundControl-User-Guide.md`);
console.log(`  - PDF: QGroundControl-User-Guide.pdf`);
