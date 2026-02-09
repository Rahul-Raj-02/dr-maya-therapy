export default function About() {
  return (
    <section className="py-24 bg-[#F4F1EA]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-20">
        
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-5xl font-serif text-[#2d3e30] leading-tight">
            A Safe Space to <br /> Explore and Grow
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Hi, I'm Dr. Maya. I believe that therapy is a collaborative journey. 
              My goal is to provide you with the tools and insights needed to 
              overcome life's hurdles.
            </p>
            <p className="italic font-medium">
              "Healing is not a destination, but a way of being."
            </p>
          </div>
          <button className="bg-[#2d3e30] text-white px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
            Learn More About My Method
          </button>
        </div>

       
        <div className="md:w-1/2">
          <div className="relative">
            
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#2d3e30] rounded-2xl -z-10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Dr. Maya at her clinic"
              className="rounded-2xl shadow-2xl w-full h-[550px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}