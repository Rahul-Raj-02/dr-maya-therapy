export default function Footer() {
  return (
    <footer className="bg-[#2d3e30] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
      
        <div className="space-y-4">
          <h3 className="text-2xl font-serif">Dr. Maya Reynolds</h3>
          <p className="text-gray-300 text-sm">Helping you live your life in full bloom.</p>
        </div>

        
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-sm">Navigation</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Specialties</a></li>
            <li><a href="#" className="hover:text-white">Office</a></li>
          </ul>
        </div>

       
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-sm">Contact</h4>
          <p className="text-gray-300">hello@drmaya.com</p>
          <p className="text-gray-300">Santa Monica, CA</p>
        </div>

      </div>
      <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-xs">
        © 2026 Dr. Maya Reynolds. All rights reserved.
      </div>
    </footer>
  );
}