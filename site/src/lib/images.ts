// Photo lookup for Astro's image pipeline.
//
// The photos live in src/images/ so `astro:assets` can process them (WebP +
// responsive srcset + intrinsic dimensions). Content files still refer to them
// by their old public path ("/images/foo.jpg"), which keeps the data layer free
// of build-tool imports; this resolves those strings to the real asset.
//
// Logos stay in public/img/ — they are small transparent PNGs that gain nothing
// from conversion and are referenced directly by Nav/Footer.

import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/images/*.jpg', {
  eager: true,
});

/**
 * Resolve a "/images/foo.jpg" content path to its processed asset.
 * Throws at build time on a typo or a deleted file, so a broken reference can
 * never ship as a silently missing image.
 */
export function img(path: string): ImageMetadata {
  const key = path.replace(/^\/images\//, '/src/images/');
  const mod = files[key];
  if (!mod) {
    throw new Error(
      `img(): no asset for "${path}". Expected ${key}. ` +
        `Available: ${Object.keys(files).length} files in src/images/.`,
    );
  }
  return mod.default;
}
