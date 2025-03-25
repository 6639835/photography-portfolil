# Photography Portfolio

A modern, minimalist photography portfolio website built with Next.js and Tailwind CSS. This project focuses on creating an immersive, memorable browsing experience that puts the photography work front and center.

## Design Philosophy

- **Minimalist Design**: Clean, clutter-free interface that highlights the photography
- **Immersive Experience**: Full-screen browsing with subtle animations
- **Fast Loading**: Optimized for quick image loading and smooth transitions
- **Responsive**: Fully responsive design that works on all devices

## Key Features

- Gallery showcase with collections organized by theme
- Collection-specific galleries
- About page with photographer information
- Contact form for inquiries
- Smooth animations and transitions
- Modern, elegant typography
- Black, white, and gray color scheme to highlight photo colors

## Tech Stack

- **Next.js**: React framework with server-side rendering
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions and effects

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/app`: Main application pages
  - `/src/app/page.tsx`: Homepage with hero section and collections
  - `/src/app/gallery/page.tsx`: Main gallery page
  - `/src/app/gallery/[collection]/page.tsx`: Collection-specific gallery pages
  - `/src/app/about/page.tsx`: About page
  - `/src/app/contact/page.tsx`: Contact page
- `/src/components`: Reusable components
  - `/src/components/PhotoModal.tsx`: Fullscreen photo modal
  - `/src/components/GalleryImage.tsx`: Gallery image component
- `/public/images`: Photography images

## Customization Guide

### 1. Adding Your Photos

Place your photos in the `/public/images/` directory:

- **Homepage Hero**: Add a hero image at `/public/images/hero.jpg`
- **Featured Image**: Add a featured image at `/public/images/featured.jpg`
- **Collection Covers**: Add collection cover images at `/public/images/nature-cover.jpg`, `/public/images/urban-cover.jpg`, etc.
- **Gallery Photos**: Add gallery photos with appropriate names

For collection-specific photos, you can organize them in subdirectories:
```
/public/images/nature/nature-1.jpg
/public/images/urban/urban-1.jpg
etc.
```

### 2. Updating Collection Data

Edit the collections and photos in `src/app/gallery/[collection]/page.tsx`:

```typescript
// Collection data
const collections = {
  nature: {
    title: 'Your Custom Title',
    description: 'Your custom description'
  },
  // Add more collections...
};

// Photo data
const allPhotos = {
  nature: [
    {
      id: 'nature-1',
      title: 'Your Photo Title',
      description: 'Your photo description',
      date: 'Month Year',
      src: '/images/your-image-path.jpg',
      alt: 'Accessibility description',
    },
    // Add more photos...
  ],
  // Add more collection photos...
};
```

### 3. Customizing Your Profile

Edit the About page in `src/app/about/page.tsx`:
- Update your name, bio, and photography philosophy
- Add your own profile photo
- Customize your equipment list

### 4. Styling

The site uses Tailwind CSS for styling. You can customize:
- Colors: Edit the color variables in `globals.css`
- Typography: Update font styles in the Tailwind config
- Layout: Modify spacing and grid layouts in individual components

## Deployment

The easiest way to deploy this app is using the Vercel Platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fphotography-portfolio)

## License

This project is open source and available under the [MIT License](LICENSE).
