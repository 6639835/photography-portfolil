import Image from "next/image";
import Link from 'next/link';

// Sample photo data - in a real app, this would come from a CMS or API
const photoSeries = [
  {
    id: 'nature',
    title: 'Nature',
    coverImage: '/images/nature-cover.jpg',
    description: 'Capturing the beauty of the natural world'
  },
  {
    id: 'urban',
    title: 'Urban',
    coverImage: '/images/urban-cover.jpg',
    description: 'City life through the lens'
  },
  {
    id: 'portraits',
    title: 'Portraits',
    coverImage: '/images/portrait-cover.jpg',
    description: 'Intimate portraits that tell a story'
  },
  {
    id: 'abstract',
    title: 'Abstract',
    coverImage: '/images/abstract-cover.jpg',
    description: 'Finding beauty in the abstract'
  }
];

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        <div className="absolute inset-0">
          {/* Hero background image */}
          <Image
            src="/images/hero.jpg" 
            alt="Photography hero image"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-[2] flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extralight tracking-wider mb-6">
            IMMERSIVE PHOTOGRAPHY
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto opacity-80">
            Capturing moments that tell stories and evoke emotions
          </p>
        </div>
      </section>

      {/* Gallery section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light tracking-wide mb-12 text-center">COLLECTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {photoSeries.map((series) => (
              <Link key={series.id} href={`/gallery/${series.id}`} className="group cursor-pointer relative overflow-hidden">
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-900">
                  {/* Collection image */}
                  <Image 
                    src={series.coverImage}
                    alt={series.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover gallery-image group-hover:opacity-90"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-light tracking-wide mt-2">{series.title}</h3>
                  <p className="text-sm opacity-70 mt-1">{series.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured photo section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light tracking-wide mb-12 text-center">FEATURED WORK</h2>
          <div className="aspect-[16/9] w-full relative overflow-hidden bg-gray-900">
            {/* Featured image */}
            <Image
              src="/images/featured.jpg"
              alt="Featured photography work"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-light tracking-wide">Mountain Reflections</h3>
            <p className="text-sm opacity-70 mt-2 max-w-2xl mx-auto">
              The still waters of the mountain lake perfectly mirror the majesty of the peaks.
              Captured at dawn to showcase the interplay of light and shadow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
