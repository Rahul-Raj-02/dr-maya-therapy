export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 max-w-6xl mx-auto gap-12">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-6xl font-serif text-[#2d3e30] leading-tight">
          Live your life <br /> in full bloom
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Dr. Maya Reynolds is a licensed clinical psychologist based in Santa Monica, 
          offering therapy for adults who feel overwhelmed by anxiety or stress.
        </p>
        <button className="border-b-2 border-black pb-1 font-medium hover:text-gray-500 transition-colors">
          CONNECT WITH ME —
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center">
    
        <div className="w-80 h-[450px] rounded-t-full border-8 border-white shadow-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=900" 
            alt="Dr. Maya Reynolds"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}