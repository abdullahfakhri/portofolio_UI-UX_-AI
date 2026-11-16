import sizes from '../data/imageSizes.json';

// Maps an original asset path (as written in portfolioData.js) to its resized
// WebP copy in /assets/opt, with width/height so the browser can reserve space
// before the file arrives. 'card' is the small cover used in cards and menus;
// 'full' is for the project page. Unknown paths fall back to the original.
//
// The WebP files and imageSizes.json are generated from the originals; re-run
// the conversion after adding or replacing an image.
export function img(src, variant = 'full') {
  const entry = sizes[src]?.[variant] || sizes[src]?.full;
  return entry || { src };
}
