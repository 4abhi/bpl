import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Play, 
  Smartphone, 
  PhoneOff, 
  CheckCircle2, 
  Database,
  BarChart3,
  ArrowRight,
  Menu,
  X,
  Star,
  ChevronDown,
  AlertOctagon,
  XCircle,
  Zap,
  Search,
  Lock,
  Loader2,
  Globe,
  User,
  RefreshCw,
  PhoneForwarded,
  Activity,
  ShieldAlert
} from 'lucide-react';

export default function BulkPhoneLookupLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  
  // State for Live Demo
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [lookupState, setLookupState] = useState('sample'); // 'sample', 'loading', 'locked'

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLookup = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() !== '') {
      setShowSignupModal(false); // Hide if already open
      setLookupState('loading');
      
      // Simulate API call delay
      setTimeout(() => {
        setLookupState('locked');
        setShowSignupModal(true);
      }, 1500);
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    
    // Allow user to easily clear the input when deleting the prefix
    if (input === '' || input === '+1' || input === '+1 ' || input === '+') {
      setPhoneNumber('');
      return;
    }

    // Strip all non-digit characters
    const digits = input.replace(/\D/g, '');

    if (digits.length === 0) {
      setPhoneNumber('');
      return;
    }

    let formatted = '+1 ';
    let coreDigits = digits;

    // Remove the leading 1 if the user typed it, since we auto-prepend +1
    if (digits.startsWith('1')) {
      coreDigits = digits.substring(1);
    }

    if (coreDigits.length === 0) {
      setPhoneNumber(formatted);
      return;
    }

    // Apply the (XXX) XXX-XXXX mask
    if (coreDigits.length <= 3) {
      formatted += `(${coreDigits}`;
    } else if (coreDigits.length <= 6) {
      formatted += `(${coreDigits.slice(0, 3)}) ${coreDigits.slice(3)}`;
    } else {
      formatted += `(${coreDigits.slice(0, 3)}) ${coreDigits.slice(3, 6)}-${coreDigits.slice(6, 10)}`;
    }

    setPhoneNumber(formatted);
  };

  return (
    <div className="font-sans text-gray-800 antialiased bg-[#f8f9fa] overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      
      {/* Import the brand font dynamically */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          
          .glass-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.4);
          }
        `}
      </style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#01875f] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <ShieldCheck size={22} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-extrabold text-[#202124] tracking-tight">BulkPhone<span className="text-[#01875f]">Lookup</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-gray-600">
            <a href="#how-it-works" className="hover:text-[#01875f] transition-colors">How it works</a>
            <a href="#demo" className="hover:text-[#01875f] transition-colors">Live Demo</a>
            <a href="#testimonials" className="hover:text-[#01875f] transition-colors">Success Stories</a>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a href="#" className="text-sm font-bold text-gray-600 hover:text-[#01875f] transition-colors">Login</a>
            <button onClick={() => setShowSignupModal(true)} className="bg-[#202124] hover:bg-[#01875f] text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-[0_0_15px_rgba(1,135,95,0.3)] transform hover:-translate-y-0.5">
              Start Scrubbing Free
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-bold">How it works</a>
            <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-bold">Live Demo</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-bold">Success Stories</a>
            <button onClick={() => { setMobileMenuOpen(false); setShowSignupModal(true); }} className="text-[#01875f] text-left font-extrabold mt-2 pt-2 border-t border-gray-100">Login</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#01875f]/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#01875f]/10 border border-[#01875f]/20 text-[#01875f] text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#01875f] animate-pulse"></span> Powered by Twilio Intelligence
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#202124] leading-[1.15] mb-6 tracking-tight">
                Stop Wasting Money Texting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01875f] to-teal-500">Landlines.</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Upload your CSV leads. Instantly filter out landlines, VoIPs, and invalid formats before launching your SMS campaign. Save thousands on undeliverable texts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="flex flex-col items-center lg:items-start">
                  <button onClick={() => setShowSignupModal(true)} className="w-full sm:w-auto bg-[#01875f] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-[0_10px_25px_rgba(1,135,95,0.3)] hover:bg-[#016848] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    Scrub Your First List <ArrowRight size={20} />
                  </button>
                  <p className="text-xs text-gray-500 font-bold mt-3 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#01875f]" /> No credit card required
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <button className="w-full sm:w-auto bg-white text-[#202124] border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3 group">
                    <Play className="text-[#01875f] group-hover:scale-110 transition-transform fill-current" size={18} /> See How It Works
                  </button>
                  <p className="text-xs text-gray-500 font-bold mt-3 flex items-center gap-1.5">
                    <Zap size={14} className="text-[#01875f]" /> Includes 500 free credits
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-5 text-sm text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="text-[#01875f]" size={16} /> No coding required</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="text-[#01875f]" size={16} /> Pay as you go</span>
              </div>
            </div>

            {/* Hero Interactive Visual */}
            <div className="relative hidden lg:block">
              <div className="glass-card rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-8 max-w-lg mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/60">
                
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f0fe] p-2.5 rounded-lg text-[#01875f]">
                      <Database size={24} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#202124]">Leads_Q3.csv</h3>
                      <p className="text-xs text-gray-500 font-semibold">Processing 500 rows...</p>
                    </div>
                  </div>
                  <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md text-xs font-bold tracking-wide animate-pulse">ANALYZING</span>
                </div>

                <div className="space-y-4">
                  {/* Row 1: Valid */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f8f9fa] border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Smartphone size={16} /></div>
                      <div>
                        <p className="font-bold text-sm text-[#202124]">(555) 123-4567</p>
                        <p className="text-xs text-gray-500">AT&T Mobility</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-bold text-xs uppercase tracking-wider bg-green-50 px-2 py-1 rounded">Mobile</span>
                  </div>

                  {/* Row 2: Invalid/Landline */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-red-50/50 border border-red-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center"><PhoneOff size={16} /></div>
                      <div>
                        <p className="font-bold text-sm text-[#202124]">(555) 987-6543</p>
                        <p className="text-xs text-red-400">Comcast Cable</p>
                      </div>
                    </div>
                    <span className="text-red-600 font-bold text-xs uppercase tracking-wider bg-red-50 px-2 py-1 rounded">Landline</span>
                  </div>

                   {/* Row 3: VoIP */}
                   <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-50/50 border border-yellow-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center"><PhoneOff size={16} /></div>
                      <div>
                        <p className="font-bold text-sm text-[#202124]">(555) 444-3333</p>
                        <p className="text-xs text-yellow-500">Bandwidth.com</p>
                      </div>
                    </div>
                    <span className="text-yellow-600 font-bold text-xs uppercase tracking-wider bg-yellow-50 px-2 py-1 rounded">VoIP</span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#01875f]">
                     <BarChart3 size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Money Saved</div>
                    <div className="text-2xl font-extrabold text-[#202124]">$145.00</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Authority Banner (Social Proof) */}
      <div className="border-y border-gray-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by leading sales teams & marketing agencies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
            <span className="text-xl font-extrabold flex items-center gap-2"><div className="w-6 h-6 bg-gray-800 rounded-md"></div> REALTY<span className="font-light">PROS</span></span>
            <span className="text-xl font-extrabold flex items-center gap-2"><div className="w-6 h-6 rounded-full border-4 border-gray-800"></div> Growth<span className="font-light">Engine</span></span>
            <span className="text-xl font-extrabold flex items-center gap-2"><Database size={24} strokeWidth={3} /> DATA<span className="font-light">SYNC</span></span>
            <span className="text-xl font-extrabold flex items-center gap-2">Apex<span className="font-light">Leads</span></span>
          </div>
        </div>
      </div>

      {/* Feature Section (Clarity & Reduction) */}
      <section id="how-it-works" className="py-24 bg-[#f8f9fa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#202124] mb-4">Carrier Intelligence Without The Code</h2>
            <p className="text-gray-600 font-medium text-lg">We wrapped Twilio's powerful APIs into a dead-simple dashboard so your marketing team can work faster.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-[#e8f0fe] text-[#01875f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#202124] mb-3">Drag & Drop Cleaning</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                No complex formatting required. Just drag your CSV into our UI, select the column with the phone numbers, and we handle the rest.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-[#01875f] text-white shadow-xl transform md:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck size={120} /></div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Line Type & Carrier</h3>
              <p className="text-green-50 text-sm leading-relaxed font-medium">
                We accurately classify every number as Mobile, Landline, or VoIP, and return the actual carrier name (AT&T, Verizon, etc.) for advanced segmenting.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#202124] mb-3">10DLC Compliant</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Stop risking account bans. Remove invalid numbers before they bounce, keeping your Trust Hub delivery scores high and your campaigns active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-24 bg-[#202124] text-white relative overflow-hidden">
        {/* BG Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute w-96 h-96 bg-[#01875f] rounded-full blur-[100px] top-1/4 left-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Try it yourself</h2>
            <p className="text-gray-400 font-medium text-lg">See the rich carrier data and line-type intelligence our API returns. Enter a phone number below to test it.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleLookup} className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 mb-8 relative z-20">
              <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                <Smartphone className="text-gray-400 mr-3" size={24} />
                <input
                  type="tel"
                  placeholder="e.g., +1 (555) 123-4567"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  maxLength={17}
                  className="w-full bg-transparent text-[#202124] font-bold text-lg outline-none placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#01875f] hover:bg-[#016848] text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(1,135,95,0.2)] transition-all transform md:hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Search size={20} /> Lookup Number
              </button>
            </form>

            {/* Dynamic Results Container */}
            <div className="min-h-[350px]">
              
              {/* STATE 1: Sample Report */}
              {lookupState === 'sample' && (
                <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 relative overflow-hidden shadow-2xl text-left animate-in fade-in zoom-in duration-500">
                  <div className="absolute top-0 right-0 bg-[#e8f0fe] text-[#01875f] text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-bl-2xl border-b border-l border-[#01875f]/10 flex items-center gap-1.5 shadow-sm">
                    <Database size={14} /> Example Data
                  </div>

                  <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-6 mt-2">
                    <div className="w-16 h-16 rounded-full bg-[#01875f]/10 flex items-center justify-center text-[#01875f] shadow-inner">
                      <Smartphone size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold text-[#202124] tracking-tight">+1 (555) 123-4567</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                          <CheckCircle2 size={12}/> Valid Number
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#f8f9fa] p-5 rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1.5">Line Type</div>
                      <div className="font-extrabold text-[#202124] flex items-center gap-2 text-lg">Mobile <Smartphone size={18} className="text-[#01875f]"/></div>
                    </div>
                    <div className="bg-[#f8f9fa] p-5 rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1.5">Carrier</div>
                      <div className="font-extrabold text-[#202124] flex items-center gap-2 text-lg">AT&T Mobility LLC</div>
                    </div>
                    <div className="bg-[#f8f9fa] p-5 rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1.5">Line Status</div>
                      <div className="font-extrabold text-[#202124] flex items-center gap-2 text-lg">Active <Activity size={18} className="text-[#01875f]"/></div>
                    </div>
                    <div className="bg-[#f8f9fa] p-5 rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1.5">Caller Name (CNAM)</div>
                      <div className="font-extrabold text-[#202124] flex items-center gap-2 text-lg">John Doe <User size={18} className="text-[#01875f]"/></div>
                    </div>
                    <div className="bg-[#f8f9fa] p-5 rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1.5">SIM Swap Risk</div>
                      <div className="font-extrabold text-[#202124] flex items-center gap-2 text-lg">No Recent Swaps <RefreshCw size={18} className="text-[#01875f]"/></div>
                    </div>
                    <div className="bg-[#f8f9fa] p-5 rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1.5">Call Forwarding</div>
                      <div className="font-extrabold text-[#202124] flex items-center gap-2 text-lg">Disabled <PhoneForwarded size={18} className="text-gray-400"/></div>
                    </div>
                    <div className="bg-[#f8f9fa] p-5 rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1.5">SMS Pumping Risk</div>
                      <div className="font-extrabold text-[#01875f] flex items-center gap-2 text-lg">Low Risk <ShieldAlert size={18}/></div>
                    </div>
                    <div className="bg-[#f8f9fa] p-5 rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1.5">Country</div>
                      <div className="font-extrabold text-[#202124] flex items-center gap-2 text-lg">United States <Globe size={18} className="text-gray-400"/></div>
                    </div>
                  </div>
                </div>
              )}

              {/* STATE 2: Loading Analysis */}
              {lookupState === 'loading' && (
                <div className="bg-white rounded-[2rem] p-12 border border-gray-200 relative overflow-hidden shadow-2xl text-center min-h-[350px] flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#01875f] mb-6 relative">
                    <Loader2 size={36} className="animate-spin" />
                    <div className="absolute inset-0 rounded-full border-4 border-[#01875f] opacity-20 animate-ping"></div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#202124] tracking-tight mb-2">Analyzing Number...</h3>
                  <p className="text-gray-500 font-medium text-lg">Connecting to carrier databases for <span className="font-bold">{phoneNumber}</span></p>
                </div>
              )}

              {/* STATE 3: Locked/Blurred Real Result */}
              {lookupState === 'locked' && (
                <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 relative overflow-hidden shadow-2xl text-left animate-in fade-in duration-300">
                  {/* Unblurred Header showing THEIR number */}
                  <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-6 mt-2 relative z-20">
                    <div className="w-16 h-16 rounded-full bg-[#01875f]/10 flex items-center justify-center text-[#01875f]">
                      <Smartphone size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold text-[#202124] tracking-tight">{phoneNumber}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                          <CheckCircle2 size={12}/> Valid Format
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Blurred body */}
                  <div className="relative mt-4">
                    {/* Overlay */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md rounded-2xl border border-gray-200 p-8 text-center shadow-lg">
                      <div className="bg-[#e8f0fe] p-4 rounded-full mb-4 shadow-sm text-[#01875f]">
                        <Lock size={32} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#202124] mb-2 tracking-tight">Premium Data Locked</h3>
                      <p className="text-gray-600 font-medium mb-6 text-base max-w-sm">Create a free account to instantly reveal the carrier identity, line type, and risk score for this number.</p>
                      <button onClick={() => setShowSignupModal(true)} className="bg-[#01875f] hover:bg-[#016848] text-white font-bold py-3.5 px-8 rounded-xl shadow-[0_10px_20px_rgba(1,135,95,0.2)] transition-all transform hover:-translate-y-0.5 text-lg">
                        Unlock Full Report
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-40 select-none pointer-events-none filter blur-[3px]">
                      {/* Fake blurred blocks */}
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-[#f8f9fa] p-5 rounded-xl border border-gray-200 h-24 flex flex-col justify-center">
                          <div className="h-3 w-24 bg-gray-300 rounded mb-4"></div>
                          <div className={`h-5 w-${i % 2 === 0 ? '32' : '40'} bg-gray-400 rounded`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section (The App Rejected Equivalent) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#fef2f2] rounded-[2rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 border border-red-100">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
                <AlertOctagon size={14} /> 10DLC Compliance Risk
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#202124] mb-4 tracking-tight">Are your Twilio campaigns getting blocked?</h2>
              <p className="text-gray-700 mb-8 font-medium text-lg">High bounce rates trigger carrier spam filters. Texting too many landlines or invalid numbers will get your A2P 10DLC Trust Hub profile flagged or suspended.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-700 font-bold">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} /> Carrier Violation Error 30008 (Message Delivery - Unknown error)
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-bold">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} /> Account suspension due to high error rates
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-bold">
                  <ShieldCheck className="text-[#01875f] shrink-0 mt-0.5" size={20} /> The Fix: Scrub your list with us before importing to your CRM.
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center w-full">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-sm rotate-2 w-full">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-bold">Twilio Console Alert</div>
                <h4 className="font-extrabold text-[#202124] mb-2 flex items-center gap-2">
                  <AlertOctagon className="text-red-500" size={18} /> Campaign Status: <span className="text-red-600">Flagged</span>
                </h4>
                <p className="text-sm text-gray-600 mb-4 bg-[#f8f9fa] p-4 rounded-xl border border-gray-100 font-medium leading-relaxed">"Your recent messaging traffic generated an unusually high rate of delivery errors. Carriers may block future traffic."</p>
                <div className="flex items-center gap-2 text-sm text-[#01875f] font-bold">
                  <ArrowRight size={16} /> Protect your sender score today.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Us vs. Them Comparison Table */}
      <section className="py-24 bg-[#f8f9fa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#202124] mb-4">Why not build it yourself?</h2>
            <p className="text-gray-600 font-medium text-lg">Connecting to Twilio's API is easy. Building a scalable, async queuing system to process 100,000 rows without crashing your server is hard.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The "Them" Column */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-sm opacity-80">
              <h3 className="text-xl font-bold text-gray-500 mb-6 text-center">In-House Development</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <XCircle className="text-red-400 shrink-0" size={24} />
                  <div>
                    <span className="font-bold text-gray-700 block mb-1">High Setup Cost</span>
                    <span className="text-sm text-gray-500">$2,000+ for a developer to build the integration and background queues.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <XCircle className="text-red-400 shrink-0" size={24} />
                  <div>
                    <span className="font-bold text-gray-700 block mb-1">Time to Value</span>
                    <span className="text-sm text-gray-500">2-3 weeks of development and testing.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <XCircle className="text-red-400 shrink-0" size={24} />
                  <div>
                    <span className="font-bold text-gray-700 block mb-1">Server Maintenance</span>
                    <span className="text-sm text-gray-500">You pay for the server resources to process heavy CSV files.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* The "Us" Column */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl border-2 border-[#01875f] shadow-[0_10px_30px_rgba(1,135,95,0.15)] relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#01875f] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                The Smart Choice
              </div>
              <h3 className="text-xl font-extrabold text-[#01875f] mb-6 text-center flex items-center justify-center gap-2">
                <ShieldCheck size={24} /> BulkPhoneLookup
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#01875f] shrink-0" size={24} />
                  <div>
                    <span className="font-bold text-[#202124] block mb-1">Zero Setup Cost</span>
                    <span className="text-sm text-gray-600 font-medium">No retainers. Just buy credits and use the drag-and-drop dashboard.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#01875f] shrink-0" size={24} />
                  <div>
                    <span className="font-bold text-[#202124] block mb-1">Instant Results</span>
                    <span className="text-sm text-gray-600 font-medium">Ready to use in 60 seconds. Upload your first list today.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#01875f] shrink-0" size={24} />
                  <div>
                    <span className="font-bold text-[#202124] block mb-1">Fully Managed Infrastructure</span>
                    <span className="text-sm text-gray-600 font-medium">Our servers handle the heavy lifting of processing massive CSVs.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Testimonials (Social Proof) */}
      <section id="testimonials" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#202124] tracking-tight">Agencies Trust Our Data</h2>
            <p className="text-gray-600 mt-3 text-lg font-medium">Stop getting penalized by carriers. Clean your lists before you send.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-[#f8f9fa] p-8 rounded-3xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">MR</div>
                <div>
                  <div className="font-extrabold text-[#202124]">Marcus R.</div>
                  <div className="text-sm text-gray-500 font-medium">Real Estate Wholesaler</div>
                </div>
                <div className="ml-auto text-yellow-400 flex"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium mb-6">"We buy massive lists of homeowners. Running them through BulkPhoneLookup drops our Twilio spend by 30% immediately because we aren't texting landlines anymore."</p>
              <div className="bg-green-50 text-[#01875f] px-3 py-2 rounded-lg text-xs font-bold border border-green-100 flex items-center gap-2 inline-flex">
                <CheckCircle2 size={14} /> Reduced Bounce Rate
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#f8f9fa] p-8 rounded-3xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg">SJ</div>
                <div>
                  <div className="font-extrabold text-[#202124]">Sarah Jenkins</div>
                  <div className="text-sm text-gray-500 font-medium">Marketing Agency Owner</div>
                </div>
                <div className="ml-auto text-yellow-400 flex"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium mb-6">"My clients used to get their 10DLC campaigns flagged for high error rates. This tool acts as our firewall. The drag-and-drop CSV is so easy my non-technical staff uses it daily."</p>
              <div className="bg-green-50 text-[#01875f] px-3 py-2 rounded-lg text-xs font-bold border border-green-100 flex items-center gap-2 inline-flex">
                <CheckCircle2 size={14} /> 10DLC Protected
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#f8f9fa] p-8 rounded-3xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">DT</div>
                <div>
                  <div className="font-extrabold text-[#202124]">David T.</div>
                  <div className="text-sm text-gray-500 font-medium">SaaS Founder</div>
                </div>
                <div className="ml-auto text-yellow-400 flex"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium mb-6">"I tried building a direct Twilio Lookup integration myself, but handling the async queues for 50,000 rows was a nightmare. This SaaS handles the heavy lifting perfectly."</p>
              <div className="bg-green-50 text-[#01875f] px-3 py-2 rounded-lg text-xs font-bold border border-green-100 flex items-center gap-2 inline-flex">
                <CheckCircle2 size={14} /> Developer Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#f8f9fa] border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#202124] mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-gray-600 font-medium text-lg">Everything you need to know about our data and pricing.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is my data safe and private?",
                a: "Absolutely. We process your CSV strictly to run the Twilio Lookups and append the results. We do not store, sell, or share your leads. Once your file is downloaded, it is purged from our processing servers."
              },
              {
                q: "Where does the data come from?",
                a: "We integrate directly with Tier-1 telecom databases (like Twilio's Line Type Intelligence API). This ensures you are getting live, highly accurate carrier data, not outdated cached lists."
              },
              {
                q: "Do my credits ever expire?",
                a: "No! Your credits roll over forever. You can buy a bundle of 100,000 credits today, use 20,000 now, and save the rest for a campaign 6 months down the road."
              },
              {
                q: "What happens if a number cannot be verified?",
                a: "If the carrier database returns an error and we cannot definitively categorize the number, we do not charge you credits for that specific row."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-8 py-6 font-extrabold text-[#202124] flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                >
                  {faq.q}
                  <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-[#e8f0fe] rounded-[2rem] p-12 text-center border border-[#01875f]/10 mb-20">
            <h2 className="text-3xl font-extrabold text-[#202124] mb-6">Ready to clean your first list?</h2>
            <p className="text-gray-600 font-medium mb-8 max-w-xl mx-auto text-lg">Join hundreds of businesses saving money and protecting their delivery rates.</p>
            <button onClick={() => setShowSignupModal(true)} className="bg-[#01875f] hover:bg-[#016848] text-white font-bold py-4 px-10 rounded-xl shadow-[0_10px_20px_rgba(1,135,95,0.2)] transition-all transform hover:-translate-y-1 text-lg mb-4">
              Get Started for Free
            </button>
            <p className="text-sm text-[#01875f] font-bold flex items-center justify-center gap-1.5 opacity-90">
              <ShieldCheck size={16} /> Includes 500 free credits to test the service.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-6 md:mb-0 opacity-80">
              <ShieldCheck className="text-[#01875f]" size={24} strokeWidth={2.5} />
              <span className="text-lg font-extrabold text-[#202124]">BulkPhone<span className="text-[#01875f]">Lookup</span></span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-[#01875f] transition-colors">Pricing</a>
              <a href="#" className="hover:text-[#01875f] transition-colors">API Docs</a>
              <a href="#" className="hover:text-[#01875f] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#01875f] transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400 font-medium mt-8">
            &copy; 2026 TechDeck Labs. All rights reserved. Not affiliated with Twilio Inc.
          </div>
        </div>
      </footer>

      {/* Signup Modal Prompt */}
      {showSignupModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowSignupModal(false)}
          ></div>
          <div className="bg-white rounded-[2rem] w-full max-w-md relative z-10 shadow-2xl p-8 transform transition-all text-center border border-gray-100">
            <button
              onClick={() => setShowSignupModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-[#e8f0fe] text-[#01875f] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <ShieldCheck size={32} strokeWidth={2.5} />
            </div>

            <h3 className="text-2xl font-extrabold text-[#202124] mb-2 tracking-tight">Unlock Your Report</h3>
            <p className="text-gray-600 font-medium mb-8 leading-relaxed">
              Create a free account to view the full carrier intelligence report for <span className="font-bold text-[#202124]">{phoneNumber || 'this number'}</span>.
            </p>

            <div className="space-y-3">
              <button className="w-full bg-white border border-gray-200 text-[#202124] font-bold py-3.5 px-4 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                <div className="relative flex justify-center text-sm"><span className="px-3 bg-white text-gray-400 font-bold uppercase tracking-widest text-xs">or</span></div>
              </div>
              
              <button className="w-full bg-[#01875f] text-white font-bold py-3.5 px-4 rounded-xl hover:bg-[#016848] transition-all shadow-lg hover:shadow-[0_10px_20px_rgba(1,135,95,0.2)] transform hover:-translate-y-0.5">
                Sign up with Email
              </button>
            </div>
            
            <p className="text-xs text-[#01875f] mt-6 font-bold bg-[#e8f0fe] py-2 px-3 rounded-lg inline-flex items-center gap-1.5 border border-[#01875f]/10">
              <Zap size={14} /> Includes 500 free credits upon sign up
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
