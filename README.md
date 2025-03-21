# Photography Portfolio

A modern, minimalist photography portfolio website built with Next.js and Tailwind CSS. This project focuses on creating an immersive, memorable browsing experience that puts the photography work front and center.

## Design Philosophy

- **Minimalist Design**: Clean, clutter-free interface that highlights the photography
- **Immersive Experience**: Full-screen browsing with subtle animations
- **Fast Loading**: Optimized for quick image loading and smooth transitions
- **Responsive**: Fully responsive design that works on all devices

## Key Features

- Gallery showcase with collections organized by theme
- About page with photographer information
- Contact form for inquiries
- Smooth animations and transitions
- Modern, elegant typography
- Black, white, and gray color scheme to highlight photo colors

## Tech Stack

- **Next.js**: React framework with server-side rendering
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library (can be added)

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
- `/src/components`: Reusable components
- `/public/images`: Photography images (placeholder gradients used in development)

## Customization

### Adding Real Images

Replace the placeholder gradients with actual images:

1. Add your images to the `/public/images` folder
2. Update the image paths in the components

### Modifying Content

Edit the content in each page file:

- `src/app/page.tsx`: Homepage and gallery
- `src/app/about/page.tsx`: About page 
- `src/app/contact/page.tsx`: Contact page

## Deployment

The easiest way to deploy this app is using the Vercel Platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fphotography-portfolio)

## License

This project is open source and available under the [MIT License](LICENSE).
