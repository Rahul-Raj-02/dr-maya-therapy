export default function Specialist() {
  const services = [
    { 
      title: "Self Esteem", 
      desc: "Building a strong sense of self-worth is key to living a fulfilled life.",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400"
    },
    { 
      title: "Relationships", 
      desc: "Navigating relationships can be complex, I'm here to guide you.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
    },
    { 
      title: "Burnout", 
      desc: "Managing career-related stress is more common than you think.",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400"
    }
  ];

  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-16 font-serif text-[#2d3e30]">My Specialties</h2>
        
        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-56 h-56 rounded-full border-4 border-[#f4f1ea] shadow-lg overflow-hidden mb-6">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">{s.title}</h3>
              <p className="text-gray-600 italic px-4 leading-relaxed">
                "{s.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}