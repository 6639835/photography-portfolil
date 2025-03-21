export default function AboutPage() {
  return (
    <div className="fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-light tracking-wider mb-12 text-center">ABOUT ME</h1>
        
        {/* Photographer info */}
        <div className="mb-16">
          <div className="aspect-[1/1] w-48 h-48 rounded-full mx-auto mb-8 overflow-hidden bg-gray-800">
            {/* Placeholder for photographer photo */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
          </div>
          
          <h2 className="text-2xl font-light tracking-wide text-center mb-4">Jane Doe</h2>
          
          <div className="prose prose-invert max-w-none opacity-80 leading-relaxed">
            <p className="mb-4">
              I am a passionate photographer based in New York, specializing in landscape and portrait photography. 
              With over 10 years of experience, I've developed a unique perspective that allows me to 
              capture the essence of my subjects.
            </p>
            
            <p className="mb-4">
              My work has been featured in several prestigious galleries and publications, including 
              National Geographic, Vogue, and The New York Times. I believe that photography is more than 
              just taking pictures – it's about telling stories and evoking emotions.
            </p>
            
            <p>
              When I'm not behind the camera, you can find me exploring new locations, experimenting with 
              different techniques, or mentoring aspiring photographers. I'm always looking for new challenges 
              and opportunities to push the boundaries of my craft.
            </p>
          </div>
        </div>
        
        {/* Photography philosophy */}
        <div className="mb-16">
          <h2 className="text-2xl font-light tracking-wide mb-6">MY APPROACH</h2>
          
          <div className="prose prose-invert max-w-none opacity-80 leading-relaxed">
            <p className="mb-4">
              I believe in capturing authentic moments that tell powerful stories. My minimalist approach 
              focuses on the subject, using light and composition to create striking images that resonate 
              with viewers.
            </p>
            
            <p>
              Every photograph is a careful balance of technical precision and artistic expression. 
              I meticulously plan each shoot while remaining open to spontaneous, unexpected moments 
              that often result in the most compelling images.
            </p>
          </div>
        </div>
        
        {/* Equipment */}
        <div>
          <h2 className="text-2xl font-light tracking-wide mb-6">EQUIPMENT</h2>
          
          <ul className="space-y-3 opacity-80">
            <li>• Sony Alpha a7R IV</li>
            <li>• Canon EOS R5</li>
            <li>• Various prime lenses (24mm, 35mm, 50mm, 85mm)</li>
            <li>• Professional lighting equipment</li>
            <li>• Adobe Lightroom & Photoshop for post-processing</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 