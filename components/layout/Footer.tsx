"use client";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-100 py-16 px-6 md:px-8 border-t border-slate-200 mt-auto pb-24 md:pb-16 font-display">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* LuxeStore Brand */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h3 className="font-black text-2xl tracking-tighter text-slate-900">LUXESTORE</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Curating the world&apos;s most exceptional products for your modern lifestyle. We provide sophisticated pieces for those who appreciate the finer things.
            </p>
            <div className="flex gap-5 text-slate-400 mt-2">
              <a href="#" className="hover:text-primary transition-all hover:scale-110">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="#" className="hover:text-primary transition-all hover:scale-110">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
              <a href="#" className="hover:text-primary transition-all hover:scale-110">
                <span className="material-symbols-outlined">camera</span>
              </a>
            </div>
          </div>

          {/* Links Grid - Expanded */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400">
                Collections
              </h4>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                New Arrivals
              </a>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Best Sellers
              </a>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Exclusive Sets
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400">
                Support
              </h4>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Bespoke Help
              </a>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Concierge Shipping
              </a>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Returns Policy
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400">
                Company
              </h4>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                About Us
              </a>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Sustainability
              </a>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Press
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400">
                Legal
              </h4>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
              <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © 2024 LUXESTORE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-slate-200 px-4 pb-safe pt-2 flex justify-around items-center z-50 h-[env(safe-area-inset-bottom,16px)+64px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <a className="flex flex-col items-center gap-1 text-primary scale-110" href="#">
          <span className="material-symbols-outlined fill-current">home</span>
          <span className="text-[9px] font-black uppercase tracking-tighter">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">category</span>
          <span className="text-[9px] font-black uppercase tracking-tighter">Collections</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">favorite</span>
          <span className="text-[9px] font-black uppercase tracking-tighter">Saved</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[9px] font-black uppercase tracking-tighter">Profile</span>
        </a>
      </nav>
    </>
  );
}
