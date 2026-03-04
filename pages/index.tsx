import React from 'react';
import { LayoutDashboard, Users, Wallet, BookOpen, History, Printer } from 'lucide-react';

const DashboardSPP = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar - Bagian Kiri */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
          <div>
            <h1 className="text-sm font-bold">MHM Pagung</h1>
            <p className="text-[10px] text-emerald-500 font-semibold uppercase">Admin Panel</p>
          </div>
        </div>

        <nav className="mt-4 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={18}/>} label="Dashboard" active />
          <NavItem icon={<Users size={18}/>} label="Data Santri" />
          <NavItem icon={<Wallet size={18}/>} label="Pembayaran SPP" />
          <NavItem icon={<BookOpen size={18}/>} label="Laporan Tabungan" />
          <NavItem icon={<History size={18}/>} label="Riwayat" />
        </nav>
      </aside>

      {/* Main Content - Bagian Kanan */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-800">Dashboard SPP</h2>
          <div className="flex gap-3">
             <button className="px-4 py-2 border rounded-lg bg-white text-sm">Maret 2026</button>
             <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm flex items-center gap-2">
               <Printer size={16}/> Cetak Laporan
             </button>
          </div>
        </header>

        {/* Welcome Banner */}
        <div className="bg-emerald-700 text-white p-8 rounded-2xl mb-8 relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-2">Selamat Datang, Admin!</h3>
          <p className="opacity-80 max-w-md">Kelola data tagihan, pembayaran SPP, dan tunggakan santri dengan mudah melalui panel administrasi ini.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total SPP Masuk" value="Rp 12.450.000" color="purple" icon={<Wallet size={20}/>} />
          <StatCard title="Total Transaksi" value="142" color="orange" icon={<Users size={20}/>} />
          <StatCard title="Target Bulanan" value="Rp 15.000.000" color="blue" icon={<BookOpen size={20}/>} />
          <StatCard title="Sisa Tunggakan" value="Rp 2.550.000" color="red" icon={<History size={20}/>} />
        </div>

        {/* Aktivitas Terkini (List) */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h4 className="font-bold mb-6 text-slate-700">Pembayaran Terakhir</h4>
          <div className="space-y-6">
            <ActivityItem name="M. Fahim Agus M" info="Kelas 2 Aliyah - SPP Maret" amount="Rp 150.000" time="05:40" />
            <ActivityItem name="Sigit" info="Kelas 5 - SPP Maret" amount="Rp 100.000" time="05:26" />
            <ActivityItem name="Naiwa Muhimmatul U" info="Kelas 2 Aliyah - SPP Februari" amount="Rp 150.000" time="05:17" />
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-komponen agar kode rapi
const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${active ? 'bg-emerald-50 text-emerald-600 font-semibold' : 'text-slate-500 hover:bg-slate-100'}`}>
    {icon} <span>{label}</span>
  </div>
);

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center justify-between">
    <div>
      <p className="text-xs text-slate-500 font-medium mb-1">{title}</p>
      <h4 className="text-xl font-bold text-slate-800">{value}</h4>
    </div>
    <div className={`p-3 rounded-xl bg-${color}-100 text-${color}-600`}>{icon}</div>
  </div>
);

const ActivityItem = ({ name, info, amount, time }) => (
  <div className="flex items-center justify-between border-b pb-4 last:border-0">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">✔</div>
      <div>
        <p className="text-sm font-bold text-slate-800">{name}</p>
        <p className="text-xs text-slate-500">{time} • {info}</p>
      </div>
    </div>
    <p className="text-sm font-bold text-emerald-600">{amount}</p>
  </div>
);

export default DashboardSPP;
      
