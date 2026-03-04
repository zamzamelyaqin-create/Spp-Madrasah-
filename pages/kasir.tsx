"use client";
import React, { useState } from 'react';
import { Search, Save, Receipt, User, Calendar } from 'lucide-react';

export default function KasirSPP() {
  const [amount, setAmount] = useState("150000"); // Default nominal SPP
  const [selectedMonth, setSelectedMonth] = useState("Maret");

  const handleSimpan = () => {
    alert(`Pembayaran SPP bulan ${selectedMonth} berhasil disimpan!`);
    // Di sini nanti kita masukkan fungsi kirim data ke database
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Receipt className="text-emerald-600" /> Kasir Pembayaran SPP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kolom Kiri: Form Input */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Cari Nama Santri / NIS</label>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Ketik nama santri..." 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Pilih Bulan</label>
                  <select 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none"
                  >
                    {["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"].map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nominal (Rp)</label>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-emerald-700"
                  />
                </div>
              </div>

              <button 
                onClick={handleSimpan}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-200"
              >
                <Save size={18} /> Simpan Pembayaran
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Info Santri Terpilih (Preview) */}
          <div className="space-y-4">
            <div className="bg-emerald-700 text-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-xs opacity-80">Santri Terpilih</p>
                  <h3 className="font-bold">M. Fahim Agus M</h3>
                </div>
              </div>
              <div className="space-y-2 border-t border-white/20 pt-4 text-sm">
                <div className="flex justify-between"><span>Kelas:</span> <b>2 Aliyah</b></div>
                <div className="flex justify-between"><span>Status:</span> <b className="bg-white text-emerald-700 px-2 rounded-full text-[10px]">AKTIF</b></div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                <Calendar size={16} className="text-orange-500" /> Riwayat Terakhir
              </h4>
              <ul className="text-xs space-y-3">
                <li className="flex justify-between items-center text-slate-500 border-b pb-2">
                  <span>Februari 2026</span>
                  <span className="text-emerald-600 font-bold uppercase">Lunas</span>
                </li>
                <li className="flex justify-between items-center text-slate-500">
                  <span>Januari 2026</span>
                  <span className="text-emerald-600 font-bold uppercase">Lunas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
                  }

