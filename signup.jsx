import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Loader2,
  Star,
  Zap
} from 'lucide-react';

export default function BulkPhoneLookupSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call to register user
    setTimeout(() => {
      setIsLoading(false);
      // Redirect logic to dashboard would go here
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans text-gray-800" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      
      {/* Import the brand font dynamically */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`}
      </style>

      {/* Left Column: Signup Form */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 sm:px-12 lg:px-24 py-8 sm:py-12 lg:py-24 justify-center relative min-h-screen lg:min-h-0">
        
        {/* Mobile-only Top Header */}
        <div className="lg:hidden flex items-center gap-3 mb-10 sm:mb-16 absolute top-6 sm:top-10 left-6 sm:left-12">
          <div className="w-9 h-9 bg-[#01875f] rounded-xl flex items-center justify-center text-white shadow-md">
            <ShieldCheck size={20} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-extrabold text-[#202124] tracking-tight">BulkPhone<span className="text-[#01875f]">Lookup</span></span>
        </div>

        <div className="max-w-md w-full mx-auto mt-12 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8f0fe] text-[#01875f] text-xs font-bold uppercase tracking-wider mb-4 border border-[#01875f]/10">
            <Zap size={14} className="fill-current" /> 500 Free Credits Included
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202124] tracking-tight mb-2 sm:mb-3">Create your account</h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium mb-8 sm:mb-10">Stop guessing. Start scrubbing your lists with live carrier data today.</p>

          {/* Social Signup */}
          <button className="w-full bg-white border border-gray-200 text-[#202124] font-bold py-3.5 px-4 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow mb-6 sm:mb-8 text-sm sm:text-base">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>

          <div className="relative py-4 mb-4 sm:mb-2">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-3 bg-white text-gray-400 font-bold uppercase tracking-widest text-xs">or register with email</span></div>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSignup} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm font-bold text-[#202124] mb-1.5" htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-gray-200 text-[#202124] font-medium rounded-xl shadow-sm p-3.5 focus:ring-2 focus:ring-[#01875f]/30 focus:border-[#01875f] outline-none transition-all placeholder-gray-400 text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#202124] mb-1.5" htmlFor="email">Work Email</label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-200 text-[#202124] font-medium rounded-xl shadow-sm p-3.5 focus:ring-2 focus:ring-[#01875f]/30 focus:border-[#01875f] outline-none transition-all placeholder-gray-400 text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#202124] mb-1.5" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-200 text-[#202124] font-medium rounded-xl shadow-sm p-3.5 focus:ring-2 focus:ring-[#01875f]/30 focus:border-[#01875f] outline-none transition-all placeholder-gray-400 text-sm sm:text-base"
                required
                minLength={8}
              />
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#01875f] text-white font-bold py-3.5 px-4 rounded-xl hover:bg-[#016848] disabled:opacity-70 transition-all shadow-lg hover:shadow-[0_10px_20px_rgba(1,135,95,0.2)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isLoading ? (
                  <><Loader2 size={18} className="animate-spin shrink-0" /> Creating Account...</>
                ) : (
                  <>Create Free Account <ArrowRight size={18} className="shrink-0" /></>
                )}
              </button>
              <p className="text-center text-xs text-gray-400 font-semibold mt-3">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500 font-medium mt-8 sm:mt-10">
            Already have an account? <a href="#" className="text-[#01875f] font-bold hover:underline">Log in</a>
          </p>
        </div>
      </div>

      {/* Right Column: Visual / Social Proof */}
      <div className="hidden lg:flex w-1/2 bg-[#f8f9fa] border-l border-gray-100 p-12 xl:p-20 flex-col justify-between relative overflow-hidden">
        
        {/* BG Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#01875f]/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px]"></div>

        <div className="relative z-10">
          <a href="#" className="flex items-center gap-3 group inline-flex">
            <div className="w-10 h-10 bg-[#01875f] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <ShieldCheck size={22} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-extrabold text-[#202124] tracking-tight">BulkPhone<span className="text-[#01875f]">Lookup</span></span>
          </a>
        </div>

        {/* Feature / Value Display */}
        <div className="relative z-10 max-w-lg xl:max-w-xl mx-auto w-full my-auto py-12">
          
          <h2 className="text-3xl xl:text-4xl font-extrabold text-[#202124] mb-8 leading-tight">
            Stop guessing.<br/>Start verifying.
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#01875f] shrink-0">
                <CheckCircle2 size={20} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-[#202124] text-lg mb-1">Instant ROI</h4>
                <p className="text-sm text-gray-600 font-medium">Identify and remove landlines to stop wasting money on undeliverable SMS messages.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#01875f] shrink-0">
                <CheckCircle2 size={20} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-[#202124] text-lg mb-1">10DLC Protection</h4>
                <p className="text-sm text-gray-600 font-medium">Keep your bounce rates low and protect your Twilio trust scores from carrier violations.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#01875f] shrink-0">
                <CheckCircle2 size={20} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-[#202124] text-lg mb-1">No-Code Dashboard</h4>
                <p className="text-sm text-gray-600 font-medium">Easily drag and drop CSV files without needing a developer to build custom API integrations.</p>
              </div>
            </div>
          </div>

          {/* Social Proof Mini */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200/60">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#f8f9fa] bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">MR</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#f8f9fa] bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700">SJ</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#f8f9fa] bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-700">DT</div>
            </div>
            <div className="text-sm font-medium text-gray-600">
              Trusted by over <strong className="text-[#202124]">500+</strong> marketing agencies
            </div>
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-center text-sm font-bold text-gray-400 mt-auto">
          <span>&copy; 2026 TechDeck Labs</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#01875f] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#01875f] transition-colors">Terms</a>
          </div>
        </div>
      </div>

    </div>
  );
}
