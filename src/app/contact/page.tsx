export default function ContactPage() {
  return (
    <div className="fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-light tracking-wider mb-12 text-center">CONTACT</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-light tracking-wide mb-6">GET IN TOUCH</h2>
            
            <div className="space-y-6 opacity-80">
              <p className="leading-relaxed">
                Interested in working together or have questions about my photography? 
                Feel free to reach out using the contact form or directly through 
                the contact information below.
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>info@photographyportfolio.com</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Studio Address</p>
                  <p>123 Photo Street</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-light mb-4">FOLLOW ME</h3>
                <div className="flex space-x-4">
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Instagram</a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Facebook</a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Pinterest</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-light text-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/30"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-4 font-light tracking-wide transition-opacity hover:opacity-90"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 