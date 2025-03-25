# Photography Images

This directory is where you should place your photography images for the portfolio website.

## Image Naming Conventions

For best organization, consider using a consistent naming convention for your images, such as:

- `collection-name-number.jpg` (e.g., `nature-01.jpg`, `urban-03.jpg`)
- Or organize by date: `YYYY-MM-DD-title.jpg`

## Image Optimization

For optimal performance:

1. Resize your images to appropriate dimensions before adding them
   - Gallery thumbnails: 800-1200px wide is usually sufficient
   - Full-screen images: 1920px wide maximum for most displays
   
2. Compress your images to reduce file size
   - Consider using tools like ImageOptim, TinyPNG, or Squoosh
   - Aim for a balance between quality and file size

3. Use modern image formats
   - Consider WebP format for better compression with good quality
   - Next.js Image component will help serve the optimal format

## Example Image Structure

For the portfolio collections, you might organize images like:

```
images/
├── nature/
│   ├── nature-01.jpg
│   ├── nature-02.jpg
│   └── ...
├── urban/
│   ├── urban-01.jpg
│   └── ...
├── portraits/
│   └── ...
└── abstract/
    └── ...
```

Or simply place all images in this directory and reference them by their filenames in your code.

## Adding Images to the Site

After adding images to this directory, update the image paths in:

- `/src/app/page.tsx` - For the home page collections
- `/src/app/gallery/page.tsx` - For the gallery page 