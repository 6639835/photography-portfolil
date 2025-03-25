import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-light tracking-wider mb-12 text-center">ABOUT ME</h1>
        
        {/* Photographer info */}
        <div className="mb-16">
          <div className="aspect-[1/1] w-48 h-48 rounded-full mx-auto mb-8 overflow-hidden bg-gray-800">
            {/* Replace with your actual photo */}
            <Image 
              src="/images/about/profile.jpg" 
              alt="Alec Soth" 
              width={192} 
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          
          <h2 className="text-2xl font-light tracking-wide text-center mb-4">Alec Soth</h2>
          
          <div className="prose prose-invert max-w-none opacity-80 leading-relaxed">
            <p className="mb-4">
              I am a dedicated photographer with a passion for capturing the extraordinary in everyday moments.
              Based in New York City, my work focuses on landscape, portrait, and street photography".
              Through my lens, I strive to reveal the hidden stories that surround us.
            </p>
            
            <p className="mb-4">
              My journey in photography began when I received my first camera 
              as a teenager. Since then, I've developed a style that combines dramatic lighting with minimalist composition.
            </p>
            
            <p>
              When I'm not photographing, I explore hiking trails, study art history, and teach photography workshops. These experiences
              continuously shape my perspective and enrich my visual storytelling.
            </p>
          </div>
        </div>
        
        {/* Photography philosophy */}
        <div className="mb-16">
          <h2 className="text-2xl font-light tracking-wide mb-6">MY APPROACH</h2>
          
          <div className="prose prose-invert max-w-none opacity-80 leading-relaxed">
            <p className="mb-4">
              My photography is guided by the interplay of light and shadow, authentic human connection, and finding beauty in simplicity.
              I believe that powerful images don't just show what something looks like—they reveal how it feels to be there.
            </p>
            
            <p>
              Each project begins with careful observation and patience, building rapport with subjects, and studying the location's unique qualities.
              This mindful approach allows me to create images that are both visually striking and emotionally resonant.
            </p>
          </div>
        </div>
        
        {/* Equipment */}
        <div>
          <h2 className="text-2xl font-light tracking-wide mb-6">EQUIPMENT</h2>
          
          <ul className="space-y-3 opacity-80">
            <li>• Sony Alpha a7 IV</li>
            <li>• Fujifilm X-T4</li>
            <li>• 24-70mm f/2.8</li>
            <li>• 50mm f/1.4</li>
            <li>• 85mm f/1.8</li>
            <li>• Profoto B10 lights, reflectors</li>
            <li>• Adobe Lightroom, Capture One Pro</li>
          </ul>
        </div>
        
        {/* Achievements or exhibitions - optional section */}
        <div className="mt-16">
          <h2 className="text-2xl font-light tracking-wide mb-6">RECOGNITION</h2>
          
          <ul className="space-y-3 opacity-80">
            <li>• [Exhibition or publication - e.g., "Solo exhibition: 'Perspectives' - Gallery Name, 2023"]</li>
            <li>• [Award or feature - e.g., "Finalist, International Photography Awards, 2022"]</li>
            <li>• [Publication - e.g., "Featured in [Magazine/Website Name], Summer 2021"]</li>
            <li>• [Collaboration - e.g., "Commercial work with [Brand/Company]"]</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 