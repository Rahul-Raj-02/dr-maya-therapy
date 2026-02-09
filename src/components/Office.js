export default function Office() {
  return (
    <section className="py-24 bg-[#F4F1EA]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-serif text-[#2d3e30]">Our Santa Monica Sanctuary</h2>
          <p className="text-lg text-gray-700">
            Located at 123th Street 45 W, our office is designed to be a peaceful, 
            uncluttered environment where you can feel at ease.
          </p>
          <div className="pt-4 border-t border-gray-300">
            <p className="font-bold">Address:</p>
            <p className="text-gray-600">123th Street 45 W, Santa Monica, CA 90401</p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-[450px] rounded-t-full border-8 border-white shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
              alt="Therapy Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}