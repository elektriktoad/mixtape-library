# Images Directory

This directory contains all the tape cover artwork for your mixtape library.

## File Naming Convention

Each tape should have images named according to its metadata file:

- **Front image**: `tape-slug-front.jpg` (or `.png`)
- **Back image** (optional): `tape-slug-back.jpg` (or `.png`)

For example, if your tape metadata file is `_tapes/midnight-dreaming.md`, the images should be:
- `midnight-dreaming-front.jpg`
- `midnight-dreaming-back.jpg` (optional)

## Image Guidelines

### Recommended Specifications

- **Format**: JPEG or PNG
- **Resolution**: 800x800 pixels minimum (1200x1200 for best quality)
- **Aspect Ratio**: Square (1:1) works best for grid layouts
- **File Size**: Keep under 500KB per image for fast loading
- **Color Space**: sRGB

### Scanning Tips

1. **Scan at 300 DPI or higher** for best quality
2. **Crop tightly** around the cassette case or J-card
3. **Adjust brightness/contrast** if needed for clarity
4. **Save as JPEG** with 85-90% quality for good balance of size/quality
5. **Use consistent lighting** when photographing tapes

### Image Optimization

Before uploading, consider optimizing images with tools like:
- [TinyPNG](https://tinypng.com/) - for PNG compression
- [JPEGmini](https://www.jpegmini.com/) - for JPEG compression
- ImageOptim (Mac) or FileOptimizer (Windows) - for batch processing

## Adding New Images

1. Scan or photograph your tape cover
2. Save with the correct filename (matching your tape's slug)
3. Place in this `/images/` directory
4. Reference in your tape's markdown file:
   ```yaml
   front_image: "your-tape-slug-front.jpg"
   back_image: "your-tape-slug-back.jpg"
   ```

## Placeholder Images

If you don't have an image for a tape yet, you can:
- Leave the `front_image` field empty in the tape metadata
- The template will display a gray placeholder
- Add the actual image later without changing any code

## Sample Images

This template includes placeholder references to sample images:
- `midnight-dreaming-front.jpg`
- `midnight-dreaming-back.jpg`
- `underground-frequencies-front.jpg`
- `summer-vibes-99-front.jpg`
- `summer-vibes-99-back.jpg`
- `sonic-experiments-front.jpg`

Replace these with your own scanned tape images.

---

**Tip**: Keep original, high-resolution scans in a separate backup folder. Use compressed versions for the website.
