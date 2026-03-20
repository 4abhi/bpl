import React, { useState } from 'react';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  UploadCloud, 
  History, 
  CreditCard, 
  Settings, 
  Bell, 
  Menu, 
  X, 
  Smartphone, 
  CheckCircle2, 
  FileText,
  Search,
  Loader2,
  MoreVertical,
  LogOut,
  Zap
} from 'lucide-react';

export default function BulkPhoneLookupDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('overview'); // 'overview', 'scrub', 'history', 'billing'
  
  // Wallet State
  const [credits, setCredits] = useState(12500);

  // Single Lookup State (Based on provided image)
  const [singleNumber, setSingleNumber] = useState('');
  const [lookupState, setLookupState] = useState('idle'); // 'idle', 'loading', 'result'
  const [lookupResult, setLookupResult] = useState(null);

  // CSV Scrub State
  const [file, setFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);

  // Auto-format phone number input
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    
    if (input === '' || input === '+1' || input === '+1 ' || input === '+') {
      setSingleNumber('');
      setLookupState('idle');
      return;
    }

    const digits = input.replace(/\D/g, '');
    if (digits.length === 0) {
      setSingleNumber('');
      return;
    }

    let formatted = '+1 ';
    let coreDigits = digits.startsWith('1') ? digits.substring(1) : digits;

    if (coreDigits.length === 0) {
      setSingleNumber(formatted);
      return;
    }

    if (coreDigits.length <= 3) {
      formatted += `(${coreDigits}`;
    } else if (coreDigits.length <= 6) {
      formatted += `(${coreDigits.slice(0, 3)}) ${coreDigits.slice(3)}`;
    } else {
      formatted += `(${coreDigits.slice(0, 3)}) ${coreDigits.slice(3, 6)}-${coreDigits.slice(6, 10)}`;
    }

    setSingleNumber(formatted);
    setLookupState('idle'); // Reset result on new input
  };

  const handleSingleLookup = (e) => {
    e.preventDefault();
    if (singleNumber.length > 5) {
      setLookupState('loading');
      setTimeout(() => {
        setLookupState('result');
        setLookupResult({
          formatted: singleNumber,
          isValid: true,
          type: 'Mobile',
          carrier: 'AT&T Mobility LLC'
        });
        setCredits(prev => prev - 1);
      }, 1000);
    }
  };

  // Drag & Drop Handlers
  const handleDragEnter = (e) => { e.preventDefault(); e.stopPropagation(); setIsDragActive(true); };
  const handleDragLeave = (e) => { e.preventDefault(); e.stopPropagation(); setIsDragActive(false); };
  const handleDragOver = (e) => { e.preventDefault(); e.stopPropagation(); };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="h-screen bg-[#f8f9fa] flex overflow-hidden font-sans text-gray-800" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transform transition-transform duration-300 lg:relative flex flex-col justify-between ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div>
          {/* Logo */}
          <div className="h-20 flex items-center px-6 border-b border-gray-100">
            <div className="w-9 h-9 bg-[#01875f] rounded-xl flex items-center justify-center text-white shadow-md mr-3">
              <ShieldCheck size={20} strokeWidth={2.5} />
            </div>
            <span className="font-extrabold text-xl text-[#202124] tracking-tight">BulkPhone<span className="text-[#01875f]">Lookup</span></span>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1.5 mt-2">
            <p className="px-4 text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-3">Main Menu</p>

            <button onClick={() => {setCurrentTab('overview'); setSidebarOpen(false);}} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${currentTab === 'overview' ? 'bg-[#e8f0fe] text-[#01875f]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
              <LayoutDashboard size={20} /> Overview
            </button>
            <button onClick={() => {setCurrentTab('scrub'); setSidebarOpen(false);}} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${currentTab === 'scrub' ? 'bg-[#e8f0fe] text-[#01875f]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
              <UploadCloud size={20} /> Scrub CSV List
            </button>
            <button onClick={() => {setCurrentTab('history'); setSidebarOpen(false);}} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${currentTab === 'history' ? 'bg-[#e8f0fe] text-[#01875f]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
              <History size={20} /> Job History
            </button>

            <div className="pt-4 mt-4 border-t border-gray-100">
              <p className="px-4 text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-3">Account</p>
              <button onClick={() => {setCurrentTab('billing'); setSidebarOpen(false);}} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all ${currentTab === 'billing' ? 'bg-[#e8f0fe] text-[#01875f]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                <div className="flex items-center gap-3"><CreditCard size={20} /> Billing & Credits</div>
                {credits < 5000 && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
                <Settings size={20} /> Settings
              </button>
            </div>
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 hover:bg-gray-50 p-2.5 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#01875f] text-white flex items-center justify-center font-bold">JD</div>
            <div className="flex-grow min-w-0">
              <p className="text-sm font-extrabold text-[#202124] truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate font-medium">john@company.com</p>
            </div>
            <LogOut size={16} className="text-gray-400" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 lg:px-10 relative z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-600 hover:text-[#202124] bg-gray-50 p-2 rounded-lg border border-gray-200">
              <Menu size={24} />
            </button>
            <h2 className="text-xl font-extrabold text-[#202124] hidden sm:block capitalize">
              {currentTab === 'scrub' ? 'Scrub List' : currentTab}
            </h2>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Wallet Widget */}
            <div className="flex items-center gap-3 bg-[#e8f0fe] px-4 py-2 rounded-2xl border border-[#01875f]/10 shadow-sm cursor-pointer hover:shadow-md transition-all" onClick={() => setCurrentTab('billing')}>
              <CreditCard size={18} className="text-[#01875f] hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#01875f] font-extrabold uppercase tracking-widest opacity-80">Credits</span>
                <span className="text-sm font-extrabold text-[#202124]">{credits.toLocaleString()}</span>
              </div>
              <div className="ml-2 bg-[#01875f] text-white p-1 rounded-lg">
                <Search size={14}/>
              </div>
            </div>
            
            <button className="relative text-gray-400 hover:text-[#202124] transition-colors p-2 hover:bg-gray-50 rounded-full">
              <Bell size={22} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Workspace */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 pb-24 scrollbar-hide">
          
          {/* ================= OVERVIEW TAB ================= */}
          {currentTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><CheckCircle2 size={24}/></div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold">Total Numbers Scrubbed</p>
                      <h3 className="text-2xl font-extrabold text-[#202124]">45,210</h3>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-1"><Zap size={14} className="text-blue-500"/> +2,400 this week</p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#01875f]"><CreditCard size={24}/></div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold">Available Credits</p>
                      <h3 className="text-2xl font-extrabold text-[#202124]">{credits.toLocaleString()}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-[#01875f] font-bold cursor-pointer hover:underline" onClick={() => setCurrentTab('billing')}>Top up wallet &rarr;</p>
                </div>

                <div className="bg-[#202124] text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-[#01875f] rounded-full blur-[40px] opacity-50"></div>
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#01875f]"><ShieldCheck size={24}/></div>
                    <div>
                      <p className="text-sm text-gray-400 font-bold">Estimated Savings</p>
                      <h3 className="text-2xl font-extrabold text-white">$904.20</h3>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 font-medium relative z-10">From identifying 45,210 invalid numbers</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Single Number Quick Lookup (Based on provided image) */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] p-8">
                  <h3 className="font-extrabold text-[#202124] text-xl mb-2">Quick Lookup</h3>
                  <p className="text-gray-500 text-sm font-medium mb-6">Check a single phone number instantly. Costs 1 credit.</p>

                  <form onSubmit={handleSingleLookup} className="flex flex-col sm:flex-row gap-3 mb-8">
                    <div className="flex-1 flex items-center bg-[#f8f9fa] border-2 border-gray-100 focus-within:border-[#01875f]/50 focus-within:bg-white rounded-2xl px-5 py-3 transition-colors">
                      <Smartphone className="text-gray-400 mr-3" size={24} />
                      <input 
                        type="tel" 
                        value={singleNumber}
                        onChange={handlePhoneChange}
                        placeholder="3162251111" 
                        className="bg-transparent font-extrabold text-xl text-[#202124] outline-none w-full placeholder-gray-300"
                        maxLength={17}
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={singleNumber.length < 6 || lookupState === 'loading'}
                      className="bg-[#202124] text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 disabled:opacity-50 transition-all flex items-center justify-center min-w-[120px]"
                    >
                      {lookupState === 'loading' ? <Loader2 size={24} className="animate-spin"/> : 'Search'}
                    </button>
                  </form>

                  {/* Result Area matching the image exactly */}
                  {lookupState === 'result' && lookupResult && (
                    <div className="p-6 border-2 border-gray-100 rounded-3xl bg-white animate-in zoom-in-95 duration-300 relative overflow-hidden">
                      {/* Decorative border matching the red highlight in user's image request */}
                      <div className="absolute inset-0 border-2 border-red-500 rounded-3xl pointer-events-none"></div>
                      
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left p-2">
                        <div className="w-20 h-20 bg-[#e6f4ea] rounded-full flex items-center justify-center text-[#01875f] shrink-0">
                          <Smartphone size={36} strokeWidth={2}/>
                        </div>
                        <div>
                          <h4 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight mb-3">
                            {lookupResult.formatted}
                          </h4>
                          <span className="bg-[#e6f4ea] text-[#01875f] px-3.5 py-1.5 rounded-lg text-sm font-bold inline-flex items-center gap-1.5">
                            <CheckCircle2 size={16} strokeWidth={3}/> Valid Number
                          </span>
                          
                          <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="block text-gray-500 font-bold uppercase text-[10px] tracking-wider mb-1">Line Type</span>
                              <span className="font-bold text-[#202124]">{lookupResult.type}</span>
                            </div>
                            <div>
                              <span className="block text-gray-500 font-bold uppercase text-[10px] tracking-wider mb-1">Carrier</span>
                              <span className="font-bold text-[#202124]">{lookupResult.carrier}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {lookupState === 'idle' && (
                    <div className="p-10 border-2 border-dashed border-gray-100 rounded-3xl flex flex-col items-center justify-center text-center">
                      <Search size={32} className="text-gray-300 mb-3"/>
                      <p className="text-gray-400 font-medium text-sm">Enter a number above to see carrier data.</p>
                    </div>
                  )}
                </div>

                {/* Recent Jobs Mini */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] p-8 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-[#202124] text-xl">Recent CSV Jobs</h3>
                    <button onClick={() => setCurrentTab('history')} className="text-sm font-bold text-[#01875f] hover:underline">View All</button>
                  </div>
                  <div className="space-y-3 flex-1">
                    {[
                      { name: 'NY_RealEstate_Leads.csv', rows: 12500, date: 'Today, 10:42 AM', status: 'done' },
                      { name: 'Q3_Webinar_Signups.csv', rows: 420, date: 'Yesterday', status: 'done' },
                      { name: 'Cold_Outreach_List.csv', rows: 55000, date: 'Oct 12, 2025', status: 'done' }
                    ].map((job, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 bg-[#f8f9fa] hover:bg-white hover:shadow-sm transition-all cursor-pointer group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#01875f]/30 transition-colors">
                            <FileText size={18} className="text-[#01875f]"/>
                          </div>
                          <div>
                            <p className="font-bold text-[#202124] text-sm truncate max-w-[150px] sm:max-w-[200px]">{job.name}</p>
                            <p className="text-xs text-gray-500 font-medium">{job.rows.toLocaleString()} rows • {job.date}</p>
                          </div>
                        </div>
                        <CheckCircle2 size={18} className="text-[#01875f] opacity-80"/>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setCurrentTab('scrub')} className="w-full mt-6 bg-[#e8f0fe] text-[#01875f] font-bold py-3.5 rounded-2xl hover:bg-[#d1e0fc] transition-colors flex items-center justify-center gap-2">
                    <UploadCloud size={18}/> New Scrub Job
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= SCRUB LIST TAB (From earlier logic) ================= */}
          {currentTab === 'scrub' && (
            <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-[#e8f0fe] text-[#01875f] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <UploadCloud size={32} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#202124] mb-2">Upload Target List</h2>
                  <p className="text-gray-500 font-medium">Drag & drop your CSV to instantly identify landlines and VoIPs.</p>
                </div>
                
                {!file ? (
                  <div 
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className={`p-16 border-2 border-dashed rounded-3xl text-center cursor-pointer transition-all duration-300 group ${
                      isDragActive ? 'border-[#01875f] bg-[#e8f0fe]' : 'border-gray-200 hover:border-[#01875f]/50 hover:bg-gray-50'
                    }`}
                    onClick={() => document.getElementById('file-upload').click()}
                  >
                    <input type="file" id="file-upload" className="hidden" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
                    <UploadCloud size={48} className={`mx-auto mb-4 transition-colors ${isDragActive ? 'text-[#01875f]' : 'text-gray-300 group-hover:text-gray-400'}`} />
                    <h3 className="text-lg text-[#202124] font-extrabold mb-1">Select a CSV file to upload</h3>
                    <p className="text-sm text-gray-500 font-medium">or drag and drop it here</p>
                  </div>
                ) : (
                  <div className="space-y-8 animate-in zoom-in-95 duration-300">
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-[#f8f9fa] border border-gray-100">
                      <div className="flex items-center gap-4">
                        <FileText size={32} className="text-[#01875f]" />
                        <div>
                          <p className="font-extrabold text-[#202124] text-lg">{file.name}</p>
                          <p className="text-sm text-gray-500 font-medium">Ready for processing</p>
                        </div>
                      </div>
                      <button onClick={() => setFile(null)} className="text-sm text-red-500 font-bold hover:underline">Remove</button>
                    </div>

                    <div>
                      <label className="block text-sm font-extrabold text-[#202124] mb-3">Which column contains the phone numbers?</label>
                      <select className="w-full bg-white border border-gray-200 text-[#202124] rounded-2xl shadow-sm p-4 focus:ring-2 focus:ring-[#01875f]/30 focus:border-[#01875f] outline-none font-medium text-lg appearance-none">
                        <option>Phone Number</option>
                        <option>Mobile</option>
                        <option>Contact</option>
                      </select>
                    </div>

                    <div className="bg-[#e8f0fe] border border-[#01875f]/20 p-8 rounded-3xl text-center">
                      <p className="text-sm text-[#01875f] font-extrabold uppercase tracking-wider mb-2">Estimated Cost</p>
                      <p className="text-5xl font-extrabold text-[#202124] mb-8">~10,000 <span className="text-2xl text-gray-500 font-bold">Credits</span></p>
                      <button onClick={() => {alert('Processing started!'); setFile(null); setCurrentTab('history');}} className="w-full bg-[#01875f] text-white py-4 px-6 rounded-2xl text-lg font-bold hover:bg-[#016848] transition-all shadow-[0_10px_20px_rgba(1,135,95,0.2)] transform hover:-translate-y-1">
                        Deduct Credits & Run Scrubber
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= HISTORY TAB (Placeholder) ================= */}
          {currentTab === 'history' && (
            <div className="bg-white rounded-3xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
               <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-[#f8f9fa]">
                 <h2 className="text-2xl font-extrabold text-[#202124]">Job History</h2>
                 <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50">Filter</button>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-white text-gray-400 text-xs uppercase tracking-wider font-extrabold border-b border-gray-100">
                          <tr>
                              <th className="px-8 py-5">File Name</th>
                              <th className="px-8 py-5">Rows</th>
                              <th className="px-8 py-5">Cost</th>
                              <th className="px-8 py-5">Status</th>
                              <th className="px-8 py-5">Date</th>
                              <th className="px-8 py-5"></th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                          {[1,2,3,4,5].map((i) => (
                              <tr key={i} className="hover:bg-[#f8f9fa] transition-colors">
                                  <td className="px-8 py-5 font-bold text-[#202124] flex items-center gap-3">
                                    <FileText size={16} className="text-gray-400"/> List_Batch_0{i}.csv
                                  </td>
                                  <td className="px-8 py-5 text-gray-600 font-medium">10,000</td>
                                  <td className="px-8 py-5 text-gray-600 font-medium">20,000 Credits</td>
                                  <td className="px-8 py-5">
                                    <span className="bg-[#e6f4ea] text-[#01875f] px-3 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1">
                                      <CheckCircle2 size={12}/> Completed
                                    </span>
                                  </td>
                                  <td className="px-8 py-5 text-gray-500 font-medium">Oct 24, 2025</td>
                                  <td className="px-8 py-5 text-right">
                                      <button className="text-[#01875f] font-bold hover:underline">Download Clean CSV</button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
               </div>
            </div>
          )}

          {/* ================= BILLING TAB (Placeholder) ================= */}
          {currentTab === 'billing' && (
             <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
                <div className="bg-[#202124] text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-8">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#01875f] rounded-full blur-[80px] opacity-40"></div>
                  <div className="relative z-10 text-center sm:text-left">
                    <p className="text-gray-400 font-extrabold uppercase tracking-widest text-sm mb-2">Available Balance</p>
                    <h2 className="text-5xl lg:text-6xl font-extrabold">{credits.toLocaleString()} <span className="text-2xl text-gray-500 font-bold">Credits</span></h2>
                  </div>
                  <div className="relative z-10 w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-[#01875f] hover:bg-[#016848] text-white font-bold py-4 px-8 rounded-2xl shadow-[0_10px_20px_rgba(1,135,95,0.3)] transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                      <CreditCard size={20}/> Top Up Wallet
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#202124] pt-4">Top-up Packages</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { credits: '10,000', price: '$50', pop: false },
                    { credits: '50,000', price: '$225', pop: true, label: 'Most Popular' },
                    { credits: '100,000', price: '$400', pop: false, label: 'Best Value' },
                  ].map((pkg, i) => (
                    <div key={i} className={`bg-white rounded-3xl p-8 border-2 transition-transform hover:-translate-y-1 cursor-pointer flex flex-col ${pkg.pop ? 'border-[#01875f] shadow-[0_10px_30px_rgba(1,135,95,0.15)] relative' : 'border-gray-100 shadow-sm hover:border-gray-300'}`}>
                      {pkg.label && <span className={`absolute -top-3 left-1/2 transform -translate-x-1/2 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full ${pkg.pop ? 'bg-[#01875f] text-white' : 'bg-gray-200 text-gray-600'}`}>{pkg.label}</span>}
                      <h4 className="text-3xl font-extrabold text-[#202124] mb-1 mt-2">{pkg.credits}</h4>
                      <p className="text-gray-500 font-medium mb-6">Credits</p>
                      <div className="mt-auto">
                        <p className="text-3xl font-extrabold text-[#01875f] mb-4">{pkg.price}</p>
                        <button className={`w-full py-3 rounded-xl font-bold transition-colors ${pkg.pop ? 'bg-[#e8f0fe] text-[#01875f] hover:bg-[#d1e0fc]' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
                          Select Package
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          )}

        </div>
      </main>
    </div>
  );
}
