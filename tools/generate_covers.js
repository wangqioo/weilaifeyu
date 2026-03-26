#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const apiKey = process.env.AI_GATEWAY_API_KEY;
if (!apiKey) {
  throw new Error('AI_GATEWAY_API_KEY environment variable is required. Please set it with your AI Gateway API key.');
}

const API_BASE = 'https://ai-gateway.happycapy.ai/api/v1';

async function generateImage(prompt, outputPath, targetWidth = 900, targetHeight = 383) {
  try {
    console.log(`Generating: ${path.basename(outputPath)}`);
    console.log(`Prompt: ${prompt.substring(0, 80)}...`);

    // Generate at 2K resolution (2048x2048), then we'll resize
    const response = await fetch(`${API_BASE}/images/generations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Origin': 'https://trickle.so'
      },
      body: JSON.stringify({
        model: 'google/gemini-3.1-flash-image-preview',
        prompt: `${prompt}. Aspect ratio 2.35:1, horizontal landscape format`,
        response_format: 'b64_json',
        size: '2K',
        n: 1
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText}\n${errorText}`);
    }

    const result = await response.json();

    if (!result.data || !result.data[0] || !result.data[0].b64_json) {
      throw new Error('No image data in response');
    }

    const imageBuffer = Buffer.from(result.data[0].b64_json, 'base64');
    const tempPath = outputPath.replace('.png', '_temp.png');
    fs.writeFileSync(tempPath, imageBuffer);

    // Resize using ImageMagick convert command
    await new Promise((resolve, reject) => {
      const convert = spawn('convert', [
        tempPath,
        '-resize', `${targetWidth}x${targetHeight}^`,
        '-gravity', 'center',
        '-extent', `${targetWidth}x${targetHeight}`,
        outputPath
      ]);

      convert.on('close', (code) => {
        fs.unlinkSync(tempPath); // Clean up temp file
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`ImageMagick convert failed with code ${code}`));
        }
      });

      convert.on('error', (err) => {
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        reject(err);
      });
    });

    console.log(`✓ Saved: ${outputPath}\n`);
    return true;
  } catch (error) {
    console.error(`✗ Error generating ${path.basename(outputPath)}:`, error.message);
    return false;
  }
}

async function main() {
  const outputDir = '/home/node/a0/workspace/0dcb979e-2eea-4d05-b256-65cbfe82d97c/workspace/outputs';

  const images = [
    {
      name: 'cover-quantu.png',
      prompt: "Minimalist dark navy magazine cover with abstract world map grid lines in forest green, geometric data visualization, Chinese text '全图' prominently displayed, clean editorial design, no people, professional newsletter aesthetic"
    },
    {
      name: 'cover-jiangzao.png',
      prompt: "Minimalist dark navy magazine cover with abstract signal wave emerging from static noise in warm gold color, geometric line art, Chinese text '降噪' prominently displayed, clean editorial design, professional newsletter aesthetic"
    },
    {
      name: 'cover-yanjin.png',
      prompt: "Minimalist dark navy magazine cover with abstract geological strata layers in deep blue tones, timeline visualization, Chinese text '演进' prominently displayed, clean editorial design, professional newsletter aesthetic"
    },
    {
      name: 'cover-yexiang.png',
      prompt: "Minimalist dark navy magazine cover with abstract network graph constellation of connected nodes in purple, data visualization style, Chinese text '业相' prominently displayed, clean editorial design, professional newsletter aesthetic"
    },
    {
      name: 'cover-guidang.png',
      prompt: "Minimalist dark navy magazine cover with abstract document filing layers cross-section in warm red accent, geometric archive visualization, Chinese text '归档实录' prominently displayed, clean editorial design, professional newsletter aesthetic"
    },
    {
      name: 'cover-all.png',
      prompt: "Minimalist dark navy magazine cover with abstract circuit board merged with architectural blueprint in white lines, experimental lab aesthetic, Chinese text 'ALL未来所' prominently displayed, clean editorial design, professional newsletter aesthetic"
    }
  ];

  console.log('=== Starting Image Generation for 未来法域 ===\n');
  console.log(`Total images to generate: ${images.length}`);
  console.log(`Output directory: ${outputDir}\n`);

  let successCount = 0;

  for (const img of images) {
    const outputPath = path.join(outputDir, img.name);
    const success = await generateImage(img.prompt, outputPath);
    if (success) successCount++;
  }

  console.log('=== Generation Complete ===');
  console.log(`Successfully generated: ${successCount}/${images.length} images`);

  if (successCount < images.length) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
